// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./Create2BeaconProxy.sol";

interface Finalizeable {
    function finalize() external;
}
/**
 * @dev This contract implements a proxy that gets the implementation address for each call from a {UpgradeableBeacon}.
 * Slightly modified to allow using beacon proxies with Create2.
 *
 * The beacon address is stored in storage slot `uint256(keccak256('eip1967.proxy.beacon')) - 1`, so that it doesn't
 * conflict with the storage layout of the implementation behind the proxy.
 *
 * _Available since v3.4._
 */
contract Create2BeaconFinalize is Create2BeaconProxy {
    address private finalizedImplementation;

    /**
     * @dev The storage slot of the FinalizedImplementation contract which defines the finalized implementation for this proxy.
     * This is bytes32(uint256(keccak256('uwudrop.proxy.beaconfinalize')) - 1)) and is validated in the constructor.
     */
    bytes32 internal constant _FINALIZED_IMPL_SLOT = 0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50;

    /**
     * @dev Initializes the proxy with `beacon`.
     *
     * If `data` is nonempty, it's used as data in a delegate call to the implementation returned by the beacon. This
     * will typically be an encoded function call, and allows initializating the storage of the proxy like a Solidity
     * constructor.
     *
     * Requirements:
     *
     * - `beacon` must be a contract with the interface {IBeacon}.
     */
    constructor() payable Create2BeaconProxy() {
        assert(_BEACON_SLOT == bytes32(uint256(keccak256("eip1967.proxy.beacon")) - 1));
        assert(_FINALIZED_IMPL_SLOT == bytes32(uint256(keccak256("uwudrop.proxy.beaconfinalize")) - 1));
        _setBeacon(msg.sender, "");
    }

    function implementation() external view returns (address) {
        return _implementation();
    }

    /**
     * @dev Returns the finalized implementation if it exists.
     */
    function _finalizedImpl() internal view virtual returns (address finalizedImpl) {
        bytes32 slot = _FINALIZED_IMPL_SLOT;
        // solhint-disable-next-line no-inline-assembly
        assembly {
            finalizedImpl := sload(slot)
        }
    }

    /**
     * @dev Returns the current implementation address of the associated beacon.
     */
    function _implementation() internal view virtual override returns (address) {
        address finalized = _finalizedImpl();
        if (finalized == address(0)) {
            return IBeacon(_beacon()).childImplementation();
        }
        return finalized;
    }
}
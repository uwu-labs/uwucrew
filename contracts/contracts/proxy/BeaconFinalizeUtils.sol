pragma solidity ^0.8.0;

import "./IBeacon.sol";

library BeaconFinalizeUtils {
  /**
    * @dev The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy.
    * This is bytes32(uint256(keccak256('eip1967.proxy.beacon')) - 1)) and is validated in the constructor.
    */
  bytes32 internal constant _BEACON_SLOT = 0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50;

  /**
    * @dev The storage slot of the FinalizedImplementation contract which defines the finalized implementation for this proxy.
    * This is bytes32(uint256(keccak256('uwudrop.proxy.beaconfinalize')) - 1)) and is validated in the constructor.
    */
  bytes32 internal constant _FINALIZED_IMPL_SLOT = 0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50;

  /**
    * @dev Returns the current beacon address.
    */
  function _beacon() internal view returns (address beacon) {
      bytes32 slot = _BEACON_SLOT;
      // solhint-disable-next-line no-inline-assembly
      assembly {
          beacon := sload(slot)
      }
  }

  /**
    * @dev Returns the current beacon address.
    */
  function _finalizedImplementation() internal view returns (address finalizedImpl) {
      bytes32 slot = _FINALIZED_IMPL_SLOT;
      // solhint-disable-next-line no-inline-assembly
      assembly {
          finalizedImpl := sload(slot)
      }
  }

  /**
    * @dev Returns the current implementation address of the associated beacon.
    */
  function _implementation() internal view returns (address) {
      return IBeacon(_beacon()).childImplementation();
  }

  /**
    * @dev Changes the proxy to use a new beacon.
    *
    * If `data` is nonempty, it's used as data in a delegate call to the implementation returned by the beacon.
    *
    * Requirements:
    *
    * - `beacon` must be a contract.
    * - The implementation returned by `beacon` must be a contract.
    */
  function _setFinalizedImpl() internal {
      address currentImpl = IBeacon(_beacon()).childImplementation();
      bytes32 slot = _FINALIZED_IMPL_SLOT;

      // solhint-disable-next-line no-inline-assembly
      assembly {
          sstore(slot, currentImpl)
      }
  }
}
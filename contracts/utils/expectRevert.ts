import { fail } from 'assert';

export const expectException = async (promise: Promise<any>, expectedError: string) => {
	try {
		await promise;
	} catch (error: unknown) {
		if (error instanceof Error && error.message.includes(expectedError)) {
			const actualError = error.message.replace('Returned error: VM Exception while processing transaction: ', '');
			fail(actualError); // , expectedError, 'Wrong kind of exception received');
		}
		return;
	}

	fail('Expected an exception but none was received');
};

export const expectRevert = async (promise: Promise<any>) => {
	await expectException(promise, 'revert');
};

expectRevert.assertion = (promise: Promise<any>) => expectException(promise, 'invalid opcode');
expectRevert.outOfGas = (promise: Promise<any>) => expectException(promise, 'out of gas');
expectRevert.unspecified = (promise: Promise<any>) => expectException(promise, 'revert');

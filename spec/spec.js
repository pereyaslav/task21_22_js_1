var calculate = require('../js/file.js');
describe("calculate", function () {
	it("it should call pow() method1", function () {
		//prepare
		var resultTest;
		//act
		resultTest = calculate.pow(2, 0);
		//assert
		expect(resultTest).toBe(1);
	});
	it("it should call pow() method2", function () {
		//prepare
		var resultTest;
		//act
		resultTest = calculate.pow(2, 4);
		//assert
		expect(resultTest).toBe(16);
	});
	it("it should call pow() method3", function () {
		//prepare
		var resultTest;
		//act
		resultTest = calculate.pow(2, -1);
		//assert
		expect(resultTest).toBe(0.5);
	});
});
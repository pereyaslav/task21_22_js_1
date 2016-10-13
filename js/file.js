//var myNumber = +prompt('Enter the number', '');
//var myExponent = +prompt('Enter exponential number', '');
var calculate = {
		pow: function (myNumber, myExponent) {
			var result;
			if (myExponent == 0) {
				result = 1;
			}
			else {
				if (myNumber == 0 && myExponent < 0) {
					result = 'Invalid operation';
				}
				else {
					result = 1;
					for (var i = 0; i < Math.abs(myExponent); i++) {
						result = result * myNumber;
					}
					if (myExponent < 0) {
						result = 1 / result;
					}
				}
			}
			return result;
		}
	}
	//console.log('result=', calculate.pow(myNumber,myExponent));
module.exports = calculate;
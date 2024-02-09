function fibonacci(num) {
	if (num === 1) return 0;
	else if( num === 2) return 1;
	num -= 2;
	var num1 =0;
	var num2 = 1;
	var sum;
	var i =0;
	for(i =0; i< num ; i++){
	sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
	return num2;
}

module.exports = fibonacci;
//     let fibArray = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//     }
//     return fibArray[n-1];
// }


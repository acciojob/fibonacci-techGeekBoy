function fibonacci(num) {
// your code here
	let Arr = [0,1];
	for(let i=2; i<=num; i++){
		Arr.push(Arr[i-1] + Arr[i-2])
	};
	return Arr;
}

module.exports = fibonacci;

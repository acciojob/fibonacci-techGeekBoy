
function fibonacci(n){
	if(n<=2){
		return n-1;
	}
	let a = 0 ,b = 1;
	
	while(n>2){
	 let sum = a+b;
		a = b;
		b = sum;
		n--;
	}
	return b;
}
module.exports = fibonacci;
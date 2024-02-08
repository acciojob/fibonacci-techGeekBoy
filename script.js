function fibonacciLoop(n) {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray;
}

// Example usage:
console.log(fibonacciLoop(10)); // Outputs: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

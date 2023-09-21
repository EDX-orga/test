function calculateAverage(arr) {
    // Issue 1: Missing semicolon at the end of the line
    let sum = 0  // Missing semicolon

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Issue 2: Using '==' instead of '===' for strict equality
    if (sum == 0) {  // Using '==' instead of '==='
        console.log("The sum is zero.");
    }

    // Issue 3: Using 'var' instead of 'let' or 'const'
    var average = sum / arr.length;  // Using 'var' instead of 'let' or 'const'

    return average;
}

const numbers = [1, 2, 3, 4, 5];
const avg = calculateAverage(numbers);
console.log("Average:", avg);

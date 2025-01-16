function isPrime(number) {
    if (number <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; 
}


const testNumber = 73; 
if (isPrime(testNumber)) {
    console.log(`${testNumber} adalah bilangan prima.`);
} else {
    console.log(`${testNumber} bukan bilangan prima.`);
}
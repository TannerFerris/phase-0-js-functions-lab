

function calculateTax(amount) {
    console.log( amount * .10)
}

function convertToUpperCase(text) {
    console.log(text.toUpperCase())
}

function findMaximum(num1, num2) {
    if(num1 > num2){
        console.log(num1)
    }else {
        console.log(num2)
    }
}

function isPalindrome(word) {
    const wordreverse = word.split('').reverse().join('');
    if(word === wordreverse) {
        console.log(true)
    }else {
        console.log(false)
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountedAmount = originalPrice * discountPercentage;

    console.log(originalPrice - discountedAmount);
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
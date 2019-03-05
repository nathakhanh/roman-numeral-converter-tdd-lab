const convert = (romanNumeral) => {
    let result = 0;
    // the result is now a number, not a string
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (let i = 0; i <= decimal.length; i++) {
        while (romanNumeral.indexOf(roman[i]) === 0) {
            //checking for the first characters in the string
            result += decimal[i];
            //adding the decimal value to our result counter
            romanNumeral = romanNumeral.replace(roman[i], '');
            //remove the matched Roman letter from the beginning
        }
    }
    return result;
}

module.exports = {
    convert
}
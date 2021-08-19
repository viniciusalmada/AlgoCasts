// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, i, arr) => {
        /* If str has 5 positions:
         * Compare 0 with 4
         * Compare 1 with 3
         * Compare 2 with 2
         * Compare i with (len - 1 - i)
         */
        return char === arr[arr.length - 1 - i];
    })
}

module.exports = palindrome;

module.exports = function reverse (n) {
    let absN = Math.abs(n);
    let stringN = '' + absN;
    let stringSplit = stringN.split("");
    let reversSplit = stringSplit.reverse();
    let resultStr = reversSplit.join("");
    let result = + resultStr;
    return result;
}

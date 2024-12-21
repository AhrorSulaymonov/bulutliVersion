function decimalToOctal(decimal) {
  return decimal.toString(8);
}

const decimalNumber = 10;
const octalNumber = decimalToOctal(decimalNumber);

console.log(`10-lik sanoq sistemasidagi son: ${decimalNumber}`);
console.log(`8-lik sanoq sistemasidagi son: ${octalNumber}`);

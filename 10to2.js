function decimalToBinary(decimal) {
  // 10-lik sanoq sistemasidan 2-likka o'tish
  return decimal.toString(2);
}

// Misol: 10-lik sonlarni 2-likka o'girish
const decimalNumber = 10; // 10-lik son
const binaryNumber = decimalToBinary(decimalNumber);

console.log(`10-lik sanoq sistemasidagi son: ${decimalNumber}`);
console.log(`2-lik sanoq sistemasidagi son: ${binaryNumber}`);

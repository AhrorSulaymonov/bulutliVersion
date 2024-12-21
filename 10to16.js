function decimalToHexadecimal(decimal) {
  // 10-lik sanoq sistemasidan 16-likka o'tish
  return decimal.toString(16).toUpperCase(); // Harflarni katta qilish uchun toUpperCase()
}

// Misol: 10-lik sonni 16-likka o'girish
const decimalNumber = 255; // 10-lik son
const hexadecimalNumber = decimalToHexadecimal(decimalNumber);

console.log(`10-lik sanoq sistemasidagi son: ${decimalNumber}`);
console.log(`16-lik sanoq sistemasidagi son: ${hexadecimalNumber}`);

const rawCost = parseFloat(prompt("What is the cost?"));
const vatRate = parseFloat(20.6/100);
let tax = rawCost * vatRate;
let total = rawCost + tax;
console.log(total);

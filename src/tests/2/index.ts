console.log(`----------------- Teste (2) ------------------`);

function isFibonacci(num: number): string {
  let a = 0,
    b = 1,
    next = 0;

  if (num === 0 || num === 1) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  while (next < num) {
    next = a + b;
    a = b;
    b = next;
  }

  if (next === num) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
  }
}

let num = 21;
let result = isFibonacci(num);
console.log(result);

console.log(`----------------------------------------------`);

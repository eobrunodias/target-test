console.log(`----------------- Teste (5) ------------------`);

function inverterString(str: string): string {
  let stringInvertida = "";

  // Percorre a string de trás para frente e adiciona cada caractere à nova string
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}

// Exemplo de uso
const stringOriginal = "OpenAI";
const stringInvertida = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);

console.log(`----------------------------------------------`);

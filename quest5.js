function inverterString(str) {
  let resultado = "";

  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }

  return resultado;
}

const stringOriginal = "Brasil é m melhor pais do mundo!";

const stringInvertida = inverterString(stringOriginal);
console.log(`String Original: ${stringOriginal}`);
console.log(`String Invertida: ${stringInvertida}`);

/*
  Complete a seguinte função para que a mesma devolva todos os possíveis números de 4 dígitos, 
  onde cada um seja menor ou igual a<maxDigit>, e a soma dos dígitos de cada número gerado seja 21
  e que nenhum numero posterior seja menor que os anteriores.
  Exemplo maxDigit=6: [3666, 4566, 5556]
  exemplo maxDigit=7: [3567, ...]
*/

const digitsSum = (digits) => {
  const arr = digits.toString().split("");
  return arr.reduce((acc, dig) => parseInt(acc) + parseInt(dig));
}

const decomposingNumbers = (input) => {

  let digits = parseInt(input.toString().repeat(4).split("").join(""));
  const possibleDigits = [];
  let sum = digitsSum(digits);

  if (sum < 21) return null;

  while (digits > 1000) {
    digits -= 1;
    sum = digitsSum(digits);

    if (sum === 21) {
      const allDigitsEq21 = digits.toString().split("")
        .filter((digit) => parseInt(digit) <= input).join("");

      if (allDigitsEq21.length === 4) {
        possibleDigits.push(parseInt(allDigitsEq21));
        digits -= 1;
        sum = digitsSum(allDigitsEq21);
      }
    }

  }

  return possibleDigits;
}
console.log(decomposingNumbers(6))

/**
 * Expected Output to 6 =
[
  3666, 4566, 4656, 4665,
  5466, 5556, 5565, 5646,
  5655, 5664, 6366, 6456,
  6465, 6546, 6555, 6564,
  6636, 6645, 6654, 6663
]
 */
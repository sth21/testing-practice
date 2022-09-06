/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
export function capitalize(word) {
  const firstLetterUpper = word.charAt(0).toUpperCase();
  return word.replace(`${word[0]}`, `${firstLetterUpper}`);
}

export function reverseString(word) {
  word = word.split('');
  const reversedWord = [];
  for (let i = 0, j = word.length - 1; i < word.length; ++i, --j) {
    reversedWord[i] = word[j];
  }
  return reversedWord.join('');
}

export const calculator = (() => {
  const add = (a, b) => a + b;

  const subtract = (a, b) => a - b;

  const multiply = (a, b) => a * b;

  const divide = (a, b) => {
    const numberString = (a / b).toFixed(2);
    return b == 0 ? undefined : Number(`${numberString}`);
  };

  return {
    add, subtract, multiply, divide,
  };
})();

export function caesarCipher(string, key) {
  if (key < 1) return string;
  if (key > 26) key %= 26;
  const cipherString = [];
  string = string.split('');
  for (const letter of string) {
    const index = letter.charCodeAt(`${letter}`);
    if (index > 64 && index < 91) {
      index + key > 90
        ? (cipherString[cipherString.length] = String.fromCharCode(
          index + key - 26,
        ))
        : (cipherString[cipherString.length] = String.fromCharCode(
          index + key,
        ));
    } else if (index > 96 && index < 123) {
      index + key > 122
        ? (cipherString[cipherString.length] = String.fromCharCode(
          index + key - 26,
        ))
        : (cipherString[cipherString.length] = String.fromCharCode(
          index + key,
        ));
    } else {
      cipherString[cipherString.length] = letter;
    }
  }
  return cipherString.join('');
}

export function analyzeArray(array) {
  const { length } = array;
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  let average = 0;
  for (const number of array) {
    average += number / length;
    if (number > max) max = number;
    if (number < min) min = number;
  }
  return {
    length, min, max, average,
  };
}

import { capitalize } from "./index";
import { reverseString } from "./index";
import { calculator } from "./index";
import { analyzeArray } from "./index";
import { caesarCipher } from "./index";

// Tests for capitalize()

it("capitalized first letter", () => {
  expect(capitalize("barn")).toMatch("Barn");
});

// Tests for reverseString()
it("reversed string", () => {
  expect(reverseString("barn")).toMatch("nrab");
});

// Tests for calculator
it("calculator add", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

it("calculator subtract", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

it("calculator multiply", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

it("calculator divide", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

it("calculator divide fraction", () => {
  expect(calculator.divide(2, 3)).toBe(0.67);
});

it("calculator divide by 0", () => {
  expect(calculator.divide(2, 0)).toBeUndefined();
});

// Tests for caesarcipher
it("caesar key < 26", () => {
  expect(caesarCipher("barn", 5)).toMatch("gfws");
});

it("caesar key > 26", () => {
  expect(caesarCipher("barn", 27)).toMatch("cbso");
});

it("caesar with uppercase", () => {
  expect(caesarCipher("Barn", 5)).toMatch("Gfws");
});

it("caesar with non-alphabetical", () => {
  expect(caesarCipher("b-b-", 5)).toMatch("g-g-");
});

// Tests for analyzeArray
it("analyze array all", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

it("analyze array avg", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

it("analyze array min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

it("analyze array max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

it("analyze array length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

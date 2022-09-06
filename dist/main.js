/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ // The require scope
  /******/ var __webpack_require__ = {};
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ analyzeArray: () => /* binding */ analyzeArray,
    /* harmony export */ caesarCipher: () => /* binding */ caesarCipher,
    /* harmony export */ calculator: () => /* binding */ calculator,
    /* harmony export */ capitalize: () => /* binding */ capitalize,
    /* harmony export */ reverseString: () => /* binding */ reverseString,
    /* harmony export */
  });
  function capitalize(word) {
    const firstLetterUpper = word.charAt(0).toUpperCase();
    return word.replace(`${word[0]}`, `${firstLetterUpper}`);
  }

  function reverseString(word) {
    word = word.split("");
    let reversedWord = [];
    for (let i = 0, j = word.length - 1; i < word.length; ++i, --j) {
      reversedWord[i] = word[j];
    }
    return reversedWord.join("");
  }

  const calculator = (() => {
    const add = (a, b) => a + b;

    const subtract = (a, b) => a - b;

    const multiply = (a, b) => a * b;

    const divide = (a, b) => {
      let numberString = (a / b).toFixed(2);
      return b == 0 ? undefined : Number(`${numberString}`);
    };

    return { add, subtract, multiply, divide };
  })();

  function caesarCipher(string, key) {
    if (key < 1) return string;
    if (key > 26) key = key % 26;
    const cipherString = [];
    string = string.split("");
    for (const letter of string) {
      const index = letter.charCodeAt(`${letter}`);
      if (index > 64 && index < 91) {
        index + key > 90
          ? (cipherString[cipherString.length] = String.fromCharCode(
              index + key - 26
            ))
          : (cipherString[cipherString.length] = String.fromCharCode(
              index + key
            ));
      } else if (index > 96 && index < 123) {
        index + key > 122
          ? (cipherString[cipherString.length] = String.fromCharCode(
              index + key - 26
            ))
          : (cipherString[cipherString.length] = String.fromCharCode(
              index + key
            ));
      } else {
        cipherString[cipherString.length] = letter;
      }
    }
    return cipherString.join("");
  }

  function analyzeArray(array) {
    const length = array.length;
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    let average = 0;
    for (const number of array) {
      average += number / length;
      if (number > max) max = number;
      if (number < min) min = number;
    }
    return { length, min, max, average };
  }
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0EsMkJBQTJCLFFBQVEsTUFBTSxpQkFBaUI7QUFDMUQ7O0FBRU87QUFDUDtBQUNBO0FBQ0EseUNBQXlDLGlCQUFpQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsYUFBYTtBQUM3RDs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RpbmctcHJhY3RpY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdGluZy1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVzdGluZy1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3RpbmctcHJhY3RpY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXN0aW5nLXByYWN0aWNlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUod29yZCkge1xuICAgIGNvbnN0IGZpcnN0TGV0dGVyVXBwZXIgPSB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiB3b3JkLnJlcGxhY2UoYCR7d29yZFswXX1gLCBgJHtmaXJzdExldHRlclVwcGVyfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZVN0cmluZyh3b3JkKSB7XG4gICAgd29yZCA9IHdvcmQuc3BsaXQoJycpO1xuICAgIGxldCByZXZlcnNlZFdvcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IHdvcmQubGVuZ3RoIC0gMTsgaSA8IHdvcmQubGVuZ3RoOyArK2ksIC0taikge1xuICAgICAgICByZXZlcnNlZFdvcmRbaV0gPSB3b3JkW2pdO1xuICAgIH1cbiAgICByZXR1cm4gcmV2ZXJzZWRXb3JkLmpvaW4oJycpO1xufVxuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRvciA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkID0gKGEsIGIpID0+IGEgKyBiO1xuXG4gICAgY29uc3Qgc3VidHJhY3QgPSAoYSwgYikgPT4gYSAtIGI7XG5cbiAgICBjb25zdCBtdWx0aXBseSA9IChhLCBiKSA9PiBhICogYjtcblxuICAgIGNvbnN0IGRpdmlkZSA9IChhLCBiKSA9PiB7XG4gICAgICAgIGxldCBudW1iZXJTdHJpbmcgPSAoYSAvIGIpLnRvRml4ZWQoMik7XG4gICAgICAgIHJldHVybiAoYiA9PSAwKSA/IHVuZGVmaW5lZCA6IE51bWJlcihgJHtudW1iZXJTdHJpbmd9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkLCBzdWJ0cmFjdCwgbXVsdGlwbHksIGRpdmlkZSB9O1xufSkoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhZXNhckNpcGhlcihzdHJpbmcsIGtleSkge1xuICAgIGlmIChrZXkgPCAxKSByZXR1cm4gc3RyaW5nO1xuICAgIGlmIChrZXkgPiAyNikga2V5ID0ga2V5ICUgMjY7XG4gICAgY29uc3QgY2lwaGVyU3RyaW5nID0gW107XG4gICAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KCcnKTtcbiAgICBmb3IgKGNvbnN0IGxldHRlciBvZiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBsZXR0ZXIuY2hhckNvZGVBdChgJHtsZXR0ZXJ9YCk7XG4gICAgICAgIGlmIChpbmRleCA+IDY0ICYmIGluZGV4IDwgOTEpIHtcbiAgICAgICAgICAgIChpbmRleCArIGtleSA+IDkwKSA/IGNpcGhlclN0cmluZ1tjaXBoZXJTdHJpbmcubGVuZ3RoXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaW5kZXggKyBrZXkgLSAyNikgOiBjaXBoZXJTdHJpbmdbY2lwaGVyU3RyaW5nLmxlbmd0aF0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGluZGV4ICsga2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IDk2ICYmIGluZGV4IDwgMTIzKSB7XG4gICAgICAgICAgICAoaW5kZXggKyBrZXkgPiAxMjIpID8gY2lwaGVyU3RyaW5nW2NpcGhlclN0cmluZy5sZW5ndGhdID0gU3RyaW5nLmZyb21DaGFyQ29kZShpbmRleCArIGtleSAtIDI2KSA6IGNpcGhlclN0cmluZ1tjaXBoZXJTdHJpbmcubGVuZ3RoXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaW5kZXggKyBrZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2lwaGVyU3RyaW5nW2NpcGhlclN0cmluZy5sZW5ndGhdID0gbGV0dGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaXBoZXJTdHJpbmcuam9pbignJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmFseXplQXJyYXkoYXJyYXkpIHtcbiAgICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgbGV0IG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBsZXQgbWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgIGxldCBhdmVyYWdlID0gMDtcbiAgICBmb3IgKGNvbnN0IG51bWJlciBvZiBhcnJheSkge1xuICAgICAgICBhdmVyYWdlICs9IG51bWJlciAvIGxlbmd0aDtcbiAgICAgICAgaWYgKG51bWJlciA+IG1heCkgbWF4ID0gbnVtYmVyO1xuICAgICAgICBpZiAobnVtYmVyIDwgbWluKSBtaW4gPSBudW1iZXI7XG4gICAgfVxuICAgIHJldHVybiB7IGxlbmd0aCwgbWluLCBtYXgsIGF2ZXJhZ2UgfTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=

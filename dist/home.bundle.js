/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showContact": () => (/* binding */ showContact)
/* harmony export */ });

function showContact() {

    const selectContent = document.querySelectorAll(".tabcontent");
    selectContent.forEach(content => {
        content.remove();
    });

    const contentDiv = document.getElementById('intro');
    const contactTab = document.createElement('div');
    contactTab.setAttribute("id", "contact");
    contactTab.setAttribute("class", "tabcontent");
    contactTab.textContent = "Contact us here...";
    contentDiv.appendChild(contactTab);
}

/***/ }),

/***/ "./src/drinks.js":
/*!***********************!*\
  !*** ./src/drinks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showDrink": () => (/* binding */ showDrink)
/* harmony export */ });

function showDrink() {

    const selectContent = document.querySelectorAll(".tabcontent");
    selectContent.forEach(content => {
        content.remove();
    });

    const contentDiv = document.getElementById('intro');
    const drinkTab = document.createElement('div');
    drinkTab.setAttribute("id", "drink");
    drinkTab.setAttribute("class", "tabcontent");
    drinkTab.textContent = "Drinks here...";
    contentDiv.appendChild(drinkTab);
}


/***/ }),

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showFood": () => (/* binding */ showFood)
/* harmony export */ });
function showFood() {

    const selectContent = document.querySelectorAll(".tabcontent");
    selectContent.forEach(content => {
        content.remove();
    });

    const contentDiv = document.getElementById('intro');
    const foodTab = document.createElement('div');
    foodTab.setAttribute("id", "food");
    foodTab.setAttribute("class", "tabcontent");
    foodTab.textContent = "Food here..";
    contentDiv.appendChild(foodTab);
}

/***/ }),

/***/ "./src/Beer.jpg":
/*!**********************!*\
  !*** ./src/Beer.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35f6bdb3ac049848c9ad.jpg";

/***/ }),

/***/ "./src/food.jpg":
/*!**********************!*\
  !*** ./src/food.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "043d831a7654c75d724d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.jpg */ "./src/food.jpg");
/* harmony import */ var _Beer_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Beer.jpg */ "./src/Beer.jpg");
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food */ "./src/food.js");
/* harmony import */ var _drinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drinks */ "./src/drinks.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






const loadHome = () => {

    const container = document.createElement('div');
    container.setAttribute("id", "container");

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", event => location.reload());

    const foodButton = document.createElement('button');
    foodButton.textContent = "Food";
    foodButton.addEventListener("click", event => (0,_food__WEBPACK_IMPORTED_MODULE_2__.showFood)());

    const drinkButton = document.createElement('button');
    drinkButton.textContent = "Drinks";
    drinkButton.addEventListener("click", event => (0,_drinks__WEBPACK_IMPORTED_MODULE_3__.showDrink)());

    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", event => (0,_contact__WEBPACK_IMPORTED_MODULE_4__.showContact)());

    container.appendChild(homeButton);
    container.appendChild(foodButton);
    container.appendChild(drinkButton);
    container.appendChild(contactButton);
    document.body.appendChild(container);

    const div = document.createElement('div');
    div.id = "intro";
    document.body.appendChild(div);

    const contentDiv = document.getElementById('intro');

    const heading = document.createElement('h1');
    heading.setAttribute("class", "tabcontent");
    heading.textContent = "Restaurant Odin";
    contentDiv.appendChild(heading);

    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    const paragraph3 = document.createElement('p');
    const paragraph4 = document.createElement('p');

    paragraph1.setAttribute("class", "tabcontent");
    paragraph2.setAttribute("class", "tabcontent");
    paragraph3.setAttribute("class", "tabcontent");
    paragraph4.setAttribute("class", "tabcontent");


    const foodImage = new Image();
    foodImage.src = _food_jpg__WEBPACK_IMPORTED_MODULE_0__;
    foodImage.setAttribute("id","dinner");
    foodImage.setAttribute("class", "tabcontent");
    contentDiv.appendChild(foodImage);

    paragraph1.textContent = "Restaurant Odin combines flavors & inspiration from the Far East & the West to create what we think is the best!";
    paragraph2.textContent = "We specialize in pizzas, as well as handmade appetizers, sandwiches, salads, and gluten friendly, vegetarian, & vegan selections.";
    paragraph3.textContent = "Feel free to indulge in a tiki drink or craft beer with our fantastic unique cuisine.";
    paragraph4.textContent = "Cheers!";
    contentDiv.appendChild(paragraph1);
    contentDiv.appendChild(paragraph2);
    contentDiv.appendChild(paragraph3);
    contentDiv.appendChild(paragraph4);
    
    const beer = new Image();
    beer.src = _Beer_jpg__WEBPACK_IMPORTED_MODULE_1__;
    beer.setAttribute("id","beer");
    beer.setAttribute("class", "tabcontent");
    contentDiv.appendChild(beer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYk87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZE87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtQztBQUNBO0FBQ0Q7QUFDRztBQUNHOztBQUV4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELCtDQUFROztBQUUxRDtBQUNBO0FBQ0EsbURBQW1ELGtEQUFTOztBQUU1RDtBQUNBO0FBQ0EscURBQXFELHFEQUFXOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxvQkFBb0Isc0NBQVM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZHJpbmtzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb29kLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29udGFjdCgpIHtcblxuICAgIGNvbnN0IHNlbGVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmNvbnRlbnRcIik7XG4gICAgc2VsZWN0Q29udGVudC5mb3JFYWNoKGNvbnRlbnQgPT4ge1xuICAgICAgICBjb250ZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRybycpO1xuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VGFiLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcbiAgICBjb250YWN0VGFiLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFiY29udGVudFwiKTtcbiAgICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzIGhlcmUuLi5cIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIHNob3dEcmluaygpIHtcblxuICAgIGNvbnN0IHNlbGVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmNvbnRlbnRcIik7XG4gICAgc2VsZWN0Q29udGVudC5mb3JFYWNoKGNvbnRlbnQgPT4ge1xuICAgICAgICBjb250ZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRybycpO1xuICAgIGNvbnN0IGRyaW5rVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtUYWIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkcmlua1wiKTtcbiAgICBkcmlua1RhYi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhYmNvbnRlbnRcIik7XG4gICAgZHJpbmtUYWIudGV4dENvbnRlbnQgPSBcIkRyaW5rcyBoZXJlLi4uXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkcmlua1RhYik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd0Zvb2QoKSB7XG5cbiAgICBjb25zdCBzZWxlY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJjb250ZW50XCIpO1xuICAgIHNlbGVjdENvbnRlbnQuZm9yRWFjaChjb250ZW50ID0+IHtcbiAgICAgICAgY29udGVudC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW50cm8nKTtcbiAgICBjb25zdCBmb29kVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZFRhYi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb2RcIik7XG4gICAgZm9vZFRhYi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhYmNvbnRlbnRcIik7XG4gICAgZm9vZFRhYi50ZXh0Q29udGVudCA9IFwiRm9vZCBoZXJlLi5cIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb2RUYWIpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBob21lSW1hZ2UgZnJvbSAnLi9mb29kLmpwZyc7XG5pbXBvcnQgYmVlckltYWdlIGZyb20gJy4vQmVlci5qcGcnO1xuaW1wb3J0IHsgc2hvd0Zvb2QgfSBmcm9tICcuL2Zvb2QnO1xuaW1wb3J0IHsgc2hvd0RyaW5rIH0gZnJvbSAnLi9kcmlua3MnO1xuaW1wb3J0IHsgc2hvd0NvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xuXG5jb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xuXG4gICAgY29uc3QgZm9vZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGZvb2RCdXR0b24udGV4dENvbnRlbnQgPSBcIkZvb2RcIjtcbiAgICBmb29kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiBzaG93Rm9vZCgpKTtcblxuICAgIGNvbnN0IGRyaW5rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZHJpbmtCdXR0b24udGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuICAgIGRyaW5rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiBzaG93RHJpbmsoKSk7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHNob3dDb250YWN0KCkpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kQnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSBcImludHJvXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRybycpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhYmNvbnRlbnRcIik7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudCBPZGluXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGNvbnN0IHBhcmFncmFwaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcGFyYWdyYXBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwYXJhZ3JhcGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBhcmFncmFwaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBwYXJhZ3JhcGgxLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFiY29udGVudFwiKTtcbiAgICBwYXJhZ3JhcGgyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFiY29udGVudFwiKTtcbiAgICBwYXJhZ3JhcGgzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFiY29udGVudFwiKTtcbiAgICBwYXJhZ3JhcGg0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFiY29udGVudFwiKTtcblxuXG4gICAgY29uc3QgZm9vZEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgZm9vZEltYWdlLnNyYyA9IGhvbWVJbWFnZTtcbiAgICBmb29kSW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcImRpbm5lclwiKTtcbiAgICBmb29kSW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YWJjb250ZW50XCIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcblxuICAgIHBhcmFncmFwaDEudGV4dENvbnRlbnQgPSBcIlJlc3RhdXJhbnQgT2RpbiBjb21iaW5lcyBmbGF2b3JzICYgaW5zcGlyYXRpb24gZnJvbSB0aGUgRmFyIEVhc3QgJiB0aGUgV2VzdCB0byBjcmVhdGUgd2hhdCB3ZSB0aGluayBpcyB0aGUgYmVzdCFcIjtcbiAgICBwYXJhZ3JhcGgyLnRleHRDb250ZW50ID0gXCJXZSBzcGVjaWFsaXplIGluIHBpenphcywgYXMgd2VsbCBhcyBoYW5kbWFkZSBhcHBldGl6ZXJzLCBzYW5kd2ljaGVzLCBzYWxhZHMsIGFuZCBnbHV0ZW4gZnJpZW5kbHksIHZlZ2V0YXJpYW4sICYgdmVnYW4gc2VsZWN0aW9ucy5cIjtcbiAgICBwYXJhZ3JhcGgzLnRleHRDb250ZW50ID0gXCJGZWVsIGZyZWUgdG8gaW5kdWxnZSBpbiBhIHRpa2kgZHJpbmsgb3IgY3JhZnQgYmVlciB3aXRoIG91ciBmYW50YXN0aWMgdW5pcXVlIGN1aXNpbmUuXCI7XG4gICAgcGFyYWdyYXBoNC50ZXh0Q29udGVudCA9IFwiQ2hlZXJzIVwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoMSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgyKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaDMpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoNCk7XG4gICAgXG4gICAgY29uc3QgYmVlciA9IG5ldyBJbWFnZSgpO1xuICAgIGJlZXIuc3JjID0gYmVlckltYWdlO1xuICAgIGJlZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcImJlZXJcIik7XG4gICAgYmVlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhYmNvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChiZWVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

;
(() => {
    'use strict';

    /*variables*/

    /*main slider*/
    const mainArrElem = document.querySelectorAll('.slider_main .slider_main_elem');
    const mainLeft = document.querySelector('.slider_main .control_left');
    const mainRight = document.querySelector('.slider_main .control_right');
    /*move lines*/
    const blockLine = document.querySelector('.about_us');
    const lineArr = document.querySelectorAll('.about_us [id^="line"] [class^="st"]');
    /*practice*/
    const blockLinePractice = document.querySelector('.practice');
    const lineArrPractice = document.querySelectorAll('.practice [id^="line"] [class^="st"]');


    /*main slider*/
    if (mainArrElem) {
        (__webpack_require__(2))(mainArrElem, mainLeft, mainRight);
    }
    /*move lines*/
    let drawLine = __webpack_require__(3);

    /*main scroll*/
    // window.addEventListener('scroll', () => {
    //     let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        drawLine(lineArr, blockLine);
        drawLine(lineArrPractice, blockLinePractice);
        // console.log(lineArrPractice[0])


    // });


})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = (arrElem, left, right) => {

    let yak = 0;
    arrElem[0].classList.add('active');

    right.addEventListener('click', () => {
        moveSlider(arrElem, true);
    });

    left.addEventListener('click', () => {
        moveSlider(arrElem, false);
    });


    function moveSlider(arr, boll) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
        yak = lastElem(arr, yak, boll);
        arr[yak].classList.add('active');
    }

    function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }

};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = (arrLine, block, scroll) => {
    let yak = 0;
    let del = 0;
    let start = 0;
    let allLength = 0;
    let arrProm = [];
    let minus = 0;

    class elem {
        constructor(dom, val) {
            this.value = val;
            this.link = dom;
        }
    }

    if (!allLength) {
        for (let i = 0; i < arrLine.length; i++) {
            let valLength = arrLine[i].getTotalLength();
            arrLine[i].style.strokeDasharray = `${valLength},${valLength}`;
            arrLine[i].style.strokeDashoffset = valLength;
            allLength += valLength;
            arrProm.push(new elem(arrLine[i], valLength));
        }
    }

    function moveLine(arrObj, direction) {
        let move = (allLength / 100) * start;

        if (direction) {
            if (arrObj[yak].value <= move && yak < arrObj.length - 1) {
                yak++;
                minus += arrObj[yak - 1].value;
            }
        }
        else {
            if (allLength - arrObj[yak].value >= move && yak > 0) {
                yak--;
                minus -= arrObj[0].value;
            }
        }
        console.log(yak,minus);

        if (yak > 0) {
            arrObj[yak].link.style.strokeDashoffset = `${arrObj[yak].value - (move - minus) }`;
        }
        else {
            arrObj[yak].link.style.strokeDashoffset = `${arrObj[yak].value - move}`;

        }
    }


    function procent(step, row) {
        return Math.round(row / (step / 100));
    }


    window.addEventListener('scroll', () => {

        let scroll = window.pageYOffset || document.documentElement.scrollTop;

        let min = block.getBoundingClientRect().top - window.innerHeight * .8;
        let max = block.getBoundingClientRect().bottom - window.innerHeight * .8;
        let step = min - max;
        let boll = (min > 0 && max < 0 || min < 0 && max > 0 );


        if (del < scroll && boll) {
            start = procent(step, min);
            moveLine(arrProm, true);

        } else if (del > scroll && boll) {
            start = procent(step, min);
            moveLine(arrProm, false);

        }
        del = scroll;

    });

};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
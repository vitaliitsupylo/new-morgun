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
module.exports = __webpack_require__(2);


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
    const lineArr = document.querySelectorAll('.about_us [id^="line"]>line');


    /*main slider*/
    if (mainArrElem) {
        (__webpack_require__(7))(mainArrElem, mainLeft, mainRight);
    }
    /*move lines*/
    let drawLine = __webpack_require__(8);

    /*main scroll*/
    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        drawLine(lineArr, blockLine, scrolled);
    });


})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

let yak = 150;
let del = 0;
let start = 0;
let defEl = 0;
module.exports = (arrLine, block, scroll) => {
    let min = block.getBoundingClientRect().top - window.innerHeight * .8;
    let max = block.getBoundingClientRect().bottom - window.innerHeight * .8;
    let step = min - max;
    let boll = (min > 0 && max < 0 || min < 0 && max > 0 );


    function procent(step, row) {
        let int = row / (step / 100);
        return int * (150 / 100);
    }

    // function procent(step, row) {
    //     return row / (step / 100);
    // }
    function noNull(con) {
        // return (con>0)?150/(con+1):0;

        if (con > 0) {
            let difference = 150 / (con + 1);

            return (yak - difference) + (start * -(con - 4));


        } else {
            return yak + (start * -(con - 2));
        }
    }

    function overkill(arr) {
        let count = arr.length;
        let nowCount = Math.floor(start / (150 / count));

    console.log(start,start * 1.8);
        // if (defEl < nowCount) {
        //     defEl = nowCount;
        // } else if (defEl > nowCount) {
        //     defEl = nowCount;
        // }
        defEl = nowCount + 1;

        arr[nowCount].style.strokeDasharray = `${noNull(nowCount)}%`;
    }


    if (del < scroll && boll) {
        start = procent(step, min);
        // arrLine[0].style.strokeDasharray = `${yak + start}%`;
        // arrLine[1].style.strokeDasharray = `${yak + start}%`;
        overkill(arrLine)

    } else if (del > scroll && boll) {
        start = procent(step, min);
        // arrLine[0].style.strokeDasharray = `${yak + start}%`;
        // arrLine[1].style.strokeDasharray = `${yak + start}%`;
        overkill(arrLine)
    }


    del = scroll;
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
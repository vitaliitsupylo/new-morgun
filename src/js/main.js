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
    const lineArr = document.querySelectorAll('.about_us .line>[class^="st"]');
    /*practice*/
    const blockLinePractice = document.querySelector('.practice');
    let lineArrPractice = document.querySelectorAll('.practice .line>[class^="st"]');
    let arrOne = [lineArrPractice[0]];
    let arrTwo = [lineArrPractice[1]];


    /*main slider*/
    if (mainArrElem) {
        (require('./modules/main-slider'))(mainArrElem, mainLeft, mainRight);
    }
    /*move lines*/
    let funcDraw = require('./modules/line');
    let drawLine = funcDraw();
    let drawLine2 = funcDraw();
    let drawLine3 = funcDraw();

    /*main scroll*/
    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (blockLine) {
            drawLine(lineArr, blockLine, scrolled);
        }
        if (blockLinePractice) {
            drawLine2(arrOne, blockLinePractice, scrolled);
        }
        if (blockLinePractice) {
            drawLine3(arrTwo, blockLinePractice, scrolled);
        }


    });


})();

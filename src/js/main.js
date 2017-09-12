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
        (require('./modules/main-slider'))(mainArrElem, mainLeft, mainRight);
    }
    /*move lines*/
    let drawLine = require('./modules/line');

    /*main scroll*/
    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        drawLine(lineArr, blockLine, scrolled);
    });


})();

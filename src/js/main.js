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
        (require('./modules/main-slider'))(mainArrElem, mainLeft, mainRight);
    }
    /*move lines*/
    let drawLine = require('./modules/line2');

    /*main scroll*/
    // window.addEventListener('scroll', () => {
    //     let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        drawLine(lineArr, blockLine);
        drawLine(lineArrPractice, blockLinePractice);
        // console.log(lineArrPractice[0])


    // });


})();

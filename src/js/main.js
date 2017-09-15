;
(() => {
    'use strict';

    /*variables*/

    /*main slider*/
    const mainArrElem = document.querySelectorAll('.slider_main .slider_main_elem');
    const mainLeft = document.querySelector('.slider_main .control_left');
    const mainRight = document.querySelector('.slider_main .control_right');
    /*victory slider*/
    const victorySlider = document.querySelector('.victory_slider');
    const victorySliderEl = document.querySelectorAll('.victory_slider .victory_slider_elem');
    const victorySliderDot = document.querySelector('.victory_slider .victory_slider_dot');
    /*menu*/
    const openMenu = document.querySelector('.btn_nav');
    const menu = document.querySelector('.nav_main');
    /*move lines*/
    const blockLine = document.querySelector('.about_us');
    const lineArr = document.querySelectorAll('.about_us .line>[class^="st"]');
    /*practice*/
    const blockLinePractice = document.querySelector('.practice');
    let lineArrPractice = document.querySelectorAll('.practice .line>[class^="st"]');
    /*footer*/
    const footer = document.querySelector('.footer_address');
    const lineFooter = document.querySelectorAll('.footer_address .line>[class^="st"]');
    /*certificate*/
    const certificate = document.querySelector('.certificate');
    // const certificateElem = document.querySelectorAll('.certificate');

    /*paralax all*/
    let Parallax = require('scroll-parallax');
    let p = new Parallax('.parallax').init();
    /*menu*/
    if (menu) {
        (require('./modules/menu'))(openMenu, menu)
    }

    /*main slider*/
    if (mainLeft && mainRight) {
        (require('./modules/main-slider'))(mainArrElem, mainLeft, mainRight);
    }
    /*victory slider*/
    if (victorySlider) {
        (require('./modules/victory-slider'))(victorySlider, victorySliderEl, victorySliderDot);
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
            drawLine2(lineArrPractice, blockLinePractice, scrolled);
        }
        if (footer) {
            drawLine3(lineFooter, footer, scrolled);
        }


    });


})();

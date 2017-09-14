module.exports = (slider, elem, dot) => {
    let yak = 0;
    let dotArr = 0;

    for (let i = 0; i < elem.length; i++) {
        let doteEl = document.createElement('i');
        dot.appendChild(doteEl);
        doteEl.addEventListener('click', function () {
            for (let y = 0; y < elem.length; y++) {
                elem[y].classList.remove('active');
                dot.querySelectorAll('i')[y].classList.remove('active');
            }
            this.classList.add('active');
            elem[i].classList.add('active');
            yak = i;
        });
    }
    dotArr = dot.querySelectorAll('i');
    elem[0].classList.add('active');
    dotArr[0].classList.add('active');

    function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }

    function moveSlider(arrEl, arrDot, boll) {
        for (let i = 0; i < arrEl.length; i++) {
            arrEl[i].classList.remove('active');
            arrDot[i].classList.remove('active');
        }
        yak = lastElem(arrEl, yak, boll);
        arrEl[yak].classList.add('active');
        arrDot[yak].classList.add('active');
    }

    let stopInt = setInterval(()=>{
        moveSlider(elem, dotArr, true);
    },5000);


    /*touch slider*/
    let initialPoint;
    let finalPoint;
    slider.addEventListener('touchstart', function (event) {
        initialPoint = event.changedTouches[0];
    }, false);
    slider.addEventListener('touchend', function (event) {
        finalPoint = event.changedTouches[0];
        let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        if (xAbs > 20) {
            if (finalPoint.pageX < initialPoint.pageX) {
                moveSlider(elem, dotArr, true);
            } else {
                moveSlider(elem, dotArr, false);
            }
        }
    }, false);
};
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
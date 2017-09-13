let yak = 150;
let del = 0;
let start = 0;
let defEl = 0;
let targ = 0;
module.exports = (arrLine, block, scroll) => {
    let min = block.getBoundingClientRect().top - window.innerHeight * .8;
    let max = block.getBoundingClientRect().bottom - window.innerHeight * .8;
    let step = min - max;
    let boll = (min > 0 && max < 0 || min < 0 && max > 0 );


    // function procent(step, row) {
    //     let int = row / (step / 100);
    //     return int * (150 / 100);
    // }

    if(!defEl){
        for(let i = 0; i < arrLine.length; i++){
            defEl+= arrLine[i].getTotalLength();
        }
    }
    console.log(defEl);

    function procent(step, row) {
        return row / (step / 100);
    }

    function noNull(con, len) {
        let coefficient = (300 / 100);
        if (con > 0) {
            return (start * coefficient) * len;
        } else {
            return yak + (start * coefficient) * len;
        }
    }

    function overkill(arr) {
        let count = arr.length;
        let nowCount = Math.floor(start / (100 / count));
        arr[nowCount].style.strokeDasharray = `${noNull(nowCount, count)}%`;
    }


    if (del < scroll && boll) {
        start = procent(step, min);
        // arrLine[0].style.strokeDasharray = `${yak + start}%`;
        // arrLine[1].style.strokeDasharray = `${yak + start}%`;
        overkill(arrLine)
        console.log(start)

    } else if (del > scroll && boll) {
        start = procent(step, min);
        // arrLine[0].style.strokeDasharray = `${yak + start}%`;
        // arrLine[1].style.strokeDasharray = `${yak + start}%`;
        overkill(arrLine)
        console.log(start)

    }


    del = scroll;
};
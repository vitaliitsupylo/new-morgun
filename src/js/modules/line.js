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
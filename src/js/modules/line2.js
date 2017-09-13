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
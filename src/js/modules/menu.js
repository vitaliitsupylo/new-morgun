module.exports = (btn, menu) => {


    let arrHoverList = menu.querySelectorAll('.list_page>li');
    let scrollNav = menu.querySelector('.scroll_nav>i');

    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    for (let i = 0; i < arrHoverList.length; i++) {
        arrHoverList[i].addEventListener('mouseover', () => {
            let topMove = arrHoverList[i].offsetTop + (arrHoverList[i].clientHeight / 2 - scrollNav.clientHeight / 2);
            scrollNav.style.top = `${topMove}px`;
        });
        arrHoverList[i].addEventListener('mouseout',()=>{
            scrollNav.style.top = `5%`;
        })
    }


};
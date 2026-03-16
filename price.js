const priceBtns = document.querySelectorAll('.prices__btn');

priceBtns.forEach(function(elem) {
    elem.addEventListener('click', (e) => {
        let btn = e.currentTarget;
        btn.classList.toggle('prices__btn--active')
    })
})

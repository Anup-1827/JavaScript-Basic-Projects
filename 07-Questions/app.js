const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const sign = card.querySelector('.sign');
    const info = card.querySelector('.info');
    const minus = card.querySelector('.minus');

    sign.addEventListener('click', ()=>{
        info.classList.toggle('show');
        minus.classList.toggle('hide');
    })

});
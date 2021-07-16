const btn= document.querySelector('.btn');
const win = document.querySelector('.window');
const cross = document.querySelector('.cross');


btn.addEventListener('click',()=>{
    win.classList.add('add');
})

cross.addEventListener('click',()=>{
    win.classList.remove('add');
})
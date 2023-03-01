const openAbout= document.querySelector('.opn-abt-modal');
const openProject= document.querySelector('.opn-prjt-modal');
const openContact= document.querySelector('.opn-cntc-modal');

const popAbout= document.querySelector('.popAbout');
const popProject= document.querySelector('.popProject');
const popContact= document.querySelector('.popReachMe');

const close = document.querySelectorAll('.close');
const trnprnt = document.querySelector('.transparant-block');


// Mengaktifkan Popup Modal About dengan menghapus class deactive
openAbout.addEventListener('click', function(){
    popAbout.classList.remove('deactive');
    trnprnt.classList.remove('deactive');
    popProject.classList.add('deactive');
    popContact.classList.add('deactive');
})

// Mengaktifkan Popup Modal Project dengan menghapus class deactive
openProject.addEventListener('click', function(){
    popProject.classList.remove('deactive');
    trnprnt.classList.remove('deactive');
    popAbout.classList.add('deactive');
    popContact.classList.add('deactive');
})

// Mengaktifkan Popup Modal Contact dengan menghapus class deactive
openContact.addEventListener('click', function(){
    popContact.classList.remove('deactive');
    trnprnt.classList.remove('deactive');
    popAbout.classList.add('deactive');
    popProject.classList.add('deactive');

})


// Memanggil semua element yang memiliki class close, kemudian di nonaktifkan Popup Modal dengan menambahkan class deactive
for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function(){
        popAbout.classList.add('deactive')
        popProject.classList.add('deactive')
        popContact.classList.add('deactive')
        trnprnt.classList.add('deactive')
    })
}



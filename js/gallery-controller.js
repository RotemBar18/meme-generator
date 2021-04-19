'use strict'
const gImgs = [
    { id: 1, url: 'meme-generator/imgs/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'meme-generator/imgs/2.jpg', keywords: ['happy'] },
    { id: 3, url: '../imgs/3.jpg', keywords: ['happy'] },
    { id: 4, url: '../imgs/4.jpg', keywords: ['happy'] },
    { id: 5, url: '../imgs/5.jpg', keywords: ['happy'] },
    { id: 6, url: '../imgs/6.jpg', keywords: ['happy'] },
    { id: 7, url: '../imgs/7.jpg', keywords: ['happy'] },
    { id: 8, url: '../imgs/8.jpg', keywords: ['happy'] },
    { id: 9, url: '../imgs/9.jpg', keywords: ['happy'] },
    { id: 10, url: '../imgs/10.jpg', keywords: ['happy'] },
    { id: 11, url: '../imgs/11.jpg', keywords: ['happy'] },
    { id: 12, url: '../imgs/12.jpg', keywords: ['happy'] },
    { id: 13, url: '../imgs/13.jpg', keywords: ['happy'] },
    { id: 14, url: '../imgs/14.jpg', keywords: ['happy'] },
    { id: 15, url: '../imgs/15.jpg', keywords: ['happy'] }
];



function renderGallery(){
    let elGallery = document.querySelector('.image-gallery')
    let strHtml = ``
    gImgs.forEach(img => {
        strHtml+=`<img src="${img.url}" id="${img.id}" onclick="onImageClick(this.id)"></img>`
    });
    elGallery.innerHTML = strHtml
}

function openEditor() {
    document.body.classList.add('editor-open')
}
function closeEditor() {
    document.body.classList.remove('editor-open')
    document.querySelector('.image-gallery').style.display = 'block'
}
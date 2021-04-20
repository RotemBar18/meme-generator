'use strict'



function renderMemes() {
    const memes = getMemesForDisplay()
    let elMemes = document.querySelector('.saved-memes')
    if (!memes || !memes.length) {
        elMemes.innerHTML = `<h1 class="no-memes-title" >No Memes yet, try to go to the gallery page and start your own Meme</h1>`
    }
    else {
        let strHtml = ``
        memes.forEach(meme => {
            console.log('meme', meme)
            strHtml += `<img class="saved-img ${meme.id}" id="${meme.id}" src="${meme.url}" alt="">`
        });
        elMemes.innerHTML = strHtml
    }
}


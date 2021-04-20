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
            console.log('meme', meme.id)
            strHtml += `<img class="saved-img ${meme.id}" id="${meme.id}" src="${meme.url}" alt="" onclick="onSavedMemeClick('${meme.id}')">`
        });
        elMemes.innerHTML = strHtml
    }
}

function onSavedMemeClick(memeId) {
    console.log('memeId', memeId)
    const meme = getMemeById(memeId)
    document.querySelector('.saved-memes').style.display = 'none'
    document.querySelector('li .memes').classList.remove('active')
    openEditor()
    renderSavedMeme(meme)
    setCurrMeme(meme.data)
}




function renderSavedMeme(meme) {
    drawImg(meme.data.selectedImgId)
    meme.data.lines.forEach(line => {
        gCtx.strokeStyle = line.borderColor
        gCtx.fillStyle = line.fontColor
        gCtx.direction = line.align
        gCtx.font = line.size + 'px ' + line.fontFamily
        gCtx.textAlign = line.align
        gCtx.fillText(line.txt, line.x, line.y)
        gCtx.strokeText(line.txt, line.x, line.y)
        document.querySelector('.text-input').placeholder = `${meme.data.lines[meme.data.selectedLineIdx].txt}`
        document.querySelector('.border-color').value = `${meme.data.lines[meme.data.selectedLineIdx].borderColor}`
        document.querySelector('.font-color').value = `${meme.data.lines[meme.data.selectedLineIdx].fontColor}`
    });
}
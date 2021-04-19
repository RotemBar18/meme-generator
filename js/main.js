'use strict'

let gElCanvas;
let gCtx;
let gCurrMeme

function init() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    renderMeme()
}

function renderMeme() {
    getMeme()
    drawImg()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}


function getMeme() {
    const currMeme = getCurrMeme()
    gCurrMeme = currMeme
}

function drawImg() {
    console.log('gCurrMeme', gCurrMeme)
    var img = new Image()
    img.src = `../imgs/${gCurrMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(0, 250)
    }
}

function drawText(x, y) {
        gCurrMeme.lines.forEach(line => {
        let text = line.txt
        gCtx.lineWidth = 2
        gCtx.strokeStyle = line.color
        gCtx.fillStyle = 'white'
        gCtx.font = line.size + 'px IMPACT'
        gCtx.textAlign = line.align
        gCtx.fillText(text, x, y)
        gCtx.strokeText(text, x, y)
    });
}

function onTextInput() {
    const elInput = document.querySelector('.text-input')
    const newText = elInput.value
    updateMemeLines(newText)
    renderMeme()
}

function onImageClick(elImg){
    const currMeme = getMemeById(+elImg.id)
    console.log('elImg.id', elImg.id)
    console.log('currMeme', currMeme)
    setCurrMeme(currMeme)
    renderMeme()
}
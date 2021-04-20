'use strict'

let gElCanvas;
let gCtx;



function init() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    renderGallery()
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}


function drawImg(imgId) {
    var img = new Image()
    img.src = `imgs/${imgId}.jpg`;
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}


function renderMeme() {
    let currMeme = getCurrMeme()
    drawImg(currMeme.selectedImgId)
    currMeme.lines.forEach(line => {
        gCtx.strokeStyle = line.borderColor
        gCtx.fillStyle = line.fontColor
        gCtx.direction = line.align
        gCtx.font = line.size + 'px ' + line.fontFamily
        gCtx.textAlign = line.align
        gCtx.fillText(line.txt, line.x, line.y)
        gCtx.strokeText(line.txt, line.x, line.y)
        document.querySelector('.text-input').placeholder = `${currMeme.lines[currMeme.selectedLineIdx].txt}`
        document.querySelector('.border-color').value = `${currMeme.lines[currMeme.selectedLineIdx].borderColor}`
        document.querySelector('.font-color').value = `${currMeme.lines[currMeme.selectedLineIdx].fontColor}`
    });

}

function onTextInput(txt) {
    updateMemeLines(txt)
    renderMeme()
}

function onImageClick(imgId) {
    document.querySelector('.image-gallery').style.display = 'none'
    openEditor()
    createMeme(imgId)
    renderMeme()
}

function onAddNewLine() {
    addNewLine()
    document.querySelector('.text-input').value = ''
    renderMeme()
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}
function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onUpArrow() {
    lineUp()
    renderMeme()
}
function onDownArrow() {
    lineDown()
    renderMeme()
}

function onSwitchLines() {
    switchLines()
    document.querySelector('.text-input').value = ''
    renderMeme()
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

}

function onDeleteLine(){
    deleteLine()
    renderMeme()
}

function onFontColor(color){
    console.log('color', color)
    colorFONT(color)
    renderMeme()
}
function onBorderColor(color){
    console.log('color', color)
    colorBorder(color)
    renderMeme()
}


function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL()
    elLink.href = imgContent
}


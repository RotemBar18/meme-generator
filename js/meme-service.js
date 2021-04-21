'use strict'

// var gKeywords = { 'happy': 12, 'funny puk': 1 }

let gMeme;
const KEY = 'memes'
let gSavedMemes = []

function createMeme(imgId) {
    gMeme = {
        id: makeId(),
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Insert Text',
                size: 50,
                borderColor: '#000000',
                fontFamily: 'impact',
                fontColor: '#ffffff',
                x: 20,
                y: 100

            }
        ]
    }
}

function setCurrMeme(meme){
    gMeme = meme
}
function getCurrMeme() {
    return gMeme
}

function updateMemeLines(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function addNewLine() {
    
    if (!gMeme.lines.length) {
        var x = 20
        var y = 100
    }
    else if (gMeme.lines.length === 1) {
        var x = 20
        var y = 450
    }
    else {
        var x = 20
        var y = 250
    }
    gMeme.selectedLineIdx++
    gMeme.lines.push({
        txt: 'New Line',
        size: 60,
        borderColor: '#000000',
        fontFamily: 'impact',
        fontColor: '#ffffff',
        x,
        y
    })

}


function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 1.5
}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 1.5
}

function switchLines() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
}

function lineUp() {
    gMeme.lines[gMeme.selectedLineIdx].y -= 20
}

function lineDown() {
    gMeme.lines[gMeme.selectedLineIdx].y += 20
}

function deleteLine() {

    if (!gMeme.lines.length) return
    gMeme.lines.splice([gMeme.selectedLineIdx], 1)
    gMeme.selectedLineIdx--

}
function colorBorder(color) {
    gMeme.lines[gMeme.selectedLineIdx].borderColor = color
}
function colorFONT(color) {
    gMeme.lines[gMeme.selectedLineIdx].fontColor = color
}
function changeFont(value){
    gMeme.lines[gMeme.selectedLineIdx].fontFamily = value
}

function getMemesForDisplay() {
    gSavedMemes = loadFromStorage(KEY)
    return gSavedMemes
}


function saveMemeToStorage(url) {
    let meme = {
        data:gMeme,
        id: makeId(),
        url
    }
    if (!gSavedMemes || !gSavedMemes.length) {
        gSavedMemes = [meme]
    } else {
        gSavedMemes.push(meme)
    }
    _saveMemesToSorage()
}

function _saveMemesToSorage(){
    saveToStorage(KEY, gSavedMemes)
}

function getMemeById(memeId) {
   const memes = loadFromStorage(KEY)
    var meme = memes.find(function (meme) {
        return meme.id === memeId
    })
    return meme
}


function deleteProject(memeId) {
    const memeIdx = gSavedMemes.findIndex(function (meme) {
        return memeId === meme.id
    })
    gSavedMemes.splice(memeIdx, 1)
    _saveMemesToSorage();
}

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
                txt: 'I never eat Falafel',
                size: 60,
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
    console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx)
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function addNewLine() {
    if (!gMeme.lines.length) {
        var x = 20
        var y = 50
    }
    else if (gMeme.lines.length === 1) {
        var x = 20
        var y = 400
    }
    else {
        var x = 20
        var y = 200
    }
    gMeme.selectedLineIdx++
    y += 50
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
    saveToStorage(KEY, gSavedMemes)
}

function getMemeById(memeId) {
   const memes = loadFromStorage(KEY)
    var meme = memes.find(function (meme) {
        return meme.id === memeId
    })
    return meme
}



'use strict'

// var gKeywords = { 'happy': 12, 'funny puk': 1 }
// var gImgs = [{ id: 1, url: 'img/popo.jpg', keywords: ['happy'] }];
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 60,
            align: 'left',
            color: 'red'
        }
    ]
};

let gMemes = [
    {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'I never eat Falafel',
                size: 60,
                align: 'left',
                color: 'red'
            }
        ]
    },
    {
        selectedImgId: 1,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'fff',
                size: 60,
                align: 'left',
                color: 'red'
            }
        ]
    },
]

function setCurrMeme(meme) {
    gMeme = meme;
}

function getCurrMeme() {
    return gMeme
}

function updateMemeLines(newLine) {
    console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx)
    gMeme.lines[gMeme.selectedLineIdx].txt = newLine
}

function addNewLine() {
    gMeme.selectedLineIdx++
    console.log('gMeme', gMeme)
    gMeme.lines.push({
        txt: '',
        size: 60,
        align: 'left',
        color: 'red'
    })
}

function getMemeById(memeId) {
    const currMeme = gMemes.find(function (meme) {
        return meme.selectedImgId === memeId
    })
    
    return currMeme
}

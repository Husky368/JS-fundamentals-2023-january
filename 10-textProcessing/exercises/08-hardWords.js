function hardWords(input) {
    let text = input.shift().split(' ');
    let words = input.shift();
    let wordsLength = [];
    for (let el of words) {
        let currWord = '_'.repeat(el.length);
        wordsLength.push(currWord)
    }
    let count = 0
    for (let ell of text) {
        let commaOrDot = '';
        if (ell.includes(',')||ell.includes('.')) {
            commaOrDot = ell.substring(ell.length-1)
            ell = ell.substring(0,ell.length-1)
        }
        if (wordsLength.includes(ell)) {
            for (const rightWord of words) {
                if (rightWord.length == ell.length) {
                    text[count] = rightWord+commaOrDot;
                    break;
                }
            }
        }
        count++
    }
    console.log(text.join(' '))
} hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)

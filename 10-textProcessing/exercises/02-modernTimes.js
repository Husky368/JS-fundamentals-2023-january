function modernTimes(text) {
    let wordsArr = [];
    text = text.split(' ');
    for (const word of text) {
        if (word.length > 1 && word[0] == '#') {
            wordsArr.push(word.substring(1,word.length+1))
        }
    }
    for (const word of wordsArr) {    
        console.log(word)
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('------------------')
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')

function revealWord(words, text) {
    let symbolArr = [];
    words = words.split(', ');
    for (const word of words) {
        let symbolWord = '*'.repeat(word.length);
        symbolArr.push(symbolWord);
    }
    text = text.split(' ');
    for (const currWord of text) {
        if (symbolArr.includes(currWord)) {
            let rightWord = '';
            words.forEach(element => {
                if (element.length == currWord.length) {
                    rightWord = element
                }
            });
            let index = text.indexOf(currWord);
            text.splice(index,1,rightWord);
        }
    }
    console.log(text.join(' '));
} 

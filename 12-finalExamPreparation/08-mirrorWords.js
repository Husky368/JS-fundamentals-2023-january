function mirrorWords(input) {
    let regex = new RegExp(/([#@])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{2,})\1/, 'g');
    let pairs = input[0].match(regex);
    let mirrorWords = [];
    if (pairs == null) {
        console.log(`No word pairs found!`);
        return console.log(`No mirror words!`);
    }
    for (let line of pairs) {
        let separator = line[0];
        let [firstWord, secondWord] = line.split(separator + separator);
        let firstTheoricalWord = firstWord.slice(1);
        let secondTheoricalWord = secondWord.slice(0, secondWord.length - 1).split('');
        secondTheoricalWord = secondTheoricalWord.reverse().join('');
        if (firstTheoricalWord == secondTheoricalWord) {
            firstWord = firstWord.slice(1);
            secondWord = secondWord.slice(0, secondWord.length - 1)
            mirrorWords.push([firstWord, secondWord]);
        }
    }
    if (pairs.length == 0) {
        console.log(`No word pairs found!`)
    }
    else {
        console.log(`${pairs.length} word pairs found!`)
    }
    //"No mirror words!"
    if (mirrorWords.length == 0) {
        console.log(`No mirror words!`)
    }
    else {
        console.log(`The mirror words are:`)
        let resLine = '';
        let counter = 0;
        mirrorWords.forEach(element => {
            counter++
            resLine += element[0] + ' <=> ' + element[1];
            if (counter < mirrorWords.length) {
                resLine += ', '
            }
        });
        console.log(resLine);
    }
}

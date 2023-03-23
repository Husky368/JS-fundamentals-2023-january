function secretChat(input) {
    let word = input.shift();
    // •	"InsertSpace:|:{index}":
    // o	Inserts a single space at the given index. The given index will always be valid.
    // •	"Reverse:|:{substring}":
    // o	If not, print "error".
    // o	This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
    // •	"ChangeAll:|:{substring}:|:{replacement}":
    // o	Changes all occurrences of the given substring with the replacement text.
    for (let line of input) {
        if (line == 'Reveal') {
            console.log(`You have a new text message: ${word}`)
            break;
        }
        let infoArr = line.split(':|:');
        let command = infoArr.shift();
        if (command == 'InsertSpace') {
            let newString = '';
            for (let index = 0; index < word.length; index++) {
                if (index == Number(infoArr[0])) {
                    newString += ' ';
                }
                newString += word[index]
            }
            word = newString;
            console.log(word)
        }
        else if (command == 'Reverse') {
            // o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
            let newWord = infoArr.shift();
            if (word.includes(newWord)) {
                let index = word.indexOf(newWord);
                word = word.split('');
                word.splice(index, newWord.length);
                word = word.join('');
                newWord = newWord.split('').reverse().join('');
                word += newWord
                console.log(word)
            }
            else{
                console.log('error')
            }
        }
        else {
            let searchingWord = infoArr.shift();
            let replacementWord = infoArr.shift();
            while(word.includes(searchingWord)){
                word = word.replace(searchingWord,replacementWord);
            }
            console.log(word)
        }
    }
}

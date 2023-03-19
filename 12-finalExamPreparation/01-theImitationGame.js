function theImitationGame(input) {
    let word = input.shift();
    for (let command of input) {
        if (command == 'Decode') {
            break;
        }
        command = command.split('|');
        switch (command[0]) {
            case 'ChangeAll':
                // •	"ChangeAll {substring} {replacement}":
                // o	Changes all occurrences of the given substring with the replacement text
                let newWord0 = '';
                let oldLetter = command[1];
                let newLetter = command[2];
                for (let index = 0; index < word.length; index++) {
                    if (word[index] == oldLetter) {
                        newWord0 += newLetter;
                        continue;
                    }
                    newWord0 += word[index]
                }
                word = newWord0;
                break;
            case 'Insert':
                let newWord1 = '';
                if (Number(command[1]) == 0) {
                    newWord1 += command[2];
                    for (const letter of word) {
                        newWord1 += letter;
                    }
                    word = newWord1;
                }
                else if (Number(command[1]) > word.length-1) {
                    word = word+command[2]
                }
                else {
                    let newWord2 = '';
                    for (let index = 0; index < word.length; index++) {
                        if (index == Number(command[1])) {
                            newWord2 += command[2] + word[index];
                            continue;
                        }
                        newWord2 += word[index]
                    }
                    word = newWord2;
                }
                // •	"Insert {index} {value}":
                // o	Inserts the given value before the given index in the string
                break;
            case 'Move':
                //                 •	"Move {number of letters}":
                let firstNLetters = word.substring(0, Number(command[1]));
                word = word.substring(Number(command[1]));
                word += firstNLetters;
                break;
        }
    }
    console.log(`The decrypted message is: ${word}`)
} theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]
)

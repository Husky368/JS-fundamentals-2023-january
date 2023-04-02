function stringManipulator(input) {
    let string = input.shift();
    for (let line of input) {
        let info = line.split(' ');
        let command = info.shift();
        if (command == 'End') {
            return 
        }
        //translate
        if (command == 'Translate') {
            let oldString = info.shift();
            let newString = info.shift();
            if (string.includes(oldString)) {
                string = string.replace(oldString, newString);
            }
            console.log(string);
        }
        else if (command == 'Includes') {
            let checkString = info.shift();
            if (string.includes(checkString)) {
                console.log('True');
            }
            else {
                console.log('False');
            }
        }
        else if (command == 'Start') {
            let startString = info.shift();
            let testString = string;
            testString = testString.slice(0, startString.length);
            if (testString == startString) {
                console.log('True');
            }
            else {
                console.log('False');
            }
        }
        else if (command == 'Lowercase') {
            string = string.toLowerCase();
            console.log(string)
        }
        else if (command == 'FindIndex') {
            let char = info.shift();
            string = string.split('');
            for (let index = string.length - 1; index >= 0; index--) {
                if (string[index] == char) {
                    console.log(index);
                    break;
                }
            }
            string = string.join('');
        }
        else if (command == 'Remove') {
            let startIndexCut = Number(info.shift());
            let countCut = Number(info.shift());
            string = string.split('');
            string.splice(startIndexCut,countCut)
            string = string.join('');
            console.log(string)
        }
    }
}
stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])
//*s0ftuni is the b3st plac3**

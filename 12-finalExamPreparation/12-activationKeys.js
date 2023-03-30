function activationKeys(arr) {
    let code = arr.shift();
    for (let line of arr) {
        let info = line.split('>>>');
        let command = info.shift();
        if (command == 'Flip') {
            let caseCommand = info.shift();
            let startIndexFlip = Number(info.shift());
            let endIndexFlip = Number(info.shift());
            let word = code.substring(startIndexFlip,endIndexFlip);
            if(caseCommand=='Upper'){
                word = word.toUpperCase()
            }
            else{
                word = word.toLowerCase();
            }
            code = code.split('');
            code.splice(startIndexFlip,endIndexFlip-startIndexFlip,word)
            code = code.join('');
            console.log(code);
        }
        else if (command == 'Contains') {
            if (code.includes(info)) {
                console.log(`${code} contains ${info}`)
            }
            else {
                console.log(`Substring not found!`)
            }
        }
        else if (command == 'Slice') {
            let startIndex = Number(info.shift());
            let endIndex = Number(info.shift());
            code = code.split('');
            code.splice(startIndex,(endIndex-startIndex))
            code = code.join('');
            console.log(code);
        }
        else {
            return console.log(`Your activation key is: ${code}`)
        }
    }
} activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])

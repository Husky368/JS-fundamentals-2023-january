function activationKeys(arr) {
    let code = arr.shift();
    for (let line of arr) {
        let info = line.split('>>>');
        let command = info.shift();
        if (command == 'Flip') {

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
            console.log(code)
            code = code.split('');
            code.splice(startIndex,(endIndex-startIndex))
            code = code.join('');
            console.log(code)
            console.log(code)
        }
        else {

        }
    }
} activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])

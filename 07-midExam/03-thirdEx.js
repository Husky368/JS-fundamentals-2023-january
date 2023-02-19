function chatLogger(declaration) {
    let done = false
    let chat = []
    while (!done) {
        let arrayCommand = declaration.shift().split(' ')
        if (arrayCommand == 'end') {
            for (k = 0; k < chat.length; k++) {
                let currWord = chat[k]
                console.log(currWord)
            }
            done = true
            continue
        }
        let command = arrayCommand.shift()
        switch (command) {
            case 'Chat':
                chat.push(arrayCommand[0])
                break;
            case 'Delete':
                if (chat.includes(arrayCommand[0])) {
                    let deleteIndex = chat.findIndex(a => a == arrayCommand)
                    chat.splice(deleteIndex, 1)
                }
                break;
            case 'Edit':
                if (chat.includes(arrayCommand[0])) {
                    let editIndex = chat.findIndex(a => a == arrayCommand[0])
                    chat.splice(editIndex, 1, arrayCommand[1])
                }
                break;
            case 'Pin':
                if (chat.includes(arrayCommand[0])) {
                    let pinIndex = chat.findIndex(a => a == arrayCommand[0])
                    let word = chat[pinIndex]
                    chat.splice(pinIndex, 1)
                    chat.push(word)
                }
                break;
            case 'Spam':
                for (i = 0; i < arrayCommand.length; i++) {
                    chat.push(arrayCommand[i])
                }
                break;
        }
    }

}

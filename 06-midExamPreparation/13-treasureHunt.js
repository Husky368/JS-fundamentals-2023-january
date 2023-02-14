function treasureHunt(declaration) {
    let array = declaration.shift().split('|')
    let finish = false
    while (array.length >= 0 && finish == false) {
        let command = declaration.shift()
        if (command == 'Yohoho!') {
            if (array.length == 0) {
                console.log("Failed treasure hunt.")
                finish = true
                break;
            }
            let sum = 0
            for (count = 0; count < array.length; count++) {
                sum += array[count].length
            }
            sum = sum / array.length
            console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`)
            finish = true
        }
        command = command.split(' ')
        switch (command[0]) {
            case 'Steal':
                let stollenArr = []
                command[1] = Number(command[1])
                if (command[1] >= array.length) {
                    console.log(array.join(', '))
                    array = []
                    continue
                }
                for (p = 1; p <= command[1]; p++) {
                    stollenArr.unshift(array[array.length-1])
                    array.pop()
                }
                console.log(stollenArr.join(', '))
                break;
            case 'Drop':
                command[1] = Number(command[1])
                if (command[1] >= 0 && command[1] < array.length) {
                    let word = array[command[1]]
                    array.splice(command[1], 1)
                    array.push(word)
                }
                break;
            case 'Loot':
                command.shift()
                for (i = 0; i < command.length; i++) {
                    if (!array.includes(command[i])) {
                        array.unshift(command[i])
                    }
                }
                break;
            default:
                break;
        }
    }
}

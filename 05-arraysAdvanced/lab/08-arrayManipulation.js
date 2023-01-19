function arrayManipulator(arrayNumbers, commands) {
    for (i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' ')
        let operation = currentCommand[0]
        switch (operation) {
            case 'add':
                let index = Number(currentCommand[1])
                let num = Number(currentCommand[2])
                for (i = arrayNumbers.length - 1; i >= index; i--) {
                    arrayNumbers[i + 1] = arrayNumbers[i]
                }
                arrayNumbers.splice(index, 1, num)
                break;
            case 'addMany':
                let arr = currentCommand.map(Number)
                let indexForMany = arr[1]
                arr.splice(0, 2)
                for (iTwo = arrayNumbers.length - 1; iTwo >= indexForMany; iTwo--) {
                    arrayNumbers[iTwo + arr.length] = arrayNumbers[iTwo]
                }
                let doneN = 0
                let startedZero = false
                for (const el of arrayNumbers) {
                    let indexEl = arrayNumbers.indexOf(el) + 1
                    if(arrayNumbers.indexOf(el)==0){
                        startedZero = true
                    }
                    if(startedZero){
                        indexEl--
                    }
                    if (indexEl >= indexForMany) {
                        arrayNumbers.splice(indexEl, 1, arr[doneN])
                        doneN++
                    }
                    if (doneN >= arr.length) {
                        break;
                    }
                }
                break;
            case 'contains':
                let lookedFor = Number(currentCommand[1])
                let done = false
                for (const el of arrayNumbers) {
                    if (el == lookedFor) {
                        let containsIndex = arrayNumbers.indexOf(el)
                        console.log(containsIndex)
                        done = true
                        break;
                    }
                }
                if(!done){
                    console.log('-1')
                }
                break;
            case 'remove':
                let removeIndex = Number(currentCommand[1])
                arrayNumbers.splice(removeIndex, 1)
                break;
            case 'shift':
                let shiftIndex = Number(currentCommand[1])
                for (j = 1; j <= shiftIndex; j++) {
                    let shiftedNum = arrayNumbers.shift()
                    arrayNumbers.push(shiftedNum)
                }
                break;
            case 'sumPairs':
                let sumPairsArr = []
                let sumPairsIndex = 0
                let started = arrayNumbers.length
                while(arrayNumbers.length>0){
                    let firstN = arrayNumbers.shift()
                    let secondN = 0
                    if(arrayNumbers.length>=1){
                        secondN = arrayNumbers.shift()
                        sumPairsIndex++
                    }
                    let sum = firstN+ secondN
                    sumPairsArr.push(sum)
                    sumPairsIndex++
                }
                arrayNumbers = sumPairsArr
                break;
            case 'print':
                console.log(`[ `+ arrayNumbers.join(", ")+` ]`)
                break;
        }
    }
    // 2 - length= 1
    // 3 - length = 2
    // 1  length = 3
    // 1 bezkrayno
}
//3 3 3 3 3 3 

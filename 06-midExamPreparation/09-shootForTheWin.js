function shootForTheWin(declaration) {
    let targets = declaration.shift().split(' ').map(Number)
    let done = []
    let shotTargets = 0
    for (i = 0; i < declaration.length; i++) {
        let command = declaration[i]
        if (command == 'End') {
            console.log(`Shot targets: ${shotTargets} -> ` + targets.join(' '))
        }
        command = Number(command)
        if (command <= targets.length-1) {
            let number = targets[command]
            targets[command] = -1
            shotTargets++
            done.push(command)
            for (k = 0; k < targets.length; k++) {
                if (!done.includes(k)) {
                    if (targets[k] > number) {
                        targets[k] -= number
                    }
                    else {
                        targets[k] += number
                    }
                }
            }
        }
    }
} shootForTheWin(
    (["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
    

)

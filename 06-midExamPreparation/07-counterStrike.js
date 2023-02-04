function counterStrike(input) {
    let declaration = input
    let health = Number(declaration.shift())
    let times = 0
    for (i = 0; i < declaration.length; i++) {
        let currentCommand = declaration[i]
        if (currentCommand == 'End of battle') {
            return console.log(`Won battles: ${times}. Energy left: ${health}`)
        }
        currentCommand = Number(currentCommand)
        if (currentCommand <= health) {
            enoughHealth(health, currentCommand)
        }
        else {
            return console.log(`Not enough energy! Game ends with ${times} won battles and ${health} energy`)
        }
    }
    function enoughHealth(hp, damage) {
        hp -= damage
        times++
        if (times % 3 == 0 && times != 0) {
            hp += times
        }
        health = hp
    }
}


)

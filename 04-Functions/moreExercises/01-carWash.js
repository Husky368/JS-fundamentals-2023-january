function carWash(input) {
    let cleanness = 0
    for (i = 0; i < input.length; i++) {
        let command = input[i]
        action(command)
    }
    function action(comm) {
        if (comm == "soap") {
            cleanness += 10
        }
        else if (comm == 'water') {
            cleanness *= 1.20
        }
        else if (comm == 'vacuum cleaner') {
            cleanness *= 1.25
        }
        else if(comm == 'mud') {
            cleanness *= 0.9
        }
    }
    return console.log(`The car is ${cleanness.toFixed(2)}% clean.`)
}

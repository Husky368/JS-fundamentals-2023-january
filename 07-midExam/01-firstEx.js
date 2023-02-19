function experienceGaining(declaration) {
    let neededExperience = declaration.shift()
    let countBattles = declaration.shift()
    let times = 0
    let bat = 0
    while (countBattles != times) {
        times++
        let currentExperience = declaration.shift()
        neededExperience -= currentExperience
        if (times % 3 == 0 && times != 0) {
            let bonus = currentExperience * 0.15
            neededExperience -= bonus
        }
        else if (times % 5 == 0 && times != 0) {
            let minus = currentExperience * 0.1
            neededExperience += minus
        }
        else if (times % 15 == 0 && times != 0) {
            let more = currentExperience * 0.05
            neededExperience -= more
        }
        if (neededExperience <= 0) {
            bat = times
            break
        }
    }
    if (neededExperience <= 0) {
        console.log(`Player successfully collected his needed experience for ${bat} battles.`)
    }
    else {
        console.log(`Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`)
    }
}

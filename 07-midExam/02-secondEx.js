function spaceTravel(declaration) {
    let travelRoute = declaration.shift().split('||')
    let fuel = Number(declaration.shift())
    let ammunitions = Number(declaration.shift())
    let done = false
    while (!done) {
        let currentCommand = travelRoute.shift()
        if (currentCommand == "Titan") {
            done = true
            console.log("You have reached Titan, all passengers are safe.")
            continue
        }
        currentCommand = currentCommand.split(' ')
        currentCommand[1] = Number(currentCommand[1])
        switch (currentCommand[0]) {
            case 'Travel':
                let lightYears = currentCommand[1]
                if (fuel >= lightYears) {
                    fuel -= lightYears
                    console.log(`The spaceship travelled ${lightYears} light-years.`)
                }
                else {
                    done = true
                    console.log("Mission failed.")
                    continue
                    //check
                }
                break;
            case 'Enemy':
                let enemiesArmour = currentCommand[1]
                if (ammunitions >= enemiesArmour) {
                    ammunitions -= enemiesArmour
                    console.log(`An enemy with ${enemiesArmour} armour is defeated.`)
                }
                else {
                    let doubledNeed = enemiesArmour * 2
                    if (doubledNeed <= fuel) {
                        fuel -= doubledNeed
                        console.log(`An enemy with ${enemiesArmour} armour is outmaneuvered.`)
                    }
                    else {
                        done = true
                        console.log("Mission failed.")
                        continue
                    }
                }
                break;
            case 'Repair':
                let add = currentCommand[1]
                fuel += add
                ammunitions += add * 2
                console.log(`Ammunitions added: ${add*2}.`)
                console.log(`Fuel added: ${add}.`)
                break;
        }
    }
}

function manOWar(declaration) {
    let pirateShip = declaration.shift().split('>').map(Number)
    let warShip = declaration.shift().split('>').map(Number)
    let maxDamage = Number(declaration.shift())
    let finish = false
    while (declaration.length > 0 && finish == false) {
        let command = declaration.shift()
        if (command == 'Retire') {
            //"Pirate ship status: {pirateShipSum}
            //Warship status: {warshipSum}"
            let pirateShipSum = pirateShip.map(room => pirateShipSum + room)
            let warShipSum = warShip.map(room => warShipSum + room)
            console.log(`Pirate ship status: ${pirateShipSum}`)
            console.log(`Warship status: ${warShipSum}`)
            finish = true
            break
        }
        if (command == 'Status') {
            //prints the count of all sections of the pirate ship that need repair soon,
            // which are all sections that are lower than 20% of the maximum health capacity. Print the following:
            //"{count} sections need repair."
            let count = 0
            for (pirateRooms = 0; pirateRooms < pirateShip.length; pirateRooms++) {
                let currentPercent = (maxDamage / pirateShip[pirateRooms]) * 100
                if (currentPercent < 20) {
                    count++
                }
            }
            console.log(`${count} sections need repair.`)
            continue
        }
        command = command.split(' ')
        switch (command[0]) {
            case 'Fire':
                //"Fire {index} {damage}" - the pirate ship attacks the warship with the given damage at that section.
                //Check if the index is valid and if not, skip the command. If the section breaks (health <= 0) 
                //the warship sinks, print the following and stop the program: "You won! The enemy ship has sunken."
                let indexFire = Number(command[1])
                let damageFire = Number(command[2])
                if (indexFire > 0 && indexFire < warShip.length) {
                    warShip[indexFire] -= damageFire
                    if (warShip[indexFire] <= 0) {
                        console.log("You won! The enemy ship has sunken.")
                        finish = true
                    }
                }
                break;
            case 'Defend':
                //•	"Defend {startIndex} {endIndex} {damage}" - the warship attacks the pirate ship with the given 
                //damage at that range (indexes are inclusive). Check if both indexes are valid and if not, 
                //skip the command. If the section breaks (health <= 0) the pirate ship sinks, print the 
                //following and stop the program:
                //"You lost! The pirate ship has sunken."
                let startIndexDefend = Number(command[1])
                let endIndexDefend = Number(command[2])
                let damageDefend = Number(command[3])
                if (startIndexDefend >= 0 && endIndexDefend < pirateShip.length) {
                    for (defend = startIndexDefend; defend <= endIndexDefend; defend++) {
                        pirateShip[defend] -= damageDefend
                        if (pirateShip[defend] <= 0) {
                            console.log("You lost! The pirate ship has sunken.")
                            finish = true
                            break;
                        }
                    }
                }
                break;
            case 'Repair':
                //Repair {index} {health}" - the crew repairs a section of the pirate ship with the given health.
                //Check if the index is valid and if not, skip the command. 
                //The health of the section cannot exceed the maximum health capacity.
                let indexRepair = Number(command[1])
                let health = Number(command[2])
                if (pirateShip.includes(indexRepair)) {
                    pirateShip[indexRepair] += health
                    if (pirateShip[indexRepair] > maxDamage) {
                        pirateShip[indexRepair] = maxDamage
                    }
                }
                break;
            default:
                break;
        }
    }
}

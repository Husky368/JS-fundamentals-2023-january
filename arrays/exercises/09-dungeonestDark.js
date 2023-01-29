function dungeonestDark(input) {
    let roomsArr = input[0].split('|')
    let health = 100
    let coins = Number(0)
    let reachedRoom = 0
    let alive = true
    while (roomsArr.length > 0 && alive) {
        let currentRoom = roomsArr.shift().split(' ')
        let opperation = currentRoom[0]
        let number = Number(currentRoom[1])
        reachedRoom++
        switch (opperation) {
            case "potion":
                let firstHealth = health
                health += number
                if (health > 100) {
                    number = 100 - firstHealth
                    health = 100
                }
                console.log(`You healed for ${number} hp.`)
                console.log(`Current health: ${health} hp.`)
                break;
            case "chest":
                coins += number
                console.log(`You found ${number} coins.`)
                break;
            default:
                health -= number
                if (health > 0) {
                    console.log(`You slayed ${opperation}.`)
                }
                else {
                    console.log(`You died! Killed by ${opperation}.`)
                    console.log(`Best room: ${reachedRoom}`)
                    alive = false
                    break;
                }
                break;
        }
    }
    if(alive){
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}

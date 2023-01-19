function theLift(declaration) {
    let turists = Number(declaration[0])
    let wagons = declaration[1].split(" ").map(Number)

    let turistFinish = false
    let wagonsFinish = false
    let times = 0

    for (i = 0; i <= wagons.length; i++) {
        let currWagon = wagons[i]
        times++
        let wagonNeedness = 4 - currWagon
        if (times >= wagons.length && wagons[wagons.length - 1] == 4) {
            console.log(`There isn't enough space! ${turists} people in a queue!`);
            console.log(wagons.join(' '))
            break;
        }
        if (wagonNeedness != 0 || currWagon == 0) {
            if (wagonNeedness <= turists) {
                turists -= wagonNeedness
                wagons[i] = 4
            }
            else {
                wagons[i] = turists
                turists -= turists
            }
        }
        if (turists <= 0) {
            console.log(`The lift has empty spots!`)
            console.log(wagons.join(' '))
            break;
        }
    }
}

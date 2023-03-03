function piccolo(input) {
    let garage = new Map();
    for (const line of input) {
        let [command, carNumber] = line.split(', ');
        if (command == 'IN') {
            garage.set(carNumber)
        } else {
            garage.delete(carNumber)
        }
    }
    for (const carN of garage) {
        let number = carN[0]
        number = number[2]+number[3]+number[4]+number[5] 
        garage.set(carN[0], Number(number))
    }
    let sort = Array.from(garage).sort((a, b) => a[1] - b[1])
    if (sort.length == 0) {
        return console.log("Parking Lot is Empty")
    }
    for (const key of sort) {
        console.log(key[0])
    }
}

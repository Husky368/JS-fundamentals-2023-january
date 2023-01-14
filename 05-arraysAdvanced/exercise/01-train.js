function train(arr) {
    let passengersInWagons = arr.shift().split(" ").map(Number)
    let maxPassengers = arr.shift()
    let arrLength = arr.length
    for (index = 0; index < arrLength; index++) {
        let curr = arr[index].split(" ")
        if (curr[0] == "Add") {
            //add
            passengersInWagons.push(Number(curr[1]))
        }
        else {
            //number
            let number = Number(curr)
            for (j = 0; j < passengersInWagons.length; j++) {
                if(number+passengersInWagons[j]<=Number(maxPassengers)){
                    passengersInWagons[j] = number + passengersInWagons[j]
                    break;
                }
            }
        }
    }
    console.log(passengersInWagons.join(' '));
}

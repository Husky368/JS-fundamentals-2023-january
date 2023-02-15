function blackFlag(declaration) {
    // •	On the 1st line, you will receive the days of the plunder – an integer number in the range [0…100000]
    // •	On the 2nd line, you will receive the daily plunder – an integer number in the range [0…50]
    // •	On the 3rd line, you will receive the expected plunder – a real number in the range [0.0…10000.0]
    let daysPlunder = Number(declaration[0])
    let dailyPlunder = Number(declaration[1])
    let goalPlunder = Number(declaration[2])
    let sumPlunder = 0
    let currDay = 0
    while (currDay < daysPlunder) {
        currDay++
        sumPlunder += dailyPlunder
        if (currDay % 3 == 0 && currDay != 0) {
            sumPlunder += dailyPlunder * 0.5
        }
        if (currDay % 5 == 0 && currDay != 0) {
            sumPlunder *= 0.7
        }
    }
    if(sumPlunder>=goalPlunder){
        return console.log(`Ahoy! ${sumPlunder.toFixed(2)} plunder gained.`)
    }
    //"Collected only {percentage}% of the plunder."
    let percent = (sumPlunder/goalPlunder)*100
    return console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`)
}

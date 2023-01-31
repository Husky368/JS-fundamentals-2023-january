function reception(input) {
    let allHours = Number(input.pop())
    let hours = Number(input[0]) + Number(input[1]) + Number(input[2])
    let doneHours = 0
    let started = false
    let rests = 0
    let continu = false
    while (allHours > 0) {
        if (doneHours % 3 == 0 && started == true&&continu==true) {
            rests++
            continu = false
            continue
        }
        continu = true
        started = true
        allHours -= hours
        doneHours++
    }
    doneHours += rests
    console.log("Time needed: " + doneHours + "h.")
}

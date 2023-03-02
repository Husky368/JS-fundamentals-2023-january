function schoolGrades(input) {
    let object = {}
    for (const line of input) {
        let studentArr = line.split(' ')
        let name = studentArr.shift()
        studentArr = studentArr.map(Number)
        if (!object.hasOwnProperty(name)) {
            object[name] = studentArr
        } else {
            let numbers = object[name]
            studentArr.forEach(element => { numbers.push(element) });
            object[name] = numbers
        }
    }
    let sorted = Object.entries(object).sort((a, b) => a[0].localeCompare(b[0]))
    for (i = 0; i < sorted.length; i++) {
        let name = sorted[i].shift()
        let arrNumbers = sorted[i].shift()
        let sum = 0
        arrNumbers.forEach(a => sum+=a)
        console.log(`${name}: ${(sum / arrNumbers.length).toFixed(2)}`)
    }
}

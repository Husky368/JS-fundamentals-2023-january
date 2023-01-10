function firstAndLastL(array) {
    let firstLine = []
    let secondLine = []
    let k = array[0]
    for (i = 1; i <= k; i++) {
        firstLine.push(array[i])
    }
    let start = array.length - k
    for (i = start; i < array.length; i++) {
        secondLine.push(array[i])
    }
    console.log(firstLine.join(" "))
    console.log(secondLine.join(" "))
}

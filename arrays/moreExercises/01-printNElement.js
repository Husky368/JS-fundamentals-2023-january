function printNElement(array) {
    let resultArr = []
    let lastEl = Number(array.pop())
    for (i = 0; i < array.length; i += lastEl) {
        resultArr.push(array[i])
    }
    console.log(resultArr.join(' '))
}

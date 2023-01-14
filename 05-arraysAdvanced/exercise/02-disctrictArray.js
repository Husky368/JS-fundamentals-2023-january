function disctrictArray(array) {
    let resultArr = []
    for (i = 0; i < array.length; i++) {
        let number = array[i]
        if (!resultArr.includes(number)) {
            resultArr.push(number)
        }
    }
    console.log(resultArr.join(' '))
}

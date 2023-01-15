function sorting(declaration){
    let arrayNumbers = declaration.sort((a,b) => a-b)
    let resultArr = []
    for(i = 0;i< arrayNumbers.length; i++){
        let smallerNum = arrayNumbers.shift()
        let biggerNum = arrayNumbers.pop()
        resultArr.push(biggerNum)
        resultArr.push(smallerNum)
    }
    resultArr.push(arrayNumbers.pop())
    resultArr.push(arrayNumbers.shift())
    console.log(resultArr.join(' '))
}

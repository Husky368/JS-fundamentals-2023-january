function searchForNumber(arrayNumbers,specialNumers){
    let start = specialNumers[0]
    let secondOp =specialNumers[1]
    let lookingForNum = specialNumers[2]
    let cut = arrayNumbers.length - start
    arrayNumbers.splice(start,cut)
    arrayNumbers.splice(0,secondOp)
    let n = 0
    for (const el of arrayNumbers) {
        if(lookingForNum==el){
            n++
        }
    }
    console.log(`Number ${lookingForNum} occurs ${n} times.`);
}

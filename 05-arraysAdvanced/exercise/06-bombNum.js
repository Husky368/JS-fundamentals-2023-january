function bombNum(arrayNumber, specialNums) {
    let bomb = specialNums[0]
    let power = specialNums[1]
    let repeating = 0
    for(i=0;i<arrayNumber.length;i++){
        if(arrayNumber[i]==bomb){
            repeating++
            i+=power
        }
    }
    let done = 0
    while (done != repeating) {
        let index = arrayNumber.indexOf(bomb)
        let left = Math.max(index - power, 0)
        let rigth = Math.min(index+power, arrayNumber.length-1)
        let cutNum = rigth - left +1
        arrayNumber.splice(left,cutNum)
        done++
    }
    let sum = 0
    for (const el of arrayNumber) {
        sum+=el
    }
    console.log(sum)

}

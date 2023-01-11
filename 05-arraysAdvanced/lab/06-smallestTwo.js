function smallestTwo(arr) {
    let result = []
    let times = 0
    for (i = 0; i < arr.length; i++) {
        let digit = Number(arr[i])
        if(times==0){
            result.push(digit)
            times++
        }
        else{
            if(result[0]>digit){
                result.unshift(digit)
            }
            else{
                result.push(digit)
            }
        }
    }
    let firstTwo = result.slice(0,2)
    console.log(firstTwo.join(" "))
}

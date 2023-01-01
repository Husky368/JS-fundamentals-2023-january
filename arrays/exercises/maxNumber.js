function maxNumber(array) {
    let numsArr = []
    let times = 0
    for (let i = 0; i <= array.length - 1; i++) {
        times++
        let topInt 
        let diff = true
        let curruntDigit = array[i]
        for (let index = i + 1; index <= array.length - 1; index++) {
            let comparing = array[index]
            if (curruntDigit > comparing) {
                topInt = true
            }
            else{
                topInt = false
            }
        }
        //diff e false i ne vliza
        if(times!=1){
            for (let indexx = 0; indexx <= numsArr.length-1; indexx++) {
                if(numsArr[indexx]==curruntDigit){
                    diff = false
                    break;
                }
            }
        }
        if((topInt == true||curruntDigit==array[array.length-1])&&diff==true){
            numsArr.push(curruntDigit)
        }
    }
    console.log(`${numsArr.join(" ")}`)
}

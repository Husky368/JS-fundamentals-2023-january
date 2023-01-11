function lastKNumSquence(n, k) {
    let resultArr = []
    for (let i = 1; i <= n; i++) {
        //first time
        if (i == 0) {
            resultArr.push(1)
            if (n == i) {
                break
            }
            resultArr.push(1)
            i++
            continue
        }
        //second++times
        else {
            let back = 0
            if(i<k){
                back = i
            }
            else{
                back = i-k
            }
            for(p = back;p<resultArr.length-1;p++){
                let digit = Number(resultArr[back])
                let sum += digit
            }
        }
    }
    log(resultArr.join(" "))
}
lastKNumSquence(6, 3)

function oddNums(arr){
    let resultArr = []
    for(i=0;i<arr.length;i++){
        if(i%2==1){
            let digit = arr[i] * 2 
            resultArr.unshift(digit)
        }
    }
    console.log(resultArr.join(" "))
}

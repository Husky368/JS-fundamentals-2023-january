function addAndRemove(input) {
    let number = Number(0)
    let resultArr = []
    for (i = 0; i < input.length; i++) {
        number++
        if(input[i]=="add"){
            resultArr.push(number)
        }
        else{
            resultArr.pop()
        }
    }
    console.log(resultArr.join(" "))
}

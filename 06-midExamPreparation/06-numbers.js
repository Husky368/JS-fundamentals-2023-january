function numbers(input) {
    let array = input.split(' ').map(Number)
    let sum = 0
    let numCount = 0
    for (const el of array) {
        numCount++
        sum += Number(el)
    }
    let average = sum/numCount
    let greaterNumsArr = []
    for (const el of array) {
        if(el>average){
            greaterNumsArr.push(el)
        }
    }
    greaterNumsArr.sort((a,b)=>b-a)
    let printed = 0
    let result = []
    while(printed<5&&greaterNumsArr.length>0){
        result.push(greaterNumsArr.shift())
        printed++
    }
    if(result.length==0){
        console.log("No")
    }
    else{
        console.log(result.join(' '))
    }
}

function rotationArray(array){
    let rotationN = Number(array.pop())
    for(i=1;i<=rotationN;i++){
        let element = array.pop()
        array.unshift(element)
    }
    console.log(array.join(" "))
}

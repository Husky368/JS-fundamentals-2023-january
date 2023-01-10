function negaOrPosi(array) {
    let resultArr = []
    for (i = 0; i < array.length; i++) {
        let current = Number(array[i])
        if(current>=0){
            resultArr.push(current)
        }
        else{
            resultArr.unshift(current)
        }
    }
    for(i=0;i<resultArr.length;i++){
        console.log(resultArr[i])
    }
}

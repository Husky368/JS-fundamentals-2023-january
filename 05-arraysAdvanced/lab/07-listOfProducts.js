function arrayMapper(arr) {
    let sorted = arr.sort()
    let count = 1
    let mapped = sorted.map(a => `${count++}.${a}`)
    if(arr.length > 0){
        console.log(mapped.join("\n"));
    
    }
   
}

function phoneBook(input){
    let obj = {}
    for (const line of input) {
        let [key,value] = line.split(' ')
        obj[key] = value
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`) 
    }
}

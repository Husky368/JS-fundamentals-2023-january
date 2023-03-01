function addresBill(input) {
    let object = {}
    for (const line of input) {
        let [key,value] = line.split(':')
        object[key] = value
    }    
    let sorted = Object.keys(object)
    sorted.sort((key1,key2) => key1.localeCompare(key2))
    for (const key in sorted) {
        console.log(`${sorted[key]} -> ${object[sorted[key]]}`)
    }
}

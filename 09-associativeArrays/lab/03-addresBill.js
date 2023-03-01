function addresBill(input) {
    let object = {}
    for (const line of input) {
        let [key,value] = line.split(':')
        object[key] = value
    }    
    let sorted = Object.entries(object).sort(([key1,value1],[key2,value2]) => key1.localeCompare(key2))
    for (const key in sorted) {
        console.log(`${key} -> ${sorted[key]}`)
    }
}

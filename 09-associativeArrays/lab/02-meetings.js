function meetings(input) {
    let obj = {}
    for (let line of input) {
        let [key, value] = line.split(' ')
        if (!obj.hasOwnProperty(key)) {
            console.log(`Scheduled for ${key}`)
            obj[key] = value
        }
        else {
            console.log(`Conflict on ${key}!`)
        }
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`)
    }
}

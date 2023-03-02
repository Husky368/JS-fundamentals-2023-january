function storage(input) {
    let container = new Map();
    for (const line of input) {
        let [key, value] = line.split(' ')
        if (!container.has(key)) {
            container.set(key, Number(value))
        } else {
            let currentQ = container.get(key)
            let newQ = currentQ + Number(value)
            container.set(key, newQ)
        }
    }
    for (const [key,value] of container) {
        console.log(`${key} -> ${value}`)
    }
}

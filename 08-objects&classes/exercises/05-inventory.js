function inventory(declaration) {
    let result = []
    for (let line of declaration) {
        let [name, level, items] = line.split(' / ')
        let hero = {
            name: name,
            level: level,
            items: items.split(', '),
        }
        result.push(hero)
    }
    result.sort((heroA, heroB) => heroA.level - heroB.level)
    for (i = 0; i < result.length; i++) {
        console.log(`Hero: ${result[i].name}`)
        console.log(`level => ${result[i].level}`)
        console.log(`items => ${result[i].items.join(', ')}`)
    }
}

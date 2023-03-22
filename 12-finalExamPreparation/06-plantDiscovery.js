function plantDiscovery(informationArray) {
    let n = Number(informationArray.shift());
    let plantsInfo = new Map();
    for (let index = 0; index < n; index++) {
        let ellement = informationArray.shift();
        ellement = ellement.split('<->');
        if (!plantsInfo.has(ellement[0])) {
            plantsInfo.set(ellement[0], new Map());
        }
        plantsInfo.get(ellement[0]).set('Rarity', Number(ellement[1]));
    }
    for (let line of informationArray) {
        if (line == 'Exhibition') {
            console.log(`Plants for the exhibition:`)
            let plantArr = Array.from(plantsInfo)
            for (const plant of plantArr) {
                let arr = Array.from(plant[1])
                let rarityArr = arr[0][1]
                let ratingArr = arr[1][1]
                console.table(`- ${plant[0]}; Rarity: ${rarityArr}; Rating: ${ratingArr.toFixed(2)}`)
            }
            break;
        }
        let [command, lineInfo] = line.split(': ')
        let [name, rating] = lineInfo.split(' - ');
        if (rating != undefined) {
            if (command == 'Rate') {
                if (plantsInfo.has(name)) {
                    if (plantsInfo.get(name).has('Rate')) {
                        let innerMap = plantsInfo.get(name)
                        let innerMapValue = innerMap.get('Rate');
                        let result = (innerMapValue + Number(rating)) / 2;
                        plantsInfo.get(name).set('Rate', result)
                    } else {
                        plantsInfo.get(name).set('Rate', Number(rating))
                    }
                } else {
                    console.log('error')
                }
            }
            else {
                if (plantsInfo.has(name)) {
                    plantsInfo.get(name).set('Rarity', Number(rating))
                } else {
                    console.log('error')
                }
            }
        }
        else {
            if (plantsInfo.has(name)) {
                plantsInfo.get(name).set('Rate', 0)
            } else {
                console.log('error')
            }
        }
    }
    // •    "Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
    // •	"Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
    // •	"Reset: {plant}" – remove all the ratings of the given plant

} plantDiscovery(
    (["3",
        "Arnoldii<->4",
        "Woodii<->7",
        "Welwitschia<->2",
        "Rate: Woodii - 10",
        "Rate: Welwitschia - 7",
        "Rate: Arnoldii - 3",
        "Rate: Woodii - 5",
        "Update: Woodii - 5",
        "Reset: Arnoldii",
        "Exhibition"]))
// Plants for the exhibition:
// - Arnoldii; Rarity: 4; Rating: 0.00
// - Woodii; Rarity: 5; Rating: 7.50
// - Welwitschia; Rarity: 2; Rating: 7.00


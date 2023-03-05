function cardGame(declaration) {
    let playersCards = new Map();
    for (const line of declaration) {
        let [name, cards] = line.split(': ');
        cards = cards.split(', ');
        if (!playersCards.has(name)) {
            playersCards.set(name, new Set())
            //check for repeating cards
        }
        for (const currCard of cards) {
            playersCards.get(name).add(currCard)
        }
    }
    for (let playerInfo of Array.from(playersCards)) {
        let name = playerInfo.shift();
        let cardsInfo = playerInfo.shift()
        let sum = 0;
        let powerContainer = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',]
        let typeContainer = ['C', 'D', 'H', 'S',]
        for (let card of cardsInfo) {
            //S -> 4, H-> 3, D -> 2, C -> 1
            let type = '';
            let power = '';
            if(card.length==2){
                type = card[1]
                power = card[0]
            }else{
                power = '10';
                type = card[card.length-1]
            }
            let indexPower = powerContainer.findIndex(a => a == power)
            let indexType = typeContainer.findIndex(a => a == type)
            sum += (indexPower + 2) * (indexType + 1)
        }
        console.log(`${name}: ${sum}`)
    }
}

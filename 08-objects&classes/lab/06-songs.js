function songs(input) {
    let musicCounter = input.shift()
    let findType = input.pop()
    class music {
        constructor(type, name, time) {
            this.type = type
            this.name = name
            this.time = time
        }
        printing() {
            console.log(this.name)
        }
    }
    for (let currentMusic of input) {
        let [typeOfM, nameOfM, timeOfM] = currentMusic.split('_')
        let newMusic = new music(typeOfM, nameOfM, timeOfM)
        if(findType=='all'){
            newMusic.printing()
            continue
        }
        else if (typeOfM == findType) {
            newMusic.printing()
        }
    }
}

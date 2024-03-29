function emojiDetector(input) {
    let regex = /([:][:]|[*][*])[A-Z][a-z]{2,}\1/g;
    let regexD = /\d/g;
    let matches = input[0].match(regex);
    let digits = input[0].match(regexD);
    let coolThreshold = 0;
    let resArr = [];
    for (let index = 0; index < digits.length; index++) {
        if (index == 0) {
            coolThreshold = Number(digits[index])
            continue;
        }
        coolThreshold *= Number(digits[index])
    }

    for (let ell of matches) {
        let firstW = ell;
        ell = ell.slice(2, ell.length - 2)
        let curr = 0;
        for (const letter of ell) {
            let asciiNum = letter.charCodeAt()
            curr += asciiNum
        }
        if (coolThreshold < curr) {
            resArr.push(firstW)
        }
    }
    console.log(`Cool threshold: ${coolThreshold}`)
    console.log(`${matches.length} emojis found in the text. The cool ones are:`)
    for (const iterator of resArr) {
        console.log(iterator)
    }

}emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smi:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])

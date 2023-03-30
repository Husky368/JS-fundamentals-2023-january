function emojiDetector(input) {
    let regex = /([:*]{2})[A-Z][a-z]{2,}\1/g;
    let regexD = /\d/g
    let matches = input[0].match(regex);
    let digits = input[0].match(regexD);
    let coolThrescode = '';
    let resArr = [];
    for (let index = 0; index < digits.length; index++) {
        if (index == 0) {
            coolThrescode = Number(digits[index]);
            continue;
        }
        coolThrescode *= Number(digits[index])
    }
    for (let ell of matches) {
        let firstW = ell;
        ell = ell.slice(2, ell.length - 2)
        ell = ell.split('');
        let curr = 0;
        for (let i = 0; i < ell.length; i++) {
            let asciiNum = ell[i].charCodeAt()
            curr += asciiNum
        }
        if (curr >= coolThrescode) {
            ell = ell.join('');
            resArr.push(firstW)
        }
    }
    console.log(`Cool threshold: ${coolThrescode}`)
    console.log(`${matches.length} emojis found in the text. The cool ones are:`)
    for (const iterator of resArr) {
        console.log(iterator)
    }
} emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])

function fancyBarcode(array) {
    let pattern = /@[#]+(?<word>[A-Z][abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0-9]{4,}[A-Z])@[#]+/
    let n = array.shift();
    for (let line of array) {
        if (pattern.test(line)) {
            let info = pattern.exec(line);
            let word = info.groups.word;
            if (/\d/.test(word)) {
                let code = '';
                for (const letter of word) {
                    if (/\d/.test(letter)) {
                        code += letter;
                    }
                }
                console.log(`Product group: ${code}`)
            } else {
                console.log('Product group: 00')
            }
        }
        else {
            console.log("Invalid barcode")
        }
    }
} fancyBarcode((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
)

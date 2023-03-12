function replaceRepeatingChars(input) {
    let resArr = [];
    let lastChar = input[0];
    resArr.push(lastChar);
    for (let index = 1; index <= input.length; index++) {
        if (input[index] != lastChar) {
            resArr.push(input[index]);
        }
        lastChar = input[index];
    }
    console.log(resArr.join(''))
} replaceRepeatingChars('qqqwerqwecccwd')

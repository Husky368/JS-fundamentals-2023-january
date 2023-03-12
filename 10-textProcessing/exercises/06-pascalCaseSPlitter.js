function pascalCaseSPlitter(string) {
    let resultArr = [];
    let word = '';
    let count = 0;
    for (const char of string) {
        let ascciCode = char.charCodeAt();
        if (ascciCode >= 65 && ascciCode <= 90&&count!=0) {
            resultArr.push(word)
            word = char;
            continue;
        }
        word += char    
        count++
    }
    resultArr.push(word)
    console.log(resultArr.join(', '))
} pascalCaseSPlitter('SplitMeIfYouCanHaHaYouCantOrYouCan')

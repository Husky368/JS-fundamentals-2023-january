function matchPhoneNumber(numbersArr) {
    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let resultArray = '';
    for (let el of numbersArr) {
        let result = el.match(regex);
        resultArray+= result.join(', ');
    }
    console.log(resultArray);
} matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])

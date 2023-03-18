function race(input) {
    let participants = new Map();
    let cleaningPattern = /\w/;
    let gettingDigits = /\d/;
    let gettingLetters = /[A-za-z]/;
    let arrayNames = input.shift().split(', ')
    for (let line of input) {
        if (line == 'end of race') {
            break;
        }
        let rightText = '';
        let kilometers = 0;
        let name = '';
        for (let letter of line) {
            if (cleaningPattern.test(letter)) {
                rightText += letter
            }
        }
        for (let letter of rightText) {
            if (gettingDigits.test(letter)) {
                kilometers += Number(letter)
            }
            if (gettingLetters.test(letter)) {
                name += letter
            }
        }
        if (participants.has(name)) {
            let ranKm = participants.get(name) + kilometers
            participants.set(name,ranKm)
            continue
        }
        if(arrayNames.includes(name)){
            participants.set(name, kilometers)
        }
    }
    let arrayParticipants = Array.from(participants)
    arrayParticipants = arrayParticipants.sort((a, b) => b[1] - a[1])
    let count = 0
    for (const playerInfo of arrayParticipants) {
        count++
        let twoLetter = ['a','st','nd','rd']
        console.log(`${count}${twoLetter[count]} place: ${playerInfo[0]}`)
        if(count==3){
            break
        }
    }
} race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']

)

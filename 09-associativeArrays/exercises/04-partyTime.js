function partyTime(input) {
    let allGuests = new Set()
    let containerOfNumbers = '0123456789'
    for (const guest of input) {
        if (guest == "PARTY") {
            break;
        }
        allGuests.add(guest)
    }
    input.splice(0, allGuests.size + 1)
    for (const guest of input) {
        allGuests.delete(guest)
    }
    let vip = []
    let regular = []
    for (const guest of allGuests) {
        let letter = guest[0]
        if(containerOfNumbers.includes(letter)){
            vip.push(guest)
        }
        else{
            regular.push(guest)
        }
    }
    console.log(allGuests.size)
    console.log(vip.join("\n"))
    console.log(regular.join("\n"))
}(not done)

function wordTracker(input) {
    let words = {}
    let twoWords = input.shift().split(' ')
    for (const word of twoWords) {
        words[word] = 0
    }
    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word] += 1
        }
    }
    let sorted = Object.entries(words).sort((a,b)=> b[1] - a[1])
    for (const [key,value] of sorted) {
        console.log(`${key} - ${value}`)
    }
}

function countStringOccurences(sentence, word) {
    let count = 0
    let arr = sentence.split(' ')
    while (arr.includes(word)) {
        arr.splice(arr.indexOf(word),1)
        count++
    }
    console.log(count)
} countStringOccurences('softuni is great place for learning new programming languages',
'softuni'

)

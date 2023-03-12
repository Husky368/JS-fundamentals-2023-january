function stringSubstring(word, text) {
    text = text.toLowerCase().split(' ');
    for (const el of text) {
        if (el == word) {
            return console.log(word)
        }
    }
    console.log(`${word} not found!`)
} stringSubstring('javascript',
    'JavaScript is the best programming language'
)

function censoredWord(sentence, censored) {
    while(sentence.includes(censored)){
        let res = sentence.replace(censored,('*').repeat(censored.length))
        sentence = res
    }
    console.log(sentence)
} censoredWord('Find the hidden word hidden', 'hidden')

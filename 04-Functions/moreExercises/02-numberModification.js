function numberModification(input) {
    let number = input
    let average = 0
    findAverage(number)
    let overFive = false
    while (overFive == false) {
        if (average < 5) {
            appendNine(number)
        }
        findAverage(number)
        if (average>5){
            return console.log(number)
        }
    }
    function findAverage(inputForFindingAverage) {
        let sum = 0
        let string = inputForFindingAverage.toString()
        for (i = 0; i < string.length; i++) {
            let digit = Number(string[i])
            sum += digit
        }
        average = Number((sum / string.length).toFixed(2))
    }
    function appendNine(num) {
        let string = num.toString()
        string +='9'
        number = string
        return Number(number)
    }
} 

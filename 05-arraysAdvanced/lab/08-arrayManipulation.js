function arrayManipulation(declaration) {
    let arrayNumbers = declaration.shift().split(" ").map(Number)
    for (i = 0; i < declaration.length; i++) {
        let currentLine = declaration[i].split(' ')
        let operation = currentLine[0]
        let num = Number(currentLine[1])
        switch (operation) {
            case 'Add':
                arrayNumbers.push(num)
                break;
            case 'Remove':
                for (j = 0; j < arrayNumbers.length; j++) {
                    if(arrayNumbers[j]==num){
                        arrayNumbers.slice(arrayNumbers[j-1],arrayNumbers[j+1])
                    }
                }
                break;
            case 'RemoveAt':
                break;
            case 'Inser':
                break;
            default:
                break;
        }
    }
    // console.log(declarationg);

}

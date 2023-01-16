function arrayManipulator(arrayNumbers, commands) {
    for (i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' ')
        let operation = currentCommand[0]
        switch (operation) {
            case 'add':
                break;
            case 'addMany':
                break;
            case 'contains':
                break;
            case 'remove':
                break;
            case 'shift':
                break;
            case 'sumPairs':
                break;
                case 'print':
                    break;
        }
    }
    // 2 - length= 1
    // 3 - length = 2
    // 1  length = 3
    // 1 bezkrayno
} arrayManipulator(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
)

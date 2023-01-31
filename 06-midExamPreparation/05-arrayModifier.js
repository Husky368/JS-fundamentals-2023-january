function arrayModifier(input) {
    // •	"swap {index1} {index2}" takes two elements and swap their places.
    // •	"multiply {index1} {index2}" takes element at the 1st index and multiply 
    //       it with the element at 2nd index. Save the product at the 1st index.
    // •	"decrease" decreases all elements in the array with 1.
    let array = input.shift().split(' ').map(Number)
    let command = input.shift().split(' ')
    let mIndex = 1
    while (command[0] != 'end') {
        if (command[0] == 'swap') {
            let indexOne = Number(command[1])
            let indexTwo = Number(command[2])
            let secondNumber = Number(array[indexOne])
            array.splice(indexOne, 1, array[indexTwo])
            array.splice(indexTwo, 1, secondNumber)
            //23 87 321 -2 42 90 -123
            //23 87 321 -123 42 90 -2
            //87 23 321 -123 42 90 -2
        }
        else if (command[0] == 'multiply') {
            let result = Number(array[command[1]]) * Number(array[command[2]])
            for (i = array.length - 1; i >= 1; i--) {
                array[i + 1] = array[i]
            }
            array.splice(mIndex, 1, result)
            mIndex++
            //87 7383 321 -123 42 290 -2
            //87 7383 2369943 -123 42 90 -2
        }
        else {
            for (i = 0; i < array.length; i++) {
                array[i] -=1
            }
        }
        command = input.shift().split(' ')
    }
    console.log(array.join(', '))
} arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
)
//86, 7382, 2369942, -124, 41, 89, -3

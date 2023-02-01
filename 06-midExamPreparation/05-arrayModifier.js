function modifyArray(input) {
    const inputArray = input
    let array = inputArray[0].split(' ').map(Number);
  
    for (let i = 1; i < inputArray.length; i++) {
      const command = inputArray[i].split(' ');
      if (command[0] === 'end') {
        break;
      }
      switch (command[0]) {
        case 'swap':
          const temp = array[command[1]];
          array[command[1]] = array[command[2]];
          array[command[2]] = temp;
          break;
        case 'multiply':
          array[command[1]] *= array[command[2]];
          break;
        case 'decrease':
          array = array.map(x => x - 1);
          break;
      }
    }
    console.log(array.join(', '))
  }

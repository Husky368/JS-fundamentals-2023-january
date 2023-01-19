function computerStore(input) {
    let total = 0;
    let finalTotal = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            total += Number(input[i]);
        } else if (input[i] < 0) {
            console.log('Invalid price!')
        }
        if (input[i] === 'special') {
            finalTotal = (total + (total * 0.2)) * 0.9;
        } else if (input[i] === 'regular') {
            finalTotal = total + (total * 0.2)
        }
    }
    if (total > 0) {
        console.log(`Congratulations you\'ve just bought a new computer!`)
        console.log(`Price without taxes: ${total.toFixed(2)}$`);
        console.log(`Taxes: ${(total * 0.2).toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${finalTotal.toFixed(2)}$`)
    } else if (total <= 0) {
        console.log('Invalid order!')
    }
 
}

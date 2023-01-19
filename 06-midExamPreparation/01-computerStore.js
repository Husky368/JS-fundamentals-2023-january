function computerStore(declaration) {
    let sum = 0
    let taxes = 0
    let times = 0
    for (i = 0; i < declaration.length; i++) {
        let current = declaration[i]
        times++
        if (current == 'special' || current == 'regular') {
            if(times==1){
                console.log('Invalid order!');
                break;
            }
            if(current=='special'){
                console.log("Congratulations you've just bought a new computer!")
                console.log(`Price without taxes: ${(sum).toFixed(2)}$`)
                console.log(`Taxes: ${taxes.toFixed(2)}$`)
                console.log(`-----------`)
                console.log(`Total price: ${((taxes + sum) * 0.9).toFixed(2)}$`)
                break;
            }
            else{
                console.log("Congratulations you've just bought a new computer!")
                console.log(`Price without taxes: ${(sum).toFixed(2)}$`)
                console.log(`Taxes: ${taxes.toFixed(2)}$`)
                console.log(`-----------`)
                console.log(`Total price: ${(taxes + sum).toFixed(2)}$`)
                break;
            }
        }
        current = Number(current)
        if (current <= 0) {
            console.log('Invalid price!');
            continue;
        }
        taxes += current * 0.2
        sum += current
    }
}

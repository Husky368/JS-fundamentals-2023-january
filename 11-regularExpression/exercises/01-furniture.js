
function furniture(inputArr) {
    let regex = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let totalPrice = 0;
    console.log('Bought furniture:')
    for (let line of inputArr) {
        if (line == 'Purchase') {
            break;
        }
        if (regex.test(line)) {
            let info = regex.exec(line);
            let furniturePrice = Number(info.groups.price) * Number(info.groups.quantity)
            totalPrice += furniturePrice;
            console.log(info.groups.name)
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
} furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']

)

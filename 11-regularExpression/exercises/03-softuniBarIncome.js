function softuniBarIncome(input) {
    let regex = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+.?\d*)\$/;
    let totalPrice = 0;
    for (let line of input) {
        if (line === 'end of shift') {
            break;
        }
        if (regex.test(line)) {
            let info = regex.exec(line);
            let price = Number(info.groups.count) * Number(info.groups.price)
            totalPrice += price;
            console.log(`${info.groups.name}: ${info.groups.product} - ${price.toFixed(2)}`)
        }
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`)
} softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])

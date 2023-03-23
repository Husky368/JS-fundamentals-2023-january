function needForSpeed(input) {
    let n = Number(input.shift());
    let carsArr = [];
    while (n > 0) {
        let line = input.shift();
        let [model, miliage, fuel] = line.split('|');
        carsArr.push(model, [miliage, fuel]);
        n--;
    }
    for (let line of input) {
        let [command,model]
    }
} needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'])

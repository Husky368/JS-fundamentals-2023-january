function needForSpeed(input) {
    let n = Number(input.shift());
    let carsMap = new Map();
    //model, [miliage[0],fuel[1]]
    while (n > 0) {
        let line = input.shift();
        let [model, miliage, fuel] = line.split('|');
        carsMap.set(model, [Number(miliage), Number(fuel)]);
        n--;
    }
    for (let line of input) {
        let info = line.split(' : ');
        let command = info.shift();
        switch (command) {
            case 'Drive':
                //"Not enough fuel to make that ride"
                //"{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
                let searchingModelDrive = info.shift();
                let searchingDistanceDrive = Number(info.shift());
                let searchingFuelDrive = Number(info.shift());
                let currentDrive = carsMap.get(searchingModelDrive);
                if (currentDrive[1] >= searchingFuelDrive) {
                    console.log(`${searchingModelDrive} driven for ${searchingDistanceDrive} kilometers. ${searchingFuelDrive} liters of fuel consumed.`);
                    currentDrive[0] += searchingDistanceDrive;
                    currentDrive[1] -= searchingFuelDrive;
                    carsMap.set(searchingModelDrive, currentDrive)
                    if (currentDrive[0] >= 100000) {
                        console.log(`Time to sell the ${searchingModelDrive}!`);
                        carsMap.delete(searchingModelDrive);
                        continue;
                    }

                } else {
                    console.log(`Not enough fuel to make that ride`)
                }
                break;
            case 'Refuel':
                let refuelCarModel = info.shift();
                let refuelLitters = Number(info.shift());
                let currentRefuel = carsMap.get(refuelCarModel);
                let beginingLitters = currentRefuel[1];
                let littersFilled = refuelLitters + currentRefuel[1];
                if (littersFilled > 75) {
                    littersFilled = 75;
                }
                currentRefuel[1] = littersFilled;
                littersFilled -= beginingLitters;
                carsMap.set(refuelCarModel, currentRefuel)
                console.log(`${refuelCarModel} refueled with ${littersFilled} liters`);
                break;
            case 'Revert':
                //"{car} mileage decreased by {amount reverted} kilometers"
                let revertCarModel = info.shift();
                let revertKm = Number(info.shift());
                let currentRevert = carsMap.get(revertCarModel);
                currentRevert[0] -= revertKm;
                if (currentRevert[0] < 10000) {
                    currentRevert[0] = 10000;
                    carsMap.set(revertCarModel, currentRevert);
                    continue;
                }
                carsMap.set(revertCarModel, currentRevert);
                console.log(`${revertCarModel} mileage decreased by ${revertKm} kilometers`)
                break;
            case 'Stop':
                let carsArr = Array.from(carsMap);
                for (const line of carsArr) {
                    console.log(`${line[0]} -> Mileage: ${line[1][0]} kms, Fuel in the tank: ${line[1][1]} lt.`)
                }
                break;
        }
    }
}

function travelTime(input) {
    let destinations = new Map();
    for (let line of input) {
        let [country, city, cost] = line.split(' > ');
        if (!destinations.has(country)) {
            destinations.set(country, new Map());
        }
        destinations.get(country).set(city, Number(cost));
    }
    let arrDestinations = Array.from(destinations);
    arrDestinations = arrDestinations.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [countryName, value] of arrDestinations) {
        let arrValue = Array.from(value)
        if (arrValue.length > 1) {
            let resLine = countryName + ' ->';
            arrValue = arrValue.sort((a, b) => a[1] - b[1]);
            for (const cityName of arrValue) {
                resLine += ' ' + cityName[0] + ' -> ' + cityName[1]
            }
            console.log(resLine);
            continue;
        }
        console.log(`${countryName} -> ${arrValue[0][0]} -> ${arrValue[0][1]}`)
    }
} travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    )

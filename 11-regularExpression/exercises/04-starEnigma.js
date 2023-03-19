function starEnigma(input) {
    let stringsCount = Number(input.shift());
    let decriptedStrings = [];
    let starArr = ['s', 't', 'a', 'r', 'S', 'T', 'A', 'R'];
    for (let el of input) {
        let counterOfSTAR = 0;
        el = el.split('');
        el.forEach(element => {
            if (starArr.includes(element)) {
                counterOfSTAR++
            }
        });
        let decripted = '';
        for (let letter of el) {
            let letterIndex = letter.charCodeAt();
            let rightLetter = String.fromCharCode(letterIndex - counterOfSTAR)
            decripted += rightLetter;
        }
        decriptedStrings.push(decripted)
    }
    let regex = /[A-Za-z0-9]*@(?<name>[A-Za-z]+)[A-Za-z0-9]*:[A-Za-z0-9]*(?<population>[A-Za-z0-9]*)[A-Za-z0-9]*![A-Za-z0-9]*(?<attackType>[A,D])[A-Za-z0-9]*!->(?<soldiorCount>[0-9]+)/;
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let string of decriptedStrings) {
        if (regex.test(string)) {
            let info = regex.exec(string);
            if (info.groups.attackType == 'A') {
                attackedPlanets.push(info.groups.name)
            } else {
                destroyedPlanets.push(info.groups.name)
            }
        }
    }
    attackedPlanets = attackedPlanets.sort((a,b) => a.localeCompare(b));
    destroyedPlanets = destroyedPlanets.sort((a,b) => a.localeCompare(b));
    //output
    console.log(`Attacked planets: ${attackedPlanets.length}`)
    attackedPlanets.forEach(element => {
        console.log(`-> ${element}`)
    });
    console.log(`Destroyed planets: ${destroyedPlanets.length}`)
    destroyedPlanets.forEach(element => {
        console.log(`-> ${element}`)
    });
}

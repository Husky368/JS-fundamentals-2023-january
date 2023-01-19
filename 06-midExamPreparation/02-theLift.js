function theLift(declaration) {
    let tourists = Number(declaration[0]);
    let wagonNumbers = declaration[1].split(" ").map(Number);
    for (let i = 0; i < wagonNumbers.length; i++) {
        if (wagonNumbers[i] < 4) {
            if (tourists >= 4 - wagonNumbers[i]) {
                tourists -= 4 - wagonNumbers[i];
                wagonNumbers[i] = 4;
            } else {
                wagonNumbers[i] += tourists;
                tourists = 0;
            }
        }
    }
    let isNotFull = false;
    for (let i = 0; i < wagonNumbers.length; i++) {
        const curWagon = wagonNumbers[i];
        if (curWagon < 4) {
            isNotFull = true;
        }
    }
    if (!isNotFull && tourists > 0) {
        console.log(`There isn't enough space! ${tourists} people in a queue!`);
    }
    if (isNotFull && tourists == 0) {
        console.log(`The lift has empty spots!`);
    }
    console.log(wagonNumbers.join(' '));
}

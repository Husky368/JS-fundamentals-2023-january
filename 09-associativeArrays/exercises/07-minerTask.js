function minerTask(declaration) {
    let minerMap = new Map();
    let lastValue = "";
    for (let i = 0; i < declaration.length; i ++) {
        if (i % 2 == 0) {
            lastValue = declaration[i];
        }
        else{
            if(minerMap.has(lastValue)){
                // let currValue = minerMap.get(lastValue)+Number(declaration[i])
                minerMap.set(lastValue,minerMap.get(lastValue)+Number(declaration[i]))
            }else{
                minerMap.set(lastValue, Number(declaration[i]))
            }
        }
    }
    for (const [key, value] of minerMap) {
        console.log(`${key} -> ${value}`)
    }
}

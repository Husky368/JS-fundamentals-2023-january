function piccolo(input) {
 
    let parking = new Set();
 
    for (let el of input) {
        let arr = el.split(`, `)
        if (arr[0] === `IN`) {
            if (!parking.has(arr[1])) {
                parking.add(arr[1]);
            }
        } else {
            parking.delete(arr[1])
        }
 
    }
 
    let sorted = Array.from(parking).sort((a, b) => a.localeCompare(b));
 
    if (sorted.length === 0) {
        console.log(`Parking Lot is Empty`)
    } else {
        for (let el of sorted) {
            console.log(el)
        }
    }
 
 
 
 
}

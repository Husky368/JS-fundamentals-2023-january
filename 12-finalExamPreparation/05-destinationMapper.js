function destinationMapper(input) {
    let pattern = new RegExp(/([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/,'g');
    let lengthSum = 0;
    let trip = [];
    let info = input.match(pattern);
    if(info!=null){
        for (let ell of info) {
            lengthSum += ell.length-2;
            ell = ell.split('');
            ell.splice(0,1);
            ell.splice(ell.length-1,1);
            ell = ell.join('');
            trip.push(ell);
        }
    }
    console.log(`Destinations: ${trip.join(', ')}`);
    console.log(`Travel Points: ${lengthSum}`)
} 

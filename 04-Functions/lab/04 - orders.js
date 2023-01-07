function orders(text, times){
    //•	coffee - 1.50
    //•	water - 1.00
    //•	coke - 1.40
    //•	snacks - 2.00
    let price = 0
    if(text=="coffee"){
        price = 1.5
    }
    else if(text=="water"){
        price = 1
    }
    else if(text=="coke"){
        price= 1.4
    }
    else {
        price = 2
    }
    let result = price * times
    console.log(`${result.toFixed(2)}`);
}

function stockProvision(inStock, products) {
    let myMarket = {};
    for (i = 0; i < inStock.length; i += 2) {
        let name = inStock[i]
        let quantity = Number(inStock[i + 1])
        myMarket[name] = quantity
    }
    for (i = 0; i < products.length; i += 2) {
        let name = products[i]
        let quantity = Number(products[i + 1])
        if (myMarket.hasOwnProperty(name)) {
            myMarket[name] += quantity
            continue
        }
        myMarket[name] = quantity
    }
    for (let product of Object.keys(myMarket)) {
        console.log(`${product} -> ${myMarket[product]} `)
        
    }
}

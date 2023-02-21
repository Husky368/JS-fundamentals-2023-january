function city(declaration){
    for (const keys of Object.keys(declaration)) {
        console.log(`${keys} -> ${declaration[keys]}`)
    }
}

function convertToObject(data){
    let info = JSON.parse(data)
    for (const keys of Object.keys(info)) {
        console.log(`${keys}: ${info[keys]}`)
    }
}

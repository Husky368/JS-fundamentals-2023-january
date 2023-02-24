function towns(declaration) {
    for (let input of declaration) {
        let [town, latitude, longitude] = input.split(' | ')
        latitude = Number(latitude)
        longitude = Number(longitude)
        let townInfo = {
            town: town,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2),
        };  
        console.log(townInfo)
    }
}

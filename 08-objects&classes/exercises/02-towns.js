function towns(declaration) {
    //3 columns "Town", "Latitude" and "Longitude". 
    for (let input of declaration) {
        let [town, Latitude, Longitude] = input.split(' | ')
        let townInfo = {
            town: town,
            Latitude: Latitude,
            Longitude: Longitude,
        };  
        console.log(JSON.stringify(town))
    }
} towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])

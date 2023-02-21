function convertToJSON(first,second,hair){
    let info = {
        name: first,
        lastName: second,
        hairColor: hair,
    }
    console.log(JSON.stringify(info))
}

function addAstra(text){
    let regex = /([#|])(?<product>[A-Za-z ]+)\1(?<expiration>([0-9\/]+))\1(?<calories>[0-9]+)\1/g;
    let matches = text[0].match(regex);
    let totalCalories = 0;
    let allProducts = [];
    for (let match of matches) {
        match = match.split(match[0]);
        totalCalories += Number(match[3]);
        match = [match[1],match[2],match[3]];
        allProducts.push(match)
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories/2000)} days!`)
    for (const data of allProducts) {
        console.log(`Item: ${data[0]}, Best before: ${data[1]}, Nutrition: ${data[2]}`)
    }
}addAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])

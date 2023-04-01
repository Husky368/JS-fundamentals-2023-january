function addAstra(text) {
    let regex = /([#|])(?<food>[A-Za-z ]+)\1(?<data>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<cal>[0-9]+)\1/gm
    let matches = text[0].match(regex);
    if (matches == null) {
        return console.log("You have food to last you for: 0 days!")
    }
    let totalCalories = 0;
    let allProducts = [];
    for (let match of matches) {
        match = match.split(match[0]);
        totalCalories += Number(match[3]);
        match = [match[1], match[2], match[3]];
        allProducts.push(match)
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`)
    for (const data of allProducts) {
        console.log(`Item: ${data[0]}, Best before: ${data[1]}, Nutrition: ${data[2]}`)
    }
} addAstra(['$$#@@%^&#Fish#24 /12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/1 0/21#9000#^#@aswe|Milk|05/ 09/20|2000|']
)

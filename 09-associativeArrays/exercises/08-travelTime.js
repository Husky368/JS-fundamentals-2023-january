function travelTime(declaration) {
    let destinations = new Map();
    for (let destination of declaration) {
        let [country, city, cost] = destination.split(' > ')
        if (!destinations.has(country)) {
            if (destinations[city].has(country)) {
                destinations[country].add(cost)
            }else{
                destinations.set(city, new Set())
                destination.set(city,country)
            }
        } else {

        }
    }
} travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"])

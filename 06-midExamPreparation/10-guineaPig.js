function guineaPig(declaration) {
    declaration = declaration.map(Number)
    let food = declaration.shift() * 1000
    let hay = declaration.shift() * 1000
    let cover = declaration.shift() * 1000
    let weight = declaration.shift() * 1000
    // day Puppy eats 300 gr of food. Every second day Merry first feeds the pet,
    // then gives it a certain amount of hay equal to 5% of the rest of the food. 
    //On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.
    let day = 0
    let enoghtSuplly = true
    while (enoghtSuplly) {
        day++
        food -= 300
        if (day % 2 == 0 && day != 0) {
            hay -= food * 0.05
        }
        if (day % 3 == 0 && day != 0) {
            cover -= weight / 3
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            return console.log("Merry must go to the pet store!")
        }
        if (day == 30) {
            return console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`)
        }
    }
}

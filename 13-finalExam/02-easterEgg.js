function easterEgg(input){
    let string = input.shift();
    let pattern = new RegExp('[@#]+(?<color>[a-z]{3,})[@#]+[^a-zA-Z0-9]*\/(?<count>[0-9]+)\/+','g')
    let regex = /[@#]+(?<color>[a-z]{3,})[@#]+[^a-zA-Z0-9]*\/(?<count>[0-9]+)\/+/;
    let matches = string.match(pattern)
    for (const match of matches) {
        let info = regex.exec(match);
        let color = info.groups.color;
        let count = info.groups.count;
        console.log(`You found ${count} ${color} eggs!`)
    }
}easterEgg(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])

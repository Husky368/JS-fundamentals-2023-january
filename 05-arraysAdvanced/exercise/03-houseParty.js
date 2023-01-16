function houseParty(declaration){
    let guestList = []
    for (let el of declaration) {
        let command = el.split(' ')
        if(command.length==3){
            if(guestList.includes(command[0])){
                console.log(`${command[0]} is already in the list!`);
            }
            else{
                guestList.push(command[0])
            }
        }
        else{
            if(guestList.includes(command[0])){
                let index = guestList.indexOf(command[0])
                guestList.splice(index,1)
            }
            else{
                console.log(`${command[0]} is not in the list!`)
            }
        }
    }
    console.log(guestList.join("\n"))
}

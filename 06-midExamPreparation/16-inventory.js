function inventory(declaration) {
    let inventory = declaration.shift()
    inventory = inventory.split(', ')
    while (declaration.length > 0) {
        let command = declaration.shift()
        if (command == 'Craft!') {
            return console.log(inventory.join(', '))
        }
        command = command.split(' - ')
        let action = command[0]
        let item = command[1]
        switch (action) {
            case 'Collect':
                if (!inventory.includes(item)) {
                    inventory.push(item)
                }
                break;
            case 'Drop':
                if (inventory.includes(item)) {
                    let dropIndex = inventory.findIndex(a => a == item)
                    inventory.splice(dropIndex, 1)
                }
                break;
            case 'Combine Items':
                let currentItems = item.split(':')
                if (inventory.includes(currentItems[0])) {
                    let combineIndex = inventory.findIndex(a => a == currentItems[0])
                    inventory.splice(combineIndex, 1, currentItems[0], currentItems[1])
                }
                break;
            case 'Renew':
                if (inventory.includes(item)) {
                    let renewIndex = inventory.findIndex(a => a == item)
                    inventory.splice(renewIndex,1)
                    inventory.push(item)
                }
                break;
            default:
                break;
        }
    }
}

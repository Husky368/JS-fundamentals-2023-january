function shopingList(declaration) {
    let list = declaration.shift().split('!')
    for (i = 0; i < declaration.length; i++) {
        let command = declaration[i].split(' ')
        if (command[0] == 'Go') {
            return console.log(list.join(', '))
        }
        let action = command[0]
        let item = command[1]
        switch (action) {
            case "Urgent":
                //- add the item at the start of the list.  If the item already exists, skip this command.
                if (!list.includes(item)) {
                    let arr = []
                    let firstTime = false
                    for (p = 0; p < list.length; p++) {
                        if (firstTime) {
                            arr.push(list[p])
                            continue
                        }
                        p--
                        firstTime = true
                        arr.push(item)
                    }
                    list = arr
                    console.log(list.join(' '))
                }
                break;
            case "Unnecessary":
                //remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
                if (list.includes(item)) {
                    let arr1 = []
                    for (y = 0; y < list.length; y++) {
                        if (list[y] != item) {
                            arr1.push(list[y])
                        }
                    }
                    list = arr1
                }
                break;
            case "Correct":
                //if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
                let newItem = command[2]
                if (list.includes(item)) {
                    let arr2 = []
                    for (l = 0; l < list.length; l++) {
                        if (list[l] == item) {
                            arr2.push(newItem)
                            continue
                        }
                        arr2.push(list[l])
                    }
                    list = arr2
                }
                break;
            case "Rearrange":
                let arr3 = []
                if (list.includes(item)) {
                    for (k = 0; k < list.length; k++) {
                        if (list[k] != item) {
                            arr3.push(list[k])
                        }
                    }
                    arr3.push(item)
                    list = arr3
                }
                break;
        }
    }
}


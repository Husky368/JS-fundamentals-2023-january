function tseamAccount(array) {
    let games = array.shift().split(' ')
    for (i = 0; i <= array.length-1; i++) {
        let line = array[i].split(' ')
        let opperation = line[0]
        let gameName = line[1]
        switch (opperation) {
            case "Install":
                let installed = false
                for (const el of games) {
                    if (gameName == el) {
                        installed = true
                        break;
                    }
                }
                if (!installed) {
                    games.push(gameName)
                }
                break;
                //cs wow diablo lol
            case "Uninstall":
                let exist1 = false
                for (const el of games) {
                    if (gameName == el) {
                        let index = games.indexOf(el)
                        games.splice(index, 1)
                        break;
                    }
                }
                break;
                //cs diablo lol
            case "Update":
                for (const el of games) {
                    if (gameName == el) {
                        let index = games.indexOf(el)
                        games.splice(index, 1)
                        games.push(el)
                        break;
                    }
                }
                //cs lol diablo
                //cs csgo lol diablo
                break;
            case "Expansion":
                let name = gameName.split('-')
                let exist2 = false
                let index
                for (const el of games) {
                    if (el == name[0]) {
                        index = games.indexOf(el)
                        exist2 = true
                        break;
                    }
                }
                if (exist2) {
                    for (k = games.length - 1; k >= Number(index); k--) {
                        games[k + 1] = games[k]
                    }
                    games[index + 1] = name[0]+':'+name[1]
                }
                break;
            default:
                console.log(games.join(' '))
                break;
        }
    }
}

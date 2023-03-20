function thePianist(input) {
    let n = Number(input.shift());
    let album = new Map();
    for (let index = 0; index < n; index++) {
        let ellement = input.shift().split('|');
        album.set(ellement[0], [ellement[1], ellement[2]]);
    }
    for (let ell of input) {
        ell = ell.split('|');
        let operation = ell.shift();
        if (operation == 'Add') {
            // •	"Add|{piece}|{composer}|{key}":
            // o	You need to add the given piece with the information about it to the other pieces and print:
            // "{piece} by {composer} in {key} added to the collection!"
            // o	If the piece is already in the collection, print:
            // "{piece} is already in the collection!"
            let piece = ell.shift();
            if (album.has(piece)) {
                console.log(`${piece} is already in the collection!`)
            } else {
                let composer = ell.shift();
                let key = ell.shift();
                album.set(piece, [composer, key]);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        }
        else if (operation == 'Remove') {
            // •	"Remove|{piece}":
            // o	If the piece is in the collection, remove it and print:
            // "Successfully removed {piece}!"
            // o	Otherwise, print:
            // "Invalid operation! {piece} does not exist in the collection."
            let piece = ell.shift();
            if (album.has(piece)) {
                album.delete(piece);
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        else if (operation == 'ChangeKey') {
            // •	"ChangeKey|{piece}|{new key}":
            // o	If the piece is in the collection, change its key with the given one and print:
            // "Changed the key of {piece} to {new key}!"
            // o	Otherwise, print:
            // "Invalid operation! {piece} does not exist in the collection."
            let piece = ell.shift();
            if (album.has(piece)) {
                let newKey = ell.shift();
                let arr = album.get(piece);
                arr[1] = newKey;
                album.set(piece, arr)
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        else {
            // Upon receiving the "Stop" command, you need to print all pieces in your collection in the following format:
            // "{Piece} -> Composer: {composer}, Key: {key}"   
            let arrAlbum = Array.from(album);
            for (let music of album) {
                let piece = music[0];
                let [composer,key] = music[1];
                console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
            }
            break;
        }
    }
} thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'])
    // Spring by Vivaldi in E Major added to the collection!
    // Successfully removed The Marriage of Figaro!
    // Invalid operation! Turkish March does not exist in the collection.
    // Changed the key of Spring to C Major!
    // Nocturne by Chopin in C# Minor added to the collection!
    // Eine kleine Nachtmusik -> Composer: Mozart, Key: G Major
    // La Campanella -> Composer: Liszt, Key: G# Minor
    // Hungarian Dance No.5 -> Composer: Brahms, Key: G Minor
    // Spring -> Composer: Vivaldi, Key: C Major
    // Nocturne -> Composer: Chopin, Key: C# Minor  

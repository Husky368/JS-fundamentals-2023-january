function listOfProducts(array) {
    array.sort((a, b) => a.localeCompare(b))
    for (i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${array[i]}`);
    }
}

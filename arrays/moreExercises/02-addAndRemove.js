function addRemove(input) {
    let currentNum = 1;
    let array = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "add") {
            array.push(currentNum);
        } else if (input[i] === "remove" && array.length > 0) {
            array.pop();
        }
        currentNum++;
    }
    console.log(array.length ? array.join(" ") : "Empty");
}

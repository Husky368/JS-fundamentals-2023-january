function worldTour(input) {
    //  After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"
    let tripPlan = input.shift();
    for (let ellement of input) {
        ellement = ellement.split(':');
        let command = ellement.shift();
        if (command == 'Add Stop') {
            // •	"Add Stop:{index}:{string}":
            // o	Insert the given string at that index only if the index is valid
            let indexAddStop = Number(ellement.shift());
            let stringAddStop = ellement.shift();
            tripPlan = tripPlan.split('');
            if (indexAddStop >= 0 && indexAddStop < tripPlan.length) {
                tripPlan.splice(indexAddStop, 0, stringAddStop)
            }
            tripPlan = tripPlan.join('');
            console.log(tripPlan)
        }
        else if (command == 'Remove Stop') {
            // •	"Remove Stop:{start_index}:{end_index}":
            // o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
            let startIndex = Number(ellement.shift());
            let endIndex = Number(ellement.shift());
            if (startIndex >= 0 && endIndex < tripPlan.length) {
                let cutCount = endIndex - startIndex + 1;
                tripPlan = tripPlan.split('');
                tripPlan.splice(startIndex, cutCount);
                tripPlan = tripPlan.join('');
            }
            console.log(tripPlan);
        }
        else if (command == 'Switch') {
            // •	"Switch:{old_string}:{new_string}":
            // o	If the old string is in the initial string, replace it with the new one (all occurrences)
            let oldString = ellement.shift();
            let newString = ellement.shift();
            if (tripPlan.includes(oldString)) {
                tripPlan = tripPlan.replace(oldString, newString);
            }
            console.log(tripPlan);
        }
        else {
            break;
        }
    }
    console.log(`Ready for world tour! Planned stops: ${tripPlan}`)
} worldTour
    (["Hawai::Cyprys-Greece",
        "Add Stop:7:Rome",
        "Remove Stop:11:16",
        "Switch:Hawai:Bulgaria",
        "Travel"])

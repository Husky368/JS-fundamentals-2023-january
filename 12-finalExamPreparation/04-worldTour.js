function worldTour(input) {
    //  After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"
    let tripPlan = input.shift();
    for (let ellement of input) {
        ellement = ellement.split(':');
        if (ellement[0] == 'Add Stop') {
            // •	"Add Stop:{index}:{string}":
            // o	Insert the given string at that index only if the index is valid
            if (Number(ellement[1]) >= 0 && Number(ellement[1]) < tripPlan.length) {
                let indexAdd = Number(ellement[1]);
                let newWordAdd = '';
                let count = 0;
                tripPlan.split('').forEach((letter) => {
                    if (count == indexAdd) {
                        newWordAdd += ellement[2] + letter;
                    } else {
                        newWordAdd += letter
                    }
                    count++;
                });
                tripPlan = newWordAdd;
                console.log(tripPlan)
            }
        }
        else if (ellement[0] == 'Remove Stop') {
            // •	"Remove Stop:{start_index}:{end_index}":
            // o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
            if (Number(ellement[1]) >= 0 && Number(ellement[2]) < tripPlan.length) {
                let startIndex = Number(ellement[1]);
                let endIndex = Number(ellement[2])
                let countLetters = Number(ellement[2]) - Number(ellement[1]);
                tripPlan = tripPlan.split('');
                tripPlan.splice(startIndex, countLetters);
                tripPlan = tripPlan.join('');
            }
            console.log(tripPlan);
        }
        else {
            // •	"Switch:{old_string}:{new_string}":
            // o	If the old string is in the initial string, replace it with the new one (all occurrences)
            if(/ellement[2]/.test(tripPlan)){
                console.log('2')
            }
        }
    }
    
} worldTour(
    (["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]))

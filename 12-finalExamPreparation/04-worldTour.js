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
                let endIndex = Number(ellement[2]);
                let countLetters = Number(ellement[2]) - Number(ellement[1]);
                tripPlan = tripPlan.split('');
                tripPlan.splice(startIndex, countLetters+1);
                tripPlan = tripPlan.join('');
            }
            console.log(tripPlan);
        }
        else if (ellement[0] == 'Switch') {
            // •	"Switch:{old_string}:{new_string}":
            // o	If the old string is in the initial string, replace it with the new one (all occurrences)
            let oldWordSwitch = ellement[1];
            let newWordSwitch = ellement[2];
            let regex = new RegExp(oldWordSwitch)
            while (regex.test(tripPlan)) {
                let info = regex.exec(tripPlan);
                // tripPlan.slice(info.index,info.index+oldWordSwitch.length)
                tripPlan = tripPlan.split('');
                tripPlan.splice(info.index, info.index + oldWordSwitch.length,newWordSwitch);
                tripPlan = tripPlan.join('');
            }
            console.log(tripPlan)
        }
        else{
            console.log(`Ready for world tour! Planned stops: ${tripPlan}`)
            break;
        }
    }

} worldTour
    ((["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
    )

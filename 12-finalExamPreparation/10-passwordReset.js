function paswordReset(input) {
    let password = input.shift();
    for (let info of input) {
        info = info.split(' ');
        let command = info.shift();
        switch (command) {
            case 'TakeOdd':
                let newPassword = '';
                for (let index = 0; index < password.length; index++) {
                    if (index % 2 == 1) {
                        newPassword += password[index];
                    }
                }
                password = newPassword;
                console.log(password)
                break;
            case 'Cut':
                //  •	"Cut {index} {length}"
                // o	Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
                // o	The given index and the length will always be valid.
                let indexCut = Number(info.shift());
                let lengthCut = Number(info.shift());
                let cutWord = password.substring(indexCut, indexCut + lengthCut)
                let getIndex = password.indexOf(cutWord);
                password = password.split('');
                password.splice(getIndex, lengthCut)
                password = password.join('');
                console.log(password)
                break;
            case 'Substitute':
                let search = info.shift();
                let replace = info.shift();
                if (password.includes(search)) {
                    while(password.includes(search)){
                        password = password.replace(search, replace);
                    }
                    console.log(password)
                } else {
                    console.log('Nothing to replace!')
                }
                break;
            case 'Done':
                return console.log(`Your password is: ${password}`)

            default:
                break;
        }
    }
} paswordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]
)

function employees(declaration) {
    for (let name of declaration) {
        let n = name.length
        let newEmployee = {
            employeeName: name,
            personalNum: n,
        }
        console.log(`Name: ${newEmployee.employeeName} -- Personal Number: ${newEmployee.personalNum}`)
    }
}

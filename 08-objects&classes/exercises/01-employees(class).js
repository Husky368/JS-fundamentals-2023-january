function employees(declaration) {
    class employee {
        constructor(name, number) {
            this.employeeName = name
            this.personalNum = number
        }
        printing() {
            console.log(`Name: ${this.employeeName} -- Personal Number: ${this.personalNum}`)
        }
    }
    for (let currEmployee of declaration) {
        let personNum = currEmployee.length
        let newEmpl = new employee(currEmployee, personNum)
        newEmpl.printing()
    }
}

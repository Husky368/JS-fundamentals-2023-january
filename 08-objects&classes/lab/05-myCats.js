function myCats(input) {
    class cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for(let catInfo of input){
        let [name,age] = catInfo.split(" ")
        let newCat = new cat(name,age)
        newCat.meow()
    }
}           

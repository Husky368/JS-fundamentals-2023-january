function primeNumChecher(num) {
    let prime = true
    for (i = 2; i <= 9; i++) {
        if(num%i==0&&i!=num){
            prime = false
            break;
        }
    }
    console.log(prime);
}

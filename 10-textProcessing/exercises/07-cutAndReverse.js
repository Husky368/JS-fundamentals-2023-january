function cutAndReverse(string){
    let firstHalf = string.substring(0,string.length/2).split('').reverse().join('');
    let secondHalf = string.substring(string.length/2).split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);
}cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')

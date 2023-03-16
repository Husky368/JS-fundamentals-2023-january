
function nameMatch(input){
    let regex =/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let res = input.match(regex);
    console.log(res.join(' '))
}nameMatch("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")

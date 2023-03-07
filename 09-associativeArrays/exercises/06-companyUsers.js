function companyUsers(declaration) {
    let companies = new Map();
    for (const line of declaration) {
        let [company, id] = line.split(' -> ');
        if (companies.has(company)) {
            companies.get(company).add(id)
        }else{
            companies.set(company, new Set());
            companies.get(company).add(id)
        }
    }
    let arr = Array.from(companies).sort((a,b) => a[0].localeCompare(b[0]))

    for (const companyInfo of arr) {
        // "{companyName} -> {employeeId}"
        let [name,ids] = companyInfo;
       console.log(name)
       for(let currentId of ids){
        console.log(`-- ${currentId}`)
       }
    }
}

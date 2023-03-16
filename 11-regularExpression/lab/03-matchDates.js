function matchDates(dates){
    let regex = /\d{2}([.\/-])[A-Z][a-z]+\1\d{4}/g;
    let resultArr = [];
    for(let el of dates){
        let curRes = el.match(regex);
        resultArr = curRes;
    }
    // let result = dates.match(regex);
    for(let info of resultArr){
        let seperator = info[2]
        let [day,month,year] = info.split(info[2]);
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }
}matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])

function wordOccurrences(arr){
    let map = new Map ();
 
    for(let word of arr){
        let wordOccurrences = 1;
 
        if(map.has(word)){
            wordOccurrences += map.get(word);
        }
      
        map.set(word, wordOccurrences)
    }
  
    let sorted = Array.from(map);
    sorted.sort((a,b) => b[1] - a[1])
 
    for(let [word,words] of sorted){
        console.log((`${word} -> ${words} times`));
    } 
}

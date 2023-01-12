function lastKNumbersSequence(n, k) {
    let result = [1];
 
    for(let i=1; i<n; i++) {
        let startIndex = k> i? 0 : i-k
 
         let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
         result.push(currentElement);
    }
 
    console.log(result.join(" "));
 }

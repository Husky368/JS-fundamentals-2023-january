function smallestTwo(arr) {
    arr.sort((a,b) => a-b)
    let nums = arr.slice(0,2)
    console.log(nums.join(" "));
}

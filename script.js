
function spinWords(string){
    return string.split(" ").map(function (x){
        return x.length >= 5 ? x = x.split("").reverse().join("") : x = x
    }).join(" ")
}

console.log(spinWords("This is abcde test"));


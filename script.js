
function spinWords() {
    let x = document.getElementById("sentence").value
    let y = document.getElementById("limit").value
    document.getElementById("demo").innerHTML = 
    x.split(" ").map(function (z){
        return z = z.length >= y ? z = z.split("").reverse().join("") : z = z
    }).join(" ")
}




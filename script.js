
function spinWords() {
    let x = document.getElementById("sentence").value
    let y = document.getElementById("limit").value
    document.getElementById("demo").innerHTML = 
    x.split(" ").map(function (z){
        return z = z.length >= y ? z = z.split("").reverse().join("") : z = z
    }).join(" ")
}

function likes() {
    let friends = document.getElementById("friends").value.split(" ")
    document.getElementById("result").innerHTML = 
    friends.length === 1 ? friends[0] + " likes this" :
    friends.length === 2 ? friends[0] + " and " + friends[1] + " like this" :
    friends.length === 3 ? friends[0] + ", " + friends[1] + " and " + friends[2] + " like this" :
    friends[0] + ", " + friends[1] + " and " + (friends.length - 2) + " others like this"
}

function duplicateCount(){
    let copy = document.getElementById("copy").value.toLowerCase().split("")
    let duplicates = copy.filter((item,index)=>copy.indexOf(item)!==index)
    document.getElementById("result2").innerHTML = [...new Set(duplicates)].length
}

function createPhoneNumber(){
    let phone = document.getElementById("phone").value.split("")
    let format = "(xxx) xxx-xxxx"
    for (let i in phone){
        format = format.replace("x", phone[i])
    }
    document.getElementById("result3").innerHTML = format
}

function alphabetPosition() {
    let alpha = document.getElementById("alphabet").value
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    let final = alpha.toLowerCase().split(" ").join("").split("").map((x)=>x=alphabet.indexOf(x)+1)
    document.getElementById("result4").innerHTML = final.filter(x=>x!==0).join(" ")
}

function toCamelCase(){
    let camel = document.getElementById("camel").value
    let arr = camel.includes("-") ? camel.split("-") : camel.split("_")
    let final = arr.map(function (item, index){
        if (index !== 0){
            return item[0].toUpperCase() + item.slice(1)
        }
        return item
    })
    document.getElementById("result5").innerHTML = final.join("")
}

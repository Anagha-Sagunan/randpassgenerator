const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|",":",";","<",">","?","/"
]

let p1el=document.getElementById("p1")
let p2el=document.getElementById("p2")

let ranpass1 = ""
let ranpass2 = ""

function generate(){
for(let i=0;i<15;i++)
{
    let index1=Math.floor(Math.random()*87)
    let index2=Math.floor(Math.random()*87)


ranpass1 +=characters[index1]
ranpass2 +=characters[index2]
}
p1el.textContent=ranpass1
ranpass1=""

p2el.textContent=ranpass2
ranpass2=""
}

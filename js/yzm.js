var yzm = document.getElementById("yzm")
var sjyzm= function(){
    var codeLib = ["A", "B", "C", "E", "F", "G", "H", "I",'J',"K", "L", "M", "N","O", "P", "Q", "R", "S", "T","U","V", "W", "X", "Y","Z", "a", "b", "c", "d", "e", "f","g","h","i","j","k","l", "m", "n","o", "p", "r", "s", "t","u","v", "w", "x", "y", "z", "1","2","3", "4", "5", "6","7", "8","9","0"];
    console.log(codeLib.length)
    var a =Math.floor(Math.random()*60)
    var b =Math.floor(Math.random()*60)
    var c =Math.floor(Math.random()*60)
    var d =Math.floor(Math.random()*60)
    yzm.innerHTML = `${codeLib[a]}${codeLib[b]}${codeLib[c]}${codeLib[d]}`
}
sjyzm()
yzm.onclick = function(){
    sjyzm()
}
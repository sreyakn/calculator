const b =document.querySelector(".input")

function calculator(num){
    b.value+=num
}
function clearinput() {
    b.value=" ";
}
function result(){
    console.log("tick")
    b.value=eval(b.value)

}

function star(){
    b.value += "*";
}

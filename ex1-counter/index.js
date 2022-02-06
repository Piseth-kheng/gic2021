class Counter{
    number = 0;
    constructor(){
        document.getElementById("counter").innerHTML = localStorage.getItem("counter");
    }
    decrease(){
        return this.number -= 1;
    }
    increase(){
        return this.number += 1;
    }
    reset(){
        return this.number=0;
    }
}
var counter = new Counter();
if(localStorage.getItem("counter")==null){
    document.getElementById("counter").innerHTML = "0";
}
document.getElementById("decrease").addEventListener("click", decrease)
document.getElementById("reset").addEventListener("click", reset)
document.getElementById("increase").addEventListener("click", increase)

compare(document.getElementById("counter").innerHTML);

function increase(){
    localStorage.setItem("counter",counter.increase());
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
    compare(document.getElementById("counter").innerHTML);

}
function decrease(){
    localStorage.setItem("counter",counter.decrease());
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
    compare(document.getElementById("counter").innerHTML);
}
function reset(){
    localStorage.setItem("counter",counter.reset());
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
    compare(document.getElementById("counter").innerHTML);
}
function compare(cmp){
    if(cmp<"0"){
        document.getElementById("counter").style.color="red";
    }else if ( cmp=="0"){
        document.getElementById("counter").style.color="#241e4a";
    }else{
        document.getElementById("counter").style.color="green";
    }
}
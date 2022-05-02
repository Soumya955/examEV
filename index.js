// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",store1);
var data=(JSON.parse(localStorage.getItem("schedule")))||[];

function store1(){
   event.preventDefault();
    //console.log("jj")
    var i1=document.querySelectorAll("input")[0].value;
    var i2=document.querySelectorAll("select")[0].value;
    var i3=document.querySelectorAll("select")[1].value;
    var i4=document.querySelectorAll("input")[1].value;
    var i5=document.querySelectorAll("select")[2].value;

    var obj={
        matchNo:i1,
        teamA:i2,
        teamB:i3,
        date:i4,
        venue:i5
    }
    data.push(obj);

    localStorage.setItem("schedule",JSON.stringify(data));

}

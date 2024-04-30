const start=document.getElementById("start");
const next=document.getElementById("next");
const end1=document.getElementById("end1");
const one=document.getElementById("one");
const two=document.getElementById("head");
const new1=document.getElementById("three");
const b=document.body;
next.classList.add("hide");
end1.classList.add("hide");
one.classList.add("hide");
two.classList.add("hide");
new1.classList.add("hide");
start.addEventListener("click",begin);
next.addEventListener("click",go_on);
end1.addEventListener("click",termin);
new1.addEventListener("click",new_fn);
let no=1;
var type_1;
var type_2,cont;
var data=[];var count=1;var data1=" ";
function begin()
{
    start.classList.add("hide");
    t1.classList.add("hide");
    no=1;
    count=1;
    data=[];
    to_do();
}
function to_do(){
    const type_=document.createElement("div");
     type_1=document.createElement("h2"); 
    type_1.innerText="TASK"+no;
    if(count==1)
    {
    two.classList.remove("hide");
    }
    one.classList.remove("hide");
     cont=document.getElementById("task");
    cont.insertBefore(type_1,two);
    no++;
    next.classList.remove("hide");
    end1.classList.remove("hide");
    flag=1;
    count++;
}
function go_on()
{
    flag=0;
    data[no-2]=one.value;
    one.value=" ";
    two.classList.add("hide");
    cont.removeChild(type_1);
    to_do();
}
function termin()
{
    if(flag==1)
    {
    data[no-2]=one.value;
    }
    cont.removeChild(type_1);
    data1=data1+two.value+"\n"+"\n";
    for(var i=0;i<data.length;i++)
    {
        data1=" "+data1+data[i]+"\n"+"\n";
        t1.innerText=data1;
    }
      
      t1.classList.remove("hide");
      one.classList.add("hide");
      two.classList.add("hide");
      next.classList.add("hide");
      end1.classList.add("hide");
      t1.style.fontFamily= "Oswald, sans-serif";
      new1.classList.remove("hide");
      one.value=" ";
      two.value=" ";
    
}
function new_fn()
{
    begin();
    new1.classList.add("hide");
}
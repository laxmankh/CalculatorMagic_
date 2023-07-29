const scrn=document.getElementById("screen");
console.log(typeof (scrn.value))
function input(x)
{
    scrn.value+=x;
}
function allclear()
{
    scrn.value="";
}
function del()
{
    scrn.value=scrn.value.slice(0,-1);
}
function ans()
{
    try{
        scrn.value=eval(scrn.value)
    }catch{
        scrn.value="Error";
    }
}

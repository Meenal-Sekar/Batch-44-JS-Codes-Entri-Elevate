
//function definition
function addition()
{
    
    let a1=Number(document.getElementById('t1').value)
    let b1=Number(document.getElementById('t2').value)
    document.getElementById('t3').value=a1+b1;
}
function subtraction()
{
    let a1=document.getElementById('t1').value;
    let b1=document.getElementById('t2').value
    document.getElementById('t3').value=a1-b1;
}
function multi()
{
     let a1=document.getElementById('t1').value;
    let b1=document.getElementById('t2').value
    document.getElementById('t3').value=a1*b1;
}
function division()
{
      let a1=document.getElementById('t1').value;
    let b1=document.getElementById('t2').value
    document.getElementById('t3').value=a1/b1;
}
function mdivision()
{
     let a1=document.getElementById('t1').value;
    let b1=document.getElementById('t2').value
    document.getElementById('t3').value=a1%b1;
}

function Clear()
{
    document.getElementById('t1').value="";
    document.getElementById('t2').value="";
    document.getElementById('t3').value="";

}
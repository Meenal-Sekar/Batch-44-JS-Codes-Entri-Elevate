function sum(val1,val2,val3,Callback)
{
let out=val1+val2+val3; //210
Callback(out);      //display(210)
}

function Display(output)
{
console.log('sum:',output);
}



sum(50,60,100,Display);    


//val=50  val2=60  val 3 =100  display==callback


//a function calls a another 
//function calls itself

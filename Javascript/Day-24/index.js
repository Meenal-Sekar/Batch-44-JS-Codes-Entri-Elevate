
//

for(let i=1;i<=5;i++)
{
    console.log(i)
}
// entri contrrol loop
let i=1;
while(i<=5)
{
    console.log(i)
    i++;
}
//exit control loop
let j=1
do{
 console.log(j)
    j++;
}while(j<=5)



//Factorial of the number  1*2*3*4*5
let f=1;
for(let a=1;a<=5;a++)
{

    f= f * a;
    console.log('The fact of number:',f)
}

//filter out from the array

let number=[23,45,89,56,88,60,35,89,26];
let evennumber=[];

//lenght (start from 1)
for(let i=0;i<number.length;i++)
{
    if(number[i]% 5 == 0)
    {
        evennumber.push(number[i])
    }
}

console.log(evennumber)


let text1="I like javascript"

console.log(text1.toUpperCase())





// additio of 3 numbers

//with parameter and without return

function addition(a,b,c)
{
    console.log('Result:',a+b+c)
}

addition(3,4,5)

addition(100,100,100)


//with parameters and with return
function subt(a,b)
{
    return a-b;
}

let j1=subt(80,76);
console.log(j1)


//without parameter without return

function hello()
{
    console.log('I am happy')
}

hello();

//without paramter with return

function hello1()
{
    return 'hi'
}

let k1=hello1();
console.log(k1)




let k2=10.24;
console.log(Math.floor(k2))

let a1= Math.floor(Math.random()*1000000)

console.log(a1)
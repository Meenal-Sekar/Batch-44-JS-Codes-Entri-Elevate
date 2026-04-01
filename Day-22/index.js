

function eligibility()
{
    let t1=document.getElementById('t1').value

    //comparison opertor
    if(t1 >=18)
    {
        document.getElementById('t2').value = "Eligible"
    }
    else
    {
         document.getElementById('t2').value = "Not Eligible"
    }
}

//syntax for if case

//if(experesion)
// {

// }


function find()
{
    let t3=document.getElementById('t3').value


    if(t3 > 0)
    {
        alert('It is Positive')
    }
   else if(t3 < 0)
    {
        alert('It is negative')
    }
    else
    {
        alert('It is neutral')
    }
}
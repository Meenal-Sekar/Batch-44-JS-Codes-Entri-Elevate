
const days=document.getElementById('days')
const hours=document.getElementById('hours')
const minutes=document.getElementById('minutes')
const seconds=document.getElementById('seconds')

const currentYear=new Date().getFullYear();

const newYear=currentYear+1;  //2027


let newYearTime=new Date(`jun 01 2026 00:00:00`);//01-01-27

   
    const update= ()=>
    {
            let currentTime=new Date();

    const diff=newYearTime-currentTime;

   const d1= Math.floor(diff/1000/60/60/24);
   const h1=Math.floor(diff/1000/60/60) % 24;
    const m1=Math.floor(diff/1000/60) % 60;
    const s1=Math.floor(diff/1000) % 60

    days.innerHTML=d1 < 10 ? "00" + d1 : d1 < 100 ? "0" + d1 : d1
    hours.innerHTML=h1 < 10 ? "0"+h1 : h1;
    minutes.innerHTML=m1 < 10 ? "0"+m1 : m1;
    seconds.innerHTML=s1 < 10 ? "0"+s1 : s1;
    }
    
 setInterval(update,1000);

//it automatically call itself
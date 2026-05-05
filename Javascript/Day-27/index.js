
let count=0;

const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

const lockBtn=document.getElementById('lock');
const unlockBtn=document.getElementById('unlock');

const statusText = document.getElementById("status");

//addevent listern

//element.addEventListner("click",funciton)

function increment()
{
    count++;
    countDisplay.textContent=count;
}
function decrement()
{
      count--;
    countDisplay.textContent=count;
}
function reset()
{
    count=0
     countDisplay.textContent=count;
}


//add the event listerner for this funciton
incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);


//lock option

// lock events

lockBtn.addEventListener("dblclick", function ()

{
  incBtn.removeEventListener("click", increment);
  decBtn.removeEventListener("click", decrement);
  resetBtn.removeEventListener("click", reset);

  statusText.textContent = "🔒 Counter Locked";
  statusText.style.color = "red";
  statusText.style.fontWeight="bold"
  countDisplay.style.visibility="hidden"
}

);


unlockBtn.addEventListener("click", function ()
 {
  incBtn.addEventListener("click", increment);
  decBtn.addEventListener("click", decrement);
  resetBtn.addEventListener("click", reset);

  statusText.textContent = "🔓 Counter Unlocked";
  statusText.style.color = "green";
   statusText.style.fontWeight="bold"
    countDisplay.style.visibility="visible"
});

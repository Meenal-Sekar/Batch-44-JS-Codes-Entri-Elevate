import { useState } from "react";

 function Counter() {

   const [count, setCount] = useState(0);

   const increase = () => 
    {
 	setCount(count + 1);         //sample(45,45)
   };

   function decrease()
   {
    setCount(count-1)
   }

   return (
 	<div>
   	<h2>Count: {count}</h2>
   	<button  className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg
               hover:bg-blue-600" onClick={increase}>Increase</button>
    <button   className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg
               hover:bg-blue-600"onClick={decrease}>decrease</button>
 	</div>
   );
 }

 export default Counter;
// Define an async function
// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

// async function fetchData() 
// {
//     try {
      
//       let response = await new Promise((resolve, reject) => 
//         {
//         setTimeout(() => resolve("Happy journey"), 4000);
//       });
  
      
//       console.log(response);
//     }
//      catch (error)
//       {
      
//       console.error("Error:", error);
//     }
//   }
  
  
//   fetchData();

async function fetchData() {
  try {
    let response = await new Promise((resolve, reject) => {
      setTimeout(() => reject("Network error ❌"), 3000);
    });

    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
  

async function fetchUser()
 {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
      throw new Error("API Failed ❌");
    }
    let d1= await response.json()
    console.log("UserDetails:", d1);
  }
   catch (error) 
   {
    console.error("Error:", error.message);
  }
}

fetchUser();
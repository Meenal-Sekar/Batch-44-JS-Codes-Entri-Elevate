const form=document.getElementById('form')
let users=[];

form.addEventListener("submit",function(e)
{
    e.preventDefault();

        // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.getElementById("gender").value;
    const city = document.getElementById("city").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const dob = document.getElementById("dob").value;

    //to clear previous error
    document.querySelectorAll(".error").forEach(e => e.innerText = "");


    //Name Validation
   let  isValid= true;

     if (name === "") {
      document.getElementById("nameError").innerText = "Name required";
      isValid = false;
    }

    //Email Validation
     // Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //abc@gmail.com   ---> true
    //abc@gmailcom    ---> false

    if (!emailRegex.test(email))
         {
      document.getElementById("emailError").innerText = "Invalid email";
      isValid = false;
    }

       // Gender
    if (gender === "") {
      document.getElementById("genderError").innerText = "Select gender";
      isValid = false;
    }

    // City
    if (city === "") {
      document.getElementById("cityError").innerText = "Select city";
      isValid = false;
    }

      // Password Regex (Min 6 chars, 1 uppercase, 1 number)

    const passRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passRegex.test(password))
         {
      document.getElementById("passwordError").innerText =
        "Password must contain 1 uppercase & 1 number (min 6 chars)";
      isValid = false;
    }

    //confirm password

     if (password !== confirmPassword) 
        {
      document.getElementById("confirmError").innerText = "Passwords do not match";
      isValid = false;
    }

    // DOB validation
     const today = new Date();
    const birthDate = new Date(dob);

    if (dob==="") 
        {
      document.getElementById("dobError").innerText = "Select DOB";
      isValid = false;
    } 
    else if (birthDate.toDateString() === today.toDateString())
         {
      document.getElementById("dobError").innerText = "DOB cannot be today";
      isValid = false;

    } 
    else
     {
      let age = today.getFullYear() - birthDate.getFullYear();
      console.log(age);
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        document.getElementById("dobError").innerText = "Must be 18+";
        isValid = false;
      }
    }


    // STOP HERE if any error

    if (!isValid) return;

        // Save data
    const user = { name, email, gender, city, dob };
    users.push(user);
    displayUsers();
    console.log(users);

    //automatic reset
    form.reset()

    

})

function displayUsers()
{
  const cardContainer = document.getElementById("cardContainer");

  cardContainer.innerText="";
  users.forEach((jack)=>
  {
      const c1 = document.createElement("div");
      c1.className = "card";

      c1.innerHTML=(`
        <h1> ${jack.name}</h1>
         <p>Email: ${jack.email}</p>
        <p>Gender: ${jack.gender}</p>
        <p>City: ${jack.city}</p>
        <p>DOB: ${jack.dob}</p>

        
        `)

         cardContainer.appendChild(c1);



  })
}
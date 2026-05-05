

//1.create a empty object
//2.getuser(fetch (apilink)
//  response--->data.json()

 let userData = {};

     async function getUser()
     {
      const username = document.getElementById("uname").value;

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        userData = data;
        alert("User Data Loaded ✅");

      } 
      catch (error)
       {
        console.error("Error:", error);
      }
    }

        function showName() 
    {
      document.getElementById("container").innerHTML = `
       
      <div class="card">
          <h3>${userData.login}</h3>
        </div>
      `;
    }

    function showPhoto()
    {
         document.getElementById("container").innerHTML = `
       
      <div class="card">
          <img src="${userData.avatar_url}" >
        </div>
      `;
    }
    function showAll()
    {
         document.getElementById("container").innerHTML = `
        <div class="card">
          <img src="${userData.avatar_url}" />
          <h3>Name:${userData.name}</h3>
          <p>Username: ${userData.login}</p>
          <p>Followers: ${userData.followers}</p>
          <p>Following: ${userData.following}</p>
          <p>Public Repos: ${userData.public_repos}</p>
        </div>
      `;

    }
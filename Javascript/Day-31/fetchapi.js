// Specify the API endpoint for user data
const name="VishwaPriya"

const apiUrl = 'https://api.github.com/users/VishwaPriya';

fetch(apiUrl) 
   .then(response => 
    {
    if (!response.ok) 
    {
      throw new Error('Sorry  Server error Please wait...');
    }
    return response.json();        //javascript object notation
  })
  .then(userData =>
    {
     console.log('User Personal Details:', userData);
    })
  .catch(error => 
  {
    console.error('Error:', error);
    // console.log('Module not found');
  });


  
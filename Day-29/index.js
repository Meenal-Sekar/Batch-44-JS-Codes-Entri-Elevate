
const apiUrl = 'https://api.github.com/users/Abdul-Rahuman-Mujeeb-AA';

fetch(apiUrl) 
   .then(res => 
    {
    if (!res.ok) 
    {
      throw new Error('Sorry  Server error Please wait...');
    }
    console.log(res);
    return res.json();
        
  })
  .then(userData =>
    {
     console.log('Details:', userData);
    })
  .catch(error => 
  {
    console.error('Error:', error);
    // console.log('Module not found');
  })
 
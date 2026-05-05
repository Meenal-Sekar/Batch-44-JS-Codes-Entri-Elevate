async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/24");
    const data = await response.json();
    console.log(data);
  }
  
  fetchData();
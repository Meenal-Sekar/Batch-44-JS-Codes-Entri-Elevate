function fetchData(callback) { 
setTimeout(() => { 
console.log("Data fetched"); 
callback(); 
}, 4000); 
} 
function processData() { 
console.log("Processing data..."); 
} 
fetchData(processData);
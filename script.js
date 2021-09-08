// Set Current Year In Footer
const date = new Date();
console.log(document.getElementById('date'))
document.getElementById('date').innerText = date.getFullYear().toString();
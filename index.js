// this variable will store the count of passengers in the app 

// grabbing count-el from html and storing the info into js
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0;

// this function will be used to count up the passengers in the app
function increment(){
count = count + 1
// setting the inner text of the HTML to be equal to "count"
countEl.innerText = count
}

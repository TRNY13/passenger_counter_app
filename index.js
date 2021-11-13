// this variable will store the count of passengers in the app 

// grabbing count-el from html and storing the info into js
let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

// this function will be used to count up the passengers in the app
function increment(){
count += 1
// setting the inner text of the HTML to be equal to "count"
countEl.textContent = count;
}

// grabbing save-el from the HTML
let saveEl = document.getElementById("save-el");

function save() {
 let logs = (" " + count + " - ");
 console.log(count);
 // saveEl.innerText += <----- this needs to be += instead of just 
 // equal. Without it being += the entirety of the inner text is
 // changed instead of being added to with +=
 // changed inner text to textContent to better display the saved logs on the webpage
 // innertext also uses a lot of resources compared to textContent
 saveEl.textContent += logs;
 // These two lines reset the count in the console and the display
 // of the count on the DOM
 countEl.textContent = 0
 count = 0
}



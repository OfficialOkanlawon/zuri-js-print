let name = "Okanlawon Oluwatobi"
let height = "6ft"
let country = "Nigeria"

const print = document.querySelector(".print")

print.innerHTML = `
    <div class="print">
    <h1>My name is ${name}</h1>
    <h2>I am ${height} tall</h2>
    <h3>I am from ${country}</h3>
    
    </div>
`
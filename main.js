const worker = new Worker("worker.js")
const calculateBtn = document.querySelector("#calculateBtn") 

calculateBtn.addEventListener("click", calculate)

function calculate () {
    let sum = 0;
    for(let i = 0; i < 100000000000000; i++) {
        sum += i;
    }
    alert(sum)
}
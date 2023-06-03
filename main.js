const worker = new Worker("worker.js")
const calculateBtn = document.querySelector("#calculateBtn") 

calculateBtn.addEventListener("click", () => {
    worker.postMessage("Hello worker!!")
})

worker.onmessage = (message) => {
    console.log(message)
    console.log(JSON.parse(message.data))
}

function calculate () {
    let sum = 0;
    for(let i = 0; i < 10000000; i++) {
        sum += i;
    }
    alert(sum)
}
const worker = new Worker(`worker.js`)

const getBtn = document.querySelector("#getBtn")

getBtn.addEventListener("click", (message) => {
    worker.postMessage("Hello worker!!")
})

worker.onmessage = (message) => {
    console.log(message)
    console.log(JSON.parse(message.data))
}
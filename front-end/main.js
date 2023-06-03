const worker = new Worker(`worker.js`);
const getBtn = document.querySelector("#getBtn");

getBtn.addEventListener("click", startImageCapturing);

function startImageCapturing() {
  let numberOfCalls = 0;
  setInterval(() => {
    numberOfCalls++;
    worker.postMessage(`Image ${numberOfCalls}`);
  }, 1000);
}

worker.onmessage = (message) => {
  console.log(message);
};

onmessage = async (message) => {
  const data = await  getData();
  postMessage(data);
};

function calculate() {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  return sum;
}

async function getData() {
  const response = await fetch("https://dummyjson.com/products/1");
  const json = await response.json();
  return JSON.stringify(json);
}

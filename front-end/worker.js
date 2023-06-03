onmessage = async (message) => {
  console.log(message.data)
  if(message.data) {
    const data = await getData();
    postMessage(data);
  }

  // for (let i = 0; i < 10; i++) {
  //   const response = await fetch(`http://localhost:5000/`);
  //   const json = await response.json();
  //   postMessage(JSON.stringify(json))
  // }
};

function calculate() {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  return sum;
}

async function getData() {
  const API_1 = `https://dummyjson.com/products/1`;
  const API_2 = `http://localhost:5000/`;

  for (let i = 0; i < 10; i++) {
    const response = await fetch(API_2);
    const json = await response.json(); 
    return JSON.stringify(json);
  }
}

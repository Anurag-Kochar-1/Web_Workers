onmessage = (message) => {
    const sum = calculate()
    postMessage(sum)
}

function calculate () {
    let sum = 0;
    for(let i = 0; i < 10000000; i++) {
        sum += i;
    }
    return sum  
}
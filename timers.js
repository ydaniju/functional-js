const timer = (delay) => setTimeout(() => {
  lll(delay);
  timer(++delay)
}, delay * 1000);

const lll = (delay, count = 5) => {
  let i = 0;
  const printer = setInterval(() => {
    console.log(`Hello from ${delay} seconds`);
    i++;
    if (i == count) {
      clearInterval(printer);
    }
  });
}

timer(1)

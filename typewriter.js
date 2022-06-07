const sentence = "hello there from lighthouse labs";


let timeout = 1000;
for (const letter of sentence) {  
  setTimeout(() => {
    process.stdout.write(letter)
  }, timeout);  
  timeout += 50;  
}

setTimeout(() => {
  console.log("")
}, timeout)


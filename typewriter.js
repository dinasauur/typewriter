const sentence = "hello there from lighthouse labs \n";
let runTime = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, runTime);

  runTime += 50;
};

// Other method is to do a C style loop, and write an if statement (if i equals to sentence.length -1, console.log blah)


const sentence = "hello there from lighthouse labs \n";
let runTime = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, runTime);

  runTime += 50;
};


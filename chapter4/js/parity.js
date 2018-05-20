let start = Number(prompt("Starting Number"));
let end =  start + 10;
for (let i = start; i < end; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

let begin = Number(prompt("Pick a start number"));
let stop = begin + 10;
while (begin < stop) {
  if (begin % 2 === 0) {
    console.log(`${begin} is even`);
  } else {
    console.log(`${begin} is odd`);
  }
  begin++;
}

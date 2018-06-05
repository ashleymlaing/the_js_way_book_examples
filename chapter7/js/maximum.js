const values = [3, 11, 7, 2, 9, 10];
let larger = 0;

values.forEach(value => {
  if(value > larger){
    larger = value;
  }
})

console.log(larger)



function circumfrence(radius) {
  let answer = (radius * 2 * Math.PI).toFixed(2)
  return answer

}

function area(radius) {
  let circleArea = (Math.PI * (radius * radius)).toFixed(2)
  return circleArea
}

function findingMath() {
  let radius = Number(prompt("Enter radius"))

  console.log(circumfrence(radius));
  console.log(area(radius));

}

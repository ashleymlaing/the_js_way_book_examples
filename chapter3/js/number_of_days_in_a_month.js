//how many days in the month

//conditional example

function daysInMonth() {
  let monthNumber = Number(prompt("Enter the number of the month."));
  if(monthNumber <= 0 || monthNumber > 12){
    console.log("You entered an Invalid month!");
  } else {
      if(monthNumber == 1){
        console.log("January has 31 days");
      } else if (monthNumber == 2) {
        console.log("Febuary has 28 days");
      } else if (monthNumber == 3) {
        console.log("March has 31 days");
      } else if (monthNumber == 4) {
        console.log("April has 30 days");
      } else if (monthNumber == 5) {
        console.log("May has 31 days");
      } else if (monthNumber == 6) {
        console.log("June has 30 days");
      } else if (monthNumber == 7) {
        console.log("July has 31 days");
      } else if (monthNumber == 8) {
        console.log("August has 31 days");
      } else if (monthNumber == 9) {
        console.log("September has 30 days");
      } else if (monthNumber == 10) {
        console.log("October has 31 days");
      } else if (monthNumber == 11) {
        console.log("November has 30 days");
      } else if (monthNumber == 12) {
        console.log("December has 31 days");
      } else {
        console.log("Not a valid month");
      }
  }
}

// switch example

function monthDays() {
  let month = Number(prompt("Enter the number of the month."));
  switch (month) {
    case 1:
      console.log("January has 31 days");
      break;
    case 2:
      console.log("Febuary has 28 days");
      break;
    case 3:
      console.log("March has 31 days");
      break;
    case 4:
      console.log("April has 30 days");
      break;
    case 5:
      console.log("May has 31 days");
      break;
    case 6:
      console.log("June has 30 days");
      break;
    case 7:
      console.log("July has 31 days");
      break;
    case 8:
      console.log("August has 31 days");
      break;
    case 9:
      console.log("September has 30 days");
      break;
    case 10:
      console.log("October has 31 days");
      break;
    case 11:
      console.log("November has 30 days");
      break;
    case 12:
      console.log("December has 31 days");
      break;
    default:
      console.log("Not a valid month");
      break;
  }
}

// conditional

function predictNextDay() {
  const dayOfWeek = prompt("What day is today?");
  if(dayOfWeek.toLowerCase() == "sunday") {
    console.log("Monday");
  } else if (dayOfWeek.toLowerCase() == "monday") {
    console.log("Tuesday");
  } else if (dayOfWeek.toLowerCase() == "tuesday") {
    console.log("Wednesday");
  } else if (dayOfWeek.toLowerCase() == "wednesday") {
    console.log("Thursday");
  } else if (dayOfWeek.toLowerCase() == "thursday") {
    console.log("Friday");
  } else if (dayOfWeek.toLowerCase() == "friday") {
    console.log("Saturday");
  } else if (dayOfWeek.toLowerCase() == "saturday") {
    console.log("Sunday");
  } else {
    console.log("Enter valid day!");
  }
}

// switch statement

function nextDay() {
  let today = prompt("What day is today?");
  today = today.toLowerCase();
  switch (today) {
    case "sunday":
      console.log("Monday");
      break;
    case "monday":
      console.log("Tuesday");
      break;
    case "tuesday":
      console.log("Wednesday");
      break;
    case "wednesday":
      console.log("Thursday");
      break;
    case "thursday":
      console.log("Friday");
      break;
    case "friday":
      console.log("Saturday");
      break;
    case "saturday":
      console.log("Sunday");
      break;
    default:
      console.log("Enter valid day!");
  }
}

//Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
//
// This is not as simple as it seems... Look at the following results to see for yourself:
//
// 14h17m59s => 14h18m0s
// 6h59m59s => 7h0m0s
// 23h59m59s => 0h0m0s (midnight)


// conditional example

function time() {
  let hours = Number(prompt("Number of hours in military time?"));
  if (hours < 0 || hours > 23) {
    hours = Number(prompt("Number of hours in military time?"));
  }
  let minutes = Number(prompt("Number of minutes after the hour?"));
  if (minutes < 0 || minutes > 59) {
    minutes = Number(prompt("Number of minutes after the hour?"));
  }
  let seconds = Number(prompt("Number of seconds in that minute?"));
  if (seconds < 0 || seconds > 59) {
    seconds = Number(prompt("Number of seconds in that minute?"));
  }

  if (seconds == 59) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
      if (hours == 24) {
        hours = 0;
      }
    }
  } else {
    seconds++;
  }

  console.log(hours + "hrs:" + minutes +  "mins:" + seconds +  "sec:" );

}

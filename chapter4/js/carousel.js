function carousel () {
  let turns = Number(prompt("How many turns?"));
  let x = 0;
  while(x <= turns){
    document.getElementById('slides').innerHTML=x;
    x++;
  }
}

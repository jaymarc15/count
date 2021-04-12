var count = 0;
var cuenta = '';
function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  cuenta = count + ((count>0)? ' Bet' : ' Hold');
  return count ;
}

cc(2); cc(3); cc(7); cc('K');
console.log('La cuenta va en : ' + cuenta);





var count = 0;

function cc(card) {
  // Only change code below this line
  if(card==2 || card==3 || card==4 || card==5 ||card==6){
   count++;
  }
  else if (card == 7 || card == 8 || card == 9) {
      count;
  }
  else if (card==10 || card=="J" || card=="Q" || card=="K" || card=="A"){
    count--;
  }
  
  
  if(count<=0){
     return (count + " Hold");
  }
  else{
      return (count + " Bet");
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(4); cc(5); cc(6);
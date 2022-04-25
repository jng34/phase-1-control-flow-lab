function scuberGreetingForFeet(val){
  // Write your code here!
  if (val <= 400) {
    return 'This one is on me!';
  } else if (val > 400 && val < 2000) {
    return 'That will be twenty bucks.';
  } else if (val > 2000 && val < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (val > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(lvl){
  // Write your code here!
  if (lvl === 'generous') {
    return 'Thank you so much.';
  } else if (lvl === 'not as generous') {
    return 'Thank you.';
  } else if (lvl === 'thanks for everything') {
    return 'Bye.'
  }
}
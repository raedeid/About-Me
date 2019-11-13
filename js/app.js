'use strict'
var points = 0
var question = ['My name Rashid Saqr Musa Alsawalqa ?? ', 'I\'am 30 years old ??', 'I still a student in mutah university ??', 'Did i Love VideoGames ??? ', ' Did i love JavaScript ??? '];
var answer_yes = ['Burfict answer + 1', 'Wrong answer + 0', 'Wrong answer + 0', 'Burfict answer + 1', 'Wrong answer + 0'];
var answer_no = ['wrong answer + 0', 'Burfict answer + 1', 'Burfict answer + 1', 'Wrong answer + 0', 'Burfict answer + 1'];
var games = ['devil may cry',
  'bloodborne',
  'need for speed',
  'resident evil',
  'battlefield',
  'god of war',
  'black desert online',
  'grand theft auto v',
  'the last of us',
  'shadow of mordor'];

function Q1_5(list_q, list_yes, list_no, grade) {
  for (var i = 0; i < 5; i++) {
    var ask = prompt(list_q[i]).toUpperCase();
    if (ask == 'YES' || ask == 'Y') {
      alert(list_yes[i]);
      grade++;
    } else if (name == 'NO' || name == 'N') {
      alert(list_no[i]);
    }
  }
  return grade
}


function q_6() {
  for (var i = 0; i <= 3; i++) {
    var number = prompt('put the number');
    var p = 0
    if (number == 4) {
      alert('Great you did it the number was "4"  +1 ');
      i = 4;
      return p++;
    } else if (number < 4) {
      alert('Too low');


    } else if (number > 4) {
      alert('Too high');

    } else if (i == 4) {
      alert('the number was "4"');
    }
  }
}

function q_7(list_games) {
  var flag = true ;
  var i = 0 ;
  while (flag && i < 6 ) {
    var gaming = prompt('What\'s My Favorite games ??? ');
    if (check(gaming,list_games)){
      flag = false;
      return 1;
    }else if (flag) {
      alert('wrong answer. try again');
    }else if (i == 6){
      alert('you loose all chance');
    }
   }i++;  
  }

function check(params,list_of_games) {
  for (var iteration = 0; iteration < list_of_games.length; iteration++){
    if (params === list_of_games[iteration]) {
      alert('You got it ' + user + ' Congratulations +1 ');
      return true;
      
    }
  }
}
var user = prompt('wht\'s your name');

alert('Welcome to my website ' + user);
alert('Please answer my question by type Yes or No');



points = points + Q1_5(question, answer_yes, answer_no)

alert("Now you will play guess the number game ");
alert("You have four attempts to guess the correct number ");
alert("So be Careful ;)");

points = points + q_6()

points = points + q_7(games)
alert('devil may cry ',
  'bloodborne ',
  'need for speed ',
  'resident evil ',
  'battlefield ',
  'god of war ',
  'black desert online ',
  'grand theft auto v ',
  'the last of us ',
  'shadow of mordor ')
alert('Your Score is ' + points + '/7 ..')
alert(' Thank you ' + user);


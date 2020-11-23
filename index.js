var readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log(chalk.redBright("Welcome to DO YOU KNOW Chandan K J?" +"\n"));

var Username = readlineSync.question(chalk.red("What's your name? " ));

console.log(chalk.yellow( "\n" + "HEY!!! " + Username +" Its nice to have you here... " + "\n"))


var topscores = [
  {name:"Gagan", score:19}, 
  {name:"Vijeth", score:17}, 
  {name:"Tejas", score:14}
  ];




var score = 0;
//function
function play(question, answer, options) {
  var yourAnswer = readlineSync.question(chalk.magentaBright(question, options))
  if (yourAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right! ");
    score = score + 5;
  } 
  else {
    console.log("You are wrong! ");
    console.log("Correct answer is: ", answer);
    score = score - 1;
  }
  console.log("Your score is : ", score);
  console.log("-------------");
}

//array
var Question = [{
  question:"\n"+ "Where do i live? ",
  options:"\n1]Mysore \n2]Bengaluru \n3]Hubli \nYour answer: ",
  answer:"2"
},
  {
  question: "What is my favourite food? ",  
  answer:"1",
  options:"\n1]Chicken Biriyani \n2]Roti and Curry \n3]Egg Rice \n4]Fried Rice \nYour answer: "
  
},
{
  question:"Who is my favourite Cricket Player? ",
  answer:"1",
  options:  " \n1]Virat \n2]Sachin \n3]Dhoni \nYour answer: "
  
},
{
  question:"Which is my favourite TV SERIES? ",
  options:"\n1]GOT \n2]Vampire Diaries \n3]Friends \nYour answer: ",
  answer:"3"
},
{
  question:"Which superhero do i like? ",
  options:"\n1]Ironman \n2]Arrow \n3]Flash \n4]Hulk \nYour answer: ",
  answer:"4"
}
]

//loop
if(readlineSync.keyInYN('Do you want to start the quiz?')){
for(var i = 0; i<Question.length; i++){
  var currentQuestion = Question[i];
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
}
}else{
  console.log(chalk.yellow("Thank You..."))
}

console.log(chalk.green(" You scored: ",score + "\n" +"Thank you for participating" ))

var flag = 0;
for(var i=0;i<topscores.length;i++){
  if(score >= topscores[i].score){
    console.log(chalk.green('\n'+'Congratulations! '+Username+' You have beaten the high score,send me the screenshot of your score, we will update the scoreboard'))
    flag = 1;
    console.log(chalk.red('\n'+'ThankYou. Have a Good day'))
    break;
  }
}
if(flag===0){
  console.log(chalk.red("Try Again for getting high score"));
}


for(var i = 0; i<topscores.length; i++){
  console.log( "These are the Topscores: ")
   console.log(`${topscores[i].name} ::: ${topscores[i].score}` )
}
  

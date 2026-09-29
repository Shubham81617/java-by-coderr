// let a=19;
// if(a>18){
//     console.log("you can vote in the election")
   
// }
// let a=18;
// if(a>=18){
//     console.log("you can vote in the election")
   
// }



// else

//     let a=17;
// if(a>=18){
//     console.log("you can vote in the election")
   
// }else{
//     console.log("you can not vote in election")
// }

//                  Else if
//    let a = 70;

// if (a >= 80) {
//   console.log("Grade A");
// } else if (a >= 60) {
//   console.log("Grade B"); 
// } else if (a >= 50) {
//   console.log("Grade C"); 
// } else if (a >= 33) {
//   console.log("Grade D"); 
// } else {
//   console.log("Fail");    
// }

// let day=3;
// switch(day){
//     case 1:
//     console.log("monday")
//     break;
//     case 2:
//     console.log("Tuesday")
//     break;
//     case 3:
//     console.log("Wednesday")
//     break;
//     case 4:
//     console.log("Thrusday")
//     break;
//     case 5:
//     console.log("Friday")
//     break;
//     case 6:
//     console.log("Saturday")
//     break;
//     case 7:
//     console.log("Sunday")
//     break;
// default:
//     console.log("wrong input")
//     break;

// }


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a day number (1-7): ", (input) => {
  let day = Number(input);

  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Wrong input");
      break;
  }

  rl.close();
});
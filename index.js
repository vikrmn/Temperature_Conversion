/*let username;
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myp").textContent=`hello ${username}`;
}


let age =window.prompt("how old are you?");
age = Number(age);
age+=1;
console.log(age)


const pi = 3.14159;
let radius;
let circumference;
document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius =Number(radius);
    circumference = 2*pi*radius;
    document.getElementById("result").textContent = `the radius is ${circumference}`;

}
let result = 0;

document.getElementById("reverse").onclick = function(){
   result = result - 1;
   document.getElementById("result").textContent = result;
}

document.getElementById("zero").onclick = function(){
    result = 0;
    document.getElementById("result").textContent = result;
}

document.getElementById("forward").onclick = function(){
   result =result +1;
    document.getElementById("result").textContent = result;
}


let age = document.getElementById("user_entry");
let result = document.getElementById("result");
let submit = document.getElementById("submit_bt");


submit.onclick = function(){
    age = age.value;
    age = Number(age);
    if(age>=18){
        result.textContent = `you are eligible to vote`;
    }
    else{
      result.textContent = `you are not eligible to vote`;
    }
}


let subscribe_box = document.getElementById("subscribe_box");
let visa = document.getElementById("visa");
let master_card = document.getElementById("master_card");
let G_pay = document.getElementById("G_pay");
let Phone_pay = document.getElementById("Phone_pay");
let submit_button = document.getElementById("submit_button");
let sub_result = document.getElementById("sub_result");
let payment_mode = document.getElementById("payment_mode");

submit_button.onclick =function(){
    if(subscribe_box.checked){
        sub_result.textContent = `you are subscribed!`;
        if(visa.checked){
            payment_mode.textContent = `you choose pay by visa`;
        }
        else if(master_card.checked){
            payment_mode.textContent = `you choose pay by Master Card`;
        }
        else if(G_pay.checked){
            payment_mode.textContent = `you choose pay by G pay`;
        }
        else if(Phone_pay.checked){
            payment_mode.textContent = `you choose pay by Phone pay`;
        }
    }
    else{
        sub_result.textContent = `you are not subscribed!`;
    }
}



let string = window.prompt("enter your name :");
string =string.trim();
let letter = string.charAt(0);
letter = letter.toUpperCase();
string = string.slice(1);
string = string.toLowerCase();
console.log(letter+string);


let userName = window.prompt("enter your name :");
while(userName === ""){
    userName = window.prompt("enter your name :");
}
console.log(`userName is :${userName}`);


const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
console.log(answer);
let attempt = 0;
let running = true;
let guess;

 while(running){
     guess = window.prompt(`Guess the Number between ${minNum} and ${maxNum}`);
     guess = Number(guess);

     if(isNaN === guess){
        window.alert(`enter the valid Number!`);
     }

     else if(guess>maxNum){
        window.alert(`enter the valid Number!`);
     }
     else if(guess<minNum){
        window.alert(`enter the valid Number!`);
     }
     else{
        attempt++;

        if(guess>answer){
           window.alert(`YOU ARE TOO HIGH!`); 
        }
        else if(guess<answer){
            window.alert(`YOU ARE TOO LOW!`);
        }
        else{
            window.alert(`YOUR GUESS IS CORRECT , ${answer} IS THE ANSWER AND  YOUR ATTEMPT IS ${attempt}.`);
            running = false;
        }
     }
 }
  let number = [1, 2, 3,21];
  let maximum = Math.max(...number);
  let minimum = Math.min(...number);
  console.log(maximum);

  RANDOM PASSWORD GENERATOR

function randompassword(lowerCase,uppercase,lenght,specialCharacters){
   lowerCase = 'abcdefghijklmnopqrstuvwxyz';
   uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   specialCharacters = '!@#$%^&*()_+';

   let allowedCharacters = '';
   let password = '';

   allowedCharacters += includelowerCase ? lowerCase : "";
   allowedCharacters += includeuppercase ? uppercase : "";
   allowedCharacters += includespecialCharacters ? specialCharacters : "" ;

   for(let i =0; i < lenght; i++){
         randomIndex = Math.floor(Math.random()*66);
         password += allowedCharacters[randomIndex];
        
   }
       return (password);
   }
  
   
   

const includelowerCase = true
const includeuppercase = true;
const lenght = 10;
const includespecialCharacters = true;
const password = randompassword(includelowerCase,includeuppercase,lenght,includespecialCharacters)
console.log(`generated password : ${password}`);
sum(displayConsole,1,2);

function sum(a,x,y){
    let result = x+y;
    a(result);
}
function displayConsole(result){
    console.log(result);
}
mul(displayConsole,2,3)
function mul(c,a,b){
    let result=a*b;
    c(result);
}
function displayConsole(result)
{
    console.log(result);
}*/
const date = Date();
console.log(date);
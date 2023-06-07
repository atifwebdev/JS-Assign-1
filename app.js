// 1 - Ask the user to enter name, age and email address through prompt, then display the following message with user input values on the browser window in an alert box. "<NAME> is <AGE> years old. You can contact him/her on <EMAIL>"

const fullName = prompt("Enter your Name");
const age = +prompt("Enter your Age");
const email = prompt("Enter your Email adrress");

const message = fullName + " is " + age + " years old. You can contact him/her on " + email;
alert(message);

document.getElementById("p-msg").innerText = message;
import inquirer from "inquirer";
// ask first number
// ask second number 
// select an operation

const answer = await inquirer.prompt(
    [
        {
            message:"Enter your first number.",
        type:"number",
        name:"num1",
        },
        {
            message:"Enter your second number.",
            type:"number",
            name:"num2",
        },
        {
            message:"Select an operation",
            type:"list",
            name:"operator",
            choices:["addition","subtraction","multiplication","division"],
        },
    ]
    );
    console.log(answer);
if (answer.operator==="addition"){
    console.log(answer.num1 + answer.num2)
}else if (answer.operator==="subtraction"){
    console.log(answer.num1 - answer.num2)
}else if (answer.operator==="multiplication"){
    console.log(answer.num1 * answer.num2)
}else if (answer.operator==="division"){
    console.log(answer.num1 / answer.num2)
}else {
    console.log("You select invalid operator.")
}






















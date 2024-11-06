import inquirer from "inquirer";
import chalk from "chalk";
//computer genrated number
// user number
// comparision
let score = 0;
do {
    let compGenratedNo = Math.floor(Math.random() * 6 + 1);
    console.log(chalk.italic.bold.underline.overline.yellowBright("<<<<<<<< Welcome to the Number Guessing Game >>>>>>>>"));
    let userAns = await inquirer.prompt({
        message: "Please guess the correct number between 1 to 6.",
        type: "number",
        name: "userNumber",
    });
    if (compGenratedNo === userAns.userNumber) {
        console.log(chalk.italic.bold.greenBright("You guess the correct number."));
        console.log(chalk.italic.bold.magentaBright(`Your score is ${score += 10}`));
    }
    else {
        console.log(chalk.italic.bold.redBright("Your number is incorrect Try again!!"));
    }
} while (true);
{
}

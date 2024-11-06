import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.underline.overline.cyanBright("Welcome to the program which is based on calculate the area and circumference of circle "));
let radius = await inquirer.prompt({ name: "radius",
    type: "number",
    message: "Please Enter the radius of circle.",
});
function calculateArea(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(chalk.bold.italic.underline.overline.magentaBright("The area of circle is " + calculateArea(radius.radius)));
function calculateCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    return circumference;
}
console.log(chalk.bold.italic.underline.overline.yellowBright("The circumference of circle is " + calculateCircumference(radius.radius)));

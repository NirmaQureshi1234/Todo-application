#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let conditions = true;
console.log(chalk.cyan("\n \t Wellcome to my Todo Appilation \n"));
while (conditions) {
    let addTask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: chalk.greenBright("Enter you new task :")
        }]);
    todos.push(addTask.task);
    console.log(chalk.greenBright(`${addTask.task} Task added in Todo-List successfully`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: chalk.blackBright("Do you want to add more task ?"),
            default: "false"
        }
    ]);
    conditions = addMoreTask.addMore;
}
console.log(chalk.magenta("Your updated Todo-List:", todos));

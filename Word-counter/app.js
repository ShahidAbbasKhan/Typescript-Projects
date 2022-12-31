import inquirer from "inquirer";
import chalk from "chalk";
const responce = await inquirer.prompt({
    type: "input",
    name: "Sentence",
    message: chalk.yellow("Enter the Sentence")
});
const { Sentence } = responce;
const words = Sentence.trim().split(" ");
let countedWords = 0;
let pushWords = [];
for (let i = 0; i < words.length; i++) {
    pushWords.push(words[i]);
    countedWords++;
}
console.log(chalk.green(`${countedWords} words in Your Sentence are: ${pushWords} `));

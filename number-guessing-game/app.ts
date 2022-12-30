import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber= Math.floor(Math.random() *10);
type responceType={
    Guess_Value:number,
}
const responce:responceType= await inquirer.prompt({
    type:"number",
    name:"Guess_Value",
    message: chalk.green("Enter one value between 1 to 10 that can guess"),
});
const {Guess_Value}=responce;
if(Guess_Value){
    if(Guess_Value===randomNumber){
        console.log(chalk.greenBright(`Wow! Your Guess won. You Guess was 
        ${responce.Guess_Value} that is correct ${randomNumber}`));
    }
    else{
        console.log(chalk.bgBlue("Please Try Again, Your Guess is not corret"));
    }
}
else{
    console.log(chalk.blue("Enter Value for Guess"));
}

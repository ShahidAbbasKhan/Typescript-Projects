import inquirer from "inquirer";
import chalk from "chalk";

const responce:{
    no_One: number,
    no_Two: number,
    operator: string
}= await inquirer.prompt([{
    type:"number",
    name:"no_One",
    message:chalk.yellow("Enter First Number"),
},{
    type:"number",
    name:"no_Two",
    message:chalk.yellow("Enter Second Number"),
},{
    type:"list",
    name:"operator",
    choices:["+","-","/","*"],
    message:chalk.yellow("Enter Operator for given Numbers"),
}]);

const {no_One, no_Two,operator}= responce;
if(no_One && no_Two && operator){
    let outPut:number;
    switch(operator){
        case "-":
            outPut=no_One - no_Two;
            console.log(chalk.yellow(outPut));
            break;
        case "+":
            outPut=no_One + no_Two;
            console.log(chalk.green(outPut));
            break;
        case "*":
            outPut=no_One * no_Two;
            console.log(chalk.redBright(outPut));
            break;
        case "/":
            outPut=no_One / no_Two;
            console.log(chalk.blueBright(outPut));
            break;
        default:
            console.log(chalk.greenBright("Please Select Valid Operator"));
    }

}
else{
    console.log(chalk.yellowBright("Please Enter Valid Values"));
}
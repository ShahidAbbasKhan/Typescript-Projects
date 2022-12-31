import inquirer from "inquirer";
import chalk from "chalk";

interface responceInterface {
    user_Id: string,
    user_Pin:number,
    transactionType:string,
    accountType:string,
    Select_Amount:number,
    Enter_Amount:number



}

const responce:responceInterface= await inquirer.prompt([{
    type:"string",
    name:"user_Id",
    message:chalk.green("Enter Your Id"),
},
{
    type:"number",
    name:"user_Pin",
    message:chalk.green("Enter Your Pin")
},
{
    type:"list",
    name:"accountType",
    choices:["CurrentAccount", "SavingAccount"],
    message:chalk.blue("Select Account"),
},
{
    type:"list",
    name:"transactionType",
    choices:["Withdraw", "FastCash"],
    message:chalk.blue("Select Transaction"),
    when(responce){
        return responce.accountType;
    }
},

{
    type:"list",
    name:"Select_Amount",
    choices:[2000,3000,5000],
    message:chalk.yellow("Select Amount"),
    when(responce){
        return responce.transactionType=="FastCash";
    }
},
{
    type:"number",
    name:"Enter_Amount",
    message:chalk.yellow("Enter Amount"),
    when(responce){
        return responce.transactionType=="Withdraw";
    }
}
]);


if(responce.user_Id && responce.user_Pin){
    const balance= Math.floor(Math.random()*1000000);
    if(responce.transactionType==="Withdraw"){
        if(responce.Enter_Amount <= balance ){
            const remainingBalance= balance - responce.Enter_Amount;
            console.log(chalk.bgGray("Remaining Balance:"+" "+ remainingBalance));
            console.log(chalk.bgGray("Withdrawn Amount is:"+" "+responce.Enter_Amount));
        }
        else{
            console.log(chalk.red("You have Insufficent Balance"));
        }

    }
    else if(responce.transactionType==="FastCash"){
        if(responce.Select_Amount<= balance){
        const remainingBalance= balance - responce.Select_Amount;
        console.log(chalk.bgGray("Remaining Balance:"+" "+ remainingBalance));
        console.log(chalk.bgGray("Withdrawn Amount is:"+" "+responce.Select_Amount));
        }
        else{
            console.log(chalk.red("You have Insufficent Balance"));
        }
    }


    
     
}
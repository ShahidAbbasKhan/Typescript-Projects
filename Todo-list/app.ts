import inquirer from "inquirer";
import chalk from "chalk";

let todos : string[]= [];

let IsContinue= true;

while(IsContinue){
    const responce:{
        Todo:string,
        Add_More: boolean,

    }= await inquirer.prompt([{
        type:"string",
        name:"Todo",
        message:chalk.yellow("What want to add in your Todo"),
    },{
        type:"confirm",
        name:"Add_More",
        message:chalk.yellow("Do you want to add more in Your Todo?"),
        default: false
    }]);
    const{Todo,Add_More}=responce;
    IsContinue=Add_More;
    if(Todo){
        todos.push(Todo);
        console.log(chalk.green(todos));

    }
    else{
        console.log(chalk.red("Invalid Values"));
    }
}


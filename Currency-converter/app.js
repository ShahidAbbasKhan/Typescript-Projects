import inquirer from "inquirer";
import chalk from "chalk";
const converstion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1,
        "INR": 0.5,
    },
    "GBP": {
        "USD": 1.2,
        "GBP": 1,
        "PKR": 271.8,
        "INR": 200,
    },
    "USD": {
        "USD": 1,
        "GBP": 1.57,
        "PKR": 260.78,
        "INR": 195.67,
    },
    "INR": {
        "USD": 0.999,
        "GBP": 203.57,
        "PKR": 1.67,
        "INR": 1,
    },
};
const responce = await inquirer.prompt([{
        "type": "list",
        "choices": ["PKR", "GBP", "USD", "INR"],
        "name": "Convert_From",
        "message": chalk.yellow("Select Your Currency for Conversion"),
    },
    {
        "type": "list",
        "choices": ["PKR", "GBP", "USD", "INR"],
        "name": "Convert_To",
        "message": chalk.yellow("Select Your Currency in which want to Convert"),
    }, {
        "type": "number",
        "name": "Amount_Convert",
        "message": chalk.yellow("Enter Amount for Conversion"),
    }
]);
const { Convert_From, Convert_To, Amount_Convert } = responce;
if (Convert_From && Convert_To && Amount_Convert) {
    //This converstion[Convert_From][Convert_To] can be so "converstion.PKR.USD"
    let result = converstion[Convert_From][Convert_To] * Amount_Convert;
    console.log(chalk.green(`${Amount_Convert} ${Convert_From}  Converted to ${Convert_To} equal to : ${result}`));
}
else {
    console.log(chalk.red("Invalid Values"));
}

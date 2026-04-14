const readline = require("readline");
const chalk = require("chalk");


const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
function showMenu (){
    console.log(chalk.blue("\n enter your chice"));
    console.log("1. Create profile");
    console.log("2. View my profile");
    console.log("3.Edit profile");
    console.log("4. View Other Profiles");
    console.log("5. Send Connection Request");
    console.log("6. View Requests");
    console.log("7. Accept / Reject Requests");
    console.log("8. View Connections");
    console.log("9. Create Post");
    console.log("10. View Feed");
    console.log("11. Like / Comment");
    console.log("12. Exit");

    rl.question("\n enter your chice :- ",(choice)=>{
        handleChoice(choice);
    })
        
}
function handleChoice(choice){
    switch(choice){
        case"1":
        console.log(chalk.green("crate profile created"));
        break;

        case"2":
        console.log(chalk.green("view my profile selected"));
        break;

        case"3":
        console.log(chalk.green("Edit profile selected"));
        break;

        case"4":
        console.log(chalk.green("view other profile selected"));
        break;

        case"5":
        console.log(chalk.green("Send connection request"));
        break;

        case"6":
        console.log(chalk.green("view request"));
        break;

        case"7":
        console.log(chalk.yellow("Accept / Reject request "));
        break;

        case"8":
        console.log(chalk.green("view connections"));
        break;

        case"9":
        console.log(chalk.green("create post "));
        break;

        case"10":
        console.log(chalk.green("view feed"));
        break;

        case"11":
        console.log(chalk.green("like/comment"));
        break;

        case"12":
        console.log(chalk.red("Exit"));
        rl.close();
        return;

        default:
            console.log(chalk.yellow("invalid choice"));
            
        
        
        
    }
    showMenu();
}
showMenu();

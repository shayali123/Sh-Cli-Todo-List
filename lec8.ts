import inquirer from "inquirer"

// let fruitchaat = ["banana" , "mango" , "orange"]

// fruitchaat.push("papaya")


// console.log(fruitchaat)


// fruitchaat.pop () 
// console.log(fruitchaat)

// fruitchaat = fruitchaat.concat(["apple","papaya","grapes"])
// console.log(fruitchaat)


// let i = 0

// while(i<=10){
//     console.log(i)
//     i++;
// }



let todos = []

let condition = true;

while(condition)
{
let todo = await inquirer.prompt(
    [
        {
            name: "question",
            type: "input",
            message: "what you want to add in your todos?"
        },
        {
            name: "Question",
            type: "confirm",
            message: "do you want to add more?",
            default: "false"
        }
    ]
)
todos.push(todo.question)
condition = (todo.Question)
console.log(todos)
}
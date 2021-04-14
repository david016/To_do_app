let toDoList = [];
let possibleActions = ["new", "delete", "show"]
let rightEntry = 0;
let userAction = "";
let completedTask = "";
let toDo = '';
let border = "******";
// console.log(border);
function showList() {
    console.log(border)
    for (let item of toDoList) {
        console.log(`${toDoList.indexOf(item)}: ${item}`)
    }
    console.log(border)
}


while (rightEntry === 0) {
    userAction = prompt("What do you want to do? (new, delete, show)");
    console.log(userAction);
    if (possibleActions.indexOf(userAction) !== -1) {
        rightEntry = 1;
    }
}

while (userAction !== "exit") {
    if (userAction === "show") {
        showList()
        // console.log(`${border} \n${toDoList} \n${border}`)
        userAction = prompt("What do you want to do next? (new, delete, show)")
    }
    else if (userAction === "new") {
        toDo = prompt("Add new item.")
        toDoList.push(toDo)
        console.log(`${toDo} added to the list`)
        userAction = prompt("What do you want to do next? (new, delete, show)")
    }
    else if (userAction === "delete") {
        completedTask = prompt("Remove an item.")
        toDoList.splice(toDoList.indexOf(completedTask), 1)
        console.log(`${completedTask} removed from the list`)
        userAction = prompt("What do you want to do next? (new, delete, show)")
    }
    else {
        userAction = prompt("What do you want to do next? (new, delete, show)")
    }
}
// A TODO LIST CODE:
let e_94 = prompt("TODO LIST: What do you have in Mind: ");
let e_95 = [];
while (e_94 !== "quit") {
    
    if (e_94 === "new") {
        let e_96 = prompt("Enter New Todo: ");
        e_95.push(e_96);
        console.log("You have added " + "'" + e_96 + "'" + " to the list");
        
    } else if (e_94 === "delete") {
        let e_97;
        while (true) {
            e_97 = parseInt(prompt("Enter the index of Todo you want to Delete: "));
            if (!isNaN(e_97) && e_97 >= 0 && e_97 < e_95.length) {
                break;
            } else {
                console.log("Invalid index. Please enter a valid index.");
            }
        }
        let e_98 = e_95.splice(e_97, 1);
        console.log("You removed " + e_98 + " from the list.");
        
    } else if (e_94 === "list") {
        console.log("Your TODO list:");
        for (let i = 0; i < e_95.length; i++) {
            console.log(i + ": " + e_95[i]);
        }
        
    } else {
        console.log("Invalid command. Please enter 'new', 'delete', 'list', or 'quit'.");
    }
    
    e_94 = prompt("TODO LIST: What do you have in Mind: ");
}

console.log("OK QUITTING!!!");

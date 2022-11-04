let groceryList = [];
let mainList = document.getElementById("mainList");



// addItem()
function addItem() {
        let input = window.prompt("What item would you like to add?")
        //takes input
        groceryList.push(input);
        //adds input to JavaScript array
        let entry = document.createElement("li");
        entry.innerHTML = input;
        // //hopefully sets value to also be the input
        entry.setAttribute("value", input)
        entry.setAttribute("onclick", this.value)
        entry.onclick = () => strikeOut(this.value);
        // // //hopefully this sets an onclick function deal that'll call a function...once we make it
        mainList.appendChild(entry);
        //adds the entry to the html list     
}

  //add an onclick value to the list items that calls our strikethrough function

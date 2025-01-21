// button Add
let buttonAdd = document.getElementById('addButton'); //B.Add
let listUl = document.getElementById('toDo'); // ul
let input = document.getElementById('input'); //input

buttonAdd.addEventListener("click" , addToDoItem);


function newToDoItem(itemText,completed){
    let tagLi = document.createElement('li');
    let teks = document.createTextNode(itemText);
    tagLi.appendChild(teks);

    if (completed){
        tagLi.classList.add("completed");
    }

    listUl.appendChild(tagLi);
    tagLi.addEventListener("dblclick",toggleToDoItemState);
}

function addToDoItem(){
    let itemText = input.value;
    newToDoItem(itemText,false);
};

function toggleToDoItemState(){
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    };
};

function clearCompletedToDoItems(){
    let completedItems = listUl.getElementsByClassName("completed");

    while(completedItems.length > 0){
        completedItems.item(0).remove();
    };
};


//remove List

function removeList(){
    let toDoItems = listUl.children;
    while(toDoItems.length>0){
        toDoItems.item(0).remove();
    };
};

//save List

let toDoInfo = {
    "task" : "thing i need to do",
    "completed": false
};

function saveList(){
    let toDos = [];

    for(let i = 0 ; i < listUl.children.length; i++){
        let toDo = listUl.children.item(i);

        let toDoInfo = {
            "task" : toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);
    };

    localStorage.setItem("toDos",JSON.stringify(toDos));
    console.log("Masuk ke sini yahh!");
};

function loadList(){
    if(localStorage.getItem("toDos") !== null){
        let toDos = JSON.parse(localStorage.getItem("toDos"));

            for(let i = 0; i < toDos.length ; i++){
                let toDo = toDos[i];
                newToDoItem(toDo.task , toDo.completed);
            };
    };
};

loadList();


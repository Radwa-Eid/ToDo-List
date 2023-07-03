var item = document.getElementById("addItem")

var todoList;

if (localStorage.getItem("ourItem") == null) {
    todoList = []
}
else {
    todoList = JSON.parse(localStorage.getItem("ourItem"))
    displayList(todoList)
}
function additem() {
    todoList.push(item.value)

    if (item.value === "") {            ///to check about Empty & dataType
        alert("Please Enter A Gool")
        todoList.pop()
    }
    localStorage.setItem("ourItem", JSON.stringify(todoList))
    displayList(todoList)
    clearList() 
}

function displayList() {
    var TasksList = ''
    for (var i = 0; i < todoList.length; i++) {
        TasksList += `<tr>
        <td>${i + 1}</td>
        <td>${todoList[i]}</td>
        <td><button onclick="Update(${i})" type="button" class="btn btn-outline-secondary">Update</button></td>
        <td><button onclick="deleteOne(${i})" type="button" class="btn btn-outline-secondary">Delete</button></td>
    </tr>`
    }
    document.getElementById("tBody").innerHTML = TasksList;
    updateBtn()
}
 
function clearList() {
    item.value=""
}

function deleteOne(i) {
    todoList.splice(i,1)
    localStorage.setItem("ourItem", JSON.stringify(todoList))
    displayList()
}

function Update(i) {
    item.value=todoList[i]
    document.getElementById("addItem").innerHTML=item.value
    deleteOne(i)

    productList = document.getElementById("update").innerHTML
    document.getElementById("update").innerHTML = "Update Task"
}

function updateBtn() {
    List = document.getElementById("update").innerHTML
    if (List == "Update Task") {
        document.getElementById("update").innerHTML = "Add Task"
    }
}
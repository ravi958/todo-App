// caputure on click event of submit button which has ID as todoSubmit

const btnSubmit = document.getElementById('todoSubmit');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById("todoList");

btnSubmit.addEventListener('click', function () {
  addElement();
})
//TODO ADD new items to the list 
function addElement() {
  console.log('adding list element');
  todoList.innerHTML += "<li><input type= 'checkbox'>" + todoInput.value + " <button>X</button></li>";
}

//TODO Remove the item from the list 


//TODO stirke off item when we click checkbox
const todoCheck = document.getElementById("todoCheck");
todoCheck.addEventListener('change', function () {
  if (todoCheck.checked === true) {
    console.log("checked");
    document.getElementById("list1").classList.add('strikeOff');
  }
  else {
    console.log("unchecked")
    document.getElementById("list1").classList.remove('strikeOff');
  }
})




// get the value entered in todoInput textbox

// add text value from todoInput to the todoList element


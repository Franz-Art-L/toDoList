// Load the elements through DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Assign the element references into js variables for it to be able to manipulate the dom, and add a toDoCounter to have a limit number of todos in a given session.
  var toDoList = document.getElementById('todo-list');
  var toDoInput = document.getElementById('todo-input');
  var addButton = document.getElementById('add-button');
  var toDoCounter = 0;

  // to display the date
  var dt = new Date();
  document.getElementById("date").innerHTML = dt.toLocaleDateString();

  // add addToDo function to be triggered when the addButton clicked.
  var addToDo = () => {

    // Create a div element and assign it to todoCol variable.
    var todoCol = document.createElement('div');

    // Give it a class of col-xs-12 and todo.
    todoCol.setAttribute('class', 'col-xs-12 todo');

    // Create another div element and assign it to todoRow variable.
    var todoRow = document.createElement('div');

    // Give it a class of row.
    todoRow.setAttribute('class', 'row');

    // Create a button element and assign it to removeButton variable.
    var removeButton = document.createElement('button');

    // Set class attribute of removeButton as btn, btn-danger and remove-button.
    removeButton.setAttribute('class', 'btn btn-danger remove-button');
    // Add the string "REMOVE" into the innerHTML of removeButton.
    removeButton.innerHTML = "REMOVE";
    // Define the event listener for click so that this todoCol element
    // will be removed when the user clicks removeButton
    removeButton.onclick = function () {
      // We use 'this' to point to the remove button element.
      // this.parentNode.parentNode will assign todoCol to variable child
      var child = this.parentNode.parentNode;
      // We use the removeChild method to delete child from the todo-list
      toDoList.removeChild(child);
    };

    // Create an h5 element and assign it to the h5 variable.
    var h5 = document.createElement('h5');

    // Sets the class attribute of h5 to take up 8 columns.
    h5.setAttribute('class', 'col-xs-8');

    // Assign the value of todoInput, which is the text the user typed
    // into the input element, to the innerHTML property of h5.
    h5.innerHTML = toDoInput.value;

    // Add h5 as the last child element to the todoRow element.
    todoRow.appendChild(h5);

    // Add removeButton as the last child element to todoRow.
    todoRow.appendChild(removeButton);

    // Add todoRow as the last child element to the todoCol element.
    todoCol.appendChild(todoRow);
    // Append todoCol as the last child element to the todoList div.
    toDoList.appendChild(todoCol);

  };

  // This handler will execute when the addButton is clicked.

  var checkThenAddTodo = () => {
    if (toDoCounter < 20 && toDoInput.value !== "") {
      addToDo();
      toDoCounter++;
      toDoInput.value = "";
    }
  }

  addButton.addEventListener('click', checkThenAddTodo);

  toDoInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      checkThenAddTodo();
    }
  });
});
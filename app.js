function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
     event.preventDefault();

     // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    //create delete button
    let deleteButton = document.createElement("input");


    // set the input's type to checkbox
    checkbox.type = "checkbox";

    //set button type to delete
    deleteButton.type = "button";
    deleteButton.value = "Delete To-Do";
    deleteButton.onclick = removeToDo;

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.prepend(checkbox);

    // attach the delete button to the li
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
};

function removeToDo(event) {
  event.target.parentElement.remove()
  // debugger
};


window.onload = function() {
  onReady();
};

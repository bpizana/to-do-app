function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const toDoList = document.getElementById('toDoList');
  //1 created an id vaiable and then set it to 0
  let id = 0;


  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      // 2 - add id property and set it to store the value of id
      //3 and incrament it ++
      id: id++
    });
    newToDoText.value = '';
    console.log(id);
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      //4 create a delete button
      const deleteButton = document.createElement('button');

      checkbox.type = "checkbox";
      // 4 of type button
      deleteButton.type = "button";
      // deleteButton.id = "deleteButton";
      deleteButton.innerHTML = "delete To Do";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      //4 append it to newLi
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener ("click", event =>{
        event.preventDefault();

        function removeItem() {
          for (var i = 0; i < toDos.length; i++ ){
               if( toDo.id < i && id == i){
                 return true;
               }else{
                 event.target.parentElement.remove()
               }
            }
        }
        console.log(removeItem());
        console.log(toDo.id);
        console.log( toDos.filter(removeItem));
        return toDos.filter(removeItem);
        renderTheUI()
      });


    });
  }


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  // //4 add event listener
  // toDoList.addEventListener('click', event => {
  //   alert('dod it');
  //
  // });

  renderTheUI();

}

window.onload = function() {
  onReady();
};

console.log('JS ready');

$(document).ready(handleReady);



function handleReady() {

  console.log('jQuery ready!');

// Click listeners
  $('#addBtn').on('click', sendNewTask)
  $('#displayTask').on('click', '.deleteBtn', removeTask)
  getTasks();
}// end handleReady


function renderTasks(array) {

  $('#displayTask').empty();

  array.forEach((task) => {
    // let completeStatus = task.complete === true ? 'Yes' : 'No';
    $('#displayTask').append(`
        <li data-status="${task.complete}" >${task.task} 
        <button data-id="${task.id}" class="deleteBtn">Delete</button>
        </li>
      
    `);
  });
}// end renderTasks

// GET ROUTE
function getTasks() {

  $.ajax({
    type: 'GET',
    url: '/toDo'

  }).then(function (response) {

    renderTasks(response);
  });
} // end getTasks

// POST ROUTE

function sendNewTask() {

  let newTask = {
    task: $('#taskIn').val(),
  }

  $.ajax({

    type: 'POST',
    url: '/toDo',
    data: newTask

  }).then(function (response) {
      console.log(response);

      getTasks();

    }).catch(function (error) {
      console.log('error in POST', error);
      
    });

}// end sendNewTask


// DELETE ROUTE

function removeTask() {
    
  const id = $(this).data('id');
  console.log('This is the id:', id);

  $.ajax({
    type: 'DELETE',
    url: `/toDo/${id}`

  }).then(function (response) {

    
    getTasks();

  }).catch(function (error) {
    console.log(error);
    alert('error in delete');
  });

}// end removeTask
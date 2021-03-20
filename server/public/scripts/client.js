console.log('JS ready');

$(document).ready(handleReady);



function handleReady() {

  console.log('jQuery ready!');

// Click listeners
  $('#addBtn').on('click', sendNewTask)
  $('#displayTask').on('click', '.deleteBtn', removeTask)
  $('#displayTask').on('click', '.markCompleteBtn', toggleComplete)
  getTasks();
}// end handleReady


function renderTasks(array) {

  $('#displayTask').empty();

  array.forEach((task) => {
    // let completeStatus = task.complete === true ? 'Yes' : 'No';
    $('#displayTask').append(`
      <div>
        <div>
        <button 
        data-id="${task.id}" 
        data-status="${task.complete}"class="markCompleteBtn">Completed
        </button>
        ${task.task} 
        <button data-id="${task.id}" class="deleteBtn">Delete
        </button>
        </div>
      </div>
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
      $('#taskIn').val('');
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


// PUT ROUTE

function toggleComplete() {
  

  const id = $(this).data('id');
  console.log('This is the clicked ID:', id);

  let status = $(this).data('status');

  console.log('Updated status to: ', objectUpdate);


  let objectUpdate = {

    id: id,
    status: status
  };

  

  $.ajax({

    type: 'PUT',
    url: `toDo/${id}`,
    data: objectUpdate

  }).then(function (response) {
    
      getTasks();
    })
    .catch(function (error) {
      console.log('Error in PUT', error);
    });


}// end markComplete
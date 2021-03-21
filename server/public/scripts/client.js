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
      <div class="flex flex-row">
        <div>
        <button 
        data-id="${task.id}" 
        data-status="${task.complete}" 
        class="markCompleteBtn"> <svg fill="currentColor" stroke="currentColor" 
        class=" text-yellow-300 hover:text-green-600 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
        </button>
        <span class=" mx-3">
        ${task.task} 
        </span>
        <button data-id="${task.id}" class="deleteBtn"> <svg fill="none" stroke="currentColor" class=" text-red-600 w-6 h-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </button>
        </div>
      </div>
    `);
  });
}// end renderTasks

{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg> */}

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
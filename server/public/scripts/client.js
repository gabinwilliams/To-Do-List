console.log('JS ready');

$(document).ready(handleReady);



function handleReady() {

  console.log('jQuery ready!');

  getTasks();
}// end handleReady


function getTasks() {

  $.ajax({
    type: 'GET',
    url: '/toDo'

  }).then(function (response) {
    response.forEach((task) => {
      // let completeStatus = task.complete === true ? 'Yes' : 'No';
      $('#displayTask').append(`
          <li data-status="${task.complete}" >${task.task} 
          <button data-id="${task.id}" class="deleteBtn">Delete</button>
          </li>
        
      `);
    });
  });
} // end getTasks



function createData() {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/create';
  var userInput = document.getElementById('message_box').value;
  xmlhttp.open("POST", url, true);
  xmlhttp.send(userInput);
}



function getData() {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/update';
  console.log('update Data');

  edit_message = prompt('edit');
  console.log(edit_message);
  new_edit_message = JSON.stringify(edit_message);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById('all_messages').innerHTML = new_edit_message;
      }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send(new_edit_message);
}


editButtonListener = function() {
  var edit = document.getElementById('edit_button');
  edit.addEventListener("click", getData);
  console.log('inside edit listener');
};

createButtonListener = function() {
  var edit = document.getElementById('submit_message');
  edit.addEventListener("click", createData);
  console.log('inside create listener');
};

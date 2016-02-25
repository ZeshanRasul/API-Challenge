
function createData() {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/create';
  var userInput = document.getElementById('message_box').value;
  xmlhttp.open("POST", url, true);
  xmlhttp.send(userInput);
  document.getElementById('message_box').value = "";
  getData();
}

function getData(){

  var xmlhttp = new XMLHttpRequest();
  var url = '/json/read';

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var allMessages = JSON.parse(xmlhttp.responseText);
      console.log('this would be a function to display all messages');
      console.log(allMessages[0].content);
      console.log(allMessages);
      displayMessages(allMessages);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}


function updateData() {
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
  edit.addEventListener("click", updateData);
  console.log('inside edit listener');

};


createButtonListener = function() {
  var edit = document.getElementById('submit_message');
  edit.addEventListener("click", createData);
  console.log('inside create listener');
};


window.onload = function(){
  getData();
};

displayMessages = function(allMessagesObject){
  var display = [];
  var eachMessage;
  var allMessagesObjectLength = allMessagesObject.length;
  for (var i = 0; i < allMessagesObjectLength; i++) {
     eachMessage= allMessagesObject[(i)].content;
    display.push(eachMessage + "<br>");
  }
  document.getElementById('all_messages').innerHTML = display;

};

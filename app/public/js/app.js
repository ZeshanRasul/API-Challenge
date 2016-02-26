
  createData = function() {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/create';
  var userInput = document.getElementById('message_box').value;
  xmlhttp.open("POST", url, true);
  xmlhttp.send(userInput);
  document.getElementById('message_box').value = "";
  displayMessagesNil();
  getData();
  console.log('inside createData');

};

 getData = function(){

  var xmlhttp = new XMLHttpRequest();
  var url = '/json/read';

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var allMessages = JSON.parse(xmlhttp.responseText);
      displayMessages(allMessages);
      editButtonListener();
      console.log("just before delete button");
      deleteButtonListener();
      console.log("just after delete button");
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};


  updateData = function(messageId) {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/update';
  // var new_edit_message = '';
  console.log('update Data');
  var edit_message = prompt('edit');
  console.log(edit_message);
  var jsowned = JSON.stringify({message:[messageId,edit_message]});
  console.log(jsowned);

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log("We're in a ready state!!!");
      displayMessagesNil();
      getData();
      }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send(jsowned);


};


deleteData = function(messageId) {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/delete';
  console.log('delete Data');
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log("We're in a ready state!!!");
      displayMessagesNil();
      getData();
      }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send(messageId);
    displayMessagesNil();
    getData();
};


createButtonListener = function() {
  console.log('inside create listener');
  var edit = document.getElementById('submit_message');
  edit.addEventListener("click", createData);
};


window.onload = function(){
  getData();
};

displayMessages = function(allMessagesObject){
  var eachMessage;
  var allMessagesObjectLength = allMessagesObject.length;
  for (var i = 0; i < allMessagesObjectLength; i++) {
    eachMessage= allMessagesObject[i].content;
    document.getElementById('all_messages').innerHTML += "<li>" + eachMessage + createEditButton(allMessagesObject[i].id) + createDeleteButton(allMessagesObject[i].id) + "</li>";
  }

};

createEditButton = function(messageId) {
    return "<input id ='" + messageId + "'" + "class = 'edits'" + " type = 'submit'" + "value = edit" + ">";

};

createDeleteButton = function(messageId) {
    return "<input id ='" + messageId + "'" + "class = 'deletes'" + " type = 'submit'" + "value = delete" + ">";

};

displayMessagesNil = function(){
  document.getElementById('all_messages').innerHTML = null;

};


editButtonListener = function() {
  console.log('inside edit listener');
  editButtonList = document.getElementsByClassName('edits');
  console.log(editButtonList);
  for(i=0; i<editButtonList.length; i++) {
    editButtonList[i].addEventListener("click", function() {
      updateData(this.id) } );
  }
};

deleteButtonListener = function() {
  console.log('inside delete listener');
  deleteButtonList = document.getElementsByClassName('deletes');
  console.log(deleteButtonList);
  for(i=0; i<deleteButtonList.length; i++) {
    deleteButtonList[i].addEventListener("click", function() {
      deleteData(this.id) } );
  }

};

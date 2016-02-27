
createData = function() {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/create';
  var userInput = document.getElementById('message_box').value;
  xmlhttp.open("POST", url, true);
  xmlhttp.send(userInput);
  document.getElementById('message_box').value = "";
  displayMessagesNil();
  getData();
};

getData = function(){
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/read';
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var allMessages = JSON.parse(xmlhttp.responseText);
      displayMessages(allMessages);
      editButtonListener();
      deleteButtonListener();
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};


updateData = function(messageId) {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/update';
  var edit_message = prompt('edit');
  var jsOwned = JSON.stringify({message:[messageId,edit_message]});
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      displayMessagesNil();
      getData();
      }
    };
  xmlhttp.open("POST", url, true);
  xmlhttp.send(jsOwned);
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

editButtonListener = function() {
  editButtonList = document.getElementsByClassName('edits');
  for(i=0; i<editButtonList.length; i++) {
    editButtonList[i].addEventListener("click", function() {
      updateData(this.id);
     });
  }
};

deleteButtonListener = function() {
  console.log('inside delete listener');
  deleteButtonList = document.getElementsByClassName('deletes');
  console.log(deleteButtonList);
  for(i=0; i<deleteButtonList.length; i++) {
    deleteButtonList[i].addEventListener("click", function() {
      deleteData(this.id);
    });
  }
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


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
  var new_edit_message = JSON.stringify(edit_message);
  console.log(new_edit_message);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById('all_messages').innerHTML = new_edit_message;
      }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send(new_edit_message, messageId);
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
  // editButtonListener = function() {
  //   console.log('inside edit listener');
  //   //
  //   // var edit1 = document.getElementById('edit100');
  //   // // edit1.addEventListener("click", updateData());
  //   // console.log(edit1);
  //
  //   // var elementId = ["edit", messageId].join("");
  //   // var edits = document.getElementsByClassName("edits");
  //   // var edit = edits.getElementById(messageId);
  //   // edit.addEventListener("click", updateData);
  //   // editButtonList = document.getElementsByClassName('edits');
  //   // editButton = document.getElementById('edit101');
  //   // console.log(editButton);
  //   // console.log(editButtonList[0].id);
  //   console.log(document.getElementById('edit102'));
  //   document.getElementById('edit101').addEventListener("click", console.log("hi hannah"));
  // };
  // var edit1 = document.getElementById('edit102');
  // console.log(edit1);
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
    return "<input id ='edit" + messageId + "'" + "class = 'edits'" + " type = 'submit'" + "value = edit" + ">";

};

createDeleteButton = function(messageId) {
    return "<input id ='delete" + messageId + "'" + "class = 'deletes'" + " type = 'submit'" + "value = delete" + ">";

};

displayMessagesNil = function(){
  document.getElementById('all_messages').innerHTML = null;

};


editButtonListener = function() {
  console.log('inside edit listener');
  //
  // var edit1 = document.getElementById('edit100');
  // // edit1.addEventListener("click", updateData());
  // console.log(edit1);

  // var elementId = ["edit", messageId].join("");
  // var edits = document.getElementsByClassName("edits");
  // var edit = edits.getElementById(messageId);
  // edit.addEventListener("click", updateData);
  // editButtonList = document.getElementsByClassName('edits');
  // editButton = document.getElementById('edit101');
  // console.log(editButton);
  // console.log(editButtonList[0].id);
  // console.log(document.getElementById('edit1'));
  // document.getElementById('edit1').addEventListener("click",function() { console.log("hi hannah"); });

  editButtonList = document.getElementsByClassName('edits');
  console.log(editButtonList);
  for(i=0; i<editButtonList.length; i++) {
    editButtonList[i].addEventListener("click", function() {
      updateData() } );
  }
};
// };
//     console.log(editButtonList[i]);
//     editButtonList[i].addEventListener("click", function() {
//       updateData();
//     }, false);
//       console.log('end data Data');
//   }
//   specificButton.addEventListener("click", updateData);
//
//
// }
// createEditButton = function(messageId) {
//   console.log("edit button inside");
//   var editButton = document.createElement("BUTTON");
//   editButton.idName = messageId;
//   var random = document.createTextNode("EDIT");
//   editButton.appendChild(random);
//   // editerButton = document.getElementById("edit_button");
//   // editerButton.appendChild(editButton);
//   document.body.appendChild(editButton);
// };
//
// createDeleteButton = function(messageId) {
//   console.log("delete button inside");
//   var deleteButton = document.createElement("BUTTON");
//   deleteButton.idName = messageId;
//   var random = document.createTextNode("DELETE");
//   deleteButton.appendChild(random);
//   // drilleteButton = document.getElementById("delete_button");
//   // drilleteButton.appendChild(deleteButton);
//   document.body.appendChild(deleteButton);
// };

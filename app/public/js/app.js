//
//
// getData = function() {
//   var xmlhttp = new XMLHttpRequest();
//   var url = '/json/create'
//
// postData = function() {
//   var xmlhttp =
//
// }
//
//
// updateData = function() {
//   var xmlhttp =
// }
//
// deleteData = function() {
//   var xmlhttp =
//
//
// function getData() {
//   var xmlhttp = new XMLHttpRequest();
//   var url = '/json/update';
//   alert('edit');
//   p 'updata DAtata'
//
//   xmlhttp.onreadystatechange = function() {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//       document.getElementById('each_message').innerHTML = xmlhttp.responseText;
//       }
//     }
//     xmlhttp.open("POST", url, true);
//     xmlhttp.send()
//   }
// }
// function editButtonListener(){
//   var edit = document.getElementById('edit_button');
//   edit.addEventListener("click", updateData);
//   console.log('insdie listerenr')
// }
function getData() {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/update';
  console.log('update Data');

  edit_message = prompt('edit');
  console.log(edit_message);
  new_edit_message = JSON.stringify(edit_message);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById('each_message').innerHTML = new_edit_message;
      }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send(new_edit_message);
}


editButtonListener = function() {
  var edit = document.getElementById('edit_button');
  edit.addEventListener("click", getData);
  console.log('inside listener');
};



getData = function() {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/create'

postData = function() {
  var xmlhttp =

}


updateData = function() {
  var xmlhttp =
}

deleteData = function() {
  var xmlhttp =


updateData = function() {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/update';
  alert('edit');
  p 'updata DAtata'

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById('each_message').innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("POST", url, true);
    xmlhttp.send()
  }
}
editButtonListener = function(){
  var edit = document.getElementById('edit_button')
  edit.addEventListener("click", updateData(), true)
  p 'insdie listerenr'
}



getData = function() {
  var xmlhttp = new XMLHttpRequest();
<<<<<<< HEAD
  var url = '/';
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
=======
  var url = '/json/create'
  
>>>>>>> efdbe5adb0cca7645d28183baaf1c9645ecd8f12
}

postData = function() {
  var xmlhttp = new XMLHttpRequest();

}


updateData = function() {
  var xmlhttp =
}

<<<<<<< HEAD
deleteData = function() {
  var xmlhttp =
=======
updateData = function() {
  var xmlhttp = new XMLHttpRequest();
  var url = '/json/update';


  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

    }
  }
>>>>>>> efdbe5adb0cca7645d28183baaf1c9645ecd8f12
}

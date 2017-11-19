// primero cargamos la pagina con el evento load para "avisar" a los eventos de js que esten disponibles
window.addEventListener('load', function(event) {
//   primero declaramos nuestras variables mediante getElementById para obtener los elemento HTML
  var container = document.getElementById('container'),
    addListBox = document.getElementById('add-list-box'),
    saveListBox = document.getElementById('save-list-box'),
    inputList = document.getElementById('input-list'),
    saveList = document.getElementById('save-list');

  addListBox.addEventListener('click', function(event) {
    addListBox.style.display = 'none';
    saveListBox.style.display = 'inline-block';
    // console.log(event.target);
  });
});
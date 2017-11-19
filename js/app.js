// first load the page with load event to "warn" to the events of js to be available
window.addEventListener('load', function(event) {
//   first we declare our variables by getElementById to get the HTML elements
  var container = document.getElementById('container'),
    addListBox = document.getElementById('add-list-box'),
    saveFormBox = document.getElementById('save-form-box'),
    // the form section is here and we can input our text
    inputList = document.getElementById('input-list'),
    saveListBtn = document.getElementById('save-list-btn');
    
  addListBox.addEventListener('click', function(event) {
    event.preventDefault();
    addListBox.style.display = 'none';
    saveFormBox.style.display = 'inline-block';
    // console.log(event.target);
  });

  saveListBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var textValue = inputList.value; 
    var altDiv = document.createElement('div');
    var altListText = document.createTextNode('hola');
    altDiv.setAttribute('class', 'alt-div-container');
    altDiv.appendChild(altListText);
    console.log(event.target);
    

    /* var altDiv = document.createElement('div');
    var altForm = document.createElement('form');
    altDiv.appendChild(altForm);
    var altTitle = document.createElement('textarea');
    altForm.appendChild(altTitle);
    var altIcon = document.createElement('a');
    altIcon.setAttribute('class', 'fa fa-ellipsis-h');
    altDiv.appendChild(altIcon);
    var altTextNode = document.createTextNode(textValue);
    altTitle.appendChild(altTextNode);
    var altCardTask = document.createElement('a');
    altDiv.appendChild(altCardTask);
    var altTaskText = document.createTextNode('Add task ...');
    altCardTask.appendChild(altTaskText); */
  });
});

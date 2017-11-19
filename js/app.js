// first load the page with load event to "warn" to the events of js to be available
window.addEventListener('load', function(event) {
//   first we declare our variables by getElementById to get the HTML elements
  var container = document.getElementById('container'),
    addListBox = document.getElementById('add-list-box'),
    saveListBox = document.getElementById('save-list-box'),
    // the form section is here and we can input our text
    inputList = document.getElementById('input-list'),
    saveListBtn = document.getElementById('save-list-btn');
    
  addListBox.addEventListener('click', function(event) {
    addListBox.style.display = 'none';
    saveListBox.style.display = 'inline-block';
    // console.log(event.target);
  });

  saveListBtn.addEventListener('click', function(event) {
    // we keep the information inside an array that is contained within an object, in order to save the different data put in our list
    saveListBox.style.display = 'inline-block';
    var dataSaveListBtn = {
      lists: []
    };

    var textValue = inputList.value;
    if (textValue) {
      var altDiv = document.createElement('div'),
        altForm = document.createElement('form'),
        altTitle = document.createElement('div'),
        altTextNode = document.createTextNode(textValue),
        altCardTask = document.createElement('a'),
        altTaskText = document.createTextNode('Add task ...');

        // we call the fir element of dataSaveListBtn's object
      dataSaveListBtn.lists.push({
        altTitle: textValue,
      });
    }
  });
});
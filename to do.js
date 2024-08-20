const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
function addTask(){
    if(inputBox.value ===  ''){
        alert('Please enter a task!');
    }else {
        // Create a new list item element
        let li = document.createElement("li");
        // Set the innerHTML of the list item to the value entered in the input box
        li.innerHTML = inputBox.value;
        // Append the newly created list item to the list container
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }


    inputBox.value='';// Clear out the input box once we've added the task to our list
    saveData();
}

listContainer.addEventListener('click', function (e) {
   if (e.target.tagName ===  'LI') {
       e.target.classList.toggle('checked');
       saveData();
   } else if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
   }
   }, false);

function saveData(){
    localStorage.setItem( "tasks", listContainer.innerHTML);
}   

function showTask(){
    listContainer.innerHTML = localStorage.getItem( "tasks");
}

showTask();
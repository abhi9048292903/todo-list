function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

const deleteItem = function(event) {
    console.log('event', event)
    let target = event.target;
    let taskItem = document.getElementById(target.getAttribute('id').split('-')[1]);
    if(confirm('do you want to delete item')) {
        console.log('Delete', '');
        taskItem.style.display = 'none'
    } else {
        console.log('Cancelled', '');
        return;  
    }
}
  function addCreatList () {
    var toTo = document.getElementById('toToDo');
        for(var i = 0; i < 4; i++) {
            let task = document.createElement('DIV');
            task.className = 'task-div'
            task.setAttribute('draggable', true);
            task.ondragstart = function(ev) {
              ev.dataTransfer.setData("text", ev.target.id);
              console.log('tag', ev.target)
            }
            task.id = `00${i}`;
            let textNode = document.createTextNode(`Task ${i}`);
            let btn = document.createElement('BUTTON');
            btn.id = `btn-00${i}`;
            btn.onclick = deleteItem;
            btn.className = 'btn pull-right';
            btn.innerHTML = 'X';
            let toolWrapper = document.createElement('DIV');
            toolWrapper.appendChild(btn);
            task.appendChild(toolWrapper);
            task.appendChild(textNode);
            toTo.appendChild(task);
        }
    }
    addCreatList();
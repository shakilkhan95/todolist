const userInput = document.getElementById('userInput');
const btn = document.getElementById('btn');
const taskList = document.getElementById('taskList');

btn.addEventListener('click', () => {
    const task = userInput.value.trim();

    if(task === "") {
        alert('Please insert task');
        return;
    }

    const li = document.createElement('li');
    li.innerText = task;

    const delBtn = document.createElement('button');
    delBtn.innerText = 'Done';
    delBtn.style.cursor = 'pointer';
    delBtn.style.marginLeft = '10px';

    delBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    userInput.value = "";
});
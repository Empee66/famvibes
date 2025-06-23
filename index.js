const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

const totalCountEl = document.getElementById('total-count');
const completedCountEl = document.getElementById('completed-count');
const deletedCountEl = document.getElementById('deleted-count');

const importantBoxes = [
  document.getElementById('important-1'),
  document.getElementById('important-2'),
  document.getElementById('important-3'),
  document.getElementById('important-4'),  
  document.getElementById('important-5')
];

let totalTasks = 0;
let completedTasks = 0;
let deletedTasks = 0;

function updateCounters() {
  totalCountEl.textContent = totalTasks;
  completedCountEl.textContent = completedTasks;
  deletedCountEl.textContent = deletedTasks;
}


function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  totalTasks++;
  updateCounters();

  const li = document.createElement('li');
  li.className = 'task-item';
  li.setAttribute('draggable', true);

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.onclick = () => {
    li.classList.toggle('completed');
    completedTasks += check.checked ? 1 : -1;
    updateCounters();
  };

  const star = document.createElement('button');
  star.textContent= 'ℹ';
  star.onclick = () => markImportant(text);

  const del = document.createElement('button');
  del.textContent = '🗑️';
  del.onclick = () => {
    li.remove();
    deletedTasks++;
    totalTasks--;
    if (li.classList.contains('completed')) completedTasks--;
    updateCounters();
  };

  actions.appendChild(check);
  actions.appendChild(star);
  actions.appendChild(del);

  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = '';
    const input = document.getElementById("task-list");
    const draggable = document.getElementById("task-list");

  
    draggable.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text", draggable.textContent);
    });
    document.querySelectorAll(".drop-zone").forEach(zone => {
      zone.addEventListener("dragover", e => {
        e.preventDefault();
        zone.classList.add("dragover");
      });

      zone.addEventListener("dragleave", () => {
        zone.classList.remove("dragover");
      });

      zone.addEventListener("drop", e => {
        e.preventDefault();
        
        const data = e.dataTransfer.getData("text");
        console.log(data)
        zone.textContent = data;
        zone.classList.remove("dragover");
      });
    });
}

function markImportant(text) {
  for (const box of importantBoxes) {
    if (!box.textContent) {
      box.textContent = text;
      return;
    }
  }
  alert("Only 5 important tasks allowed.");
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
  if (e.key === 'enter') addTask();
});

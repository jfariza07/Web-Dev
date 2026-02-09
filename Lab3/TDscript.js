const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const list = document.getElementById('todo-list');

const createTodoItem = (text) => {
  const li = document.createElement('li');
  li.className = 'todo-item';

  const left = document.createElement('div');
  left.className = 'todo-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('aria-label', 'Mark as done');

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'delete-btn';
  deleteBtn.setAttribute('aria-label', 'Delete item');
  deleteBtn.textContent = '🗑';

  checkbox.addEventListener('change', (e) => {
    const isDone = e.target.checked;
    li.classList.toggle('is-done', isDone);
  });

  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  left.appendChild(checkbox);
  left.appendChild(span);

  li.appendChild(left);
  li.appendChild(deleteBtn);

  return li;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = input.value.trim();
  if (!value) return;

  const item = createTodoItem(value);
  list.appendChild(item);

  input.value = '';
  input.focus();
});

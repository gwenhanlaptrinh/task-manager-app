import html from '../core/html.js';
import { connect } from '../store/index.js';

function Footer({ tasks, filter }) {
  const activeCount = tasks.filter((task) => !task.done).length;
  console.log(activeCount);

  return html`
    <footer class="task-footer">
      <span class="todo-count">
        <strong>${activeCount}</strong> ${activeCount === 1 ? 'item' : 'items'} left
      </span>
      <ul class="status-filters">
        <li>
          <a class="status-btn ${filter === 'all' ? 'selected' : ''}" href="#/">All</a>
        </li>
        <li>
          <a class="status-btn ${filter === 'active' ? 'selected' : ''}" href="#/active">Active</a>
        </li>
        <li>
          <a class="status-btn ${filter === 'completed' ? 'selected' : ''}" href="#/completed">Completed</a>
        </li>
      </ul>
      <button class="clear-completed">Clear completed</button>
    </footer>
  `;
}

export default connect((state) => ({
  tasks: state.tasks,
  filter: state.filters.status,
}))(Footer);
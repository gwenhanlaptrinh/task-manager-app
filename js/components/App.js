import html from '../core/html.js';
import { connect } from '../store/index.js';
import Progress from './Progress.js';
import TaskList from './TaskList.js';
import Footer from './Footer.js';

function App({ quote }) {
  return html`
    <div class="task-app">
      <header class="task-header">
        <h1 class="app-title">Task Manager App</h1>
        <div class="quote-box" id="quoteBox">
          <i class="fa-solid fa-quote-left"></i>
          <span class="quote-text">
            ${quote.text}${quote.author ? ` — ${quote.author}` : ''}
          </span>
        </div>
      </header>

      <section class="task-section">
        <div class="task-form">
          <div class="task-form-inputs">
            <input type="text" class="task-input title-input" placeholder="Nhập tên task..." value="" />
            <input type="text" class="task-input desc-input" placeholder="Nhập mô tả task (tùy chọn)..." value="" />
            <select class="task-category-select">
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Study">Study</option>
            </select>
          </div>
          <button class="task-form-button">
            <i class="fa-solid fa-plus"></i> Add Task
          </button>
        </div>

        <div class="task-toolbar">
          <div class="search-box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" class="search-input" placeholder="Tìm kiếm task theo tên..." value="" />
          </div>
          <select class="sort-select">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="az">A-Z</option>
          </select>
        </div>

        <div class="task-category-filter">
          <button class="filter-category-btn active" data-category="All">All Categories</button>
          <button class="filter-category-btn" data-category="Work">Work</button>
          <button class="filter-category-btn" data-category="Personal">Personal</button>
          <button class="filter-category-btn" data-category="Study">Study</button>
        </div>
      </section>

      ${Progress()}
      ${TaskList()}
      ${Footer()}
    </div>
  `;
}

export default connect((state) => ({ quote: state.quote }))(App);
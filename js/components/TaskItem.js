import html from "../core/html.js"

export default function TaskItem({ task }) {
    const { id, title, desc, category, done } = task
    return html`
    <li class="task-item ${category.toLowerCase()} ${done && "completed"}" data-id="${id}">
      <div class="task-item-content">
        <input class="task-toggle" type="checkbox" ${done && "checked"}>
        <div class="task-details">
          <h4 class="task-title">${title}</h4>
          ${desc && html`<p class="task-desc">${desc}</p>`}
          <span class="task-badge ${category.toLowerCase()}">${category}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="action-btn edit-btn" title="Chỉnh sửa"><i class="fa-solid fa-pen"></i></button>
        <button class="action-btn destroy-btn" title="Xóa"><i class="fa-solid fa-trash"></i></button>
      </div>
    </li>`
}
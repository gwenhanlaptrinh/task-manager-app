import html from "../core/html.js"
import { connect } from "../store/index.js"
import TaskItem from "./TaskItem.js"

const selector = ({ tasks }) => ({ tasks })

function TaskList({ tasks }) {
  return html`
    <section class="task-main">
      <ul class="task-list">
        ${tasks.map(task => TaskItem({ task }))}
        ${tasks.length === 0 && html`<div class="empty-state">Không có công việc nào được tìm thấy.</div>`}
      </ul>
    </section>`
}

export default connect(selector)(TaskList)
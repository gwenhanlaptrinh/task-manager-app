import html from "../core/html.js"
import { connect } from "../store/index.js"

const selector = ({ tasks }) => ({
  total: tasks.length,
  completed: tasks.filter(t => t.done).length,
})

function Progress({ total, completed }) {
  const percent = total ? Math.round((completed / total) * 100) : 0
  return html`
    <section class="progress-container">
      <div class="progress-info">
        <span>${completed} of ${total} completed</span>
        <span class="progress-percent">${percent}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${percent}%"></div>
      </div>
    </section>`
}

export default connect(selector)(Progress)
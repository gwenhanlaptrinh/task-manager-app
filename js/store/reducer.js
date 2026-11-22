const init = {
  tasks: [
    { id: "1", title: "Học JavaScript", desc: "Ôn Closures và Scope", category: "Study", done: true, createdAt: 1 },
    { id: "2", title: "Làm báo cáo tuần", desc: "", category: "Work", done: false, createdAt: 2 },
    { id: "3", title: "Đi chợ", desc: "Mua rau, trứng", category: "Personal", done: false, createdAt: 3 },
  ],
  filters: { status: "all", category: "All", search: "", sort: "newest" },
  editingId: null,
  quote: { text: "Có công mài sắt có ngày nên kim", author: "" },
}

const actions = {
  // mốc sau sẽ thêm ADD_TASK, TOGGLE_TASK...
}

export default function reducer(state = init, action, args = []) {
  const handler = actions[action]
  return handler ? handler(state, args) : state
}
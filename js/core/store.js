    export default function creatStore (reducer) {
        //tao state de luu tru du lieu bang ham reducer
        const state = reducer();
        const roots = new Map;
        //ham render du lieu
        function render(){
            for (const [root, component] of roots) {
                const output = component()
                root.innerHTML = output;
            }
        }
    return {
        // 4. attach: Dùng để đăng ký một component sẽ được vẽ vào phần tử HTML (root) nào.
        attach(component, root) {
        roots.set(root, component); // Lưu cặp (root -> component) vào Map
        render();                   // Gọi render() ngay để vẽ giao diện lần đầu tiên (Lưu ý: nên gọi render() dạng hàm)
        },

        // 5. connect: Cầu nối để bơm dữ liệu từ Store (state) vào làm props cho Component.
        // - selector: Hàm giúp lọc lấy đúng phần state cần dùng (mặc định lấy hết state).
        // - Áp dụng Currying: Trả về hàm nhận `component` -> Trả về hàm nhận `(props, ...args)`
        connect(selector = state => state) {
        return component => (props, ...args) =>
            // Gọi component và gộp (merge) props truyền từ ngoài vào + state từ Store + tham số phụ khác
            component(Object.assign({}, props, selector(state), ...args));
        },

        // 6. dispatch: Hàm duy nhất dùng để thay đổi dữ liệu (state) trong Store.
        dispatch(action, ...args) {
        // Gọi reducer để tính toán ra state mới dựa trên action truyền vào
        state = reducer(state, action, args); 
        render(); // Tự động gọi render() để vẽ lại toàn bộ giao diện theo state mới
        }
    };
    }

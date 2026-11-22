import createStore from '../core/store.js';
import reducer from './reducer.js';

const { attach, connect, dispatch } = createStore(reducer);

// Gán tạm vào window để mở F12 -> Console gõ dispatch(...) test thử cho nhanh
window.dispatch = dispatch;

export { attach, connect, dispatch };
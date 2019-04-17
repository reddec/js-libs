import App from './components/StatusBadge.html';

const app = new App({
    target: document.body,
    data: {
        text: 'some service',
        status: 'ok',
    }
});

window.app = app;

export default app;


let i = 0;
let status = ['pending', 'ok', 'failed', 'na'];
setInterval(() => {
    app.set({status: status[i % status.length]});
    i++;
}, 3000);
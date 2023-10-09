import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { reportWebVitals } from './reportWebVitals'; // Import the named export 'reportWebVitals'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Nếu bạn muốn đo lường hiệu suất trong ứng dụng của mình, truyền một hàm để ghi kết quả
// (ví dụ: reportWebVitals(console.log))
// hoặc gửi đến một điểm cuối phân tích. Tìm hiểu thêm: https://bit.ly/CRA-vitals
reportWebVitals();

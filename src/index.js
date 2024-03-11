//项目的入口文件


//react核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

//项目的根组件
import App from './App';

//渲染到idweiroot的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

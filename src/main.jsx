import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/ToDoList.jsx'
import ToDoList from './components/ToDoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToDoList/>
  </React.StrictMode>,
)

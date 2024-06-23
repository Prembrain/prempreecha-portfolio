import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <ThemeProvider>
      <App />
     </ThemeProvider>
  </BrowserRouter>,
)

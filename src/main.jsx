// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './containers/Auth/Login.jsx'
import { path } from './utils/constant.js'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path={path.LOGIN} element={<Login />} />

      </Route>
    </Routes>
  </BrowserRouter>

  // </StrictMode>
  ,
)

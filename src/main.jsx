import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.jsx'
import SignIn from './pages/SignIn.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<App />}>
            </Route>
            <Route path="/signin" element={<SignIn />}>
            </Route>
            {/* // <Route path="/signup" element={<SignUp />}>
            // </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouteList } from './routes/RouteList'
import { Home } from './pages/Home'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
//import { initFacebookSdk } from './utils/facebooksdk';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  </React.StrictMode>
)

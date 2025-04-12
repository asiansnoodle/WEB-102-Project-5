import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import Header from './components/Header.jsx'
import AnimeInfo from './components/AnimeInfo.jsx'
import ErrorPage from './components/ErrorPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index={true} element={<App/>}/>
          <Route path=':id' element={<AnimeInfo />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)

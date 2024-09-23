import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About.jsx'
import Newsletter from './Components/Newsletter.jsx'
import Cocktail from './Components/Cocktail.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<App/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Newsletter' element={<Newsletter/>}/>
      <Route path='cocktail/:id' element={<Cocktail/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

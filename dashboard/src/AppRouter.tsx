import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages'
import './App.css'

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
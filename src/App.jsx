import { useState } from 'react'
import Login from './pages/login'
import ContextProvider from './context/contextProvider'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from './components/MainPage';
import Electronic from './pages/Electronic';
import Layout from './Layout';
import Cart from './pages/cart';
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="electronics" element={<Electronic />} />
            <Route path="cart" element={<Cart/>} />
            <Route path="orders" element={<div>Orders Page</div>} />
            <Route path="*" element={<Navigate to="/app" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App

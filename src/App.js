import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import MaisVendidos from './pages/MaisVendidos/MaisVendidos.jsx';
import Pedidos from './pages/Pedidos/Pedidos.jsx';
import Cardapio from './pages/Cardapio/Cardapio.jsx';
import CriarItem from './pages/CriarItem/CriarItem.jsx';
import EditarItem from './pages/EditarItem/EditarItem.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h1 className="sidebar-title">Dashboard</h1>
            <p className="sidebar-subtitle">Integrador</p>
          </div>
          
          <nav className="sidebar-nav">
            <Link to="/" className="nav-item">
              <span className="nav-icon">▣</span>
              <span className="nav-text">Dashboard</span>
            </Link>
            <Link to="/mais-vendidos" className="nav-item">
              <span className="nav-icon">★</span>
              <span className="nav-text">Mais Vendidos</span>
            </Link>
            <Link to="/pedidos" className="nav-item">
              <span className="nav-icon">◈</span>
              <span className="nav-text">Pedidos</span>
            </Link>
            <Link to="/cardapio" className="nav-item">
              <span className="nav-icon">☰</span>
              <span className="nav-text">Cardápio</span>
            </Link>
          </nav>
        </aside>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mais-vendidos" element={<MaisVendidos />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/criar-item" element={<CriarItem />} />
            <Route path="/editar-item" element={<EditarItem />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

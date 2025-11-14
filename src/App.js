import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { ProvedorAutenticacao, useAutenticacao } from './contexts/AuthContext';
import RotaProtegida from './components/ProtectedRoute';
import './App.css';
import Loading from './pages/Loading/Loading';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import MaisVendidos from './pages/MaisVendidos/MaisVendidos.jsx';
import Pedidos from './pages/Pedidos/Pedidos.jsx';
import Cardapio from './pages/Cardapio/Cardapio.jsx';
import CriarItem from './pages/CriarItem/CriarItem.jsx';
import EditarItem from './pages/EditarItem/EditarItem.jsx';

// Componente para rotas que redirecionam usuários autenticados
function RotaPublica({ children }) {
  const { estaAutenticado, carregando } = useAutenticacao();

  if (carregando) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'var(--fundo-principal)',
        color: 'var(--texto-principal)'
      }}>
        Carregando...
      </div>
    );
  }

  if (estaAutenticado) {
    return <Navigate to="/" replace />;
  }

  return children;
}

// Componente que renderiza o layout do dashboard (sidebar + conteúdo)
function LayoutDashboard({ children }) {
  const { sair, usuario } = useAutenticacao();

  return (
    <div className="aplicacao">
      <aside className="barra-lateral">
        <div className="cabecalho-barra-lateral">
          <h1 className="titulo-barra-lateral">Dashboard</h1>
          <p className="subtitulo-barra-lateral">Integrador</p>
        </div>
        
        <nav className="navegacao-barra-lateral">
          <NavLink to="/" className={({ isActive }) => `item-navegacao${isActive ? ' ativo' : ''}`} end>
            <span className="icone-navegacao">▣</span>
            <span className="texto-navegacao">Dashboard</span>
          </NavLink>
          <NavLink to="/pedidos" className={({ isActive }) => `item-navegacao${isActive ? ' ativo' : ''}`}>
            <span className="icone-navegacao">◈</span>
            <span className="texto-navegacao">Pedidos</span>
          </NavLink>
          <NavLink to="/cardapio" className={({ isActive }) => `item-navegacao${isActive ? ' ativo' : ''}`}>
            <span className="icone-navegacao">☰</span>
            <span className="texto-navegacao">Cardápio</span>
          </NavLink>
          <NavLink to="/mais-vendidos" className={({ isActive }) => `item-navegacao${isActive ? ' ativo' : ''}`}>
            <span className="icone-navegacao">★</span>
            <span className="texto-navegacao">Mais Vendidos</span>
          </NavLink>
        </nav>

        <div className="rodape-barra-lateral">
          {usuario && (
            <div className="usuario-barra-lateral">
              {usuario.email}
            </div>
          )}
          <button onClick={sair} className="botao-sair">
            Sair
          </button>
        </div>
      </aside>
      
      <main className="conteudo-principal">
        {children}
      </main>
    </div>
  );
}

function RotasAplicacao() {
  return (
    <Routes>
      {/* Rota pública - Loading */}
      <Route path="/loading" element={<Loading />} />
      
      {/* Rota pública - Login (redireciona se autenticado) */}
      <Route 
        path="/login" 
        element={
          <RotaPublica>
            <Login />
          </RotaPublica>
        } 
      />
      
      {/* Rotas protegidas - Dashboard */}
      <Route
        path="/"
        element={
          <RotaProtegida>
            <LayoutDashboard>
              <Dashboard />
            </LayoutDashboard>
          </RotaProtegida>
        }
      />
      <Route
        path="/mais-vendidos"
        element={
          <RotaProtegida>
            <LayoutDashboard>
              <MaisVendidos />
            </LayoutDashboard>
          </RotaProtegida>
        }
      />
      <Route
        path="/pedidos"
        element={
          <RotaProtegida>
            <LayoutDashboard>
              <Pedidos />
            </LayoutDashboard>
          </RotaProtegida>
        }
      />
      <Route
        path="/cardapio"
        element={
          <RotaProtegida>
            <LayoutDashboard>
              <Cardapio />
            </LayoutDashboard>
          </RotaProtegida>
        }
      />
      <Route
        path="/criar-item"
        element={
          <RotaProtegida>
            <LayoutDashboard>
              <CriarItem />
            </LayoutDashboard>
          </RotaProtegida>
        }
      />
      <Route
        path="/editar-item"
        element={
          <RotaProtegida>
            <LayoutDashboard>
              <EditarItem />
            </LayoutDashboard>
          </RotaProtegida>
        }
      />
      
      {/* Redirecionar rota raiz para loading se não autenticado, ou dashboard se autenticado */}
      <Route path="*" element={<Navigate to="/loading" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <ProvedorAutenticacao>
      <Router>
        <RotasAplicacao />
      </Router>
    </ProvedorAutenticacao>
  );
}

export default App;

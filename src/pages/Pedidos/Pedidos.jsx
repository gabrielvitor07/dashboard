import React, { useMemo, useState } from 'react';
import './Pedidos.css';
import OrderCard, { STATUS } from '../../components/OrderCard';

function Pedidos() {
  const [pedidos, setPedidos] = useState([
    { id: '001', status: STATUS.NOVO, items: [
      { name: 'X-Tudo Tradicional', price: 14.00 },
      { name: 'Suco de Laranja', price: 4.00 }
    ], total: 'R$ 18,00' },
    { id: '002', status: STATUS.EM_ANDAMENTO, items: [
      { name: 'Hot Dog Premium', price: 22.50 }
    ], total: 'R$ 22,50' },
    { id: '003', status: STATUS.PRONTO, items: [
      { name: 'Batata Frita', price: 9.90 },
      { name: 'Refrigerante', price: 6.00 }
    ], total: 'R$ 15,90' },
    { id: '004', status: STATUS.FINALIZADO, items: [
      { name: 'X-Salada', price: 10.00 },
      { name: 'Água', price: 2.00 }
    ], total: 'R$ 12,00' },
    { id: '005', status: STATUS.NOVO, items: [
      { name: 'X-Bacon', price: 19.90 }
    ], total: 'R$ 19,90' },
    { id: '006', status: STATUS.EM_ANDAMENTO, items: [
      { name: 'Combo Kids', price: 25.00 }
    ], total: 'R$ 25,00' }
  ]);

  const [filter, setFilter] = useState('todos');

  const counts = useMemo(() => ({
    todos: pedidos.length,
    novo: pedidos.filter(p => p.status === STATUS.NOVO).length,
    em_andamento: pedidos.filter(p => p.status === STATUS.EM_ANDAMENTO).length,
    pronto: pedidos.filter(p => p.status === STATUS.PRONTO).length,
    finalizado: pedidos.filter(p => p.status === STATUS.FINALIZADO).length,
  }), [pedidos]);

  const filtered = useMemo(() => (
    filter === 'todos' ? pedidos : pedidos.filter(p => p.status === filter)
  ), [filter, pedidos]);

  const updateStatus = (id, nextStatus) => {
    setPedidos(prev => prev.map(p => p.id === id ? { ...p, status: nextStatus } : p));
  };

  const removeOrder = (id) => {
    setPedidos(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="pedidos">
      <div className="page-header">
        <h2>Gestão de Pedidos</h2>
        <p className="page-subtitle">Acompanhe e gerencie todos os pedidos</p>
      </div>

      <div className="status-filters">
        <button className={`filter-btn ${filter === 'todos' ? 'active' : ''}`} onClick={() => setFilter('todos')}>Todos ({counts.todos})</button>
        <button className={`filter-btn ${filter === STATUS.NOVO ? 'active' : ''}`} onClick={() => setFilter(STATUS.NOVO)}>Novo ({counts.novo})</button>
        <button className={`filter-btn ${filter === STATUS.EM_ANDAMENTO ? 'active' : ''}`} onClick={() => setFilter(STATUS.EM_ANDAMENTO)}>Em andamento ({counts.em_andamento})</button>
        <button className={`filter-btn ${filter === STATUS.PRONTO ? 'active' : ''}`} onClick={() => setFilter(STATUS.PRONTO)}>Pronto ({counts.pronto})</button>
        <button className={`filter-btn ${filter === STATUS.FINALIZADO ? 'active' : ''}`} onClick={() => setFilter(STATUS.FINALIZADO)}>Finalizado ({counts.finalizado})</button>
      </div>

      <div className="orders-grid">
        {filtered.map(p => (
          <OrderCard
            key={p.id}
            id={p.id}
            status={p.status}
            items={p.items}
            total={p.total}
            onMarcarPreparo={() => updateStatus(p.id, STATUS.EM_ANDAMENTO)}
            onIniciarPreparo={() => updateStatus(p.id, STATUS.PRONTO)}
            onFinalizar={() => updateStatus(p.id, STATUS.FINALIZADO)}
            onCancelar={() => removeOrder(p.id)}
          />
        ))}
      </div>

    </div>
  );
}

export default Pedidos;

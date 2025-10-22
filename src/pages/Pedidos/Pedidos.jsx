import React, { useState } from 'react';
import './Pedidos.css';

function Pedidos() {
  const [pedidos, setPedidos] = useState([
    { 
      id: '#1234', 
      cliente: 'João Silva', 
      data: '20/10/2025', 
      hora: '10:30', 
      valor: 'R$ 89,90', 
      status: 'Confirmado',
      itens: 3
    },
    { 
      id: '#1233', 
      cliente: 'Maria Santos', 
      data: '20/10/2025', 
      hora: '10:15', 
      valor: 'R$ 125,50', 
      status: 'Relatório',
      itens: 5
    },
    { 
      id: '#1232', 
      cliente: 'Pedro Oliveira', 
      data: '20/10/2025', 
      hora: '09:45', 
      valor: 'R$ 67,80', 
      status: 'Confirmado',
      itens: 2
    },
    { 
      id: '#1231', 
      cliente: 'Ana Costa', 
      data: '20/10/2025', 
      hora: '09:30', 
      valor: 'R$ 156,00', 
      status: 'Confirmado',
      itens: 4
    },
    { 
      id: '#1230', 
      cliente: 'Carlos Mendes', 
      data: '20/10/2025', 
      hora: '09:15', 
      valor: 'R$ 98,40', 
      status: 'Relatório',
      itens: 3
    },
    { 
      id: '#1229', 
      cliente: 'Juliana Lima', 
      data: '19/10/2025', 
      hora: '22:45', 
      valor: 'R$ 78,90', 
      status: 'Confirmado',
      itens: 2
    },
    { 
      id: '#1228', 
      cliente: 'Roberto Alves', 
      data: '19/10/2025', 
      hora: '22:30', 
      valor: 'R$ 134,20', 
      status: 'Confirmado',
      itens: 6
    },
    { 
      id: '#1227', 
      cliente: 'Fernanda Rocha', 
      data: '19/10/2025', 
      hora: '22:00', 
      valor: 'R$ 89,50', 
      status: 'Relatório',
      itens: 3
    }
  ]);

  const getStatusClass = (status) => {
    return status === 'Confirmado' ? 'status-confirmado' : 'status-relatorio';
  };

  return (
    <div className="pedidos">
      <div className="page-header">
        <h2>Gestão de Pedidos</h2>
        <p className="page-subtitle">Acompanhe e gerencie todos os pedidos</p>
      </div>

      <div className="pedidos-actions card">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Buscar pedido por ID ou cliente..." 
            className="search-input"
          />
        </div>
        <div className="action-buttons">
          <button className="btn-primary">Novo Pedido</button>
          <button className="btn-secondary">Exportar</button>
        </div>
      </div>

      <div className="status-filters">
        <button className="filter-btn active">Todos ({pedidos.length})</button>
        <button className="filter-btn">
          Confirmado ({pedidos.filter(p => p.status === 'Confirmado').length})
        </button>
        <button className="filter-btn">
          Relatório ({pedidos.filter(p => p.status === 'Relatório').length})
        </button>
      </div>

      <div className="table-container card">
        <table className="pedidos-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Itens</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td className="pedido-id">{pedido.id}</td>
                <td className="cliente-nome">{pedido.cliente}</td>
                <td>{pedido.data}</td>
                <td>{pedido.hora}</td>
                <td>{pedido.itens}</td>
                <td className="valor-cell">{pedido.valor}</td>
                <td>
                  <span className={getStatusClass(pedido.status)}>
                    {pedido.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons-cell">
                    <button className="btn-icon" title="Ver detalhes">○</button>
                    <button className="btn-icon" title="Editar">✎</button>
                    <button className="btn-icon" title="Imprimir">⎙</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="pagination-btn">Anterior</button>
        <span className="pagination-info">Página 1 de 5</span>
        <button className="pagination-btn">Próxima</button>
      </div>
    </div>
  );
}

export default Pedidos;

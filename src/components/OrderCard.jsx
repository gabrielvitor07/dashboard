import React from 'react';
import './OrderCard.css';

const STATUS = {
  NOVO: 'novo',
  EM_ANDAMENTO: 'em_andamento',
  PRONTO: 'pronto',
  FINALIZADO: 'finalizado'
};

function OrderCard({ id, status, items, total, onMarcarPreparo, onIniciarPreparo, onCancelar, onFinalizar }) {
  const fmt = (v) => {
    if (typeof v === 'number') {
      return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    return v;
  };
  const renderActions = () => {
    if (status === STATUS.NOVO) {
      return (
        <div className="order-actions">
          <button className="btn action-preparo" onClick={onMarcarPreparo}>Marcar como Preparo</button>
          <button className="btn action-cancelar" onClick={onCancelar}>Cancelar</button>
        </div>
      );
    }
    if (status === STATUS.EM_ANDAMENTO) {
      return (
        <div className="order-actions">
          <button className="btn action-preparo" onClick={onIniciarPreparo}>Iniciar Preparo</button>
          <button className="btn action-cancelar" onClick={onCancelar}>Cancelar</button>
        </div>
      );
    }
    if (status === STATUS.PRONTO) {
      return (
        <div className="order-actions">
          <button className="btn action-finalizar" onClick={onFinalizar}>Finalizar Pedido</button>
        </div>
      );
    }
    return null;
  };

  const formatStatusLabel = () => {
    if (status === STATUS.NOVO) return 'Novo Pedido';
    if (status === STATUS.EM_ANDAMENTO) return 'Em andamento';
    if (status === STATUS.PRONTO) return 'Pedido Pronto';
    return 'Pedido Finalizado';
  };

  return (
    <div className="order-card">
      <div className="order-card-header">
        <div className="order-id">Pedido {id}</div>
        <span className={`status-badge status-${status}`}>{formatStatusLabel()}</span>
      </div>

      <div className="order-items">
        {items && items.length > 0 ? (
          <ul>
            {items.map((it, idx) => {
              if (typeof it === 'string') {
                return <li key={idx}>{it}</li>;
              }
              const name = it?.name ?? '';
              const price = it?.price ?? null;
              return (
                <li key={idx}>
                  {name}{price != null ? ` — ${fmt(price)}` : ''}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="empty-items">Sem itens</div>
        )}
      </div>

      <div className="order-footer">
        <div className="order-total">Total: {total}</div>
        {renderActions()}
      </div>
    </div>
  );
}

export { STATUS };
export default OrderCard;

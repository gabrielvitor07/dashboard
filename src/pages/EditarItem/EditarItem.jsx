import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormItem.css';

function EditarItem() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: 'Pizza Margherita',
    categoria: 'Pizzas',
    descricao: 'Molho de tomate, mussarela, tomate fresco e manjericão',
    preco: '45.90',
    disponivel: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item atualizado:', formData);
    // Aqui você adicionaria a lógica para atualizar o item
    navigate('/cardapio');
  };

  const handleCancel = () => {
    navigate('/cardapio');
  };

  return (
    <div className="form-item">
      <div className="form-header">
        <h2>Editar Item</h2>
        <p className="form-subtitle">Atualize as informações do item</p>
      </div>

      <div className="form-container card">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="nome">Nome do Item *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: Pizza Margherita"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="categoria">Categoria *</label>
              <select
                id="categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                required
              >
                <option value="Pizzas">Pizzas</option>
                <option value="Lanches">Lanches</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Acompanhamentos">Acompanhamentos</option>
                <option value="Sobremesas">Sobremesas</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="descricao">Descrição *</label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                placeholder="Descreva os ingredientes e características do item"
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="preco">Preço (R$) *</label>
              <input
                type="number"
                id="preco"
                name="preco"
                value={formData.preco}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="disponivel"
                  checked={formData.disponivel}
                  onChange={handleChange}
                />
                <span>Item disponível para venda</span>
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancelar
            </button>
            <button type="submit" className="btn-confirm">
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>

      <div className="form-info card">
        <h3>Informações do Item</h3>
        <ul>
          <li><strong>ID:</strong> #001</li>
          <li><strong>Criado em:</strong> 15/10/2025</li>
          <li><strong>Última atualização:</strong> 18/10/2025</li>
          <li><strong>Total de vendas:</strong> 245 unidades</li>
        </ul>
      </div>
    </div>
  );
}

export default EditarItem;

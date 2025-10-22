import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormItem.css';

function CriarItem() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    categoria: 'Pizzas',
    descricao: '',
    preco: '',
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
    console.log('Novo item criado:', formData);
    // Aqui você adicionaria a lógica para salvar o item
    navigate('/cardapio');
  };

  const handleCancel = () => {
    navigate('/cardapio');
  };

  return (
    <div className="form-item">
      <div className="form-header">
        <h2>Criar Novo Item</h2>
        <p className="form-subtitle">Adicione um novo item ao cardápio</p>
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
              Criar Item
            </button>
          </div>
        </form>
      </div>

      <div className="form-info card">
        <h3>Dicas para criar um item</h3>
        <ul>
          <li>Use um nome claro e descritivo</li>
          <li>Descreva todos os ingredientes principais</li>
          <li>Defina um preço competitivo</li>
          <li>Marque como disponível apenas se tiver estoque</li>
        </ul>
      </div>
    </div>
  );
}

export default CriarItem;

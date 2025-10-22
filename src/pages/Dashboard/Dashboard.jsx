import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const statsData = [
    { title: 'Total de Vendas', value: 'R$ 45.231,89', icon: '$' },
    { title: 'Pedidos Hoje', value: '127', icon: '◈' },
    { title: 'Clientes Ativos', value: '1.234', icon: '●' },
    { title: 'Produtos', value: '89', icon: '▣' }
  ];

  const quickStatsData = [
    { title: 'Em Preparo', value: '8' },
    { title: 'Prontos', value: '5' },
    { title: 'Aguardando', value: '12' }
  ];

  const chartData = [
    { day: 'Seg', value: 65 },
    { day: 'Ter', value: 80 },
    { day: 'Qua', value: 45 },
    { day: 'Qui', value: 90 },
    { day: 'Sex', value: 75 },
    { day: 'Sáb', value: 95 },
    { day: 'Dom', value: 70 }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Principal</h2>
        <p className="dashboard-subtitle">Visão geral do seu negócio</p>
      </div>

      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-card card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="chart-container card">
          <h3 className="section-title">Vendas da Semana</h3>
          <div className="chart">
            {chartData.map((item, index) => (
              <div key={index} className="chart-bar-container">
                <div 
                  className="chart-bar"
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                >
                  <span className="chart-value">{item.value}</span>
                </div>
                <span className="chart-label">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-stats-container card">
          <h3 className="section-title">Estatísticas Rápidas</h3>
          <div className="quick-stats-list">
            {quickStatsData.map((stat, index) => (
              <div key={index} className="quick-stat-item">
                <h4 className="quick-stat-label">{stat.title}</h4>
                <p className="quick-stat-value">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="recent-activity card">
        <h3 className="section-title">Atividades Recentes</h3>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-time">10:30</span>
            <span className="activity-text">Novo pedido #1234 recebido</span>
          </div>
          <div className="activity-item">
            <span className="activity-time">10:15</span>
            <span className="activity-text">Pedido #1233 confirmado</span>
          </div>
          <div className="activity-item">
            <span className="activity-time">09:45</span>
            <span className="activity-text">Cliente João Silva cadastrado</span>
          </div>
          <div className="activity-item">
            <span className="activity-time">09:30</span>
            <span className="activity-text">Produto "Pizza Margherita" atualizado</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

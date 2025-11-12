import React from 'react';
import './Dashboard.css';

function PainelControle() {
  const dadosEstatisticas = [
    { titulo: 'Total de Vendas', valor: 'R$ 45.231,89', icone: '$' },
    { titulo: 'Pedidos Hoje', valor: '127', icone: '◈' },
    { titulo: 'Clientes Ativos', valor: '1.234', icone: '●' },
    { titulo: 'Produtos', valor: '89', icone: '▣' }
  ];

  const estatisticasRapidas = [
    { titulo: 'Em Preparo', valor: '8' },
    { titulo: 'Prontos', valor: '5' },
    { titulo: 'Aguardando', valor: '12' }
  ];

  const dadosGrafico = [
    { dia: 'Seg', valor: 65 },
    { dia: 'Ter', valor: 80 },
    { dia: 'Qua', valor: 45 },
    { dia: 'Qui', valor: 90 },
    { dia: 'Sex', valor: 75 },
    { dia: 'Sáb', valor: 95 },
    { dia: 'Dom', valor: 70 }
  ];

  const valorMaximo = Math.max(...dadosGrafico.map(item => item.valor));

  return (
    <div className="painel">
      <div className="cabecalho-painel">
        <h2>Painel Principal</h2>
        <p className="subtitulo-painel">Visão geral do seu negócio</p>
      </div>

      <div className="grade-estatisticas">
        {dadosEstatisticas.map((estatistica, indice) => (
          <div key={indice} className="cartao-estatistica cartao">
            <div className="icone-estatistica">{estatistica.icone}</div>
            <div className="conteudo-estatistica">
              <h3 className="titulo-estatistica">{estatistica.titulo}</h3>
              <p className="valor-estatistica">{estatistica.valor}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grade-painel">
        <div className="container-grafico cartao">
          <h3 className="titulo-secao">Vendas da Semana</h3>
          <div className="grafico">
            {dadosGrafico.map((item, indice) => (
              <div key={indice} className="container-barra">
                <div 
                  className="barra"
                  style={{ height: `${(item.valor / valorMaximo) * 100}%` }}
                >
                  <span className="valor-grafico">{item.valor}</span>
                </div>
                <span className="rotulo-grafico">{item.dia}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container-estatisticas-rapidas cartao">
          <h3 className="titulo-secao">Estatísticas Rápidas</h3>
          <div className="lista-estatisticas-rapidas">
            {estatisticasRapidas.map((estatistica, indice) => (
              <div key={indice} className="item-estatistica-rapida">
                <h4 className="rotulo-estatistica-rapida">{estatistica.titulo}</h4>
                <p className="valor-estatistica-rapida">{estatistica.valor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="atividades-recentes cartao">
        <h3 className="titulo-secao">Atividades Recentes</h3>
        <div className="lista-atividades">
          <div className="item-atividade">
            <span className="hora-atividade">10:30</span>
            <span className="texto-atividade">Novo pedido #1234 recebido</span>
          </div>
          <div className="item-atividade">
            <span className="hora-atividade">10:15</span>
            <span className="texto-atividade">Pedido #1233 confirmado</span>
          </div>
          <div className="item-atividade">
            <span className="hora-atividade">09:45</span>
            <span className="texto-atividade">Cliente João Silva cadastrado</span>
          </div>
          <div className="item-atividade">
            <span className="hora-atividade">09:30</span>
            <span className="texto-atividade">Produto "Pizza Margherita" atualizado</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PainelControle;

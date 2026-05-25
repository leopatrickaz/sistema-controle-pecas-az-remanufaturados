// ============================================================
//  AZ Remanufaturados — Configurações Globais
//  Altere apenas este arquivo para mudar URL/chave do Supabase
// ============================================================

const AZ_CONFIG = {
  supabase: {
    url: 'https://egkuoribqndxyjsffxbd.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVna3VvcmlicW5keHlqc2ZmeGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxOTU2NjksImV4cCI6MjA5NDc3MTY2OX0.EQl1UB5th8QLihTV_T-zvLCjHGVbf3W4-OXLiJl-HAU'
  },

  // Módulos disponíveis no sistema
  // Para adicionar um novo módulo: inclua um novo objeto nesta lista
  modulos: [
    {
      id: 'vendas',
      nome: 'Controle de Vendas',
      descricao: 'Empresas, produtos e vendas',
      icone: '🧾',
      cor: '#e8eeff',
      arquivo: '/modulos/vendas.html',
      ativo: true
    },
    {
      id: 'orcamentos',
      nome: 'Orçamentos',
      descricao: 'Gerar orçamentos em PDF',
      icone: '📋',
      cor: '#fef9c3',
      arquivo: '/modulos/orcamentos.html',
      ativo: true
    },
    {
      id: 'estoque',
      nome: 'Estoque',
      descricao: 'Controle de estoque e peças',
      icone: '📦',
      cor: '#dcfce7',
      arquivo: '/modulos/estoque.html',
      ativo: false
    },
    {
      id: 'financeiro',
      nome: 'Financeiro',
      descricao: 'Receitas, despesas e fluxo de caixa',
      icone: '💰',
      cor: '#fce7f3',
      arquivo: '/modulos/financeiro.html',
      ativo: false
    },
    {
      id: 'clientes',
      nome: 'Clientes',
      descricao: 'Cadastro e histórico de clientes',
      icone: '👥',
      cor: '#ede9fe',
      arquivo: '/modulos/clientes.html',
      ativo: false
    },
    {
      id: 'relatorios',
      nome: 'Relatórios',
      descricao: 'Relatórios e análises gerenciais',
      icone: '📊',
      cor: '#ffedd5',
      arquivo: '/modulos/relatorios.html',
      ativo: false
    },
    {
      id: 'garantias',
      nome: 'Garantias',
      descricao: 'Controle de garantias e devoluções',
      icone: '🛡️',
      cor: '#e0f2fe',
      arquivo: '/modulos/garantias.html',
      ativo: false
    }
  ]
};

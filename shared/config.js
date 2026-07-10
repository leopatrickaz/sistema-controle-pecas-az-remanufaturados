// ============================================================
//  AZ Remanufaturados — Configurações Globais
//  Altere apenas este arquivo para mudar URL/chave do Supabase
// ============================================================

const AZ_CONFIG = {
  supabase: {
    url: 'https://egkuoribqndxyjsffxbd.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVna3VvcmlicW5keHlqc2ZmeGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxOTU2NjksImV4cCI6MjA5NDc3MTY2OX0.EQl1UB5th8QLihTV_T-zvLCjHGVbf3W4-OXLiJl-HAU'
  },

  // Módulos comuns, disponíveis em todas as empresas.
  // Para adicionar um novo módulo comum: inclua um novo objeto nesta lista.
  modulosComuns: [
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
  ],

  // Módulo exclusivo da AZ Pesados: pedidos de orçamento enviados pelo site
  moduloSolicitacoes: {
    id: 'solicitacoes',
    nome: 'Solicitações de Orçamento',
    descricao: 'Pedidos de orçamento enviados pelo site',
    icone: '📩',
    cor: '#ffe4cc',
    arquivo: '/modulos/solicitacoes-orcamento.html',
    ativo: true
  },

  // Empresas cadastradas no sistema.
  // Cada empresa tem seu próprio conjunto de tabelas no Supabase
  // (identificado por tablePrefix) e sua própria lista de módulos,
  // garantindo dados e navegação totalmente separados.
  empresas: [
    {
      id: 'remanufaturados',
      nome: 'AZ Remanufaturados',
      nomeCurto: 'AZ',
      nomeSub: 'Remanufaturados',
      descricao: 'Motores de partida e alternadores',
      icone: '⚙',
      logo: '/assets/logos/az-remanufaturados.png',
      tablePrefix: 'az_',
      tema: {
        primary: '#3d5afe',
        primaryLight: '#e8eeff',
        sidebarActive: '#3d5afe',
        gradient: 'linear-gradient(135deg,#2b3a8f 0%,#3d5afe 55%,#5b73ff 100%)'
      }
    },
    {
      id: 'pesados',
      nome: 'AZ Pesados',
      nomeCurto: 'AZ',
      nomeSub: 'Pesados',
      descricao: 'Peças e serviços para veículos pesados',
      icone: '🚛',
      logo: null,
      tablePrefix: 'azp_',
      tema: {
        primary: '#c2661a',
        primaryLight: '#fbe9d9',
        sidebarActive: '#c2661a',
        gradient: 'linear-gradient(135deg,#7c2d12 0%,#c2661a 55%,#e08a3c 100%)'
      }
    }
  ]
};

// Monta a lista de módulos de cada empresa.
// AZ Pesados recebe o módulo de Solicitações de Orçamento como primeiro item.
AZ_CONFIG.empresas.forEach(emp => {
  emp.modulos = emp.id === 'pesados'
    ? [AZ_CONFIG.moduloSolicitacoes, ...AZ_CONFIG.modulosComuns]
    : [...AZ_CONFIG.modulosComuns];
});

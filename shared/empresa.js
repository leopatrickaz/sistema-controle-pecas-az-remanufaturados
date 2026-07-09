// ============================================================
//  AZ Sistema — Empresa Ativa
//  Controla qual empresa (AZ Remanufaturados / AZ Pesados)
//  está selecionada na sessão atual
// ============================================================

const AZ_EMPRESA = {

  SESSION_KEY: 'az_empresa_ativa',

  // Lista de empresas disponíveis
  listar() {
    return AZ_CONFIG.empresas;
  },

  // Busca uma empresa pelo id
  buscar(id) {
    return AZ_CONFIG.empresas.find(e => e.id === id) || null;
  },

  // Empresa selecionada na sessão atual (ou null)
  atual() {
    const id = sessionStorage.getItem(this.SESSION_KEY);
    return id ? this.buscar(id) : null;
  },

  // Define a empresa ativa da sessão
  selecionar(id) {
    if (!this.buscar(id)) throw new Error('Empresa inválida.');
    sessionStorage.setItem(this.SESSION_KEY, id);
  },

  // Remove a empresa selecionada
  limpar() {
    sessionStorage.removeItem(this.SESSION_KEY);
  },

  // Redireciona para a tela inicial se nenhuma empresa estiver selecionada
  // Chamar no topo de cada módulo protegido, junto com AZ_AUTH
  requireSelecionada() {
    if (!this.atual()) {
      window.location.href = '/';
      return false;
    }
    return true;
  }

};

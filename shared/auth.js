// ============================================================
//  AZ Remanufaturados — Autenticação
//  Login, logout e verificação de sessão
// ============================================================

const AZ_AUTH = {

  SESSION_KEY: 'az_logged',

  // Verifica se há sessão ativa
  isLoggedIn() {
    return sessionStorage.getItem(this.SESSION_KEY) === '1';
  },

  // Salva sessão
  setLoggedIn() {
    sessionStorage.setItem(this.SESSION_KEY, '1');
  },

  // Remove sessão e redireciona para login
  logout() {
    sessionStorage.removeItem(this.SESSION_KEY);
    if (typeof AZ_EMPRESA !== 'undefined') AZ_EMPRESA.limpar();
    window.location.href = '/';
  },

  // Redireciona para login se não estiver logado
  // Chamar no topo de cada módulo protegido
  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = '/';
      return false;
    }
    return true;
  },

  // Redireciona para a tela inicial se não estiver logado OU
  // se nenhuma empresa estiver selecionada na sessão.
  // Chamar no topo de cada módulo protegido.
  requireAcesso() {
    if (!this.requireAuth()) return false;
    if (typeof AZ_EMPRESA !== 'undefined' && !AZ_EMPRESA.requireSelecionada()) return false;
    return true;
  },

  // Realiza login consultando Supabase
  async login(usuario, senha) {
    const rows = await AZ_DB.query(
      'az_config',
      '?key=in.(username,password)&select=key,value'
    );

    const cfg = {};
    rows.forEach(r => cfg[r.key] = r.value);

    if (usuario !== cfg.username || senha !== cfg.password) {
      throw new Error('Usuário ou senha incorretos.');
    }

    this.setLoggedIn();
    return true;
  }

};

// ============================================================
//  AZ Remanufaturados — Banco de Dados (Supabase)
//  Funções de acesso reutilizáveis por todos os módulos
// ============================================================

const AZ_DB = {

  // Requisição genérica ao Supabase REST API
  async query(table, queryString = '', method = 'GET', body = null) {
    const { url, key } = AZ_CONFIG.supabase;
    const endpoint = `${url}/rest/v1/${table}${queryString}`;

    const opts = {
      method,
      headers: {
        'apikey': key,
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
        'Prefer': method === 'POST' ? 'return=representation'
                : method === 'PATCH' ? 'return=representation'
                : ''
      }
    };

    if (body) opts.body = JSON.stringify(body);

    const res = await fetch(endpoint, opts);

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }

    if (res.status === 204) return null;
    return res.json();
  },

  // Atalhos semânticos
  async get(table, queryString = '')            { return this.query(table, queryString, 'GET'); },
  async insert(table, body)                     { return this.query(table, '', 'POST', body); },
  async update(table, id, body)                 { return this.query(table, `?id=eq.${id}`, 'PATCH', body); },
  async remove(table, id)                       { return this.query(table, `?id=eq.${id}`, 'DELETE'); }

};

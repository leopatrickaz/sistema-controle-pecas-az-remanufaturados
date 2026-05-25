// ============================================================
//  AZ Remanufaturados — Componentes e Utilitários
//  Funções reutilizáveis por todos os módulos
// ============================================================

// ── Utilitários gerais ───────────────────────────────────────

const uid       = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
const today     = () => new Date().toISOString().slice(0, 10);
const brl       = v  => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(v || 0));
const fmtDate   = d  => { if (!d) return '—'; try { const p = d.split('-'); return `${p[2]}/${p[1]}/${p[0]}`; } catch { return d; } };
const esc       = s  => { if (!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };
const tipoLabel = t  => t === 'motor_partida' ? 'Motor de partida' : 'Alternador';
const pedidoLabel = p => ({ verbal: 'Verbal', email: 'E-mail', whatsapp: 'WhatsApp' }[p] || '');


// ── Toast (notificações) ─────────────────────────────────────

function showToast(msg, type = 'success') {
  let t = document.getElementById('az-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'az-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast ' + type;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}


// ── Loading overlay ──────────────────────────────────────────

function showLoading(show) {
  let el = document.getElementById('az-loading');
  if (!el) {
    el = document.createElement('div');
    el.id = 'az-loading';
    el.className = 'loading-overlay';
    el.innerHTML = '<div class="spinner"></div> Carregando...';
    document.body.appendChild(el);
  }
  el.classList.toggle('show', show);
}


// ── Confirm dialog ───────────────────────────────────────────

let _confirmCallback = null;

function openConfirm(title, desc, onConfirm) {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmDesc').textContent = desc;
  _confirmCallback = onConfirm;
  document.getElementById('confirmOverlay').classList.add('open');
}

function closeConfirm() {
  document.getElementById('confirmOverlay').classList.remove('open');
  _confirmCallback = null;
}

function executeConfirm() {
  if (_confirmCallback) _confirmCallback();
  closeConfirm();
}


// ── Sidebar mobile ───────────────────────────────────────────

function openModulesSidebar() {
  const el = document.getElementById('modulesSidebar');
  if (el) el.style.display = 'block';
}

function closeModulesSidebar() {
  const el = document.getElementById('modulesSidebar');
  if (el) el.style.display = 'none';
}

function toggleMobileMenu() {
  const el = document.getElementById('mobileNav');
  if (el) el.classList.toggle('open');
}

function closeMobileMenu() {
  const el = document.getElementById('mobileNav');
  if (el) el.classList.remove('open');
}


// ── Navegação entre módulos ──────────────────────────────────

function goHome() {
  window.location.href = '/';
}

function abrirModulo(arquivo) {
  window.location.href = arquivo;
}


// ── Renderiza sidebar de módulos (lateral deslizante) ────────

function renderSidebarModulos(moduloAtualId) {
  const container = document.getElementById('sidebarModulosList');
  if (!container) return;

  container.innerHTML = AZ_CONFIG.modulos.map(m => {
    const isAtual = m.id === moduloAtualId;
    const badge = !m.ativo
      ? '<span style="font-size:10px;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.6);padding:1px 7px;border-radius:999px;margin-left:6px">Em breve</span>'
      : '';
    return `
      <div
        onclick="${m.ativo ? `window.location.href='${m.arquivo}'` : ''}"
        style="
          display:flex;align-items:center;gap:12px;padding:12px;
          border-radius:8px;cursor:${m.ativo ? 'pointer' : 'default'};
          color:#fff;margin-bottom:4px;
          background:${isAtual ? 'rgba(61,90,254,0.35)' : 'transparent'};
          opacity:${m.ativo ? '1' : '0.6'};
        "
      >
        <span style="font-size:20px">${m.icone}</span>
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;font-size:14px;display:flex;align-items:center">
            ${esc(m.nome)}${badge}
          </div>
          <div style="font-size:11px;color:rgba(255,255,255,0.5)">${esc(m.descricao)}</div>
        </div>
      </div>`;
  }).join('');
}

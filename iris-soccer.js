/*! Iris Soccer (Free) — football dashboard card for Home Assistant
 *  MIT License · https://github.com/Hollywoodchaos/iris-soccer
 *  Data: ESPN public site API (unofficial, no key needed). Not affiliated with ESPN.
 */
const IS_VERSION = '1.0.0';
const IS_API = 'https://site.api.espn.com/apis';

const IS_LEAGUES = [
  ['pt', 'Portugal', [['por.1', 'Liga Portugal']]],
  ['en', 'England', [['eng.1', 'Premier League'], ['eng.2', 'Championship']]],
  ['es', 'Spain', [['esp.1', 'La Liga'], ['esp.2', 'La Liga 2']]],
  ['it', 'Italy', [['ita.1', 'Serie A'], ['ita.2', 'Serie B']]],
  ['de', 'Germany', [['ger.1', 'Bundesliga'], ['ger.2', '2. Bundesliga']]],
  ['fr', 'France', [['fra.1', 'Ligue 1'], ['fra.2', 'Ligue 2']]],
  ['nl', 'Netherlands', [['ned.1', 'Eredivisie']]],
  ['be', 'Belgium', [['bel.1', 'Pro League']]],
  ['tr', 'Turkey', [['tur.1', 'Süper Lig']]],
  ['sc', 'Scotland', [['sco.1', 'Premiership']]],
  ['br', 'Brazil', [['bra.1', 'Brasileirão']]],
  ['us', 'USA', [['usa.1', 'MLS']]],
  ['eu', 'Europe', [['uefa.champions', 'Champions League'], ['uefa.europa', 'Europa League'], ['uefa.europa.conf', 'Conference League']]],
];

const IS_TXT = {
  pt: {
    country: 'País', comp: 'Competição', ov: 'Visão geral', games: 'Jogos', table: 'Classificação',
    loading: 'A carregar…', error: 'Não foi possível carregar esta competição.', retry: 'Tentar de novo',
    next: 'Próximos', last: 'Últimos resultados', allTeams: 'Todas as equipas', nextGame: 'Próximo jogo',
    lastGame: 'Último resultado', top: 'Classificação', pred: 'Previsão estatística', nogames: 'Sem jogos para mostrar.',
    team: 'Equipa', p: 'J', w: 'V', d: 'E', l: 'D', gd: 'DG', pts: 'Pts', live: 'Ao vivo', form: 'Forma',
    disclaimer: 'Dados: ESPN (API pública não oficial). Previsões estatísticas, sem garantias.',
    country_names: {Portugal: 'Portugal', England: 'Inglaterra', Spain: 'Espanha', Italy: 'Itália', Germany: 'Alemanha', France: 'França', Netherlands: 'Países Baixos', Belgium: 'Bélgica', Turkey: 'Turquia', Scotland: 'Escócia', Brazil: 'Brasil', USA: 'EUA', Europe: 'Europa'},
  },
  en: {
    country: 'Country', comp: 'Competition', ov: 'Overview', games: 'Matches', table: 'Standings',
    loading: 'Loading…', error: 'Could not load this competition.', retry: 'Try again',
    next: 'Upcoming', last: 'Latest results', allTeams: 'All teams', nextGame: 'Next match',
    lastGame: 'Latest result', top: 'Standings', pred: 'Statistical prediction', nogames: 'No matches to show.',
    team: 'Team', p: 'P', w: 'W', d: 'D', l: 'L', gd: 'GD', pts: 'Pts', live: 'Live', form: 'Form',
    disclaimer: 'Data: ESPN (unofficial public API). Statistical predictions, no guarantees.',
    country_names: {},
  },
};

// Original Iris logo: dark sphere, blue filaments, bright core
const IS_LOGO = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cdefs%3E%3CradialGradient id='b'%3E%3Cstop offset='0' stop-color='%232f8bff' stop-opacity='.3'/%3E%3Cstop offset='.55' stop-color='%23060a1c'/%3E%3Cstop offset='1' stop-color='%23020408'/%3E%3C/radialGradient%3E%3CradialGradient id='c'%3E%3Cstop offset='0' stop-color='%23fff'/%3E%3Cstop offset='.25' stop-color='%23fff' stop-opacity='.95'/%3E%3Cstop offset='.5' stop-color='%239fdcff' stop-opacity='.65'/%3E%3Cstop offset='1' stop-color='%232f8bff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='20' cy='20' r='19' fill='url(%23b)' stroke='%239fdcff' stroke-opacity='.55' stroke-width='1.2'/%3E%3Cpath d='M20 20Q27.8 23.3 35.4 21.9M20 20Q26.1 26.9 34.1 29.0M20 20Q22.6 29.5 29.4 35.3M20 20Q18.5 28.4 21.6 35.4M20 20Q14.6 27.4 14.3 35.7M20 20Q11.3 24.7 7.2 32.5M20 20Q11.5 20.4 5.3 25.0M20 20Q11.5 16.4 3.4 18.0M20 20Q13.5 12.6 4.9 10.3M20 20Q17.7 11.8 11.9 6.8M20 20Q21.6 11.0 18.3 3.4M20 20Q25.8 12.0 26.1 3.2M20 20Q27.5 15.9 31.1 9.1M20 20Q29.2 19.6 35.8 14.6' fill='none' stroke='%232f8bff' stroke-opacity='.35' stroke-width='2.6' stroke-linecap='round'/%3E%3Cpath d='M20 20Q27.8 23.3 35.4 21.9M20 20Q26.1 26.9 34.1 29.0M20 20Q22.6 29.5 29.4 35.3M20 20Q18.5 28.4 21.6 35.4M20 20Q14.6 27.4 14.3 35.7M20 20Q11.3 24.7 7.2 32.5M20 20Q11.5 20.4 5.3 25.0M20 20Q11.5 16.4 3.4 18.0M20 20Q13.5 12.6 4.9 10.3M20 20Q17.7 11.8 11.9 6.8M20 20Q21.6 11.0 18.3 3.4M20 20Q25.8 12.0 26.1 3.2M20 20Q27.5 15.9 31.1 9.1M20 20Q29.2 19.6 35.8 14.6' fill='none' stroke='%239fdcff' stroke-width='.9' stroke-linecap='round'/%3E%3Ccircle cx='20' cy='20' r='8.5' fill='url(%23c)'/%3E%3Cellipse cx='14' cy='11.5' rx='5' ry='3' fill='%23fff' opacity='.22'/%3E%3C/svg%3E\")";

const isEsc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const isYmd = (d) => d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');

class IrisSoccer extends HTMLElement {
  setConfig(config) {
    this._cfg = {title: 'IRIS SOCCER', lang: 'pt', country: 'pt', league: 'por.1', form_games: 5, refresh_minutes: 10, ...config};
    const c = Math.max(0, IS_LEAGUES.findIndex((x) => x[0] === this._cfg.country));
    const leagueOk = IS_LEAGUES[c][2].some((l) => l[0] === this._cfg.league);
    this._st = this._st || {c, lg: leagueOk ? this._cfg.league : IS_LEAGUES[c][2][0][0], view: 'ov', mode: 'next', team: ''};
    this._cache = this._cache || {};
    if (!this.shadowRoot) this.attachShadow({mode: 'open'});
    this._draw();
  }

  getCardSize() { return 8; }
  static getStubConfig() { return {country: 'pt', league: 'por.1', lang: 'pt'}; }

  connectedCallback() {
    if (!this._cfg) return;
    this._load(false);
    clearInterval(this._timer);
    this._timer = setInterval(() => this._load(true), Math.max(1, this._cfg.refresh_minutes) * 60000);
  }
  disconnectedCallback() { clearInterval(this._timer); }

  get _t() { return IS_TXT[this._cfg.lang] || IS_TXT.en; }

  async _json(url) {
    const ctl = new AbortController();
    const to = setTimeout(() => ctl.abort(), 15000);
    try {
      const r = await fetch(url, {signal: ctl.signal});
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return await r.json();
    } finally { clearTimeout(to); }
  }

  _days(calendar, now) {
    const out = new Map();
    const limit = new Date(now.getTime() + 5 * 864e5);
    (calendar || []).forEach((x) => {
      if (typeof x === 'string') { const d = new Date(x); if (!isNaN(d)) out.set(isYmd(d), d); return; }
      const a = new Date(x.startDate || ''); const b = new Date(x.endDate || x.startDate || '');
      if (isNaN(a)) return;
      const end = isNaN(b) ? a : (b < limit ? b : limit);
      for (let d = new Date(a), k = 0; d <= end && k < 40; d = new Date(d.getTime() + 864e5), k++) out.set(isYmd(d), new Date(d));
    });
    return [...out.values()].sort((p, q) => p - q);
  }

  async _load(force) {
    const lg = this._st.lg;
    const c = this._cache[lg];
    if (c && !force && Date.now() - c.t < 6e5) { this._draw(); return; }
    this._loading = true; this._err = null; if (!c) this._draw();
    try {
      const sb = `${IS_API}/site/v2/sports/soccer/${lg}/scoreboard`;
      const [stand, base] = await Promise.all([
        this._json(`${IS_API}/v2/sports/soccer/${lg}/standings`).catch(() => null),
        this._json(sb).catch(() => null),
      ]);
      const now = new Date();
      const cal = this._days(base && base.leagues && base.leagues[0] && base.leagues[0].calendar, now);
      const days = cal.filter((d) => d <= now).slice(-14).concat(cal.filter((d) => d > now).slice(0, 4));
      const rest = await Promise.all(days.map((d) => this._json(`${sb}?dates=${isYmd(d)}`).catch(() => null)));
      const all = rest.filter(Boolean).concat(base ? [base] : []);
      if (!stand && !all.length) throw new Error('no response');
      this._cache[lg] = {t: Date.now(), tables: this._parseTables(stand), games: this._parseGames(all.flatMap((x) => x.events || []))};
    } catch (e) { this._err = this._t.error; }
    this._loading = false; this._draw();
  }

  _parseTables(s) {
    if (!s) return [];
    const kids = s.children && s.children.length ? s.children : [s];
    return kids.filter((k) => k.standings && k.standings.entries).map((k) => ({
      name: kids.length > 1 ? k.name : '',
      rows: k.standings.entries.map((e) => {
        const m = {}; (e.stats || []).forEach((x) => { m[x.name] = x; });
        const v = (n) => (m[n] ? m[n].value : 0);
        return {id: String(e.team.id), name: e.team.shortDisplayName || e.team.displayName,
          logo: e.team.logos && e.team.logos[0] ? e.team.logos[0].href : '',
          rank: v('rank'), p: v('gamesPlayed'), w: v('wins'), d: v('ties'), l: v('losses'),
          gf: v('pointsFor'), ga: v('pointsAgainst'), gd: m.pointDifferential ? m.pointDifferential.displayValue : '', pts: v('points')};
      }).sort((a, b) => (a.rank && b.rank ? a.rank - b.rank : b.pts - a.pts)),
    }));
  }

  _parseGames(events) {
    const seen = new Set();
    return events.filter((e) => !seen.has(e.id) && seen.add(e.id)).map((e) => {
      const c = (e.competitions || [])[0]; if (!c) return null;
      const t = {}; (c.competitors || []).forEach((x) => { t[x.homeAway] = x; });
      if (!t.home || !t.away) return null;
      const side = (x) => ({id: String(x.team.id), name: x.team.shortDisplayName || x.team.displayName,
        logo: x.team.logo || (x.team.logos && x.team.logos[0] ? x.team.logos[0].href : ''),
        score: x.score == null ? '' : String(x.score.displayValue != null ? x.score.displayValue : x.score)});
      const ty = (c.status && c.status.type) || (e.status && e.status.type) || {};
      return {id: e.id, date: new Date(e.date), state: ty.state || (ty.completed ? 'post' : 'pre'),
        detail: ty.shortDetail || '', home: side(t.home), away: side(t.away)};
    }).filter(Boolean).sort((a, b) => a.date - b.date);
  }

  get _data() { return this._cache[this._st.lg]; }
  get _rows() { const d = this._data; return d ? d.tables.flatMap((t) => t.rows) : []; }

  _result(g, id) {
    const h = g.home.id === id; const a = +(h ? g.home.score : g.away.score); const b = +(h ? g.away.score : g.home.score);
    return a > b ? 'W' : a < b ? 'L' : 'D';
  }
  _recent(id) {
    const d = this._data; if (!d) return [];
    return d.games.filter((g) => g.state === 'post' && (g.home.id === id || g.away.id === id)).slice(-this._cfg.form_games);
  }

  // Poisson model from league goals + team strength + small form factor
  _predict(g) {
    const rows = this._rows; const by = {}; rows.forEach((r) => { by[r.id] = r; });
    const H = by[g.home.id]; const A = by[g.away.id];
    if (!H || !A || !H.p || !A.p) return null;
    const tp = rows.reduce((a, r) => a + r.p, 0); const tg = rows.reduce((a, r) => a + r.gf, 0);
    if (!tp || !tg) return null;
    const avg = tg / tp; const k = 3;
    const att = (r) => ((r.gf + avg * k) / (r.p + k)) / avg;
    const def = (r) => ((r.ga + avg * k) / (r.p + k)) / avg;
    const ff = (r) => {
      const gs = this._recent(r.id); if (!gs.length) return 1;
      const ppg = gs.reduce((a, x) => a + ({W: 3, D: 1, L: 0}[this._result(x, r.id)]), 0) / gs.length;
      return Math.max(0.9, Math.min(1.1, 1 + 0.08 * (ppg - 1.4) / 1.4));
    };
    const lh = Math.max(0.2, Math.min(4, avg * att(H) * def(A) * 1.12 * ff(H)));
    const la = Math.max(0.2, Math.min(4, avg * att(A) * def(H) * 0.9 * ff(A)));
    const pm = (l, n) => { let p = Math.exp(-l); for (let i = 1; i <= n; i++) p *= l / i; return p; };
    let ph = 0; let pd = 0; let pa = 0; let best = 0; let bs = [1, 1];
    for (let i = 0; i <= 8; i++) for (let j = 0; j <= 8; j++) {
      const p = pm(lh, i) * pm(la, j);
      if (i > j) ph += p; else if (i === j) pd += p; else pa += p;
      if (p > best) { best = p; bs = [i, j]; }
    }
    const t = ph + pd + pa;
    return {h: Math.round(ph / t * 100), d: Math.round(pd / t * 100), a: Math.round(pa / t * 100), s: bs};
  }

  _predBar(g) {
    const p = this._predict(g); if (!p) return '';
    return `<div class="pr"><div class="pb"><i class="b1" style="width:${p.h}%">${p.h}%</i><i class="bx" style="width:${p.d}%">${p.d}%</i><i class="b2" style="width:${p.a}%">${p.a}%</i></div><div class="ps">${this._t.pred}: ${p.s[0]} - ${p.s[1]}</div></div>`;
  }

  _fmtDate(d) {
    const loc = this._cfg.lang === 'pt' ? 'pt-PT' : undefined;
    return d.toLocaleDateString(loc, {day: '2-digit', month: '2-digit'}) + ' ' + d.toLocaleTimeString(loc, {hour: '2-digit', minute: '2-digit'});
  }

  _gameCard(g, pred) {
    const t = this._t;
    const mid = g.state === 'pre' ? `<span class="dt">${isEsc(this._fmtDate(g.date))}</span>`
      : `<b class="sc ${g.state === 'in' ? 'live' : ''}">${isEsc(g.home.score)} - ${isEsc(g.away.score)}</b>${g.state === 'in' ? `<em class="lv">${t.live} ${isEsc(g.detail)}</em>` : `<em class="dt">${isEsc(this._fmtDate(g.date))}</em>`}`;
    return `<div class="gw"><div class="gr"><span class="tm r">${isEsc(g.home.name)} ${g.home.logo ? `<img src="${isEsc(g.home.logo)}" alt="">` : ''}</span><span class="mid">${mid}</span><span class="tm">${g.away.logo ? `<img src="${isEsc(g.away.logo)}" alt="">` : ''} ${isEsc(g.away.name)}</span></div>${pred ? this._predBar(g) : ''}</div>`;
  }

  _viewOverview() {
    const d = this._data; const t = this._t; const now = Date.now();
    const next = d.games.find((g) => g.state !== 'post' && g.date.getTime() > now - 3 * 36e5);
    const last = [...d.games].reverse().find((g) => g.state === 'post');
    const rows = (d.tables[0] ? d.tables[0].rows : []).slice(0, 6);
    return `<div class="grid">
      <section class="box"><h3>${t.nextGame}</h3>${next ? this._gameCard(next, true) : `<p class="mut">${t.nogames}</p>`}</section>
      <section class="box"><h3>${t.lastGame}</h3>${last ? this._gameCard(last, false) : `<p class="mut">${t.nogames}</p>`}</section>
      <section class="box wide"><h3>${t.top}</h3>${this._tableHtml(rows)}</section></div>`;
  }

  _viewGames() {
    const d = this._data; const t = this._t; const st = this._st; const now = Date.now();
    const teams = this._rows.slice().sort((a, b) => a.name.localeCompare(b.name));
    const sel = `<select class="tf" data-a="team"><option value="">${t.allTeams}</option>${teams.map((r) => `<option value="${isEsc(r.id)}"${st.team === r.id ? ' selected' : ''}>${isEsc(r.name)}</option>`).join('')}</select>`;
    let list = d.games.filter((g) => !st.team || g.home.id === st.team || g.away.id === st.team);
    if (st.mode === 'next') list = list.filter((g) => g.state !== 'post' && g.date.getTime() > now - 3 * 36e5).slice(0, 12);
    else list = list.filter((g) => g.state === 'post').slice(-12).reverse();
    const chips = `<button class="chip ${st.mode === 'next' ? 'on' : ''}" data-a="mode" data-v="next">${t.next}</button><button class="chip ${st.mode === 'last' ? 'on' : ''}" data-a="mode" data-v="last">${t.last}</button>`;
    return `<div class="bar">${sel}${chips}</div><div class="games">${list.length ? list.map((g) => this._gameCard(g, g.state === 'pre')).join('') : `<p class="mut full">${t.nogames}</p>`}</div>`;
  }

  _tableHtml(rows) {
    const t = this._t;
    return `<table><thead><tr><th>#</th><th class="l">${t.team}</th><th>${t.p}</th><th>${t.w}</th><th>${t.d}</th><th>${t.l}</th><th>${t.gd}</th><th>${t.pts}</th><th class="fm">${t.form}</th></tr></thead><tbody>${rows.map((r, i) => `<tr><td>${r.rank || i + 1}</td><td class="l">${r.logo ? `<img src="${isEsc(r.logo)}" alt="">` : ''}${isEsc(r.name)}</td><td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td>${isEsc(r.gd)}</td><td><b>${r.pts}</b></td><td class="fm">${this._recent(r.id).map((g) => { const x = this._result(g, r.id); return `<i class="dot ${x}">${x}</i>`; }).join('')}</td></tr>`).join('')}</tbody></table>`;
  }

  _viewTable() {
    const d = this._data;
    return d.tables.map((tb) => `<section class="box wide">${tb.name ? `<h3>${isEsc(tb.name)}</h3>` : ''}${this._tableHtml(tb.rows)}</section>`).join('') || `<p class="mut">${this._t.nogames}</p>`;
  }

  _countryName(x) { const m = this._t.country_names; return m[x[1]] || x[1]; }

  _draw() {
    if (!this.shadowRoot || !this._cfg) return;
    const t = this._t; const st = this._st; const comp = IS_LEAGUES[st.c];
    const menu = [['ov', t.ov, 'mdi:view-dashboard'], ['games', t.games, 'mdi:calendar-month'], ['table', t.table, 'mdi:format-list-numbered']]
      .map((m) => `<button class="mi ${st.view === m[0] ? 'on' : ''}" data-a="view" data-v="${m[0]}"><ha-icon icon="${m[2]}"></ha-icon><span>${m[1]}</span></button>`).join('');
    const cs = IS_LEAGUES.map((x, i) => `<option value="${i}"${i === st.c ? ' selected' : ''}>${isEsc(this._countryName(x))}</option>`).join('');
    const ls = comp[2].map((l) => `<option value="${l[0]}"${l[0] === st.lg ? ' selected' : ''}>${isEsc(l[1])}</option>`).join('');
    let body;
    if (!this._data) body = this._err ? `<div class="msg">${isEsc(this._err)}<br><button class="chip" data-a="retry">${t.retry}</button></div>` : `<div class="msg">${t.loading}</div>`;
    else body = st.view === 'games' ? this._viewGames() : st.view === 'table' ? this._viewTable() : this._viewOverview();
    this.shadowRoot.innerHTML = `<style>${IS_CSS}</style><ha-card><div class="top"><div class="brand"><span class="logo"></span><span class="ttl">${isEsc(this._cfg.title)}</span></div>
      <div class="sel"><label>${t.country}<select data-a="country">${cs}</select></label><label>${t.comp}<select data-a="league">${ls}</select></label></div></div>
      <div class="lay"><nav class="side">${menu}</nav><main class="main">${body}${this._data ? `<p class="disc">${t.disclaimer}</p>` : ''}</main></div></ha-card>`;
    this._bind();
  }

  _bind() {
    const r = this.shadowRoot; const st = this._st;
    r.querySelectorAll('[data-a]').forEach((el) => {
      const a = el.dataset.a;
      if (el.tagName === 'SELECT') {
        el.onchange = () => {
          if (a === 'country') { st.c = +el.value; st.lg = IS_LEAGUES[st.c][2][0][0]; st.team = ''; this._load(false); this._draw(); }
          else if (a === 'league') { st.lg = el.value; st.team = ''; this._load(false); this._draw(); }
          else if (a === 'team') { st.team = el.value; this._draw(); }
        };
      } else {
        el.onclick = () => {
          if (a === 'view') st.view = el.dataset.v;
          else if (a === 'mode') st.mode = el.dataset.v;
          else if (a === 'retry') { this._load(true); return; }
          this._draw();
        };
      }
    });
  }
}

const IS_CSS = `
:host{display:block}
ha-card{--ac:#e3b23c;--ac2:#f0c75a;--bg:#0c1220;--bx:#121a2c;--ln:rgba(255,255,255,.6);--tx:#e8eefc;--mu:#8a92a3;
  background:var(--bg);color:var(--tx);overflow:hidden;border-radius:16px;font-family:'Segoe UI',Roboto,system-ui,sans-serif}
.top{background:linear-gradient(120deg,#8a6414,#e3b23c 62%,#f0c75a);padding:12px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;color:#1b1405}
.brand{display:flex;align-items:center;gap:12px}
.logo{width:42px;height:42px;flex:none;border-radius:50%;background:${IS_LOGO} center/contain no-repeat;box-shadow:0 0 8px rgba(47,139,255,.5),0 2px 6px rgba(0,0,0,.4);animation:pulse 2.2s ease-in-out infinite}
@keyframes pulse{0%,100%{transform:scale(1);box-shadow:0 0 8px 0 rgba(47,139,255,.45),0 2px 6px rgba(0,0,0,.4)}50%{transform:scale(1.1);box-shadow:0 0 26px 5px rgba(130,200,255,.95),0 2px 6px rgba(0,0,0,.4)}}
.ttl{font-size:15px;font-weight:800;letter-spacing:3px;white-space:nowrap}
.sel{display:flex;gap:10px;align-items:flex-end}
.sel label{display:flex;flex-direction:column;gap:3px;font-size:10px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase}
select{background:#0c1220;color:var(--tx);border:1px solid #2a3550;border-radius:10px;padding:8px 10px;font:inherit;font-size:13px;letter-spacing:0;text-transform:none;min-width:150px}
.lay{display:grid;grid-template-columns:176px 1fr;gap:14px;padding:14px}
.side{display:flex;flex-direction:column;gap:8px}
.mi{display:flex;align-items:center;gap:10px;background:#1a2336;color:var(--tx);border:0;border-radius:12px;padding:12px;font:inherit;font-size:13px;cursor:pointer;text-align:left}
.mi.on{background:var(--ac);color:#1b1405;font-weight:700}
.mi ha-icon{--mdc-icon-size:20px}
.main{background:var(--bx);border-radius:14px;padding:14px;min-width:0}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.wide{grid-column:1/-1}
.box h3{margin:0 0 8px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--ac2)}
.bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:12px}
.tf{min-width:170px}
.chip{background:#1a2336;color:var(--tx);border:0;border-radius:999px;padding:8px 14px;font:inherit;font-size:12.5px;font-weight:700;cursor:pointer}
.chip.on{background:var(--ac);color:#1b1405}
.games{display:grid;grid-template-columns:1fr;gap:10px}
.gw{border:1px solid var(--ln);border-radius:14px;padding:10px 10px 12px;background:rgba(255,255,255,.025);min-width:0}
.gr{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;font-size:13px}
.tm{display:flex;align-items:center;gap:6px;min-width:0}.tm.r{justify-content:flex-end;text-align:right}
.tm img,td img{width:20px;height:20px;object-fit:contain;flex:none}
.mid{display:flex;flex-direction:column;align-items:center;font-size:11px;color:var(--mu);white-space:nowrap}
.sc{font-size:16px;color:var(--tx)}.sc.live{color:#ff5a5a}.lv{color:#ff5a5a;font-style:normal;font-weight:700}.dt{font-style:normal}
.pr{max-width:340px;margin:8px auto 0}
.pb{display:flex;height:14px;border-radius:7px;overflow:hidden;font-size:9.5px;font-weight:800;line-height:14px;text-align:center}
.pb i{font-style:normal;overflow:hidden;white-space:nowrap}
.b1{background:var(--ac);color:#1b1405}.bx{background:#4a556f}.b2{background:#2d5bd6}
.ps{margin-top:4px;font-size:10.5px;color:var(--mu)}
table{width:100%;border-collapse:collapse;font-size:12.5px;color:inherit}
th{font-size:10px;letter-spacing:1px;color:var(--mu);text-transform:uppercase;padding:4px 6px;text-align:center}
td{padding:6px;text-align:center;border-top:1px solid rgba(255,255,255,.07)}
th.l,td.l{text-align:left}td.l{display:flex;align-items:center;gap:8px}
.dot{display:inline-block;width:17px;height:17px;border-radius:50%;line-height:17px;font-size:9px;font-weight:800;font-style:normal;margin-right:2px;color:#fff}
.dot.W{background:#1f9d55}.dot.D{background:#6b7490}.dot.L{background:#d64545}
.msg,.mut{color:var(--mu);text-align:center;padding:24px 8px}.full{grid-column:1/-1}
.disc{margin:14px 0 0;font-size:10px;color:var(--mu);text-align:center}
@media(min-width:1000px){.games{grid-template-columns:repeat(2,minmax(0,1fr));align-items:start}}
@media(min-width:1500px){.games{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:780px){
  .lay{grid-template-columns:1fr;padding:10px}
  .sel{display:grid;grid-template-columns:1fr 1fr;width:100%}.sel select{min-width:0;width:100%}
  .side{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
  .mi{flex-direction:column;justify-content:center;text-align:center;gap:3px;padding:8px 4px;font-size:11.5px}
  .grid{grid-template-columns:1fr}.ttl{font-size:13px;letter-spacing:2px}.logo{width:34px;height:34px}
  .fm{display:none}.gw{padding:8px 6px 10px}.tf{min-width:0;width:100%}
}`;

if (!customElements.get('iris-soccer')) customElements.define('iris-soccer', IrisSoccer);
window.customCards = window.customCards || [];
window.customCards.push({type: 'iris-soccer', name: 'Iris Soccer', description: 'Football dashboard: matches, standings and statistical predictions (free).'});
console.info(`%c IRIS SOCCER %c v${IS_VERSION} `, 'background:#e3b23c;color:#1b1405;font-weight:700', 'background:#121a2c;color:#fff');

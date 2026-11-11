'use strict';

const PRODUCT = document.body.dataset.product;
const BRAND = {
  workgig: 'WorkGig',
  invesnetwork: 'InvesNetwork',
  brandpilot: 'BrandPilot'
}[PRODUCT];
const DESIGN = {
  workgig: 'WKG-PROT-001',
  invesnetwork: 'INV-PROT-001',
  brandpilot: 'BPL-PROT-001'
}[PRODUCT];
const $ = s => document.querySelector(s),
  $$ = s => [...document.querySelectorAll(s)];
const esc = v => String(v !== null && v !== void 0 ? v : '').replace(/[&<>"']/g, c => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[c]);
const L = (key, params = {}) => {
  var _key;
  return esc(Object.entries(params).reduce((s, [k, v]) => s.split('{' + k + '}').join(String(v)), (_key = (window.EN || {})[key]) !== null && _key !== void 0 ? _key : key));
};
const plain = key => {
  var _key2;
  return (_key2 = (window.EN || {})[key]) !== null && _key2 !== void 0 ? _key2 : key;
};
const A = (route, label, cls = 'textlink') => `<a href="#${route}" class="${cls}">${L(label)}</a>`;
const B = (action, label, data = '', cls = 'btn secondary') => `<button type="button" class="${cls}" data-action="${action}" data-value="${esc(data)}">${L(label)}</button>`;
const pill = (text, cls = '') => `<span class="pill ${cls}">${L(text)}</span>`;
const img = (name, alt, cls = '') => `<img src="assets/${name}.jpg" alt="${L(alt)}" class="${cls}">`;
const field = (label, name, value = '', type = 'text', extra = '') => `<label class="field">${L(label)}<input type="${type}" name="${name}" value="${esc(value)}" ${extra}></label>`;
const select = (label, name, options, value = '') => `<label class="field">${L(label)}<select name="${name}">${options.map(o => `<option value="${esc(o)}" ${o === value ? 'selected' : ''}>${L(o)}</option>`).join('')}</select></label>`;
const textarea = (label, name, value = '', extra = '') => `<label class="field">${L(label)}<textarea name="${name}" ${extra}>${esc(value)}</textarea></label>`;
const check = (label, name, checked = false, required = false) => `<label class="check"><input type="checkbox" name="${name}" ${checked ? 'checked' : ''} ${required ? 'required' : ''}><span>${L(label)}</span></label>`;
const money = v => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
}).format(v);
const num = v => new Intl.NumberFormat('en-US').format(v);
const pagehead = (eyebrow, title, sub = '', action = '') => `<div class="pagehead"><div><p class="eyebrow">${L(eyebrow)}</p><h1 tabindex="-1">${L(title)}</h1>${sub ? `<p>${L(sub)}</p>` : ''}</div>${action}</div>`;
const page = (content, cls = '') => `<main id="main" class="page ${cls}"><div class="wrap">${content}</div></main>`;
const crumb = (label, parent = 'home', parentLabel = 'Home') => `<div class="breadcrumb">${A(parent, parentLabel, '')}<span>/</span><span>${L(label)}</span></div>`;
const stepper = (labels, n) => `<div class="stepper" aria-label="${L('Progress')}">${labels.map((s, i) => `<span class="${i + 1 <= n ? 'current' : ''}" ${i + 1 === n ? 'aria-current="step"' : ''}>${i + 1}. ${L(s)}</span>`).join('')}</div>`;
const notice = (title, body = '', cls = '') => `<div class="notice ${cls}"><b>${L(title)}</b>${body ? `<p>${L(body)}</p>` : ''}</div>`;
const stat = (label, value, note = 'Example data · Last 7 days') => `<div class="stat"><label>${L(label)}</label><strong>${esc(value)}</strong><small>${L(note)}</small></div>`;
const example = () => pill('Example data');
let currentRoute = 'home',
  routeArg = '',
  toastTimer;
let catalogLimit = 40;
const NAV = {
  workgig: [['search', 'Find pros'], ['jobs', 'My jobs'], ['pro', 'For pros'], ['homegig', 'HomeGig'], ['pricing', 'Plans'], ['modules', 'All modules']],
  invesnetwork: [['browse', 'Properties'], ['dashboard', 'Dashboard'], ['my-listings', 'My listings'], ['pricing', 'Plans'], ['modules', 'All modules']],
  brandpilot: [['dashboard', 'Dashboard'], ['forms', 'Forms'], ['leads', 'Leads'], ['automations', 'Automations'], ['campaigns', 'Campaigns'], ['reports', 'Reports'], ['pricing', 'Plans'], ['modules', 'Modules']]
};
const primaryRoute = () => PRODUCT === 'workgig' ? 'request/1' : PRODUCT === 'invesnetwork' ? 'list/1' : 'builder/1';
const primaryLabel = () => PRODUCT === 'workgig' ? 'Get matched with a pro' : PRODUCT === 'invesnetwork' ? 'List a property' : 'Create your lead form';
function header() {
  return `<a class="skip" href="#main">${L('Skip to content')}</a><div class="demo-banner"><b>${L('Interactive concept')}</b> · ${L('Example data. Offline demo only. Nothing is sent or published.')} ${A('help', 'How to explore', '')}</div><header class="header"><div class="head-inner"><a class="brand" href="#home" aria-label="${L('Home')}"><img src="assets/logo.svg" alt="${esc(BRAND + (PRODUCT === 'brandpilot' ? ' · THINK FORWARD' : ''))}"></a><nav class="mainnav" aria-label="${L('Main navigation')}">${NAV[PRODUCT].map(([r, l]) => `<a href="#${r}" ${currentRoute === r ? 'aria-current="page"' : ''}>${L(l)}</a>`).join('')}</nav>${A(primaryRoute(), primaryLabel(), 'btn primary ' + (PRODUCT === 'invesnetwork' ? 'seller' : ''))}</div></header>`;
}
function footer() {
  return `<footer class="footer"><div class="wrap"><div class="footer-top"><div><div class="footer-brand">${BRAND}</div><p>${L({
    workgig: 'A clearer way from home service request to a completed visit.',
    invesnetwork: 'Your property. Your story. A direct connection to buyers.',
    brandpilot: 'THINK FORWARD. Digital marketing, automation and lead generation for every industry.'
  }[PRODUCT])}</p></div><div><h4>${L('Explore')}</h4>${A('home', 'Home', '')}${A('modules', 'All modules and functions', '')}${A('pricing', 'Licenses and plans', '')}</div><div><h4>${L('Your workspace')}</h4>${A(PRODUCT === 'workgig' ? 'jobs' : 'dashboard', 'Open demo workspace', '')}${A('account', 'Account and preferences', '')}${A('help', 'Show me how', '')}</div><div><h4>${L('Concept information')}</h4>${A('legal', 'Terms and privacy', '')}${A('sources', 'Sources and scope', '')}${B('reset', 'Reset this demo', '', 'textlink')}</div></div>${PRODUCT === 'invesnetwork' ? `<p class="space-bottom" style="max-width:none">${L('InvesNetwork is a publishing platform. Listings are not verified. No investment, legal or tax advice. Closings are handled by your attorney or title company.')}</p>` : ''}<div class="bottom"><span>© 2026 ${BRAND} · ${DESIGN} v1</span><span>${L('Desktop concept · English · Local files only · No live transactions')}</span></div></div></footer>`;
}
function toast(text) {
  let n = $('#toast');
  if (!n) {
    n = document.createElement('div');
    n.id = 'toast';
    n.className = 'toast';
    n.setAttribute('role', 'status');
    document.body.append(n);
  }
  n.textContent = plain(text);
  n.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => n.hidden = true, 6000);
}
function go(route) {
  if (location.hash === '#' + route) render();else location.hash = route;
}
function appMenu(items) {
  return `<aside class="app-menu"><p class="menu-label">${L('Demo workspace')}</p>${items.map(([r, l]) => `<a href="#${r}" ${currentRoute === r ? 'aria-current="page"' : ''}>${L(l)}</a>`).join('')}<p class="small">${L('Example data only. Actions change this open demo, not a real account.')}</p></aside>`;
}
function appFrame(content, items) {
  return page(`<div class="app-frame">${appMenu(items)}<div class="app-main">${content}</div></div>`);
}
function formActions(back, next = 'Continue', extra = '') {
  return `<div class="form-actions"><div>${A(back, 'Back', 'textlink')}</div><div class="right">${extra}<button class="btn primary ${PRODUCT === 'invesnetwork' ? 'seller' : ''}" type="submit">${L(next)}</button></div></div>`;
}
function success(title, body, content = '', buttons = '') {
  return page(`<div class="success-panel"><div class="success-icon" aria-hidden="true">✓</div><p class="eyebrow">${L('Local simulation complete')}</p><h1 tabindex="-1">${L(title)}</h1><p>${L(body)}</p>${content}<div class="actions">${buttons}</div></div>`);
}
const featureDemo = {
  workgig: {
    'HO-01': 'request/1',
    'HO-02': 'search',
    'HO-03': 'matches',
    'HO-06': 'booking',
    'HO-07': 'job',
    'HO-17': 'jobs',
    'PR-01': 'pro-profile',
    'PR-02': 'pro-profile',
    'PR-03': 'credentials',
    'PR-06': 'pro',
    'PR-10': 'dispatch',
    'PR-11': 'pro-job',
    'AC-05': 'notifications'
  },
  invesnetwork: {
    'F-103-006': 'list/1',
    'F-103-007': 'list/2',
    'F-103-009': 'list/2',
    'F-103-019': 'browse',
    'F-103-028': 'inquiry/1',
    'F-103-029': 'inquiry/1',
    'F-103-059': 'list/1',
    'F-103-063': 'list/3',
    'F-103-064': 'list/3'
  },
  brandpilot: {
    'F-303-001': 'builder/1',
    'F-303-004': 'builder/2',
    'F-303-009': 'forms',
    'F-305-003': 'automations',
    'F-305-004': 'automations',
    'F-305-010': 'lead/1',
    'F-301-001': 'company'
  }
};
function groupLabel(g) {
  if (PRODUCT === 'workgig') {
    return {
      '2': 'Homeowner services',
      '3': 'Professional workspace',
      '4': 'Property managers',
      '5': 'Suppliers',
      '6': 'HomeGig · AI agent',
      '7': 'VaultGig · Property records',
      '8': 'Account, access and privacy',
      '9': 'Finance and administration'
    }[g.split('.')[0]] || g;
  }
  return g.replace(/^IN-P[0-9]+ /, '').replace(/^BP \(id not assigned\) /, '');
}
function groups() {
  return [...new Set(CATALOG.map(r => r.group))];
}
function modules() {
  catalogLimit = 40;
  return page(`${pagehead('Product architecture', 'Every module. One clear next step.', 'Explore the complete source inventory. Only the explicitly marked flows are interactive demos; the rest are Coming soon.')}<div class="grid3">${groups().map((g, i) => `<a class="card clickable module-card" href="#module/${encodeURIComponent(g)}"><span class="number">${String(i + 1).padStart(2, '0')}</span><h3>${L(groupLabel(g))}</h3><span class="count">${num(CATALOG.filter(r => r.group === g).length)} ${L('sourced functions')} ↗</span></a>`).join('')}</div>${catalogControls('')}`);
}
function catalogControls(group) {
  return `<section class="space-top"><div class="headrow"><h2>${L('Function explorer')}</h2>${pill('Source inventory, not a release commitment')}</div><div class="toolbar"><label class="field wide">${L('Search functions')}<input id="catalog-search" type="search" placeholder="${L('Search by name, ID or module')}"></label><label class="field">${L('Module')}<select id="catalog-group"><option value="">${L('All modules')}</option>${groups().map(g => `<option value="${esc(g)}" ${g === group ? 'selected' : ''}>${L(groupLabel(g))}</option>`).join('')}</select></label></div><div id="catalog-results"></div></section>`;
}
function modulePage() {
  let g = decodeURIComponent(routeArg);
  return page(`${crumb('Module', 'modules', 'All modules')}${pagehead('Module detail', groupLabel(g), 'Each function links to its scope and source. Coming soon functions do not run in this prototype.')}${catalogControls(g)}`);
}
function updateCatalog() {
  var _$, _$2;
  if (!$('#catalog-results')) return;
  const q = (((_$ = $('#catalog-search')) === null || _$ === void 0 ? void 0 : _$.value) || '').toLowerCase(),
    g = ((_$2 = $('#catalog-group')) === null || _$2 === void 0 ? void 0 : _$2.value) || '';
  const rows = CATALOG.filter(r => (!g || r.group === g) && (!q || `${r.id} ${r.title} ${r.group}`.toLowerCase().includes(q)));
  $('#catalog-results').innerHTML = `<p class="filter-count">${num(rows.length)} ${L('functions found')} · ${L('Showing')} ${Math.min(catalogLimit, rows.length)}</p><div class="table-wrap catalog-table"><table><thead><tr><th>${L('Reference')}</th><th>${L('Function')}</th><th>${L('Prototype scope')}</th><th>${L('Open')}</th></tr></thead><tbody>${rows.slice(0, catalogLimit).map(r => `<tr><td>${esc(r.id)}</td><td class="title">${L(r.title)}</td><td>${featureDemo[PRODUCT][r.id] ? pill('Interactive demo', 'success') : pill('Coming soon', 'soon')}</td><td>${A('function/' + r.id, 'View scope', 'textlink')}</td></tr>`).join('') || `<tr><td colspan="4">${L('No matching functions. Try another search.')}</td></tr>`}</tbody></table></div>${rows.length > catalogLimit ? `<div class="actions">${B('more-functions', 'Show more functions')}</div>` : ''}`;
}
function functionPage() {
  const r = CATALOG.find(x => x.id === routeArg);
  if (!r) return notFound();
  let demo = featureDemo[PRODUCT][r.id];
  return page(`${crumb('Function', 'modules', 'All modules')}${pagehead(r.id, r.title, 'A source-backed concept. A source status is not proof that the full customer experience has shipped.')}${demo ? notice('Interactive demo available', 'Use the button below to try this flow with example data.') : notice('Coming soon', 'This function is in the source inventory but is not implemented in this local concept.')}<div class="card legal-copy"><dl class="data-list"><div><dt>${L('Module')}</dt><dd>${L(r.group)}</dd></div><div><dt>${L('Source status')}</dt><dd>${L(r.status)}</dd></div><div><dt>${L('Source scope')}</dt><dd>${L(r.mvp || r.phase || 'Not confirmed')}</dd></div><div><dt>${L('Source reference')}</dt><dd>${L(r.source)}</dd></div></dl><div class="actions">${demo ? A(demo, 'Try the demo', 'btn primary') : A('modules', 'Back to all modules', 'btn secondary')}</div></div>`);
}
const PLAN_DATA = {
  workgig: [['Homeowner access', 'For a home that needs a clear next step.', ['Service requests', 'Visit scheduling', 'Job status and notices'], 'request/1'], ['Professional workspace', 'For service companies and their teams.', ['Company profile and credentials', 'Visit assignment', 'Job tasks and evidence'], 'pro'], ['Property operations', 'For multi-property coordination.', ['Portfolio workspace · Coming soon', 'Property records · Coming soon', 'Supplier tools · Coming soon'], 'modules']],
  invesnetwork: [['Owner license', 'Present your property clearly.', ['Listing drafts and photos', 'Owner contact preferences', 'Listing dashboard'], 'list/1'], ['Investor license', 'Explore properties and contact owners.', ['Property search and details', 'Qualified inquiries with consent', 'Investor dashboard'], 'browse'], ['Team license', 'A proposed workspace for property teams.', ['Team scope · Coming soon', 'Advanced modules · Coming soon', 'Shared portfolio tools · Coming soon'], 'modules']],
  brandpilot: [['Capture license', 'Start with one clear way to reach you.', ['Lead form builder', 'Lead inbox', 'Email reply automation'], 'builder/1'], ['Growth license', 'See the lead journey in one workspace.', ['Lead pipeline demo', 'Automation controls', 'Reporting with example data'], 'dashboard'], ['Agency license', 'A proposed workspace for growing teams.', ['Company setup demo', 'Campaign overview', 'AI features · Coming soon'], 'company']]
};
function pricing() {
  return page(`${pagehead('Licenses and plans', 'Choose the workflow, not the complexity.', 'Example pricing. Plan names, packaging, prices and entitlements are illustrative and require owner approval. No purchase or subscription is available here.')}${notice('Example pricing · No approved prices found', 'All amounts are to be confirmed. Selecting a license only opens a local demo summary.')}<div class="grid3">${PLAN_DATA[PRODUCT].map((p, i) => `<article class="card pricing-card ${i === 1 ? 'featured' : ''}"><div>${pill('Illustrative license')}<h3 class="space-top">${L(p[0])}</h3></div><p>${L(p[1])}</p><div class="price">${L('To be confirmed')}</div><p class="small">${L('Example pricing · Not a commercial offer')}</p><ul>${p[2].map(v => `<li>${L(v)}</li>`).join('')}</ul>${A('license/' + i, 'Explore this license', 'btn ' + (i === 1 ? 'primary' : 'secondary'))}</article>`).join('')}</div><div class="space-top">${notice(PRODUCT === 'workgig' ? 'No in-app payments. No pro cap.' : 'No charge. No signup. No external submission.', 'This is a conceptual license comparison, not an approved service agreement.')}</div>`);
}
function licensePage() {
  let i = Number(routeArg) || 0,
    p = PLAN_DATA[PRODUCT][i] || PLAN_DATA[PRODUCT][0];
  return success('Your example license', 'This selection is local only. No account, contract, subscription or charge was created.', `<div class="card"><h2>${L(p[0])}</h2><p>${L('Example pricing · To be confirmed')}</p><ul>${p[2].map(v => `<li>${L(v)}</li>`).join('')}</ul></div>`, A(p[3], 'Try this workflow', 'btn primary') + A('pricing', 'Compare licenses', 'btn secondary'));
}
function account() {
  return page(`${pagehead('Account', 'Your demo preferences', 'No real account is connected. Use sample data only.')}<form class="form-panel legal-copy" data-form="preferences"><div class="form-fields">${field('Display name', 'name', 'Alex Morgan')}${select('Time zone', 'timezone', ['America/New_York'], 'America/New_York')}${select('Language', 'language', ['English'], 'English')}${check('Email notices for this demo', 'email', true)}${check('Show product tips', 'tips', true)}</div><div class="actions"><button class="btn primary" type="submit">${L('Save demo preferences')}</button>${A('access', 'Demo access', 'btn secondary')}</div></form>`);
}
function access() {
  return page(`${pagehead('Demo access', 'Explore without signing in', 'No email, password or verification code is needed. This is not a live authentication screen.')}<div class="grid2"><div class="card"><span class="eyebrow">${L('01 / Explore')}</span><h2>${L(PRODUCT === 'workgig' ? 'Homeowner workspace' : 'Your workspace')}</h2><p>${L('Enter with the sample account and example data.')}</p><div class="actions">${A(PRODUCT === 'workgig' ? 'jobs' : 'dashboard', 'Open demo', 'btn primary')}</div></div><div class="card"><span class="eyebrow">${L('02 / Understand')}</span><h2>${L('See the full structure')}</h2><p>${L('Review modules and source references before choosing a workflow.')}</p><div class="actions">${A('modules', 'All modules', 'btn secondary')}</div></div></div>`);
}
function help() {
  return page(`${pagehead('Show me how', 'Try a real journey. With demo data.', 'Everything runs in this folder. No internet, account or payment is required.')}<div class="grid3">${(PRODUCT === 'workgig' ? [['01', 'Ask and match', 'Choose a trade, describe the issue, review duplicates, then see example matches.', 'request/1'], ['02', 'Book and track', 'Choose a visit, reschedule it, then advance through ETA and completion.', 'booking'], ['03', 'Operate as a pro', 'Review credentials, assign a technician and update the job task.', 'pro']] : PRODUCT === 'invesnetwork' ? [['01', 'List the property', 'Start with an address, add photos and facts, then review consent.', 'list/1'], ['02', 'Explore and inquire', 'Filter the properties, open a detail and send a local example inquiry.', 'browse'], ['03', 'Manage the listing', 'Review the dashboard, open listings and explore the full product structure.', 'dashboard']] : [['01', 'Build a lead form', 'Choose fields, review consent and follow-up, then create a local form.', 'builder/1'], ['02', 'Capture a lead', 'Open the public-form demo and submit sample details into the local inbox.', 'public-form'], ['03', 'See the follow-up', 'Open the lead timeline, change status and simulate an email reply.', 'leads']]).map(([n, t, d, r]) => `<div class="card"><span class="number">${n}</span><h3>${L(t)}</h3><p>${L(d)}</p><div class="actions">${A(r, 'Try it', 'btn secondary')}</div></div>`).join('')}</div>${notice('What persists?', 'Actions are kept only in memory while this page is open. Reloading or Reset this demo restores the sample data.')}`);
}
function legal() {
  return page(`${pagehead('Concept information', 'Terms, privacy and demo boundaries', 'This page explains this prototype, not approved legal terms for a released product.')}<article class="legal-copy"><h2>${L('Local data only')}</h2><p>${L('Use fictional data. Form entries stay in this open browser page and are not sent to a server. No analytics, trackers, live AI, payment service or account system is connected.')}</p><h2>${L('No commercial commitment')}</h2><p>${L('License packaging and example pricing are conceptual. They do not create an offer, purchase, contract or subscription.')}</p><h2>${L('Illustrative content')}</h2><p>${L('Names, contact details, properties, metrics, credentials and timelines are example data. Photography is illustrative and does not identify actual customers, providers or listings.')}</p>${PRODUCT === 'invesnetwork' ? `<h2>${L('Publishing platform only')}</h2><p>${L('InvesNetwork is a publishing platform. Listings are not verified. No investment, legal or tax advice. Closings are handled by your attorney or title company.')}</p>` : ''}<h2>${L('Production policies')}</h2><p>${L('Approved privacy notices, consent templates, recovery policies and service agreements must be supplied before a production release. This demo does not replace them.')}</p></article>`);
}
function sources() {
  return page(`${pagehead('Evidence and scope', 'Designed from sources. Not promises.', 'Interactive examples illustrate approved or documented flows; they are not production implementations.')}<div class="grid2"><div class="card"><h3>${L('Content evidence')}</h3><ul class="small">${(PRODUCT === 'workgig' ? ['04-workgig-feature-inventory.md · 89 feature rows', '03-workgig-mvp.md · Request and dashboard flows', 'WorkGig tokens v0.2 · Exact byte copy', 'wkg-010 · Brand assets and visual baseline', 'HGI-001.svg · Unmodified HomeGig placeholder'] : PRODUCT === 'invesnetwork' ? ['01-invesnetwork-mvp.md · Listing, search and inquiry', 'holding/docs/catalog/PRODUCTS.md · 16 products, 782 functions', 'inv-006 · Listing studio visual baseline', 'InvesNetwork brand v1.0 · Teal, gold and navy'] : ['02-brandpilot-mvp.md · Forms, consent, email and inbox', 'holding/docs/catalog/PRODUCTS.md · 14 BrandPilot functions', 'BPL-002 and BPL-006 · Visual references', 'THINK FORWARD approved logo']).map(s => `<li>${L(s)}</li>`).join('')}</ul></div><div class="card"><h3>${L('Availability rules')}</h3><p>${L('Coming soon means the function does not run in this concept. Source status records research, not release readiness. Demo badges identify the flows that can be operated locally.')}</p><p>${L('No approved prices were found in the consulted sources. The license page is a proposed layout with Example pricing labels.')}</p></div></div>${notice('Existing prototype check', PRODUCT === 'invesnetwork' ? 'Existing InvesMarket and InvesPassport prototype files and Angular landing variants were found in the repository. They are partial precedents, not this complete offline concept. No repository files were changed.' : PRODUCT === 'workgig' ? 'The named WorkGig repository was not accessible through the read-only connector. Earlier local research documents a docs-only prototype in Holding. Current repository duplication could not be fully verified.' : 'The named BrandPilot repository was not accessible through the read-only connector. The local approved MVP spec and Holding catalog were used instead. Current repository duplication could not be fully verified.')}<div class="actions">${A('modules', 'Explore all sourced functions', 'btn secondary')}</div>`);
}
function notFound() {
  return page(`${pagehead('Navigation', 'This page is not part of the concept', 'Choose Home or use the navigation to continue.')}${A('home', 'Go to home', 'btn primary')}`);
}
function renderPage() {
  var _document$querySelect, _window$afterRender, _window;
  const parts = (location.hash.slice(1) || 'home').split('/');
  currentRoute = parts.shift();
  routeArg = parts.join('/');
  if (currentRoute === 'main') {
    const main = $('#main');
    main === null || main === void 0 || main.focus();
    return;
  }
  let content;
  const shared = {
    modules,
    module: modulePage,
    function: functionPage,
    pricing,
    license: licensePage,
    account,
    access,
    help,
    legal,
    sources
  };
  try {
    content = (shared[currentRoute] || window.productRoutes[currentRoute] || notFound)();
  } catch (e) {
    throw e;
  }
  $('#app').innerHTML = header() + content + footer();
  document.title = BRAND + ' · ' + (((_document$querySelect = document.querySelector('h1')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.textContent) || 'Concept');
  updateCatalog();
  (_window$afterRender = (_window = window).afterRender) === null || _window$afterRender === void 0 || _window$afterRender.call(_window);
  window.scrollTo(0, 0);
  const h = $('main h1');
  if (h) h.focus({
    preventScroll: true
  });
}
window.addEventListener('hashchange', render);
document.addEventListener('click', e => {
  var _window$productAction, _window3;
  const a = e.target.closest('a[href="#main"]');
  if (a) {
    var _$3, _$4;
    e.preventDefault();
    (_$3 = $('#main')) === null || _$3 === void 0 || _$3.setAttribute('tabindex', '-1');
    (_$4 = $('#main')) === null || _$4 === void 0 || _$4.focus();
    return;
  }
  const b = e.target.closest('[data-action]');
  if (!b) return;
  let ac = b.dataset.action,
    v = b.dataset.value;
  if (ac === 'reset') {
    var _window$resetDemo, _window2;
    (_window$resetDemo = (_window2 = window).resetDemo) === null || _window$resetDemo === void 0 || _window$resetDemo.call(_window2);
    toast('Demo reset. All sample data restored.');
    render();
  } else if (ac === 'more-functions') {
    catalogLimit += 40;
    updateCatalog();
  } else (_window$productAction = (_window3 = window).productAction) === null || _window$productAction === void 0 || _window$productAction.call(_window3, ac, v, b);
});
document.addEventListener('submit', e => {
  var _window$productSubmit, _window4;
  const f = e.target.closest('[data-form]');
  if (!f) return;
  e.preventDefault();
  const data = fromPairs(new FormData(f));
  if (f.dataset.form === 'preferences') toast('Demo preferences saved for this open session.');else (_window$productSubmit = (_window4 = window).productSubmit) === null || _window$productSubmit === void 0 || _window$productSubmit.call(_window4, f.dataset.form, data, f);
});
document.addEventListener('input', e => {
  var _window$productInput, _window5;
  if (e.target.id === 'catalog-search') {
    catalogLimit = 40;
    updateCatalog();
  }
  (_window$productInput = (_window5 = window).productInput) === null || _window$productInput === void 0 || _window$productInput.call(_window5, e);
});
document.addEventListener('change', e => {
  var _window$productChange, _window6;
  if (e.target.id === 'catalog-group') {
    catalogLimit = 40;
    updateCatalog();
  }
  (_window$productChange = (_window6 = window).productChange) === null || _window$productChange === void 0 || _window$productChange.call(_window6, e);
});
function fromPairs(pairs) {
  const result = {};
  pairs.forEach((value, key) => {
    if (Array.isArray(value)) {
      result[value[0]] = value[1];
    } else {
      result[key] = value;
    }
  });
  return result;
}
function render() {
  try {
    renderPage();
    window.__prototypeReady = true;
    const fallback = document.getElementById('fallback-note');
    if (fallback) fallback.remove();
  } catch (error) {
    window.__prototypeShowError(error);
    console.error(error);
  }
}

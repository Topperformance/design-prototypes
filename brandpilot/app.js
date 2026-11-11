'use strict';

let S;
const INDUSTRIES = ['Home services', 'Legal', 'Medical', 'Another industry'];
const FIELD_NAMES = ['Name', 'Email', 'Phone', 'Service needed', 'Message', 'ZIP code'];
function init() {
  S = {
    company: 'Northside Studio',
    industry: 'Home services',
    formName: 'Northside Studio inquiry',
    fields: ['Name', 'Email', 'Phone', 'Service needed', 'Message'],
    reply: true,
    ownerNotice: true,
    nurture: true,
    live: false,
    selectedLead: '1',
    period: 'Last 7 days',
    leads: [{
      id: '1',
      name: 'Jordan Ellis',
      email: 'jordan@example.test',
      phone: '555-0100',
      service: 'Home service inquiry',
      message: 'I would like more information about your service.',
      status: 'New',
      source: 'Website inquiry',
      consent: true,
      events: ['Lead captured · Example data', 'Consent recorded · Demo template v0', 'Auto reply simulated', 'Owner email simulated']
    }, {
      id: '2',
      name: 'Sam Taylor',
      email: 'sam@example.test',
      phone: '555-0101',
      service: 'General inquiry',
      message: 'Please tell me more about your services.',
      status: 'Contacted',
      source: 'Example lead form',
      consent: true,
      events: ['Lead captured · Example data', 'Marked as contacted']
    }],
    builderStep: 1,
    submittedLead: '1',
    campaign: 'Home services · Awareness',
    reportsFilter: 'Last 7 days'
  };
}
init();
window.resetDemo = init;
Object.assign(featureDemo.brandpilot, {
  'F-303-005': 'builder/1',
  'F-305-013': 'leads',
  'CRM-A10': 'automations',
  'F-302-010': 'campaigns',
  'DB-03': 'reports',
  'DB-02': 'reports'
});
const MENU = [['dashboard', 'Overview'], ['forms', 'Lead forms'], ['leads', 'Lead inbox / CRM'], ['automations', 'Email automations'], ['campaigns', 'Campaigns'], ['reports', 'Reporting'], ['company', 'Company setup'], ['modules', 'All functions']];
function home() {
  return `<main id="main"><section class="bp-hero"><div class="wrap hero-grid"><div><p class="eyebrow">${L('Digital marketing · Automation · Lead generation')}</p><h1 tabindex="-1">${L('Your next lead.')}<br>${L('A clearer way forward.')}</h1><p class="lead space-top">${L('A general marketing agency and platform for every industry. Capture the inquiry, follow up by email and see what is working in one focused workspace.')}</p><div class="actions">${A('builder/1', 'Create your lead form', 'btn primary')}${A('dashboard', 'Explore the workspace', 'btn ghost')}</div><p class="small space-top">${L('Starting with Home services, Legal and Medical.')}</p></div><div class="bp-board"><div class="mini-row"><h3>${L('From first click to follow-up')}</h3>${example()}</div><div class="flow-node"><div class="mini-row"><b>${L('01 / Capture')}</b>${pill('Lead form')}</div><p class="small space-top">${L('Jordan sends an inquiry with consent.')}</p></div><div class="flow-node"><div class="mini-row"><b>${L('02 / Respond')}</b>${pill('Email automation', 'success')}</div><p class="small space-top">${L('A reply is queued. The owner is notified.')}</p></div><div class="flow-node"><div class="mini-row"><b>${L('03 / See the next step')}</b>${pill('Lead inbox')}</div><p class="small space-top">${L('The lead and the timeline are ready to review.')}</p></div><div class="actions">${A('public-form', 'Try the complete demo', 'textlink')}</div></div></div></section><section class="section"><div class="wrap"><div class="headrow"><div><p class="eyebrow">${L('Every industry. A relevant first step.')}</p><h2>${L('Built around your business.')}</h2></div><p>${L('We begin with home services, legal and medical. The form carries your chosen industry into the demo.')}</p></div><div class="grid3">${[['Home services', 'house', 'Illustrative residential exterior', 'From service need to a clear inquiry.'], ['Legal', 'team', 'An illustrative professional team', 'A thoughtful first conversation.'], ['Medical', 'medical', 'An illustrative healthcare consultation', 'A simpler path to a practice inquiry.']].map(([t, p, alt, d], i) => `<a class="photo-card" href="#builder/1" data-action="industry-start" data-value="${t}">${img(p, alt)}<div class="caption"><span class="small">0${i + 1}</span><h3>${L(t)} ↗</h3><p>${L(d)}</p></div></a>`).join('')}</div><p class="small space-top">${L('Illustrative photographs, not client endorsements. This demo does not collect legal matters, medical information or other sensitive details.')}</p></div></section><section class="section soft"><div class="wrap"><div class="headrow"><div><p class="eyebrow">${L('One lead journey. Four connected modules.')}</p><h2>${L('Less switching. A visible next action.')}</h2></div>${A('modules', 'Full product structure', 'textlink')}</div><div class="grid4">${[['01', 'BrandReach', 'Campaign records and channel overview.', 'campaigns'], ['02', 'BrandLeads', 'Forms, consent and the lead inbox.', 'forms'], ['03', 'BrandClose', 'Email reply and follow-up automation.', 'automations'], ['04', 'BrandInsights', 'Leads, response time and reporting.', 'reports']].map(([n, t, d, r]) => `<a class="card clickable" href="#${r}"><span class="number">${n}</span><h3>${L(t)}</h3><p>${L(d)}</p><span class="small">${L('Explore the demo')} ↗</span></a>`).join('')}</div></div></section><section class="section"><div class="wrap hero-grid"><div><p class="eyebrow">${L('Show me how')}</p><h2>${L('A form. A reply. A lead you can act on.')}</h2><p class="lead space-top">${L('Choose what to ask, keep consent visible and review the email follow-up. Create a local demo form in three short steps.')}</p><div class="actions">${A('builder/1', 'Create your lead form', 'btn primary')}${A('help', 'Walk through the journey', 'textlink')}</div></div><div class="builder-preview"><div class="preview-bar"><span>${L('YOUR BUSINESS · LEAD CAPTURE')}</span>${example()}</div><div class="preview-body"><h3>${L('How can we help?')}</h3><div class="preview-field">${L('Name')}</div><div class="preview-field">${L('Email')}</div><div class="preview-field">${L('Service needed')}</div><p class="small">${L('Consent stays visible before the inquiry is submitted.')}</p><div class="actions">${A('public-form', 'Try the example form', 'btn primary')}</div></div></div></div></section><section class="section soft"><div class="wrap headrow"><div><p class="eyebrow">${L('Looking ahead')}</p><h2>${L('AI, with clear boundaries.')}</h2><p class="lead space-top">${L('AI assistance, SMS and live campaign launch are not part of this first demo. Email follow-up is the starting point.')}</p></div><div>${pill('Coming soon', 'soon')}<div class="actions">${A('modules', 'See the sourced scope', 'textlink')}</div></div></div></section><section class="section dark"><div class="wrap headrow"><div><p class="eyebrow">${L('THINK FORWARD')}</p><h2>${L('Make the first inquiry easier.')}</h2></div>${A('builder/1', 'Create your lead form', 'btn secondary')}</div></section></main>`;
}
function leadTable(leads = S.leads) {
  return `<div class="table-wrap"><table><thead><tr><th>${L('Lead')}</th><th>${L('Source')}</th><th>${L('Status')}</th><th>${L('Next step')}</th></tr></thead><tbody>${leads.map(l => `<tr><td><b>${esc(l.name)}</b><p>${L(l.service)}</p></td><td>${L(l.source)}</td><td>${pill(l.status, l.status === 'New' ? 'blue' : 'success')}</td><td>${A('lead/' + l.id, 'Open lead', 'textlink')}</td></tr>`).join('') || `<tr><td colspan="4">${L('No leads in this filter.')}</td></tr>`}</tbody></table></div>`;
}
function dashboard() {
  return appFrame(`${pagehead('Your marketing workspace', 'Are leads coming in? Is follow-up running?', 'A clear answer, then one next step.', example())}<div class="next-step"><div><h3>${L(S.live ? 'Your demo form is ready.' : 'Start with one lead form.')}</h3><p>${L(S.live ? 'Open the public example form and capture a sample lead.' : 'Choose fields, review consent and keep email follow-up on.')}</p></div>${A(S.live ? 'public-form' : 'builder/1', S.live ? 'Try your demo form' : 'Create your lead form', 'btn primary')}</div><div class="stats">${stat('New leads', S.leads.filter(l => l.status === 'New').length)}${stat('First response time', '4 min')}${stat('Follow-up emails', S.leads.length + 3)}${stat('Cost per lead', '—', 'No live ad account connected')}</div><section><div class="headrow"><h3>${L('Latest leads')}</h3>${A('leads', 'See all leads', 'textlink')}</div>${leadTable(S.leads.slice(0, 3))}</section><div class="grid2 space-top"><div class="card"><h3>${L('Email follow-up')}</h3><dl class="data-list"><div><dt>${L('New-lead reply')}</dt><dd>${L(S.reply ? 'On' : 'Off')}</dd></div><div><dt>${L('Nurture email')}</dt><dd>${L(S.nurture ? 'On' : 'Off')}</dd></div><div><dt>${L('Stop on opt-out')}</dt><dd>${L('Always on')}</dd></div></dl>${A('automations', 'Review automation controls', 'textlink')}</div><div class="card"><h3>${L('Campaign overview')}</h3><p>${L('Illustrative records only. Live ad connectors and campaign launch are Coming soon.')}</p><div class="actions">${A('campaigns', 'Open campaigns', 'textlink')}</div></div></div>`, MENU);
}
function forms() {
  return appFrame(`${pagehead('BrandLeads · Capture', 'Your lead forms', 'Hosted-form behavior is simulated locally. No public URL is published.', A('builder/1', 'Create your lead form', 'btn primary'))}<div class="card"><div class="mini-row"><div><h3>${esc(S.formName)}</h3><p>${L(S.industry)} · ${L('Example form')}</p></div>${pill(S.live ? 'Live in demo' : 'Example preview', S.live ? 'success' : 'blue')}</div><dl class="data-list"><div><dt>${L('Fields')}</dt><dd>${S.fields.map(L).join(' · ')}</dd></div><div><dt>${L('New-lead reply')}</dt><dd>${L(S.reply ? 'On' : 'Off')}</dd></div><div><dt>${L('Source')}</dt><dd>${L('Local lead form')}</dd></div></dl><div class="actions">${A('builder/1', 'Edit demo form', 'btn secondary')}${A('public-form', 'Open public-form demo', 'textlink')}${A('form-live', 'View local form link', 'textlink')}</div></div>`, MENU);
}
function preview() {
  return `<div class="builder-preview"><div class="preview-bar"><span>${L('LIVE PREVIEW · LOCAL ONLY')}</span>${example()}</div><div class="preview-body"><p class="eyebrow">${L(S.industry)}</p><h3>${esc(S.formName)}</h3>${S.fields.map(x => `<div class="preview-field">${L(x)}</div>`).join('')}<p class="small">${L('Consent text is shown before submission.')}</p><div class="space-top">${pill('No actual submission')}</div></div></div>`;
}
function builder() {
  let n = +routeArg || 1;
  let body = n === 1 ? `<h2>${L('What should your form ask?')}</h2><p>${L('Use the industry defaults, then choose only the fields you need.')}</p><div class="form-fields">${field('Form name', 'formName', S.formName, 'text', 'required maxlength="80"')}${select('Industry', 'industry', INDUSTRIES, S.industry)}<fieldset style="border:0;padding:0"><legend class="small">${L('Form fields')}</legend>${FIELD_NAMES.map(x => check(x, 'field-' + x, S.fields.includes(x))).join('')}</fieldset><p id="builder-error" class="small" role="alert"></p></div>` : n === 2 ? `<h2>${L('Consent and follow-up, kept visible.')}</h2><p>${L('Email-only follow-up starts on. You can review each setting.')}</p>${notice('Consent template · Example only', 'I agree that this example business may use my sample details to reply to this inquiry. Marketing consent is optional and separate.')}<div class="form-fields">${check('Send each new lead a reply email', 'reply', S.reply)}${check('Email me when a lead arrives', 'ownerNotice', S.ownerNotice)}${field('Reply email opening line', 'replyLine', 'Thanks for your inquiry. We will be in touch soon.', 'text', 'required')}</div><div class="card space-top"><h3>${L('Reply email preview')}</h3><p>${L('Thanks for your inquiry. We will be in touch soon.')}</p><p class="small">${L('This email is never sent by the prototype.')}</p></div>${notice('Production consent must be approved', 'This example is not legal advice or a compliant template for a particular industry.')}` : `<h2>${L('Review your lead form.')}</h2><p>${L('The next step creates a local demo form. It does not publish a website or send an email.')}</p><dl class="data-list"><div><dt>${L('Form name')}</dt><dd>${esc(S.formName)}</dd></div><div><dt>${L('Industry')}</dt><dd>${L(S.industry)}</dd></div><div><dt>${L('Fields')}</dt><dd>${S.fields.map(L).join(', ')}</dd></div><div><dt>${L('Reply by email')}</dt><dd>${L(S.reply ? 'On' : 'Off')}</dd></div><div><dt>${L('Notify the owner')}</dt><dd>${L(S.ownerNotice ? 'On' : 'Off')}</dd></div><div><dt>${L('Consent template')}</dt><dd>${L('Demo template v0 · Not approved')}</dd></div></dl>${field('Source name for reports', 'source', 'Local lead form', 'text', 'required')}`;
  return page(`${crumb('Create a lead form', 'forms', 'Lead forms')}${pagehead('BPL-MVP-07 · Lead form builder', 'From inquiry to a visible next step.', 'Three short steps, with a local preview and no external submission.')}${stepper(['What to ask', 'Consent and follow-up', 'Review'], n)}<div class="form-shell"><form class="form-panel" data-form="builder-${n}">${body}${formActions(n === 1 ? 'forms' : 'builder/' + (n - 1), n === 3 ? 'Publish demo form' : 'Continue', B('save-form', 'Save demo draft', '', 'btn secondary'))}</form><aside>${preview()}</aside></div>`);
}
function formLive() {
  let url = location.href.split('#')[0] + '#public-form';
  return success('Your demo lead form is live.', 'Live in this folder only. No website was published. New sample submissions appear in your local inbox.', `<label class="field">${L('Local form link')}<input class="copy-field" id="form-link" readonly value="${esc(url)}"></label><details class="space-top"><summary class="small">${L('Show example embed code')}</summary><p class="small space-top">${L('Embedding and hosting are Coming soon. Use the local form link to test this concept.')}</p></details>`, B('copy-form-link', 'Copy local form link', '', 'btn primary') + A('public-form', 'Open the form', 'btn secondary') + A('dashboard', 'Back to dashboard', 'textlink'));
}
function publicForm() {
  return page(`${crumb('Public-form demo', 'forms', 'Lead forms')}<div class="form-shell"><form class="form-panel" data-form="public-lead"><p class="eyebrow">${esc(S.company)} · ${L(S.industry)}</p><h1 tabindex="-1" style="font-size:34px">${esc(S.formName)}</h1><p class="space-top">${L('Example form. Use fictional details only. No medical, legal or other sensitive information.')}</p><div class="form-fields">${S.fields.includes('Name') ? field('Example name', 'name', 'Casey Morgan', 'text', 'required') : ''}${S.fields.includes('Email') ? field('Example email', 'email', 'casey@example.test', 'email', 'required') : ''}${S.fields.includes('Phone') ? field('Example phone', 'phone', '555-0102', 'tel') : ''}${S.fields.includes('Service needed') ? select('Service needed', 'service', S.industry === 'Home services' ? ['Plumbing inquiry', 'HVAC inquiry', 'Electrical inquiry', 'Remodeling inquiry'] : S.industry === 'Legal' ? ['General legal services inquiry'] : S.industry === 'Medical' ? ['General practice inquiry'] : ['General services inquiry']) : ''}${S.fields.includes('Message') ? textarea('Example message', 'message', 'Please tell me more about your services.', 'required') : ''}${S.fields.includes('ZIP code') ? field('ZIP code', 'zip', '30309', 'text', 'pattern="[0-9]{5}"') : ''}${check('I agree that this example business may use my sample details to reply to this inquiry.', 'consent', false, true)}${check('I would also like to receive example marketing emails. Optional and separate.', 'marketing', false)}</div><div class="actions"><button class="btn primary" type="submit">${L('Send demo inquiry')}</button></div><p class="small space-top">${L('No message is sent. This updates only the open demo.')}</p></form><aside class="aside-note"><h3>${L('What happens after Send?')}</h3><ol><li>${L('A local lead record is created.')}</li><li>${L('The example consent choice is recorded.')}</li><li>${L('If enabled, reply and owner emails are simulated in the timeline.')}</li></ol>${A('automations', 'Review email settings', 'textlink')}</aside></div>`);
}
function leadSent() {
  return success('Thanks. Your example inquiry is captured.', 'The lead is now in the local inbox. Email follow-up is simulated, not sent.', `<div class="card"><h3>${L('See the business side')}</h3><p>${L('Open the lead to review its consent, source, status and email timeline.')}</p></div>`, A('lead/' + S.submittedLead, 'Open the new lead', 'btn primary') + A('dashboard', 'Open dashboard', 'btn secondary'));
}
function leads() {
  return appFrame(`${pagehead('BrandLeads · Inbox / CRM', 'Every inquiry has a next step.', 'Review consent, change status and simulate an email reply. No real message is sent.', example())}<form class="toolbar" data-form="filter-leads">${select('Lead status', 'status', ['All leads', 'New', 'Contacted', 'Lost'], 'All leads')}${field('Search lead name', 'query', '')}<button type="submit" class="btn secondary">${L('Filter leads')}</button></form><div id="leads-table">${leadTable()}</div>`, MENU);
}
function lead() {
  let l = S.leads.find(x => x.id === routeArg) || S.leads[0];
  return appFrame(`${crumb('Lead detail', 'leads', 'Lead inbox')}${pagehead('Lead detail', l.name, l.source, pill(l.status, 'blue'))}<div class="dashboard-grid"><section class="card"><h3>${L('Inquiry details')}</h3><dl class="data-list"><div><dt>${L('Example email')}</dt><dd>${esc(l.email || '—')}</dd></div><div><dt>${L('Example phone')}</dt><dd>${esc(l.phone || '—')}</dd></div><div><dt>${L('Service needed')}</dt><dd>${L(l.service)}</dd></div><div><dt>${L('Consent')}</dt><dd>${L('Captured locally · Demo template v0')}</dd></div></dl><p>${esc(l.message)}</p><div class="actions">${A('reply/' + l.id, 'Reply by email · Demo', 'btn primary')}</div><div class="actions">${B('lead-contacted', 'Mark as contacted', l.id, 'textlink')}${B('lead-lost', 'Not a fit', l.id, 'textlink')}</div></section><section class="card"><h3>${L('Lead timeline')}</h3><ol class="timeline">${l.events.map(t => `<li><b>${L(t)}</b><p>${L('Example data · This demo')}</p></li>`).join('')}</ol></section></div>`, MENU);
}
function reply() {
  let l = S.leads.find(x => x.id === routeArg) || S.leads[0];
  return appFrame(`${pagehead('F-305-010 · Email channel', 'Write the next response.', 'This composer records a local timeline entry only. It cannot send email.')}<form class="form-panel" data-form="reply"><input type="hidden" name="lead" value="${l.id}"><div class="form-fields">${field('To · Fictional address', 'to', l.email || 'example@example.test', 'email', 'readonly')}${field('Subject', 'subject', 'Re: Your service inquiry', 'text', 'required')}${textarea('Example reply', 'body', 'Thanks for reaching out. What would you like to know about our services?', 'required')}</div>${formActions('lead/' + l.id, 'Simulate email reply')}</form>`, MENU);
}
function automationRow(title, desc, key, value, locked = false) {
  return `<div class="toggle-row"><div><h3>${L(title)}</h3><p>${L(desc)}</p>${locked ? `<span class="switch-note">${L('Always on to respect opt-outs')}</span>` : ''}</div><button type="button" class="toggle" role="switch" aria-checked="${value}" aria-label="${L(title)}" data-action="toggle-automation" data-value="${key}" ${locked ? 'disabled' : ''}></button></div>`;
}
function automations() {
  return appFrame(`${pagehead('BrandClose · Email-only follow-up', 'The follow-up is already in place.', 'Default-on email rules. Changes apply to new local example leads only.')}<div class="card">${automationRow('Reply to new leads by email', 'Simulate the initial reply and show it on the lead timeline.', 'reply', S.reply)}${automationRow('Follow up when there is no next step', 'Keep a simple email nurture rule visible.', 'nurture', S.nurture)}${automationRow('Notify the business owner', 'Simulate an email alert when a sample lead arrives.', 'ownerNotice', S.ownerNotice)}${automationRow('Stop on opt-out', 'No further marketing follow-up after an opt-out.', 'optout', true, true)}</div><div class="grid2 space-top"><div class="card"><h3>${L('What the demo does')}</h3><p>${L('It adds timeline events to a sample lead. No real email, SMS or call is sent.')}</p><div class="actions">${A('public-form', 'Test with a sample inquiry', 'btn secondary')}</div></div><div class="card"><h3>${L('AI and SMS channels')}</h3><p>${L('AI assistance, SMS and A2P setup are not part of this first-release concept.')}</p>${pill('Coming soon', 'soon')}${A('modules', 'View source inventory', 'textlink')}</div></div>`, MENU);
}
function campaigns() {
  return appFrame(`${pagehead('BrandReach · Campaign records', 'The channel view, without the noise.', 'Read-only example records. No ad account is connected and no budget can be spent.', pill('Read-only demo', 'blue'))}${notice('Live campaign launch · Coming soon', 'Ad connectors, creative approval, budget caps and special-category checks must be in place before launch.')}<div class="table-wrap"><table><thead><tr><th>${L('Campaign')}</th><th>${L('Channel')}</th><th>${L('Status')}</th><th>${L('Spend / cap')}</th><th>${L('Details')}</th></tr></thead><tbody><tr><td>${L('Home services · Awareness')}</td><td>${L('Example search channel')}</td><td>${pill('Not connected')}</td><td>${L('Example: $240 / $500')}</td><td>${A('campaign/1', 'View record', 'textlink')}</td></tr><tr><td>${L('Legal · Inquiry form')}</td><td>${L('Example social channel')}</td><td>${pill('Draft')}</td><td>${L('Example: $0 / $300')}</td><td>${A('campaign/2', 'View record', 'textlink')}</td></tr><tr><td>${L('Medical · Practice inquiry')}</td><td>${L('Example search channel')}</td><td>${pill('Draft')}</td><td>${L('Example: $0 / $400')}</td><td>${A('campaign/3', 'View record', 'textlink')}</td></tr></tbody></table></div>`, MENU);
}
function campaign() {
  return appFrame(`${crumb('Campaign record', 'campaigns', 'Campaigns')}${pagehead('Read-only example campaign', ['Home services · Awareness', 'Legal · Inquiry form', 'Medical · Practice inquiry'][(+routeArg || 1) - 1] || 'Example campaign', 'This record illustrates the campaign structure, not a connected live campaign.')}<div class="grid2"><div class="card"><h3>${L('Campaign readiness')}</h3><dl class="data-list"><div><dt>${L('Ad connector')}</dt><dd>${L('Not connected')}</dd></div><div><dt>${L('Creative approval')}</dt><dd>${L('Coming soon')}</dd></div><div><dt>${L('Budget cap policy')}</dt><dd>${L('Example only')}</dd></div><div><dt>${L('Special-category review')}</dt><dd>${L('Required before launch')}</dd></div></dl></div><div class="card"><h3>${L('A clear path to lead capture')}</h3><p>${L('Start with a consent-based lead form. Live channel synchronization and launch controls are Coming soon.')}</p><div class="actions">${A('builder/1', 'Create your lead form', 'btn primary')}${A('reports', 'See example reporting', 'textlink')}</div></div></div>`, MENU);
}
function reports() {
  return appFrame(`${pagehead('BrandInsights · Reporting', 'A clearer signal, not more dashboards.', 'All metrics are invented example data, not business results or performance claims.', example())}<form class="toolbar" data-form="reports">${select('Reporting period', 'period', ['Last 7 days', 'Last 30 days'], S.period)}<button type="submit" class="btn secondary">${L('Apply period')}</button></form><div class="stats">${stat('New leads', S.period === 'Last 7 days' ? '18' : '62', 'Example data · ' + S.period)}${stat('First response time', '4 min', 'Example data · ' + S.period)}${stat('Follow-up emails', S.period === 'Last 7 days' ? '31' : '98', 'Example data · ' + S.period)}${stat('Cost per lead', '—', 'No live ad account connected')}</div><div class="grid2"><div class="card"><div class="mini-row"><h3>${L('Leads by day')}</h3>${example()}</div><div class="chart" role="img" aria-label="${L('Example leads by day: Monday 2, Tuesday 4, Wednesday 1, Thursday 3, Friday 5, Saturday 2, Sunday 1')}">${[['Mon', 40], ['Tue', 80], ['Wed', 20], ['Thu', 60], ['Fri', 100], ['Sat', 40], ['Sun', 20]].map(([t, n]) => `<div class="chart-col"><div class="chart-bar" style="height:${n}%"></div><span class="chart-label">${L(t)}</span></div>`).join('')}</div></div><div class="card"><h3>${L('Where the inquiries come from')}</h3><dl class="data-list"><div><dt>${L('Lead form')}</dt><dd>12 · ${L('Example')}</dd></div><div><dt>${L('Campaign form')}</dt><dd>4 · ${L('Example')}</dd></div><div><dt>${L('Other source')}</dt><dd>2 · ${L('Example')}</dd></div></dl><p class="small">${L('No attribution system or live ad data is connected.')}</p></div></div><div class="card space-top"><h3>${L('The next useful action')}</h3><p>${L('Open new leads and check their timeline. Reporting should lead to a clear next step.')}</p><div class="actions">${A('leads', 'Open lead inbox', 'btn secondary')}</div></div>`, MENU);
}
function company() {
  return appFrame(`${pagehead('Company tenant · F-301-001', 'Set up your business context.', 'A local demo workspace, not a real company tenant.')}<form class="form-panel" data-form="company"><div class="form-fields">${field('Example company name', 'company', S.company, 'text', 'required')}${select('Starting industry', 'industry', INDUSTRIES, S.industry)}${select('Time zone', 'timezone', ['America/New_York'], 'America/New_York')}</div><div class="actions"><button class="btn primary" type="submit">${L('Save demo company')}</button></div></form>`, MENU);
}
window.productRoutes = {
  home,
  dashboard,
  forms,
  builder,
  'form-live': formLive,
  'public-form': publicForm,
  'lead-sent': leadSent,
  leads,
  lead,
  reply,
  automations,
  campaigns,
  campaign,
  reports,
  company
};
function saveBuilder(d, f) {
  if (d.formName) S.formName = d.formName;
  if (d.industry) S.industry = d.industry;
  if (f.querySelector('[name="field-Email"]')) {
    S.fields = FIELD_NAMES.filter(x => d['field-' + x]);
  }
  if (f.querySelector('[name=reply]')) {
    S.reply = !!d.reply;
    S.ownerNotice = !!d.ownerNotice;
  }
}
window.productSubmit = (kind, d, f) => {
  if (kind.startsWith('builder-')) {
    let n = +kind.slice(-1);
    saveBuilder(d, f);
    if (n === 1 && !S.fields.includes('Email') && !S.fields.includes('Phone')) {
      $('#builder-error').textContent = plain('Keep Email or Phone so the business can reply.');
      return;
    }
    if (n === 3) {
      S.live = true;
      go('form-live');
    } else go('builder/' + (n + 1));
    return;
  }
  if (kind === 'public-lead') {
    let id = String(S.leads.length + 1);
    S.leads.unshift({
      id,
      name: d.name || 'Example lead',
      email: d.email,
      phone: d.phone,
      service: d.service || 'General services inquiry',
      message: d.message || 'Example inquiry',
      status: 'New',
      source: S.formName,
      consent: true,
      events: ['Lead captured · Local form', 'Consent recorded · Demo template v0', ...(S.reply ? ['Auto reply simulated'] : []), ...(S.ownerNotice ? ['Owner email simulated'] : []), ...(d.marketing ? ['Optional marketing consent recorded'] : ['No marketing opt-in'])]
    });
    S.submittedLead = id;
    go('lead-sent');
  } else if (kind === 'filter-leads') {
    let rows = S.leads.filter(l => (d.status === 'All leads' || l.status === d.status) && (!d.query || l.name.toLowerCase().includes(d.query.toLowerCase())));
    $('#leads-table').innerHTML = leadTable(rows);
  } else if (kind === 'reply') {
    let l = S.leads.find(l => l.id === d.lead);
    l.events.push('Email reply simulated · No actual send');
    l.status = 'Contacted';
    go('lead/' + l.id);
    toast('Reply recorded locally. No email was sent.');
  } else if (kind === 'reports') {
    S.period = d.period;
    render();
    toast('Example reporting period updated.');
  } else if (kind === 'company') {
    S.company = d.company;
    S.industry = d.industry;
    render();
    toast('Demo company context saved.');
  }
};
window.productAction = (ac, v, b) => {
  if (ac === 'industry-start') {
    S.industry = v;
    S.formName = S.company + ' inquiry';
    go('builder/1');
  } else if (ac === 'save-form') {
    saveBuilder(fromPairs(new FormData(b.closest('form'))), b.closest('form'));
    toast('Form draft kept in this open demo only.');
  } else if (ac === 'lead-contacted' || ac === 'lead-lost') {
    let l = S.leads.find(l => l.id === v);
    l.status = ac === 'lead-contacted' ? 'Contacted' : 'Lost';
    l.events.push(ac === 'lead-contacted' ? 'Marked as contacted' : 'Marked as not a fit');
    render();
    toast('Demo lead status updated.');
  } else if (ac === 'toggle-automation') {
    S[v] = !S[v];
    render();
    toast('Demo email automation setting updated. No messages sent.');
  } else if (ac === 'copy-form-link') {
    var _navigator$clipboard;
    let input = $('#form-link');
    input.focus();
    input.select();
    if ((_navigator$clipboard = navigator.clipboard) !== null && _navigator$clipboard !== void 0 && _navigator$clipboard.writeText) {
      navigator.clipboard.writeText(input.value).then(() => toast('Local form link copied.')).catch(() => toast('Link selected. Press Ctrl+C or Command+C to copy.'));
    } else toast('Link selected. Press Ctrl+C or Command+C to copy.');
  }
};
window.productInput = e => {
  if (currentRoute === 'builder' && routeArg === '1') {
    let f = e.target.closest('form');
    if (!f) return;
    let d = fromPairs(new FormData(f));
    saveBuilder(d, f);
    const aside = $('.form-shell>aside');
    if (aside) aside.innerHTML = preview();
  }
};
render();

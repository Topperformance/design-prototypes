'use strict';

const TRADES = ['Plumbing', 'HVAC', 'Electrical', 'Remodeling'];
const TRADE_ICONS = {
  'Plumbing': '◉',
  'HVAC': '❄',
  'Electrical': 'ϟ',
  'Remodeling': '⌂'
};
const PROS = TRADES.reduce((all, trade, i) => all.concat([0, 1].map(n => ({
  id: String(i * 2 + n + 1),
  name: [['Peachtree Plumbing', 'Clearwater Service Co.'], ['Northside Comfort', 'Atlanta Air Works'], ['Brightline Electric', 'Oak & Wire'], ['Oakline Remodeling', 'Studio Home Works']][i][n],
  trade,
  initials: [['PP', 'CS'], ['NC', 'AA'], ['BE', 'OW'], ['OR', 'SH']][i][n],
  area: n ? 'Decatur · Metro Atlanta' : 'Atlanta · Metro Atlanta'
}))), []);
let S;
function init() {
  S = {
    request: {
      trade: 'HVAC',
      problem: 'The air conditioner is not cooling the upstairs rooms.',
      urgency: 'Planned',
      zip: '30309',
      contact: 'alex@example.test',
      consent: false
    },
    pro: '3',
    booked: false,
    slot: 'Thu, Nov 12 · 9:00–11:00 AM ET',
    status: 0,
    assigned: 'Jamie Lee',
    evidence: '',
    duplicate: false,
    notify: {
      email: true,
      sms: false
    },
    resent: false,
    credentials: 'Review pending',
    company: 'Northside Comfort',
    chatOpen: false,
    messages: [],
    profileSaved: false,
    cancelled: false
  };
}
init();
window.resetDemo = init;
const PRO_MENU = [['pro', 'Today'], ['pro-profile', 'Company profile'], ['credentials', 'Credentials'], ['dispatch', 'Dispatch'], ['pro-job', 'Job task'], ['modules', 'All modules']];
const OWNER_MENU = [['jobs', 'My jobs'], ['job', 'Current visit'], ['notifications', 'Notices'], ['homegig', 'HomeGig'], ['account', 'Preferences']];
function tradeTiles(selected, name = 'trade') {
  return `<div class="grid2">${TRADES.map(t => `<label class="choice"><input type="radio" name="${name}" value="${t}" ${t === selected ? 'checked' : ''} required><span class="trade-symbol" aria-hidden="true">${TRADE_ICONS[t]}</span><span><b>${L(t)}</b><small>${L('Metro Atlanta')}</small></span></label>`).join('')}</div>`;
}
function home() {
  return `<main id="main"><section class="hero"><div class="wrap"><div class="hero-grid"><div><p class="eyebrow">${L('Home services · Metro Atlanta')}</p><h1 tabindex="-1">${L('Your home needs help.')}<br>${L('Know what happens next.')}</h1><p class="lead">${L('Find the right trade, book a visit and follow the job. A clear next step, from the first request to the final update.')}</p><div class="actions">${A('request/1', 'Get matched with a pro', 'btn primary')}${A('search', 'Explore the pros', 'textlink')}</div><p class="small space-top">${L('Plumbing · HVAC · Electrical · Remodeling')}</p></div><div class="image-stack">${img('kitchen', 'A bright kitchen in a cared-for home', 'hero-image')}<div class="floating-card"><div class="mini-row">${pill('Your next step', 'success')}${example()}</div><h3 class="space-top">${L('A visit, without the guesswork.')}</h3><p>${L('Choose a window. See the assigned technician. Get an On the way notice.')}</p><div class="actions">${A('job', 'See the visit demo', 'textlink')}</div></div></div></div><div class="step-strip">${[['01', 'Describe the need', 'One request, with duplicate checks.'], ['02', 'See your matches', 'Explore sample pros by trade.'], ['03', 'Book the visit', 'Choose or change a visit window.'], ['04', 'Track the work', 'Follow the task and delivery notices.']].map(([n, t, d]) => `<div><b>${n}</b><h3>${L(t)}</h3><p>${L(d)}</p></div>`).join('')}</div></div></section><section class="section soft"><div class="wrap"><div class="headrow"><div><p class="eyebrow">${L('Four trades. One clear starting point.')}</p><h2>${L('What does your home need?')}</h2></div><p>${L('Choose the trade. We will carry it into your service request.')}</p></div><div class="grid4">${TRADES.map(t => `<a href="#request/1" data-action="start-trade" data-value="${t}" class="card clickable"><span class="feature-icon" aria-hidden="true">${TRADE_ICONS[t]}</span><h3>${L(t)}</h3><p>${L('Start a request')} ↗</p></a>`).join('')}</div></div></section><section class="section"><div class="wrap"><div class="headrow"><div><p class="eyebrow">${L('Less chasing. More clarity.')}</p><h2>${L('Every step has a purpose.')}</h2></div><p>${L('These benefits connect directly to the documented WorkGig functions.')}</p></div><div class="grid3">${[['HO-01', 'One request, not two', 'Duplicate detection keeps the same need from becoming repeated work.'], ['PR-03', 'Credentials in view', 'License and insurance records have a clear review status.'], ['HO-06', 'Plans can change', 'Book, reschedule or cancel the visit window.'], ['HO-17', 'One view of the job', 'See your request, visit and current status together.'], ['PR-02', 'Trade and territory', 'A company profile makes service coverage clear.'], ['PR-11 + PR-10', 'Work with an owner', 'An assigned technician and a job task keep the next action visible.']].map(([id, t, d]) => `<article class="card"><span class="number">${id}</span><h3>${L(t)}</h3><p>${L(d)}</p></article>`).join('')}</div></div></section><section class="section soft"><div class="wrap homegig-block"><img src="assets/homegig.svg" alt="${L('HomeGig concept icon')}"><div><p class="eyebrow">${L('HomeGig · HG-01')}</p><h2>${L('Your future AI home agent.')}</h2><p>${L('A quieter way to ask for help at home. HomeGig is Coming soon. The assistant in this concept uses scripted replies only.')}</p><div class="actions">${A('homegig', 'Explore HomeGig', 'textlink')}</div></div><div class="chat-sample">${pill('Coming soon', 'soon')}<p class="space-top">${L('You stay in control. No real AI actions, bookings or messages happen here.')}</p><div class="actions">${B('open-chat', 'Try the scripted assistant')}</div></div></div></section><section class="section"><div class="wrap grid2"><div><p class="eyebrow">${L('For service professionals')}</p><h2>${L('A clearer day for your team.')}</h2><p class="lead space-top">${L('Present your company, organize credential records, assign a visit and update the job task. See it from the pro side.')}</p><div class="actions">${A('pro', 'Open the pro workspace', 'btn primary')}${A('modules', 'Full product structure', 'textlink')}</div></div><div class="card"><div class="mini-row"><h3>${L('Today at Northside Comfort')}</h3>${example()}</div><div class="data-list"><div><span>${L('Visit')}</span><b>${L('AC not cooling')}</b></div><div><span>${L('Technician')}</span><b>Jamie Lee</b></div><div><span>${L('Window')}</span><b>${L('9:00–11:00 AM ET')}</b></div><div><span>${L('Next action')}</span><b>${L('Assign and confirm')}</b></div></div></div></div></section><section class="section dark"><div class="wrap headrow"><div><p class="eyebrow">${L('One request. A visible next step.')}</p><h2>${L('Let us show you how it works.')}</h2></div>${A('request/1', 'Get matched with a pro', 'btn primary')}</div></section></main>`;
}
function proCard(p, matched = false) {
  return `<article class="card pro-card"><div class="person"><span class="avatar">${p.initials}</span><div><h3>${L(p.name)}</h3><p>${L(p.trade)} · ${L(p.area)}</p></div></div><div class="pill-line space-top">${example()}${pill('Credentials shown for demo')}</div><p>${L('Service area and company details are illustrative. This is not an actual provider recommendation.')}</p><div class="facts"><span>${L('Trade profile')}</span><span>${L('License record')}</span><span>${L('Visit windows')}</span></div><div class="actions">${A('pro-detail/' + p.id, 'View company', 'btn secondary')}${matched ? B('select-pro', 'Choose this pro', p.id, 'textlink') : ''}</div></article>`;
}
function search() {
  let trade = TRADES.includes(routeArg) ? routeArg : 'All trades';
  return page(`${pagehead('Find a professional', 'A pro for the right trade.', 'Browse example companies in Metro Atlanta. Filters operate on sample data; no live availability or credential verification is connected.')}<form class="toolbar" data-form="search-pros">${select('Trade', 'trade', ['All trades', ...TRADES], trade)}${field('Name or keyword', 'query', '')}${select('Service area', 'area', ['Metro Atlanta'], 'Metro Atlanta')}<button type="submit" class="btn primary">${L('Search pros')}</button></form><p class="filter-count" id="pro-count"></p><div class="grid2" id="pro-results">${PROS.filter(p => trade === 'All trades' || p.trade === trade).map(p => proCard(p)).join('')}</div>${notice('Example provider directory', 'All names and credentials in this concept are fictional. No service request is sent by browsing.')}`);
}
function proDetail() {
  let p = PROS.find(p => p.id === routeArg) || PROS[0];
  return page(`${crumb('Company profile', 'search', 'Find pros')}${pagehead('Example company', p.name, `${p.trade} · ${p.area}`, example())}<div class="detail-grid"><div><div class="card"><div class="person"><span class="avatar">${p.initials}</span><div><h2>${L(p.trade)}</h2><p>${L('A sample professional profile for the Metro Atlanta service area.')}</p></div></div><dl class="data-list"><div><dt>${L('Service area')}</dt><dd>${L(p.area)}</dd></div><div><dt>${L('License record')}</dt><dd>${L('Example document on file')}</dd></div><div><dt>${L('Insurance')}</dt><dd>${L('Example policy on file')}</dd></div><div><dt>${L('Verification status')}</dt><dd>${L('Demo only · Not verified by this prototype')}</dd></div></dl></div><div class="detail-section"><h3>${L('What happens next?')}</h3><p>${L('Describe your need, review the example match and choose a visit window. You approve each next step.')}</p></div></div><aside class="card"><h3>${L('Start with your service need')}</h3><p>${L('No booking is made until you choose and confirm a window in the demo.')}</p><div class="actions">${B('request-pro', 'Request this trade', p.id, 'btn primary')}</div></aside></div>`);
}
function request() {
  let n = Number(routeArg) || 1;
  let body = n === 1 ? `<h2>${L('What do you need help with?')}</h2><p>${L('Start with one of the four launch trades.')}</p>${tradeTiles(S.request.trade)}` : n === 2 ? `<h2>${L('Tell us what the home needs.')}</h2><p>${L('A clear description helps the pro understand the visit.')}</p><div class="form-fields">${textarea('What needs attention?', 'problem', S.request.problem, 'required maxlength="600"')}${select('Urgency', 'urgency', ['Urgent', 'Planned', 'Project'], S.request.urgency)}${field('Metro Atlanta ZIP code', 'zip', S.request.zip, 'text', 'required pattern="[0-9]{5}" inputmode="numeric" maxlength="5"')}<label class="field">${L('Photos · Optional local preview')}<input type="file" name="photos" accept="image/*" multiple><small>${L('Files are not uploaded. This demo records file names only.')}</small></label></div><div class="actions">${B('duplicate-example', 'Show duplicate-detection example', '', 'textlink')}</div>` : `<h2>${L('Review and send the demo request.')}</h2><p>${L('Your contact stays under your control. No real company is contacted.')}</p><dl class="data-list"><div><dt>${L('Trade')}</dt><dd>${L(S.request.trade)}</dd></div><div><dt>${L('Need')}</dt><dd>${esc(S.request.problem)}</dd></div><div><dt>${L('ZIP code')}</dt><dd>${esc(S.request.zip)}</dd></div></dl><div class="form-fields space-top">${field('Example contact email', 'contact', S.request.contact, 'email', 'required')}${check('I agree to share these sample details for this service request only.', 'consent', S.request.consent, true)}</div>${notice('No pro cap. No in-app payments.', 'This flow is a local illustration. No real consent record, provider contact or payment is created.')}`;
  return page(`${crumb('Service request')}${pagehead('HO-01 · Service request', 'A clear request, in three steps.', 'Use sample data only. You can save a local draft in this open demo.')}${stepper(['Trade', 'Details', 'Review'], n)}<div class="form-shell"><form class="form-panel" data-form="request-${n}">${body}${formActions(n === 1 ? 'home' : 'request/' + (n - 1), n === 3 ? 'See demo matches' : 'Continue', B('save-request', 'Save demo draft', '', 'btn secondary'))}</form><aside class="aside-note"><h3>${L('Show me how')}</h3><ol><li>${L('Choose the trade.')}</li><li>${L('Describe the issue and check for duplicates.')}</li><li>${L('Review the match before choosing a visit.')}</li></ol>${pill('Example data')}</aside></div>`);
}
function duplicate() {
  return page(`${pagehead('HO-01 · Duplicate detection', 'This looks like your existing request.', 'The same Plumbing request for ZIP 30309 is already in your jobs. Open it instead of creating repeated work.')}<div class="card legal-copy"><div class="mini-row"><h3>${L('Kitchen sink leak')}</h3>${pill('Existing request', 'warn')}</div><p>${L('Plumbing · 30309 · Request WG-1042')}</p><p>${L('The demo compares trade, ZIP and a leak keyword. Production duplicate rules are not implemented.')}</p><div class="actions">${A('job', 'Use the existing request', 'btn primary')}${A('request/2', 'Edit request details', 'btn secondary')}</div></div>`);
}
function matches() {
  let ps = PROS.filter(p => p.trade === S.request.trade);
  return page(`${pagehead('Request WG-1043 · Example matches', 'Your request has a next step.', 'Compare sample companies, then choose a visit window. This is not live matching or availability.', pill('Demo simulation', 'blue'))}${notice('Request saved in the local demo', S.request.trade + ' · Metro Atlanta')}<div class="grid2">${ps.map(p => proCard(p, true)).join('')}</div><div class="actions">${A('request/2', 'Change request details', 'textlink')}${A('jobs', 'Go to my jobs', 'textlink')}</div>`);
}
function booking() {
  let p = PROS.find(p => p.id === S.pro) || PROS[2];
  return page(`${crumb('Book a visit', 'matches', 'Your matches')}${pagehead('HO-06 · Visit scheduling', S.booked ? 'Change your visit window.' : 'Choose your visit window.', 'Example availability only. All times are Eastern Time (ET). No real appointment is created.')}<div class="form-shell"><form class="form-panel" data-form="booking"><div class="person space-bottom"><span class="avatar">${p.initials}</span><div><h3>${L(p.name)}</h3><p>${L(p.trade)} · ${L('Metro Atlanta')}</p></div></div><div class="form-fields">${['Thu, Nov 12 · 9:00–11:00 AM ET', 'Thu, Nov 12 · 1:00–3:00 PM ET', 'Fri, Nov 13 · 10:00 AM–12:00 PM ET'].map(slot => `<label class="choice"><input type="radio" name="slot" value="${slot}" ${slot === S.slot ? 'checked' : ''} required><b>${L(slot)}</b></label>`).join('')}</div>${formActions('job', S.booked ? 'Confirm new demo window' : 'Confirm demo visit')}</form><aside class="aside-note"><h3>${L('Your visit, in one place')}</h3><p>${L('After confirming, open the visit to reschedule, cancel or preview the On the way notice.')}</p><p class="space-top">${L('No in-app payments. Arrange service terms directly with the provider outside this concept.')}</p></aside></div>`);
}
const STATUSES = ['Confirmed', 'On the way', 'In progress', 'Completed'];
function job() {
  let p = PROS.find(p => p.id === S.pro) || PROS[2];
  return appFrame(`${pagehead('Homeowner · HO-17', 'Your service visit', 'Request WG-1043 · Example data', pill(S.cancelled ? 'Cancelled' : STATUSES[S.status], S.status === 3 ? 'success' : 'blue'))}<div class="next-step"><div><h3>${L(S.cancelled ? 'Visit cancelled' : S.status === 0 ? 'Your window is confirmed' : S.status === 1 ? 'Jamie is on the way' : S.status === 2 ? 'The job is in progress' : 'The task is complete')}</h3><p>${L(S.cancelled ? 'You can choose a new demo window.' : S.status === 1 ? 'Estimated arrival: 10:20 AM ET · Example ETA, not live tracking.' : S.slot)}</p></div>${!S.cancelled && S.status < 3 ? B('advance-job', S.status === 0 ? 'Preview On the way' : S.status === 1 ? 'Start demo work' : 'Complete demo task', '', 'btn primary') : A('request/1', 'New request', 'btn primary')}</div><div class="dashboard-grid"><section class="card"><h3>${L('Visit timeline')}</h3><ol class="timeline">${[['Request received', 'Your service details are ready.'], ['Matched with a pro', p.name], ['Visit confirmed', S.slot], ...(S.status >= 1 ? [['On the way · ETA 10:20 AM ET', 'HO-07 · Email notice simulated.']] : []), ...(S.status >= 2 ? [['Work started', 'PR-11 · Assigned task in progress.']] : []), ...(S.status >= 3 ? [['Task completed', 'Example note and evidence recorded locally.']] : [])].map(([t, d]) => `<li><b>${L(t)}</b><p>${L(d)}</p></li>`).join('')}</ol></section><div class="stack"><section class="card"><h3>${L('The company and technician')}</h3><div class="person"><span class="avatar">${p.initials}</span><div><b>${L(p.name)}</b><p>${L(S.assigned)} · ${L('Assigned technician')}</p></div></div><div class="actions">${A('booking', 'Reschedule visit', 'textlink')}${B('cancel-job', 'Cancel demo visit', '', 'textlink')}</div></section><section class="card"><h3>${L('Channel notices')}</h3><p>${L('See delivery status and resend a failed example notice.')}</p><div class="actions">${A('notifications', 'Open notices', 'btn secondary')}</div></section></div></div>${notice('No in-app payments', 'This prototype ends with task completion. It does not collect payment or create an invoice.')}`, OWNER_MENU);
}
function jobs() {
  return appFrame(`${pagehead('Homeowner workspace', 'Your jobs, clearly organized.', 'One request, one visit, one visible status.', A('request/1', 'Get matched with a pro', 'btn primary'))}<div class="table-wrap"><table><thead><tr><th>${L('Request')}</th><th>${L('Trade')}</th><th>${L('Status')}</th><th>${L('Next step')}</th></tr></thead><tbody><tr><td><b>${L('AC not cooling')}</b><p>WG-1043 · ${L('Example data')}</p></td><td>${L(S.request.trade)}</td><td>${pill(S.cancelled ? 'Cancelled' : STATUSES[S.status], 'blue')}</td><td>${A('job', 'Open visit', 'textlink')}</td></tr><tr><td><b>${L('Kitchen sink leak')}</b><p>WG-1042 · ${L('Duplicate-detection example')}</p></td><td>${L('Plumbing')}</td><td>${pill('Waiting')}</td><td>${A('duplicate', 'Review request', 'textlink')}</td></tr></tbody></table></div><div class="grid2 space-top"><div class="card"><h3>${L('HomeGig')}</h3><p>${L('Your future AI home agent. Coming soon.')}</p>${A('homegig', 'Explore the concept', 'textlink')}</div><div class="card"><h3>${L('VaultGig')}</h3><p>${L('Property history, equipment and maintenance reminders. Coming soon.')}</p>${A('modules', 'See the documented scope', 'textlink')}</div></div>`, OWNER_MENU);
}
function notifications() {
  return appFrame(`${pagehead('AC-05 · Channel notices', 'Updates that can be checked.', 'Demo delivery statuses only. Resend does not send a real message.')}<div class="table-wrap"><table><thead><tr><th>${L('Notice')}</th><th>${L('Channel')}</th><th>${L('Status')}</th><th>${L('Action')}</th></tr></thead><tbody><tr><td>${L('Visit confirmed')}<p>${L(S.slot)}</p></td><td>${L('Email')}</td><td>${pill('Delivered', 'success')}</td><td>—</td></tr><tr><td>${L('On the way · ETA 10:20 AM ET')}</td><td>${L('Email')}</td><td>${pill(S.resent ? 'Resent in demo' : 'Delivery failed', S.resent ? 'success' : 'warn')}</td><td>${B('resend-notice', 'Resend demo notice', '', 'textlink')}</td></tr></tbody></table></div><div class="card space-top"><h3>${L('Notification preferences')}</h3><div class="toggle-row"><div><h3>${L('Email updates')}</h3><p>${L('Visit and job notices in the demo.')}</p></div><button type="button" class="toggle" role="switch" aria-checked="${S.notify.email}" aria-label="${L('Email updates')}" data-action="toggle-email"></button></div><p class="small space-top">${L('SMS and live delivery are not connected. No contact information is sent anywhere.')}</p></div>`, OWNER_MENU);
}
function pro() {
  return appFrame(`${pagehead('Professional workspace', 'A clear view of today.', 'Company, credentials, visits and job tasks.', example())}<div class="stats">${stat('Open job tasks', 1, 'Example data · Current workspace')}${stat('Visits to assign', 1, 'Example data · Current workspace')}${stat('Credential records', 2, 'Example documents only')}${stat('Tasks completed', S.status === 3 ? 1 : 0, 'Example data · Current workspace')}</div><div class="next-step"><div><h3>${L('A visit is ready to assign.')}</h3><p>${L('Choose the technician, confirm the window and keep the homeowner informed.')}</p></div>${A('dispatch', 'Assign the visit', 'btn primary')}</div><div class="grid2"><div class="card"><h3>${L('Company readiness')}</h3><dl class="data-list"><div><dt>${L('Trade and area')}</dt><dd>${L('HVAC · Metro Atlanta')}</dd></div><div><dt>${L('License and insurance')}</dt><dd>${L(S.credentials)}</dd></div><div><dt>${L('Company profile')}</dt><dd>${L(S.profileSaved ? 'Demo saved' : 'Example profile')}</dd></div></dl>${A('pro-profile', 'Review profile', 'textlink')}</div><div class="card"><h3>${L('Today’s job task')}</h3><p>${L('AC not cooling · Alex Morgan')}</p><p>${L('Owner: Jamie Lee · Due Nov 12, 11:00 AM ET')}</p><div class="actions">${A('pro-job', 'Open job task', 'btn secondary')}</div></div></div>`, PRO_MENU);
}
function proProfile() {
  return appFrame(`${pagehead('PR-01 · PR-02', 'Present the company clearly.', 'A fictional provider profile. No company is registered or activated.')}<form class="form-panel" data-form="pro-profile"><div class="form-fields">${field('Company name', 'company', S.company, 'text', 'required')}${select('Primary trade', 'trade', TRADES, 'HVAC')}${select('Coverage', 'area', ['Metro Atlanta'], 'Metro Atlanta')}${textarea('Company summary', 'summary', 'Example company serving the Metro Atlanta area.')}</div><div class="actions"><button type="submit" class="btn primary">${L('Save demo profile')}</button>${A('credentials', 'Review credentials', 'textlink')}</div></form>`, PRO_MENU);
}
function credentials() {
  return appFrame(`${pagehead('PR-03 · License and insurance', 'Make the records visible.', 'Files stay local. This concept cannot verify a license, insurance or provider.')}<form class="form-panel" data-form="credentials"><div class="form-fields">${field('Example license number', 'license', 'DEMO-GA-1043')}${field('Example expiry date', 'expiry', '2027-06-30', 'date')}<label class="field">${L('License document · Local file name only')}<input type="file" name="licenseDoc" accept=".pdf,image/*"></label><label class="field">${L('Insurance document · Local file name only')}<input type="file" name="insuranceDoc" accept=".pdf,image/*"></label></div>${notice(S.credentials, 'No document is uploaded or checked. Production verification requires the documented review process.')}<button class="btn primary" type="submit">${L('Simulate document review request')}</button></form>`, PRO_MENU);
}
function dispatch() {
  return appFrame(`${pagehead('PR-10 · Dispatch', 'Give the visit an owner.', 'Example assignment only. This does not dispatch a real technician.')}<div class="form-shell"><form class="form-panel" data-form="dispatch"><h3>${L('AC not cooling')}</h3><p>${L('Alex Morgan · Metro Atlanta')}</p><div class="form-fields space-top">${select('Assigned technician', 'technician', ['Jamie Lee', 'Taylor Reed'], S.assigned)}${field('Visit window', 'slot', S.slot, 'text', 'readonly')}</div><div class="actions"><button class="btn primary" type="submit">${L('Confirm demo assignment')}</button></div></form><aside class="aside-note"><h3>${L('After assignment')}</h3><p>${L('The assigned technician appears on the homeowner visit. Advance the job task to preview the ETA notice.')}</p>${A('job', 'See homeowner view', 'textlink')}</aside></div>`, PRO_MENU);
}
function proJob() {
  return appFrame(`${pagehead('PR-11 · Job as a task', 'AC not cooling', 'Task WG-T1043 · Example data', pill(STATUSES[S.status], 'blue'))}<div class="grid2"><form class="form-panel" data-form="job-task"><div class="form-fields">${field('Task owner', 'owner', S.assigned, 'text', 'readonly')}${field('Due date and time', 'due', 'Nov 12, 2026 · 11:00 AM ET', 'text', 'readonly')}${select('Task state', 'status', STATUSES, STATUSES[S.status])}${textarea('Completion note / Evidence summary', 'evidence', S.evidence, 'placeholder="Example: Cooling restored; demo service notes recorded."')}<label class="field">${L('Evidence file · Optional local file name')}<input type="file" name="evidenceFile" accept="image/*,.pdf"></label></div><div class="actions"><button type="submit" class="btn primary">${L('Save demo task')}</button></div><p id="task-error" role="alert" class="small space-top"></p></form><div class="card"><h3>${L('Connected to the visit')}</h3><p>${L('Task updates are reflected in the homeowner view. Completed tasks require an evidence summary in this demo.')}</p><div class="actions">${A('job', 'Open homeowner visit', 'btn secondary')}${A('notifications', 'Check notices', 'textlink')}</div>${notice('Evidence is illustrative', 'No files are uploaded. No invoice, payment or real service completion is created.')}</div></div>`, PRO_MENU);
}
function homegig() {
  return page(`${pagehead('HG-01 · Coming soon', 'Meet HomeGig. Your future home guardian.', 'A concept for AI-assisted home care. Not a released feature.', pill('Coming soon', 'soon'))}<div class="hero-grid"><div class="card" style="min-height:400px;display:grid;place-items:center"><img src="assets/homegig.svg" alt="${L('HomeGig HGI-001 concept icon')}" style="width:260px;height:260px"></div><div><h2>${L('You ask. You stay in control.')}</h2><p class="lead space-top">${L('Try a scripted conversation about a service need. The demo can point you to a request or a visit; it does not run AI, send messages or book anything for you.')}</p><div class="actions">${B('open-chat', 'Try the scripted assistant', '', 'btn primary')}${A('request/1', 'Start a service request', 'textlink')}</div>${notice('HGI-001 placeholder', 'The guardian character artwork is still pending. The supplied concept icon is retained without modification.')}</div></div>`);
}
window.productRoutes = {
  home,
  search,
  'pro-detail': proDetail,
  request,
  duplicate,
  matches,
  booking,
  job,
  jobs,
  notifications,
  pro,
  'pro-profile': proProfile,
  credentials,
  dispatch,
  'pro-job': proJob,
  homegig
};
window.productSubmit = (kind, d, f) => {
  if (kind.startsWith('request-')) {
    let n = +kind.slice(-1);
    Object.assign(S.request, d);
    if (n === 2) {
      if (!/^(303|300|301|302|305)\d{2}$/.test(d.zip)) {
        toast('Use a Metro Atlanta example ZIP, such as 30309 or 30030.');
        return;
      }
      if (d.trade === 'Plumbing' || S.request.trade === 'Plumbing') {
        if (d.zip === '30309' && /leak/i.test(d.problem)) {
          go('duplicate');
          return;
        }
      }
    }
    if (n === 3) {
      S.booked = false;
      S.status = 0;
      S.cancelled = false;
      go('matches');
    } else go('request/' + (n + 1));
    return;
  }
  if (kind === 'search-pros') {
    const ps = PROS.filter(p => (d.trade === 'All trades' || p.trade === d.trade) && (!d.query || `${p.name} ${p.trade} ${p.area}`.toLowerCase().includes(d.query.toLowerCase())));
    $('#pro-results').innerHTML = ps.map(p => proCard(p)).join('') || `<div class="empty"><h3>${L('No matching example pros.')}</h3><p>${L('Try another trade or remove the keyword.')}</p></div>`;
    $('#pro-count').textContent = ps.length + ' ' + plain('example companies found');
    return;
  }
  if (kind === 'booking') {
    let changed = S.booked;
    S.slot = d.slot;
    S.booked = true;
    S.cancelled = false;
    S.status = 0;
    go('job');
    toast(changed ? 'Demo visit rescheduled. No real appointment changed.' : 'Demo visit confirmed. No real appointment created.');
  } else if (kind === 'pro-profile') {
    S.company = d.company;
    S.profileSaved = true;
    toast('Demo company profile saved.');
  } else if (kind === 'credentials') {
    S.credentials = 'Review requested · Demo';
    render();
    toast('Demo review requested. No documents uploaded.');
  } else if (kind === 'dispatch') {
    S.assigned = d.technician;
    go('pro-job');
    toast('Demo technician assignment confirmed.');
  } else if (kind === 'job-task') {
    if (d.status === 'Completed' && !d.evidence.trim()) {
      $('#task-error').textContent = plain('Add an evidence summary before completing the demo task.');
      return;
    }
    S.status = STATUSES.indexOf(d.status);
    S.evidence = d.evidence;
    render();
    toast('Demo job task updated.');
  } else if (kind === 'chat') {
    chatReply(d.message);
    f.reset();
  }
};
window.productAction = (ac, v, b) => {
  if (ac === 'start-trade') {
    S.request.trade = v;
    go('request/1');
  } else if (ac === 'request-pro') {
    let p = PROS.find(p => p.id === v);
    S.pro = v;
    S.request.trade = p.trade;
    go('request/1');
  } else if (ac === 'select-pro') {
    S.pro = v;
    go('booking');
  } else if (ac === 'save-request') {
    let f = b.closest('form');
    Object.assign(S.request, fromPairs(new FormData(f)));
    toast('Draft kept in this open demo. Reloading clears it.');
  } else if (ac === 'duplicate-example') {
    S.request.trade = 'Plumbing';
    S.request.problem = 'The kitchen sink has a leak.';
    S.request.zip = '30309';
    go('duplicate');
  } else if (ac === 'advance-job') {
    S.status = Math.min(3, S.status + 1);
    if (S.status === 3) S.evidence = 'Example service note: cooling restored.';
    S.booked = true;
    render();
    toast(S.status === 1 ? 'On the way notice simulated. Example ETA: 10:20 AM ET.' : 'Demo task status updated.');
  } else if (ac === 'cancel-job') {
    S.cancelled = true;
    render();
    toast('Demo visit cancelled. No real appointment changed.');
  } else if (ac === 'resend-notice') {
    S.resent = true;
    render();
    toast('Notice resent in the demo. No actual email was sent.');
  } else if (ac === 'toggle-email') {
    S.notify.email = !S.notify.email;
    render();
    toast('Demo email preference updated.');
  } else if (ac === 'open-chat') {
    S.chatOpen = true;
    drawChat();
  } else if (ac === 'close-chat') {
    S.chatOpen = false;
    drawChat();
  } else if (ac === 'chat-prompt') chatReply(v);
};
function chatReply(message) {
  if (!(message !== null && message !== void 0 && message.trim())) return;
  const q = message.toLowerCase();
  let reply = q.includes('pay') ? 'There are no in-app payments in this concept. Arrange service terms outside the demo.' : q.includes('resched') || q.includes('book') ? 'Open your visit and choose Reschedule visit. All windows are examples in Eastern Time.' : q.includes('homegig') || q.includes('ai') ? 'HomeGig is Coming soon. I am a scripted demo, not a live AI agent.' : q.includes('plumb') || q.includes('leak') ? 'Start a Plumbing request. Describe the issue, then review the demo matches before choosing a window.' : 'Choose Plumbing, HVAC, Electrical or Remodeling in Metro Atlanta. I can point you to the request and visit demos.';
  S.messages.push({
    user: message,
    reply
  });
  drawChat();
}
function drawChat() {
  let root = $('#chat-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'chat-root';
    document.body.append(root);
  }
  root.innerHTML = `${S.chatOpen ? `<aside class="chat-panel" aria-label="${L('Scripted assistant')}"><header><div><h3>${L('HomeGig concept')}</h3><small>${L('Scripted demo · AI Coming soon')}</small></div>${B('close-chat', '×', '', 'icon-button')}</header><div class="chat-messages" aria-live="polite"><div class="chat-message">${L('Hello. Try a service question with sample data. I do not send, book or run AI actions.')}</div>${S.messages.map(m => `<div class="chat-message user">${esc(m.user)}</div><div class="chat-message">${L(m.reply)}</div>`).join('')}</div><div class="chat-prompts">${['I need a plumber', 'How do I reschedule?', 'Can I pay here?'].map(m => B('chat-prompt', m, m, 'chip')).join('')}</div><div class="chat-prompts">${A('request/1', 'Start a request', 'textlink')}${A('job', 'Open visit', 'textlink')}</div><form class="chat-input" data-form="chat"><label class="sr-only" for="chat-message">${L('Your demo question')}</label><input id="chat-message" name="message" required maxlength="250" placeholder="${L('Ask with sample data only')}"><button type="submit">${L('Send')}</button></form></aside>` : ''}<button type="button" class="chat-launch" data-action="open-chat">✧ ${L('Ask the demo assistant')}</button>`;
  const messages = $('.chat-messages');
  if (messages) messages.scrollTop = messages.scrollHeight;
}
window.afterRender = () => {
  drawChat();
  if (currentRoute === 'search' && $('#pro-count')) $('#pro-count').textContent = $$('#pro-results .pro-card').length + ' ' + plain('example companies found');
};
render();

'use strict';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(r) { for (var t = 1; t < arguments.length; t++) { var o = null != arguments[t] ? arguments[t] : {}; t % 2 ? ownKeys(Object(o), !0).forEach(function (t) { _defineProperty(r, t, o[t]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function (e) { Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e)); }); } return r; }
function _defineProperty(r, t, o) { return (t = _toPropertyKey(t)) in r ? Object.defineProperty(r, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = o, r; }
function _toPropertyKey(r) { var o = _toPrimitive(r, "string"); return "symbol" == typeof o ? o : o + ""; }
function _toPrimitive(t, e) { if ("object" != typeof t || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
const SAMPLE_LISTINGS = [{
  id: '1',
  title: 'A light-filled home with room to grow.',
  address: '120 Oak Lane',
  city: 'Atlanta, GA',
  type: 'Single family',
  price: 485000,
  beds: 4,
  baths: 3,
  sqft: 2240,
  photo: 'house',
  status: 'Active'
}, {
  id: '2',
  title: 'Quiet lines. A generous living space.',
  address: '84 Willow Court',
  city: 'Decatur, GA',
  type: 'Single family',
  price: 625000,
  beds: 3,
  baths: 2,
  sqft: 2180,
  photo: 'home',
  status: 'Active'
}, {
  id: '3',
  title: 'A considered place in the city.',
  address: '36 Garden Walk',
  city: 'Marietta, GA',
  type: 'Condo',
  price: 315000,
  beds: 2,
  baths: 2,
  sqft: 1420,
  photo: 'interior',
  status: 'Active'
}];
let S;
function init() {
  S = {
    listings: SAMPLE_LISTINGS.map(x => _objectSpread({}, x)),
    draft: {
      address: '72 Cedar Way',
      city: 'Atlanta, GA',
      type: 'Single family',
      price: 465000,
      beds: 3,
      baths: 2,
      sqft: 2010,
      description: 'Example property with natural light and an open living area.',
      photos: [],
      photoURLs: [],
      documents: [],
      samplePhotos: true,
      alt: 'Example home exterior'
    },
    draftSaved: false,
    published: '4',
    inquiries: [{
      id: 1,
      property: '120 Oak Lane',
      name: 'Jordan Ellis',
      status: 'New',
      text: 'I would like to learn more about the property.'
    }],
    sent: false,
    filter: 'All properties'
  };
}
init();
window.resetDemo = init;
const MENU = [['dashboard', 'Overview'], ['my-listings', 'My listings'], ['browse', 'Find properties'], ['inquiries', 'Inquiries'], ['modules', 'Product modules'], ['account', 'Account']];
const disclaimer = 'InvesNetwork is a publishing platform. Listings are not verified. No investment, legal or tax advice. Closings are handled by your attorney or title company.';
function home() {
  return `<main id="main"><div class="inv-rail"><aside><a class="brand" href="#home"><img src="assets/logo-reverse.svg" alt="InvesNetwork"></a><nav aria-label="${L('Listing studio navigation')}">${[['list/1', 'Owner studio'], ['browse', 'Buyer view'], ['dashboard', 'Your dashboard'], ['modules', 'Product structure']].map(([r, l], i) => `<a href="#${r}"><b>${String(i + 1).padStart(2, '0')}</b>${L(l)} ↗</a>`).join('')}</nav><p class="rail-note">${L('Your property. Your story.')}<br><br>${L('A clear connection between owners, buyers and investors.')}</p></aside><section class="inv-studio"><div class="wrap"><p class="eyebrow">${L('The listing studio · Built around clarity')}</p><h1 tabindex="-1">${L('Turn your property into a clear story.')}</h1><p class="lead space-top" style="max-width:690px">${L('Photos, facts and contact preferences. Build the listing, review it, then let buyers see the full picture.')}</p><div class="studio-images">${img('house', 'Illustrative modern home exterior')}<div class="summary">${example()}<h3 class="space-top">${L('A home, clearly presented.')}</h3><p class="small space-top">${L('Sample property · Not a live listing')}</p><div class="facts"><span>${L('4 beds')}</span><span>${L('3 baths')}</span><span>${L('2,240 sq ft')}</span></div><div class="price">${money(485000)}</div></div></div><div class="actions">${A('list/1', 'List a property', 'btn seller')}${A('browse', 'Explore example listings', 'textlink')}</div><p class="small space-top">${L('Example locations only. The launch market is not confirmed.')}</p></div></section></div><section class="section soft"><div class="wrap"><div class="headrow"><div><p class="eyebrow">${L('One step at a time')}</p><h2>${L('From address to listing.')}</h2></div>${A('help', 'Show me how', 'textlink')}</div><div class="grid3">${[['01', 'Start with the address', 'See whether the property is already listed.'], ['02', 'Bring the full picture', 'Add price, facts, photos and optional documents.'], ['03', 'Review before it goes live', 'Check the summary, contact consent and publishing disclaimers.']].map(([n, t, d]) => `<article class="card"><span class="number">${n}</span><h3>${L(t)}</h3><p>${L(d)}</p></article>`).join('')}</div></div></section><section class="section"><div class="wrap hero-grid"><div>${img('interior', 'An illustrative light-filled interior', 'hero-image')}</div><div><p class="eyebrow">${L('For buyers and investors')}</p><h2>${L('See the facts. Speak to the owner.')}</h2><p class="lead space-top">${L('Search by location, property type and budget. Open the photos and facts, then send an inquiry with your consent.')}</p><div class="actions">${A('browse', 'Find properties', 'btn primary')}${A('dashboard', 'Explore the investor dashboard', 'textlink')}</div><div class="inline-stats"><div><b>${L('Browse')}</b>${L('Clear property details')}</div><div><b>${L('Inquire')}</b>${L('Consent before contact')}</div><div><b>${L('Review')}</b>${L('Your own workspace')}</div></div></div></div></section><section class="section soft"><div class="wrap"><div class="headrow"><div><p class="eyebrow">${L('The wider InvesNetwork')}</p><h2>${L('One property journey. A connected structure.')}</h2></div><p>${L('Explore all 16 customer products and 782 documented functions. Beyond the demo flows, modules are Coming soon.')}</p></div><div class="grid4">${[['Quick List', 'Create a property listing.'], ['InvesMarket', 'Search, details and owner inquiries.'], ['InvesFlow', 'Transaction workflows · Coming soon'], ['InvesDash', 'Connected reporting · Coming soon']].map(([t, d]) => `<a class="card clickable" href="#modules"><h3>${L(t)}</h3><p>${L(d)}</p><span class="count">${L('View source scope')} ↗</span></a>`).join('')}</div><div class="actions">${A('modules', 'Explore every module', 'textlink')}</div></div></section><section class="section dark"><div class="wrap headrow"><div><p class="eyebrow">${L('Your next step')}</p><h2>${L('Start with the address.')}</h2></div>${A('list/1', 'List a property', 'btn seller')}</div></section></main>`;
}
function propertyPhoto(p) {
  return p.photoURL ? `<img src="${esc(p.photoURL)}" alt="${esc(p.alt || plain('Locally selected property photo'))}">` : img(p.photo, 'Illustrative property photograph');
}
function listingCard(p) {
  return `<article class="listing-card"><a href="#property/${p.id}">${propertyPhoto(p)}<div class="card-body"><div class="mini-row">${example()}${pill(p.status, p.status === 'Active' ? 'success' : 'blue')}</div><h3>${esc(p.address)}</h3><p class="small">${L(p.city)} · ${L(p.type)}</p><div class="price">${money(p.price)}</div><p class="small">${L(p.title)}</p><div class="facts"><span>${num(p.beds)} ${L('beds')}</span><span>${num(p.baths)} ${L('baths')}</span><span>${num(p.sqft)} ${L('sq ft')}</span></div></div></a></article>`;
}
function browse() {
  return page(`${pagehead('InvesMarket · Property search', 'A clearer view of what is possible.', 'Example properties and locations only. These are not live listings, and no investment returns are promised.')}<form class="toolbar" data-form="browse">${select('Location', 'city', ['All locations', 'Atlanta, GA', 'Decatur, GA', 'Marietta, GA'], 'All locations')}${select('Property type', 'type', ['All types', 'Single family', 'Condo'], 'All types')}${select('Maximum price', 'price', ['Any price', '400000', '500000', '700000'], 'Any price')}<button type="submit" class="btn primary">${L('Search properties')}</button></form><div class="mini-row space-bottom"><p class="small" id="listing-count">${S.listings.filter(p => p.status !== 'Paused').length} ${L('example properties')}</p>${A('modules', 'Saved searches and alerts · Coming soon', 'textlink')}</div><div class="grid3" id="listing-results">${S.listings.filter(p => p.status !== 'Paused').map(listingCard).join('')}</div>${notice('Publishing platform only', disclaimer)}`);
}
function property() {
  let p = S.listings.find(x => x.id === routeArg) || S.listings[0];
  return page(`${crumb('Property detail', 'browse', 'Properties')}${pagehead('Example property · Not a live listing', p.address, p.city, example())}<div class="property-gallery">${propertyPhoto(p)}<div class="stack">${img('interior', 'Illustrative living space')}${img('kitchen', 'Illustrative kitchen')}</div></div><div class="detail-grid"><div><div class="mini-row"><h2>${money(p.price)}</h2>${pill(p.status, 'blue')}</div><h3 class="space-top">${L(p.title)}</h3><div class="facts"><span>${num(p.beds)} ${L('beds')}</span><span>${num(p.baths)} ${L('baths')}</span><span>${num(p.sqft)} ${L('sq ft')}</span><span>${L(p.type)}</span></div><div class="detail-section"><h3>${L('The property story')}</h3><p>${L(p.description || 'An illustrative property with generous natural light and flexible living spaces. The facts and photos are sample content, not a real offering.')}</p></div><div class="detail-section"><h3>${L('Facts and documents')}</h3><dl class="data-list"><div><dt>${L('Listing type')}</dt><dd>${L('Listed by owner')}</dd></div><div><dt>${L('Property information')}</dt><dd>${L('Owner supplied · Example data')}</dd></div><div><dt>${L('Documents')}</dt><dd>${L('Sample disclosure only · No live file')}</dd></div><div><dt>${L('Listing status')}</dt><dd>${L(p.status)}</dd></div></dl></div>${notice('No listing verification', disclaimer)}</div><aside class="card"><p class="eyebrow">${L('Contact with consent')}</p><h3>${L('Ask the owner your next question.')}</h3><p>${L('Contact details stay hidden until the consent step. This demo uses fictional names and example contact details.')}</p><div class="actions">${A('inquiry/' + p.id, 'Contact the owner', 'btn primary')}</div><p class="small space-top">${L('Example owner: Alex Morgan')}</p><div class="detail-section"><p>${L('Property comparison and ROI tools')}</p>${pill('Coming soon', 'soon')}${A('modules', 'See full product scope', 'textlink')}</div></aside></div>`);
}
function inquiry() {
  let p = S.listings.find(x => x.id === routeArg) || S.listings[0];
  return page(`${crumb('Owner inquiry', 'property/' + p.id, 'Property detail')}${pagehead('F-103-028 · F-103-029', 'A clear first conversation.', 'Use fictional data. Your inquiry will be added to the local example inbox only.')}<div class="form-shell"><form class="form-panel" data-form="inquiry"><input type="hidden" name="property" value="${p.id}"><h3>${esc(p.address)}</h3><p>${L(p.city)}</p><div class="form-fields space-top">${field('Example name', 'name', 'Jordan Ellis', 'text', 'required')}${field('Example email', 'email', 'jordan@example.test', 'email', 'required')}${textarea('Your question', 'message', 'I would like to learn more about the property.', 'required')}${check('I agree to share these example contact details with the owner for this inquiry.', 'consent', false, true)}${check('I understand that listings are not verified and this platform does not provide investment, legal or tax advice.', 'disclaimer', false, true)}</div>${formActions('property/' + p.id, 'Simulate inquiry')}</form><aside class="aside-note"><h3>${L('You control the contact step')}</h3><p>${L('No contact information is released or message sent outside this concept. Production consent text must be approved before release.')}</p></aside></div>`);
}
function inquirySent() {
  return success('Your example inquiry is ready.', 'The local inbox has been updated. No owner was contacted and no real contact details were shared.', `<div class="card"><h3>${L('Example contact release')}</h3><p>${L('Owner: Alex Morgan · owner@example.test')}</p><p class="small">${L('Fictional contact details, not a real listing owner.')}</p></div>`, A('inquiries', 'View local inquiries', 'btn primary') + A('browse', 'Browse properties', 'btn secondary'));
}
function list() {
  let n = Number(routeArg) || 1;
  let d = S.draft;
  let content = n === 1 ? `<h2>${L('Start with the address.')}</h2><p>${L('A demo duplicate check compares against the example properties.')}</p><div class="form-fields">${field('Example property address', 'address', d.address, 'text', 'required')}${select('Example city · Not a launch-market decision', 'city', ['Atlanta, GA', 'Decatur, GA', 'Marietta, GA'], d.city)}</div><div class="actions">${B('duplicate-listing', 'Try an already-listed address', '', 'textlink')}</div>` : n === 2 ? `<h2>${L('Bring the full picture.')}</h2><p>${L('These are example listing attributes. Final required fields remain a product decision.')}</p><div class="form-fields"><div class="form-row">${field('Asking price · USD', 'price', d.price, 'number', 'required min="1" step="1"')}${select('Property type', 'type', ['Single family', 'Condo'], d.type)}</div><div class="form-row">${field('Bedrooms · Example field', 'beds', d.beds, 'number', 'min="0" max="20"')}${field('Bathrooms · Example field', 'baths', d.baths, 'number', 'min="0" max="20"')}</div>${field('Area · sq ft · Example field', 'sqft', d.sqft, 'number', 'min="1"')}${textarea('Property description', 'description', d.description, 'required')}${check('Use included example photos if no local image is selected', 'samplePhotos', d.samplePhotos)}<label class="field">${L('Photos · Local preview only')}<input type="file" name="photos" accept="image/*" multiple><small>${L('Images stay in this browser session. Nothing is uploaded; example photos are used if no image is selected.')}</small></label><div id="photo-preview">${(d.photoURLs || []).map(u => `<img src="${esc(u)}" alt="${L('Locally selected image preview')}" style="height:120px;border-radius:8px">`).join('')}</div>${field('Photo description', 'alt', d.alt, 'text', 'required')}<label class="field">${L('Documents · Optional local file names')}<input type="file" name="documents" accept=".pdf,.txt,image/*" multiple></label></div>` : `<h2>${L('Review before it goes live.')}</h2><p>${L('The next step creates a local example only, not a public listing.')}</p><div class="mini-row"><b>${esc(d.address)}</b>${A('list/1', 'Edit address', 'textlink')}</div><dl class="data-list"><div><dt>${L('Location')}</dt><dd>${L(d.city)}</dd></div><div><dt>${L('Asking price')}</dt><dd>${money(d.price)}</dd></div><div><dt>${L('Property type')}</dt><dd>${L(d.type)}</dd></div><div><dt>${L('Photo set')}</dt><dd>${S.draft.photos.length ? esc(S.draft.photos.join(', ')) : L('Included sample photographs')}</dd></div></dl><div class="form-fields space-top">${check('I am authorized to publish this fictional example property and share example buyer inquiries with the owner.', 'consent', false, true)}${check('I acknowledge: publishing platform only; listings are not verified; no investment, legal or tax advice; attorney or title company handles closing.', 'disclaimer', false, true)}</div>${notice('Draft consent template', 'These checkboxes illustrate the required acknowledgements. They are not approved production legal text.')}`;
  return page(`${crumb('List a property')}${pagehead('Quick List · Owner studio', 'Your property. Clearly presented.', 'No listing is sent to a server or published. All data is held in this open demo only.')}${stepper(['Address', 'Details', 'Review'], n)}<div class="form-shell"><form class="form-panel" data-form="list-${n}">${content}${formActions(n === 1 ? 'home' : 'list/' + (n - 1), n === 3 ? 'Publish demo listing' : 'Continue', B('save-listing', 'Save demo draft', '', 'btn secondary'))}</form><aside class="aside-note"><h3>${L('Show me how')}</h3><ol><li>${L('Start with the address. We flag a duplicate.')}</li><li>${L('Add facts, photos and optional documents.')}</li><li>${L('Review the acknowledgements, then simulate publication.')}</li></ol>${pill('Local only')}</aside></div>`);
}
function duplicate() {
  return page(`${pagehead('Address check', 'This address is already listed.', 'The demo found 120 Oak Lane in the example property inventory.')}<div class="grid2">${listingCard(S.listings[0])}<div class="card"><h3>${L('Avoid a second listing.')}</h3><p>${L('Open the existing property or return to change the example address.')}</p><div class="actions">${A('property/1', 'Open existing property', 'btn primary')}${A('list/1', 'Change address', 'btn secondary')}</div></div></div>`);
}
function published() {
  let p = S.listings.find(x => x.id === S.published) || S.listings[S.listings.length - 1];
  return success('Your demo listing is live.', 'Simulated status: LIVE_PENDING_CHECKS. This is a local example only; no listing was published on the internet.', `<div style="max-width:410px">${listingCard(p)}</div>`, A('property/' + p.id, 'View demo listing', 'btn primary') + A('dashboard', 'Go to dashboard', 'btn secondary') + A('list/1', 'List another example', 'textlink'));
}
function dashboard() {
  return appFrame(`${pagehead('Investor and owner workspace', 'Your property journey, in one view.', 'Only your sample records. No platform-wide performance claims.', A('list/1', 'List a property', 'btn seller'))}<div class="stats">${stat('My active listings', S.listings.filter(p => p.status === 'Active' || p.status === 'Checks in progress').length, 'Example data · Your listings')}${stat('Drafts', S.draftSaved ? 1 : 0, 'Example data · This open session')}${stat('New inquiries', S.inquiries.filter(p => p.status === 'New').length, 'Example data · Your inbox')}${stat('Properties explored', 3, 'Example data · This workspace')}</div><div class="dashboard-grid"><section class="card"><h3>${L('Recent activity')}</h3><ol class="timeline">${S.listings.length > 3 ? `<li><b>${L('Demo listing created')}</b><p>${esc(S.listings[S.listings.length - 1].address)} · ${L('This session')}</p></li>` : ''}<li><b>${L('New example inquiry')}</b><p>${L('Jordan asked about 120 Oak Lane.')}</p></li><li><b>${L('Example listing is active')}</b><p>${L('120 Oak Lane · Owner supplied')}</p></li><li><b>${L('Workspace ready')}</b><p>${L('Example records, not a live investment portfolio.')}</p></li></ol></section><div class="stack"><section class="card"><h3>${L('Your next step')}</h3><p>${L('Review an inquiry or add a property with photos and facts.')}</p><div class="actions">${A('inquiries', 'Open inquiries', 'btn secondary')}${A('my-listings', 'My listings', 'textlink')}</div></section><section class="card"><h3>${L('Looking ahead')}</h3><p>${L('Property comparisons, valuation, finance and advanced transaction tools.')}</p>${pill('Coming soon', 'soon')}<div class="actions">${A('modules', 'Explore the complete structure', 'textlink')}</div></section></div></div>`, MENU);
}
function myListings() {
  return appFrame(`${pagehead('Owner workspace', 'My listings', 'Pause a sample listing or reopen the local draft. Nothing changes on a real platform.', A('list/1', 'List a property', 'btn seller'))}<div class="table-wrap"><table><thead><tr><th>${L('Property')}</th><th>${L('Price')}</th><th>${L('Status')}</th><th>${L('Actions')}</th></tr></thead><tbody>${S.listings.map(p => `<tr><td><b>${esc(p.address)}</b><p>${L(p.city)}</p></td><td>${money(p.price)}</td><td>${pill(p.status, 'blue')}</td><td>${A('property/' + p.id, 'Open', 'textlink')} ${B('pause-listing', p.status === 'Paused' ? 'Resume demo' : 'Pause demo', p.id, 'textlink')}</td></tr>`).join('')}</tbody></table></div>${S.draftSaved ? notice('A local draft is saved', 'Open List a property to continue it. Reloading the page clears the draft.') : ''}`, MENU);
}
function inquiries() {
  return appFrame(`${pagehead('Contact workspace', 'Your example inquiries', 'Consent-gated contact is illustrated locally. No message has been sent.')}<div class="stack">${S.inquiries.map(p => `<div class="card"><div class="mini-row"><h3>${esc(p.name)}</h3>${pill(p.status, p.status === 'New' ? 'blue' : 'success')}</div><p>${esc(p.property)} · ${L('Example data')}</p><p>${esc(p.text)}</p><div class="actions">${B('mark-inquiry', 'Mark as reviewed', String(p.id), 'btn secondary')}${A('browse', 'Find properties', 'textlink')}</div></div>`).join('')}</div>`, MENU);
}
window.productRoutes = {
  home,
  browse,
  property,
  inquiry,
  'inquiry-sent': inquirySent,
  list,
  duplicate,
  published,
  dashboard,
  'my-listings': myListings,
  inquiries
};
function saveDetails(d, f) {
  var _f$querySelector;
  Object.assign(S.draft, fromPairs(Object.entries(d).filter(([k]) => !['photos', 'documents'].includes(k))));
  for (let k of ['price', 'beds', 'baths', 'sqft']) S.draft[k] = Number(S.draft[k]);
  if (f !== null && f !== void 0 && f.querySelector('[name=samplePhotos]')) S.draft.samplePhotos = !!d.samplePhotos;
  if (f !== null && f !== void 0 && (_f$querySelector = f.querySelector('[name=photos]')) !== null && _f$querySelector !== void 0 && _f$querySelector.files.length) {
    let files = [...f.querySelector('[name=photos]').files];
    S.draft.photos = files.map(x => x.name);
    S.draft.photoURLs = files.map(x => URL.createObjectURL(x));
  }
  if (f !== null && f !== void 0 && f.querySelector('[name=documents]')) S.draft.documents = [...f.querySelector('[name=documents]').files].map(x => x.name);
}
window.productSubmit = (kind, d, f) => {
  if (kind === 'browse') {
    let rows = S.listings.filter(p => p.status !== 'Paused' && (d.city === 'All locations' || p.city === d.city) && (d.type === 'All types' || p.type === d.type) && (d.price === 'Any price' || p.price <= Number(d.price)));
    $('#listing-results').innerHTML = rows.map(listingCard).join('') || `<div class="empty"><h3>${L('No example properties match.')}</h3><p>${L('Try another location, type or price.')}</p></div>`;
    $('#listing-count').textContent = rows.length + ' ' + plain('example properties');
    return;
  }
  if (kind.startsWith('list-')) {
    let n = +kind.slice(-1);
    saveDetails(d, f);
    if (n === 1) {
      let same = S.listings.find(p => p.address.toLowerCase().trim() === d.address.toLowerCase().trim());
      if (same) {
        go('duplicate');
        return;
      }
    }
    if (n === 2 && !S.draft.samplePhotos && !S.draft.photoURLs.length) {
      toast('Choose a local image or use the included example photos.');
      return;
    }
    if (n === 3) {
      let p = _objectSpread(_objectSpread({}, S.draft), {}, {
        id: String(S.listings.length + 1),
        title: 'A new property story, ready to explore.',
        photo: 'house',
        photoURL: S.draft.photoURLs[0] || null,
        status: 'Checks in progress'
      });
      S.published = p.id;
      S.listings.push(p);
      S.draftSaved = false;
      go('published');
    } else go('list/' + (n + 1));
    return;
  }
  if (kind === 'inquiry') {
    let p = S.listings.find(p => p.id === d.property);
    S.inquiries.unshift({
      id: S.inquiries.length + 1,
      name: d.name,
      property: p.address,
      text: d.message,
      status: 'New'
    });
    go('inquiry-sent');
  }
};
window.productAction = (ac, v, b) => {
  if (ac === 'duplicate-listing') {
    S.draft.address = '120 Oak Lane';
    go('duplicate');
  } else if (ac === 'save-listing') {
    let f = b.closest('form');
    saveDetails(fromPairs(new FormData(f)), f);
    S.draftSaved = true;
    toast('Listing draft kept in this open demo. No file uploaded.');
  } else if (ac === 'pause-listing') {
    let p = S.listings.find(p => p.id === v);
    p.status = p.status === 'Paused' ? 'Active' : 'Paused';
    render();
    toast('Example listing status updated locally.');
  } else if (ac === 'mark-inquiry') {
    S.inquiries.find(p => String(p.id) === v).status = 'Reviewed';
    render();
    toast('Example inquiry marked as reviewed.');
  }
};
window.productChange = e => {
  if (e.target.name === 'photos' && e.target.files.length) {
    S.draft.photos = [...e.target.files].map(x => x.name);
    S.draft.photoURLs = [...e.target.files].map(x => URL.createObjectURL(x));
    const preview = $('#photo-preview');
    if (preview) preview.innerHTML = S.draft.photoURLs.map(u => `<img src="${esc(u)}" alt="${L('Locally selected image preview')}" style="height:120px;border-radius:8px">`).join('');
  }
};
render();

/* ES5 bootstrap: readable content remains available if the interactive app fails. */
(function () {
  window.__prototypeReady = false;
  window.__prototypeShowError = function (error) {
    var root = document.getElementById('app');
    var panel = document.getElementById('prototype-error');
    if (!panel) {
      panel = document.createElement('section'); panel.id = 'prototype-error';
      panel.setAttribute('role', 'alert');
      panel.style.cssText = 'display:block!important;background:#fff!important;color:#173047!important;border:2px solid #084c61;padding:20px;margin:16px;font:16px/1.5 Arial,sans-serif;position:relative;z-index:100';
      var title = document.createElement('strong'); title.textContent = 'Interactive preview could not start.'; panel.appendChild(title);
      var detail = document.createElement('p'); detail.textContent = 'The readable preview below is still available. Open this link directly in Safari or Chrome, or use the overview links. No login is needed.'; panel.appendChild(detail);
      var link = document.createElement('a'); link.href = 'journey.html'; link.textContent = 'Browse the prototype overview'; link.style.textDecoration = 'underline'; panel.appendChild(link);
      var technical = document.createElement('details'); var summary = document.createElement('summary'); summary.textContent = 'Technical details'; technical.appendChild(summary);
      var message = document.createElement('p'); message.textContent = error && error.message ? error.message : 'A required file or browser feature is unavailable.'; technical.appendChild(message); panel.appendChild(technical);
      if (root) root.parentNode.insertBefore(panel, root); else document.body.appendChild(panel);
    }
  };
  window.addEventListener('error', function (event) {
    if (event.message) window.__prototypeShowError(event.error || {message: event.message});
    else if (event.target && event.target.tagName === 'SCRIPT' && /^(?:locales\/en|catalog|common|app)\.js(?:\?|$)/.test(event.target.getAttribute('src') || '')) window.__prototypeShowError({message:'A required script did not load.'});
  }, true);
  window.addEventListener('unhandledrejection', function (event) { window.__prototypeShowError(event.reason); });
  window.addEventListener('load', function () { if (!window.__prototypeReady) window.__prototypeShowError({message:'The interactive app did not initialize. Static overview navigation is available.'}); });
}());

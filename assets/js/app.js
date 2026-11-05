/* ==========================================================================
   Rieux · comportamiento del sitio
   --------------------------------------------------------------------------
   Lee el contenido de window.SITE (content.js) y se encarga de:
   - el índice de capítulos y la terminal que muestra cada uno,
   - el idioma (ES/EN) y el tema (claro/oscuro), guardados en el navegador,
   - las URL por capítulo (#wava, #formacion…) y el botón atrás.
   Normalmente no hace falta tocar este archivo para cambiar textos o colores.
   ========================================================================== */
(function () {
  "use strict";

  const SITE = window.SITE;
  const PROFILE = "perfil", EDUCATION = "formacion";
  const ORDER = [PROFILE, ...Object.keys(SITE.es.jobs), EDUCATION];
  const BASE_TITLE = document.title;
  const TYPE_SPEED = [18, 40];   // ms por letra al escribir un comando (mín., máx.)
  // Ícono de enlace externo (cuadro abierto con flecha)
  const ICON_EXTERNAL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4.5H7.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V14M14 4.5h5.5V10M19.5 4.5 11 13"/></svg>';

  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const narrow = matchMedia("(max-width: 859px)");          // igual que el breakpoint móvil de styles.css
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  let lang = store.get("lang") || ((navigator.language || "es").startsWith("en") ? "en" : "es");
  let current = "";

  /* ---------- Textos por capítulo ---------- */
  const t = () => SITE[lang];
  function titleFor(id) {
    if (id === PROFILE) return t().profile.title;
    if (id === EDUCATION) return t().education.title;
    return t().jobs[id].org;
  }
  function commandFor(id) {
    if (!id) return "ricardo --status";
    if (id === PROFILE) return "ricardo --about";
    if (id === EDUCATION) return "ls ~/formacion";
    return "ricardo show " + id;
  }
  function formatDate(d) {
    const m = t().months;
    return m ? d.replace(/^\w+/, w => m[w] || w) : d;
  }

  /* ---------- Contenido de la terminal ---------- */
  function bodyFor(id) {
    const T = t();
    let i = 0;  // retraso escalonado de cada línea
    const line = (html, extra = "") => `<div class="ln" style="--i:${i++}${extra}">${html}</div>`;
    const list = (items, plus) => `<ul class="t-list ${plus ? "plus" : ""} ln" style="--i:${i++}">${items.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
    const label = text => line(`<p class="t-lab">${esc(text)}</p>`);
    const heading = text => line(`<h2 class="t-h">${esc(text)}</h2>`);
    // Navegación lineal entre capítulos: sin "Anterior" en el primero; en el último, invitación a agendar
    const nextLink = () => {
      const i = ORDER.indexOf(id), prev = ORDER[i - 1], next = ORDER[i + 1];
      const book = document.querySelector(".intro .btn");
      const left = prev
        ? `<a class="chap-link prev" href="#${prev}" data-go="${prev}">← ${T.prev}: ${esc(titleFor(prev))}</a>`
        : "<span></span>";
      const right = next
        ? `<a class="chap-link next" href="#${next}" data-go="${next}">${T.next}: ${esc(titleFor(next))} →</a>`
        : `<a class="chap-link cta" href="${book.href}" target="_blank" rel="noopener">${esc(T.book)} →</a>`;
      return line(`<nav class="chap-nav" aria-label="${esc(T.idx)}">${left}${right}</nav>`);
    };

    if (!id) {
      const s = T.status;
      return line(`<span class="ok">●</span> ${esc(s.ok)}`) +
        line(`<p class="t-p big">${esc(narrow.matches ? s.bigNarrow : s.big)}</p>`, ";margin-top:14px") +
        `<dl class="kv ln" style="--i:${i++}">${s.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>`;
    }

    if (id === PROFILE) {
      const p = T.profile;
      return heading(p.title) +
        p.paragraphs.map((x, k) => line(`<p class="t-p${k === 0 ? " big" : ""}">${esc(x)}</p>`)).join("") +
        label(p.skillsTitle) + list(p.skills, true) + nextLink();
    }

    if (id === EDUCATION) {
      const e = T.education;
      const courses = SITE.certs.map(([date, en, es, url]) =>
        `<li><a href="${url}" target="_blank" rel="noopener"><span class="c-d">${formatDate(date)}</span><span class="c-n">${esc(lang === "es" ? es : en)}</span><span class="c-x">${ICON_EXTERNAL}<span class="sr">(${esc(T.newTab)})</span></span></a></li>`).join("");
      const current = e.current
        ? line(`<p class="degree"><span class="dim">${esc(e.current.dates)}</span> · ${esc(e.current.name)} <span class="now-tag">${esc(e.current.tag)}</span></p>`)
        : "";
      return heading(e.title) + current +
        line(`<p class="degree"><span class="dim">${esc(e.degreeDate)}</span> · ${esc(e.degree)}</p>`) +
        label(`${e.coursesTitle} · ${SITE.certs.length}`) +
        `<ul class="certs ln" style="--i:${i++}">${courses}</ul>` + nextLink();
    }

    const j = T.jobs[id], L = T.labels;
    return heading(j.role) +
      line(`<p class="t-sub">${esc(j.org)} · ${esc(j.place)} · ${esc(j.dates)}</p>`) +
      line(`<div class="box"><span class="tag">[${L.highlight}]</span><strong>${esc(j.highlight[0])}</strong><p>${esc(j.highlight[1])}</p></div>`) +
      label(L.resp) + list(j.resp) +
      label(L.ach) + list(j.ach, true) + nextLink();
  }

  /* ---------- Escritura del comando (se cancela si el usuario cambia rápido) ---------- */
  let run = 0;
  function show(id, animate) {
    const token = ++run, term = $("term"), cmd = commandFor(id);
    $("path").textContent = id ? "~/" + id : "~";
    term.scrollTop = 0;
    const prompt = `<span class="prompt">$</span>`;
    const finish = () => {
      if (token !== run) return;
      term.innerHTML = `<div>${prompt} ${esc(cmd)}</div>` + bodyFor(id) +
        `<div class="ln" style="--i:14;margin-top:18px">${prompt} <span class="caret"></span></div>`;
    };
    if (!animate || reduced.matches) return finish();

    term.innerHTML = `<div>${prompt} <span id="typed"></span><span class="caret"></span></div>`;
    const out = $("typed");
    let k = 0;
    const step = () => {
      if (token !== run) return;
      out.textContent = cmd.slice(0, ++k);
      if (k < cmd.length) return setTimeout(step, TYPE_SPEED[0] + Math.random() * (TYPE_SPEED[1] - TYPE_SPEED[0]));
      setTimeout(() => {
        if (token !== run) return;
        term.insertAdjacentHTML("beforeend", `<div class="dim">[INFO] ${t().loading} ${esc(id || "status")}…</div>`);
        setTimeout(finish, 260);
      }, 120);
    };
    setTimeout(step, 80);
  }

  /* ---------- Índice ---------- */
  function renderItems() {
    const T = t();
    if ($("items").contains($("console"))) $("index").append($("console"));  // no destruir la terminal al re-renderizar
    $("items").innerHTML = ORDER.map(id => {
      const job = T.jobs[id];
      const meta = job ? job.role : id === PROFILE ? T.profile.meta : T.education.meta;
      const year = job ? `<span class="i-year">${esc(job.years)}</span>` : "";
      return `<li data-id="${id}"><a class="item" href="#${id}" data-go="${id}" aria-controls="console" aria-current="${id === current}">
        <span class="i-title">${esc(titleFor(id))}</span><span class="i-meta">${esc(meta)}</span>${year}</a></li>`;
    }).join("");
  }

  /* En móvil la terminal se muda justo debajo del capítulo activo */
  function placeConsole() {
    const c = $("console");
    if (narrow.matches) {
      const li = current && document.querySelector(`#items li[data-id="${current}"]`);
      (li || $("index")).append(c);
    } else if (c.parentElement !== $("app")) {
      $("index").after(c);
    }
  }

  function select(id, opts = {}) {
    if (!ORDER.includes(id)) id = "";
    current = id;
    document.querySelectorAll("#items .item").forEach(a => a.setAttribute("aria-current", a.dataset.go === id));
    placeConsole();
    show(id, opts.animate !== false);
    document.title = id ? `${titleFor(id)} · Ricardo Estepa` : BASE_TITLE;
    $("live").textContent = id ? `${t().showing}: ${titleFor(id)}` : "";
    if (opts.scroll && narrow.matches && id) {
      const item = document.querySelector(`#items li[data-id="${id}"]`);
      requestAnimationFrame(() => item.scrollIntoView({ block: "start", behavior: reduced.matches ? "auto" : "smooth" }));
    }
  }

  /* ---------- Idioma ---------- */
  function render() {
    const T = t();
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-t]").forEach(el => {
      const v = T[el.dataset.t];
      if (typeof v === "string") el.textContent = v;
    });
    $("theme").setAttribute("aria-label", T.theme);
    document.querySelector(".brand").setAttribute("aria-label", T.home);
    document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    renderItems();
    select(current, { animate: false });
  }

  /* ---------- Eventos ---------- */
  document.addEventListener("click", e => {
    const a = e.target.closest("[data-go]");
    if (!a) return;
    e.preventDefault();
    let id = a.dataset.go;
    if (id && id === current && a.classList.contains("item")) id = "";  // tocar el capítulo activo lo cierra
    history.pushState(null, "", id ? "#" + id : location.pathname + location.search);
    select(id, { scroll: !!id });
  });
  addEventListener("popstate", () => select(location.hash.slice(1)));
  narrow.addEventListener("change", () => select(current, { animate: false }));

  document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => {
    lang = b.dataset.lang;
    store.set("lang", lang);
    render();
  }));

  /* ---------- Tema ---------- */
  const root = document.documentElement;
  const savedTheme = store.get("theme");
  if (savedTheme) root.dataset.theme = savedTheme;
  $("theme").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    store.set("theme", root.dataset.theme);
  });

  /* ---------- Inicio ---------- */
  current = ORDER.includes(location.hash.slice(1)) ? location.hash.slice(1) : "";
  render();
  show(current, true);
})();

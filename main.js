/* Renders index.html from data.js. Content lives in data.js — not here. */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/** Escape, then turn *this* into <em>this</em>. */
const md = (s) => esc(s).replace(/\*([^*]+)\*/g, "<em>$1</em>");

const ICONS = {
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.5 4.7 5.9V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="m3.5 7 8.5 5.8L20.5 7"/></svg>',
  telegram:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.8 15.6 9.6 19c.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.5c.3-1.2-.4-1.7-1.3-1.4L1.9 9.9c-1.2.5-1.2 1.1-.2 1.4l4.6 1.4L17 6.3c.5-.3.9-.2.6.2z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4V13h2.7v8z"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.4 3h3l1.5 3.8-1.9 1.4a12 12 0 0 0 5.8 5.8l1.4-1.9L20 13.6v3a1.7 1.7 0 0 1-1.9 1.7A15.6 15.6 0 0 1 4.7 4.9 1.7 1.7 0 0 1 6.4 3z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg>',
  link:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7L12.5 20"/></svg>',
};

const icon = (name) => ICONS[name] || ICONS.link;

/* ── text ─────────────────────────────────────────────────── */
$$("[data-brand-1]").forEach((el) => (el.textContent = DATA.brand[0]));
$$("[data-brand-2]").forEach((el) => (el.textContent = DATA.brand[1]));
$("[data-role-1]").textContent = DATA.role[0];
$("[data-role-2]").textContent = DATA.role[1];
$("[data-tagline]").innerHTML = md(DATA.tagline);
$("[data-about-intro]").innerHTML = md(DATA.about.intro);
$("[data-photo]").src = DATA.about.photo;
$("[data-work-total]").textContent = DATA.workTotal;

/* ── socials (hero + footer) ──────────────────────────────── */
const socialsHTML = DATA.socials
  .map(
    (s) =>
      `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${icon(s.icon)}${esc(s.label)}</a></li>`
  )
  .join("");
$$("[data-socials]").forEach((el) => (el.innerHTML = socialsHTML));

/* ── skills ───────────────────────────────────────────────── */
$("[data-skills]").innerHTML = DATA.skills
  .map(
    (g) =>
      `<li class="skill"><h3>${esc(g.title)}</h3><p>${g.items.map(esc).join(" / ")}</p></li>`
  )
  .join("");

/* ── work ─────────────────────────────────────────────────── */
$("[data-work]").innerHTML = DATA.work
  .map(
    (w) => `<li><div class="work__row">
      <span class="work__when">${esc(w.from)} – ${esc(w.to || "Present")}${
      w.length ? `<small>${esc(w.length)}</small>` : ""
    }</span>
      <span class="work__co">${esc(w.company)}</span>
      <span class="work__role">${esc(w.role)} <span>|</span> ${esc(w.stack)}</span>
    </div></li>`
  )
  .join("");

/* ── projects ─────────────────────────────────────────────── */
const collage = (p) => {
  const tiles = p.images.length
    ? p.images
        .slice(0, 4)
        .map((src) => `<img src="${esc(src)}" alt="${esc(p.name)} screenshot" loading="lazy">`)
    : [0, 1, 2].map(
        (i) => `<div class="ph ph--${i}">${i === 0 ? esc(p.name) : esc(p.tags[i] || "")}</div>`
      );
  return `<div class="collage">${tiles.join("")}</div>`;
};

$("[data-projects]").innerHTML = DATA.projects
  .map(
    (p) => `<article class="project">
      <div class="project__info">
        <h3>${esc(p.name)}</h3>
        ${p.meta ? `<p class="project__meta">${esc(p.meta)}</p>` : ""}
        <div class="project__tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <div class="project__body">${p.body.map((t) => `<p>${md(t)}</p>`).join("")}</div>
        <div class="project__link">
          ${
            p.repo
              ? `<a class="round" href="${esc(p.repo)}" target="_blank" rel="noopener"
                    aria-label="${esc(p.name)} source code on GitHub">${icon("github")}</a>`
              : ""
          }
          ${
            p.live
              ? `<a class="round" href="${esc(p.live)}" target="_blank" rel="noopener"
                    aria-label="${esc(p.name)} live site">↗</a>`
              : ""
          }
        </div>
      </div>
      ${collage(p)}
    </article>`
  )
  .join("");

/* Landscape screenshots span two collage columns, portrait ones two rows. */
$$(".collage img").forEach((img) => {
  const tag = () => img.classList.add(img.naturalHeight > img.naturalWidth ? "is-tall" : "is-wide");
  img.complete && img.naturalWidth ? tag() : img.addEventListener("load", tag, { once: true });
  img.tabIndex = 0; // reachable by keyboard, since it opens the lightbox
});

/* ── lightbox: click or Enter on any screenshot ───────────── */
const lightbox = $("[data-lightbox]");
const lightboxImg = $("img", lightbox);

const openLightbox = (img) => {
  lightboxImg.src = img.currentSrc || img.src;
  lightboxImg.alt = img.alt;
  lightbox.showModal();
};

document.addEventListener("click", (e) => {
  const img = e.target.closest(".collage img");
  if (img) openLightbox(img);
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const img = document.activeElement?.closest?.(".collage img");
  if (!img) return;
  e.preventDefault();
  openLightbox(img);
});
lightbox.addEventListener("click", () => lightbox.close()); // backdrop or image

/* ── articles: hero carousel + grid (hidden when empty) ───── */
const slide = (a) => `<a class="slide" href="${esc(a.url)}" target="_blank" rel="noopener">
    <h3>${esc(a.title)}</h3>
    <p>${esc(a.excerpt)}</p>
    <span class="slide__foot"><span class="slide__more">Read more</span><span class="round">→</span></span>
  </a>`;

if (DATA.articles.length) {
  const html = DATA.articles.map(slide).join("");
  $("[data-car-track]").innerHTML = html;
  $("[data-articles]").innerHTML = html;
  $("[data-carousel]").hidden = false;
  $("[data-articles-section]").hidden = false;
} else {
  $$('a[href="#articles"]').forEach((a) => a.remove()); // no dead nav links
}

/* ── carousel arrows ──────────────────────────────────────── */
const track = $("[data-car-track]");
const step = () => (track.firstElementChild?.offsetWidth || 400) + 16;
$("[data-car-prev]").onclick = () => track.scrollBy({ left: -step(), behavior: "smooth" });
$("[data-car-next]").onclick = () => track.scrollBy({ left: step(), behavior: "smooth" });

/* ── mobile menu ──────────────────────────────────────────── */
const burger = $("[data-burger]");
const nav = $("[data-nav]");
burger.onclick = () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
};
nav.onclick = (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
};

/* ── scroll reveal ────────────────────────────────────────────
   The huge top rootMargin keeps the root open far above the viewport, so an
   element a fast scroll jumps clean over still reports as intersecting.
   A plain viewport-sized root misses those and leaves whole sections blank. */
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
    }),
  // Bottom margin stays 0: any inset would strand elements that sit inside it
  // at max scroll — the footer socials live 56px off the bottom of the page.
  { rootMargin: "100000px 0px 0px 0px" }
);

$$(
  ".hero__title, .hero__tagline, .cta, .socials--hero, .carousel, .section__head," +
    ".display, .skill, .photo, .skills__note, .work li, .project," +
    ".cards .slide, .footer__grid, .footer .socials"
).forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});

// Cascade siblings instead of popping a whole group at once.
$$(".hero__grid, .skills, .work, .cards").forEach((group) =>
  [...group.children].forEach((el, i) =>
    el.style.setProperty("--d", `${Math.min(i, 6) * 80}ms`)
  )
);

/* ── nav active section ───────────────────────────────────── */
const links = new Map($$(".topnav a").map((a) => [a.getAttribute("href").slice(1), a]));
const spy = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.remove("is-active"));
      links.get(e.target.id)?.classList.add("is-active");
    }),
  { rootMargin: "-45% 0px -50% 0px" }
);
$$("section[id], footer[id]").forEach((s) => spy.observe(s));

/* ── self-check: md() must escape before emphasising ──────── */
console.assert(md("a *b* c") === "a <em>b</em> c", "md: emphasis broken");
console.assert(md("<img onerror=x>") === "&lt;img onerror=x&gt;", "md: escaping broken");
console.assert(md("2 * 3 * 4") === "2 <em> 3 </em> 4", "md: unpaired asterisk handling changed");

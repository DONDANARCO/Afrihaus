const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const cssAdditions = `
.hero-bg-image{position:absolute;inset:0;background-size:cover;background-position:center right;opacity:0.22}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(105deg,#fafaf8 42%,rgba(250,250,248,0.85) 58%,rgba(250,250,248,0.35) 100%)}
.hero-media{position:absolute;right:0;top:0;bottom:0;width:min(52%,720px);overflow:hidden;z-index:1}
.hero-media img{width:100%;height:100%;object-fit:cover;opacity:0.88}
.nav-logo-img{height:44px;width:auto;display:block;object-fit:contain}
.about-visual-inner img{width:100%;height:100%;object-fit:cover}
.about-visual-inner::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(17,17,17,0.35) 100%)}
.eco-logo img,.eco-logo-img{height:40px;width:auto;max-width:140px;object-fit:contain;display:block}
.service-thumb{width:100%;height:140px;object-fit:cover;border-radius:8px;margin-bottom:1rem;display:block}
.section-visual{display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center;margin-bottom:2rem}
.section-visual img{width:100%;height:280px;object-fit:cover;border-radius:var(--rl);border:1px solid rgba(17,17,17,0.08)}
.ai-visual img{width:100%;height:100%;min-height:320px;object-fit:cover;border-radius:var(--rl)}
.ai-grid.has-visual{grid-template-columns:1fr 1fr}
@media(max-width:900px){
  .hero-media{display:none}
  .hero-content{max-width:100%}
  .section-visual{grid-template-columns:1fr}
  .section-visual img{height:220px}
  .ai-grid.has-visual{grid-template-columns:1fr}
}
`;

if (!html.includes('.hero-bg-image')) {
  html = html.replace('</style>', cssAdditions + '\n</style>');
}

html = html.replace(
  '<div class="hero-bg"></div>\n    <div class="hero-grid"></div>',
  `<div class="hero-bg"></div>
    <div class="hero-bg-image" style="background-image:url('images/Smart%20Home%20Ideas%20for%202026.jpg')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-media" aria-hidden="true"><img src="images/f267423967f0406eb6f85b1f8fe319b2.webp" alt=""/></div>
    <div class="hero-grid"></div>`
);

html = html.replace(
  /<img src="images\/home-logo\.png"[^>]*>/,
  '<img src="images/home-logo.png" alt="AfriHaus Smart Living" class="nav-logo-img">'
);

html = html.replace(
  /<div class="about-visual-inner" style="background:#111111;">\s*<img[^>]+>/,
  '<div class="about-visual-inner"><img src="images/the-lab-blog-electronics-in-smart-homes.jpg.webp" alt="Smart home electronics and automation">'
);

if (!html.includes('og:image')) {
  html = html.replace(
    '<meta property="og:site_name"',
    '<meta property="og:image" content="https://www.afrihaus.co.za/images/Smart%20Home%20Ideas%20for%202026.jpg"/>\n<meta property="og:site_name"'
  );
}

// Ecosystem logos — targeted replacements only
html = html.replace(
  `<div class="eco-logo"><svg width="28" height="28" viewBox="419 443 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M427 466H445M436 454V452M436 454C440.418 454 444 457.582 444 462V463H428V462C428 457.582 431.582 454 436 454Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="eco-for">Best for Android users</div>
        <h3>Google Home</h3>`,
  `<div class="eco-logo"><img src="images/Google-Home-CES-2025.2e16d0ba.fill-1200x600.png" alt="Google Home" class="eco-logo-img" loading="lazy"></div>
        <div class="eco-for">Best for Android users</div>
        <h3>Google Home</h3>`
);

html = html.replace(
  `<div class="eco-logo"></div>
        <div class="eco-for">Best for Apple users</div>
        <h3>Apple HomeKit</h3>`,
  `<div class="eco-logo"><img src="images/Apple-Home-3.webp" alt="Apple HomeKit" class="eco-logo-img" loading="lazy"></div>
        <div class="eco-for">Best for Apple users</div>
        <h3>Apple HomeKit</h3>`
);

html = html.replace(
  `<div class="eco-logo">🔵</div>
        <div class="eco-for">Widest compatibility</div>
        <h3>Amazon Alexa</h3>`,
  `<div class="eco-logo"><img src="images/Alexa_Hub_SmartHome_0623_Matter_600x450.jpg" alt="Amazon Alexa" class="eco-logo-img" loading="lazy"></div>
        <div class="eco-for">Widest compatibility</div>
        <h3>Amazon Alexa</h3>`
);

html = html.replace(
  `<div class="eco-logo">🏡</div>
        <div class="eco-for">Best overall for power users</div>
        <h3>Home Assistant</h3>`,
  `<div class="eco-logo"><img src="images/apps.15577.14305344529031278.ff85c8ae-9dc7-4aeb-a5f0-2096142bdf6f.jpg" alt="Home Assistant" class="eco-logo-img" loading="lazy"></div>
        <div class="eco-for">Best overall for power users</div>
        <h3>Home Assistant</h3>`
);

html = html.replace(
  `<div class="eco-logo">🔶</div>
        <div class="eco-for">Accessible smart home setup</div>
        <h3>Samsung SmartThings</h3>`,
  `<div class="eco-logo"><img src="images/2025-smart-tv-06-smart-home-f03-1-smartthings-mo-others.jpg" alt="Samsung SmartThings" class="eco-logo-img" loading="lazy"></div>
        <div class="eco-for">Accessible smart home setup</div>
        <h3>Samsung SmartThings</h3>`
);

html = html.replace(
  '<p class="section-lead">Complete smart entertainment setups, from 4K streaming players to whole-home audio systems and dedicated cinema rooms.</p>\n    <div class="security-cols fade-in">',
  `<div class="section-visual fade-in" style="margin-bottom:2rem">
      <img src="images/smart tv.jpeg" alt="Smart TV and streaming entertainment" loading="lazy">
      <p class="section-lead" style="margin-bottom:0">Complete smart entertainment setups, from 4K streaming players to whole-home audio systems and dedicated cinema rooms.</p>
    </div>
    <div class="security-cols fade-in">`
);

html = html.replace(
  '<p class="section-lead">The hardware we specify, supply, and install for complete property protection.</p>\n    <div class="security-cols fade-in">',
  `<div class="section-visual fade-in" style="margin-bottom:2rem">
      <p class="section-lead" style="margin-bottom:0">The hardware we specify, supply, and install for complete property protection.</p>
      <img src="images/smart-security-alarm-kit-tuya-GSM-sim-card.png" alt="Smart security alarm and monitoring kit" loading="lazy">
    </div>
    <div class="security-cols fade-in">`
);

html = html.replace('<div class="ai-grid">', '<div class="ai-grid has-visual">');
html = html.replace(
  '<div class="ai-features fade-in">',
  `<div class="ai-visual fade-in" aria-hidden="true"><img src="images/New Google Devices SOURCE Julian Chokkattu.webp" alt="Connected smart home devices" loading="lazy"></div>
      <div class="ai-features fade-in">`
);

html = html.replace(
  '<span class="proto-badge pb-mqtt" style="padding:8px 18px;font-size:13px;font-weight:400">MQTT</span>\n      </div>\n    </div>\n  </section>',
  `<span class="proto-badge pb-mqtt" style="padding:8px 18px;font-size:13px;font-weight:400">MQTT</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:2rem;margin-top:2rem;padding-top:1.5rem;border-top:1px solid rgba(17,17,17,0.08)">
        <img src="images/tuya-smartlife-home-page-image-2-768x407-768x407.png" alt="Tuya Smart Life" style="height:44px;width:auto;object-fit:contain" loading="lazy">
        <img src="images/aqara.webp" alt="Aqara" style="height:44px;width:auto;object-fit:contain" loading="lazy">
        <img src="images/lockup-hero-large_2x.png" alt="Matter" style="height:36px;width:auto;object-fit:contain" loading="lazy">
      </div>
    </div>
  </section>`
);

const serviceThumbs = [
  ['Smart Home Automation', 'images/c7f0f54d11f4708c75bc11cd11dbaa5269d184c1.jpeg'],
  ['Security & Access Control', 'images/smart-security-alarm-kit-tuya-GSM-sim-card.png'],
  ['Connectivity & Networking', 'images/the-lab-blog-electronics-in-smart-homes.jpg.webp'],
];

for (const [title, src] of serviceThumbs) {
  if (html.includes(`data-thumb="${title}"`)) continue;
  html = html.replace(
    `<h3>${title}</h3>`,
    `<img class="service-thumb" src="${src}" alt="${title}" loading="lazy" data-thumb="${title}">\n        <h3>${title}</h3>`,
    1
  );
}

fs.writeFileSync(path.join(root, 'index.html'), html);
console.log('Done.', (fs.statSync(path.join(root, 'index.html')).size / 1024).toFixed(0), 'KB');

const fs = require('fs');
const path = require('path');
let html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
let n = 0;
html = html.replace(/<img src="data:image\/png;base64,[^"]+"/g, () => {
  n += 1;
  return n === 1
    ? '<img src="images/home-logo.png"'
    : '<img src="images/the-lab-blog-electronics-in-smart-homes.jpg.webp"';
});
fs.writeFileSync(path.join(__dirname, '..', 'index.html'), html);
console.log('replaced', n, 'images');

const fs = require('fs');

const netlifyTomlContent = '[[redirects]]\n  from = "/*"\n  to = "/index.html"\n  status = 200';

fs.writeFileSync('./dist/save-money/netlify.toml', netlifyTomlContent);

console.log('netlify.toml creado con éxito en ./dist/save-money/');

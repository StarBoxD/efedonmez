const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3030;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/' || reqUrl === '') reqUrl = '/index.html';

  try {
    reqUrl = decodeURIComponent(reqUrl);
  } catch (e) {}

  const safePath = path.normalize(path.join(__dirname, reqUrl));

  // Dizin dışına çıkış engeli
  if (!safePath.toLowerCase().startsWith(__dirname.toLowerCase())) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 - Yasak');
    return;
  }

  fs.stat(safePath, (statErr, stats) => {
    if (statErr || !stats.isFile()) {
      const custom404Path = path.join(__dirname, '404.html');
      fs.readFile(custom404Path, (err404, content404) => {
        const body = !err404 ? content404 : '<h1>404 - Sayfa Bulunamadı</h1>';
        res.writeHead(404, {
          'Content-Type': 'text/html; charset=utf-8',
          'Content-Length': Buffer.byteLength(body)
        });
        res.end(body);
      });
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(safePath, (readErr, content) => {
      if (readErr) {
        const errBody = '500 Sunucu Hatası';
        res.writeHead(500, {
          'Content-Type': 'text/plain; charset=utf-8',
          'Content-Length': Buffer.byteLength(errBody)
        });
        res.end(errBody);
        return;
      }

      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': Buffer.byteLength(content),
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      res.end(content);
    });
  });
});

server.on('error', (err) => {
  console.error('Sunucu hatası:', err.message);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Sunucu hazır!`);
  console.log(`Local:   http://localhost:${PORT}`);
  console.log(`Network: http://127.0.0.1:${PORT}`);
});

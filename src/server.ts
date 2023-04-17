import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';

const server = http.createServer();

server.on('request', async (req, res) => {
  //console.log('request url: ', req.url);
  // // Content-Type is important for browsers.
  // // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
  //res.writeHead(200, { 'content-type': 'text/plain' });
  //res.write('hello!\n');
  //res.end();

  if (req.url === undefined) {
    res.end();
    return;
  }

  console.log('before filepath');
  const filePath = path.join(path.resolve(), 'public', req.url);
  console.log('filepath', filePath);

  try {
    const file = await fs.readFile(filePath);

    if (req.url.endsWith('.html')) {
      res.writeHead(200, { 'content-type': 'text/html' });
    } else if (req.url.endsWith('.jpg')) {
      res.writeHead(200, { 'content-type': 'image/jpeg' });
    } else if (req.url.endsWith('.json')) {
      res.writeHead(200, { 'content-type': 'text/json' });
    } else if (req.url.endsWith('.ico')) {
      res.writeHead(200, { 'content-type': 'image/x-icon' });
    } else {
      res.writeHead(200, { 'content-type': 'application/octet-stream' });
    }

    res.end(file);
  } catch (err) {
    console.error(err);
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.write('error: not found\n');
    res.end();
    res.end();
  }
});

server.on('listening', () => {
  console.log('start listening!');
});

const PORT = process.env.PORT || 12345;

// Start listening 12345 port of localhost (127.0.0.1).
server.listen(PORT, () => {
  console.log('listening on http://localhost:$(PORT)/');
});
console.log('run server.js');

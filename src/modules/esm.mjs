import { sep } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';

import('./files/c.cjs');

const random = Math.random();

const unknownObject = random > 0.5 ? await import('./files/a.json') : await import('./files/b.json');

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${new URL('.', import.meta.url).pathname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject.default);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export default {
  unknownObject: unknownObject.default,
  myServer,
};

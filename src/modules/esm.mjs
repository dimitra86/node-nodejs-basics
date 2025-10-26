import { sep } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile, existsSync } from 'fs';

import('./files/c.cjs');

const random = Math.random();

const readJsonFile = async (filePath) => {
  if (!existsSync(filePath)) {
    console.log(`File not found: ${filePath}. Using default file instead.`);
    return { default: 'default value' };
  }

  const data = await readFile(filePath, 'utf8');
  return JSON.parse(data);
};

let unknownObject;
let myServer;

try {
  const filePath = random > 0.5 ? './files/a.json' : './files/b.json';
  unknownObject = await readJsonFile(filePath);
  console.log(`Release ${release()}`);
  console.log(`Version ${version()}`);
  console.log(`Path segment separator is "${sep}"`);

  console.log(`Path to current file is ${import.meta.url}`);
  console.log(`Path to current directory is ${new URL('.', import.meta.url).pathname}`);

  myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
  });

  const PORT = 3000;

  myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
  });

  console.log(unknownObject);
} catch (err) {
  console.error(err.message);
}

export default {
  unknownObject,
  myServer,
};

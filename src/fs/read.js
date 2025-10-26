import { promises as fs } from 'fs';
const filePath = './src/fs/files/fileToRead.txt';

const read = async () => {
try {
  const data = await fs.readFile(filePath, { encoding: 'utf8' });
  console.log(data);
} catch (err) {
  throw new Error('FS operation failed');
}
};

await read();

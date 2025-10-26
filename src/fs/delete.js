import { promises as fs } from 'fs';

const filePath = './src/fs/files/fileToRemove.txt';

const remove = async () => {
try {
  await fs.unlink(filePath);
  console.log(`Deleted file: ${filePath}`);
} catch (err) {
  throw new Error('FS operation failed');
}
};

await remove();

import { promises as fs } from 'fs';

const copy = async () => {
  try {
    const src = './src/fs/files';
    const dest = './src/fs/files_copy';

    try {
      await fs.access(src);
    } catch {
      throw new Error('FS operation failed');
    }

    try {
      await fs.access(dest);
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
    }

    await fs.cp(src, dest, { recursive: true });
    console.log('Directory copied successfully');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

try {
  await copy();
} catch (err) {
  console.error(err.message);
}

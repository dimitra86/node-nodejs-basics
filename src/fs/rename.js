import { join } from 'path';  
import { promises as fs } from 'fs';

const rename = async () => {
  const oldPath = join('./src/fs/files/wrongFilename.txt');
  const newPath = join('./src/fs/files/properFilename.md');

  try {
    // Check if old file exists
    await fs.access(oldPath);
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    // Check if new file already exists
    await fs.access(newPath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  try {
    // Rename the file
    await fs.rename(oldPath, newPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();

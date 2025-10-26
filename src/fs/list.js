import { join } from 'path';
import { promises as fs } from 'fs';

const testFolder = './src/fs/files/';

const list = async () => {
  try {
    const filenames = await fs.readdir(testFolder);
    console.log(filenames);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error("FS operation failed");
    } else {
      throw error;
    }
  }
};

await list();

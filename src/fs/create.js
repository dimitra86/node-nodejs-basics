import { writeFile, existsSync } from 'node:fs';
import { promises as fs } from 'node:fs';

const create = async () => {
  try {
    const filePath = './src/fs/files/fresh.txt';
    if (existsSync(filePath)) {
      throw new Error(`File ${filePath} already exists.`);
    }
    const content = 'I am fresh and young';
    await fs.writeFile(filePath, content);
  } catch (err) {
    console.log(err);
  }
}

create();

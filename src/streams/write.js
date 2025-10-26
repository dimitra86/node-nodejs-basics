import { createWriteStream } from 'fs';

const transform = async () => {
  const filePath = './src/streams/files/fileToWrite.txt';
  const writeStream = createWriteStream(filePath, { encoding: 'utf8' });

  process.stdin.pipe(writeStream);

  return new Promise((resolve, reject) => {
    writeStream.on('finish', () => {
      resolve();
    });

    writeStream.on('error', (err) => {
      reject(err);
    });
  });
};

await transform();
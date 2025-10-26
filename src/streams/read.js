import { createReadStream } from 'fs';

const read = async () => {
  const filePath = './src/streams/files/fileToRead.txt';
  const readStream = createReadStream(filePath, { encoding: 'utf8' });

  for await (const chunk of readStream) {
    process.stdout.write(chunk);
  }
};

await read();


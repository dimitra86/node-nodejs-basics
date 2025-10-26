import { Transform } from 'stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);

  return new Promise((resolve, reject) => {
    reverseStream.on('finish', () => {
      resolve();
    });

    reverseStream.on('error', (err) => {
      reject(err);
    });
  });
};

await transform();

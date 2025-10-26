import { unlink } from 'node:fs';

const remove = async () => {
  unlink('./src/fs/files/fileToRemove.txt', (err) => {
  if (err) throw err;
  console.log('./src/fs/files/fileToRemove.txt');
}); 
};

await remove();

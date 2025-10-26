import { argv } from 'process';

const parseArgs = () => {
  const args = argv.slice(2);
  const parsedArgs = {};
  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace('--', '');
    parsedArgs[propName] = args[i + 1];
  }

  Object.entries(parsedArgs).forEach(([key, value]) => {
    console.log(`${key} is ${value}`);
  });
};

parseArgs();

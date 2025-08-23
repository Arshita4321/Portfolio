const { writeFileSync } = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const envConfigFile = `
export const environment = {
  spaceId: '${process.env.SPACE_ID}',
  accessToken: '${process.env.ACCESS_TOKEN}'
};
`;

writeFileSync(targetPath, envConfigFile);
console.log(`Environment variables injected into environment.ts`);

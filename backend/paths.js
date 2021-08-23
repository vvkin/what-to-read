/* eslint-disable @typescript-eslint/no-var-requires */
const {
  compilerOptions: { paths },
} = require('./tsconfig.json');
const { register } = require('tsconfig-paths');

const baseUrl = './dist';
register({ baseUrl, paths });

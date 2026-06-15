import { defineConfig } from 'bc-deeplib/build';

export default defineConfig({
  entry: 'themed.ts',
  outfile: 'themed.js',
  modInfo: {
    name: 'Themed',
    fullName: 'BC Themed',
    repository: 'https://github.com/dDeepLb/Themed-BC',
  },
  distDirName: 'dist',
  publicDirName: 'public',
  scripts: ['./scripts/compile_scss.js', './scripts/copy_files.js'],
  prodRemoteURL: 'https://ddeeplb.github.io/Themed-BC',
  devRemoteURL: 'https://ddeeplb.github.io/Themed-BC/dev',
  host: 'localhost',
  port: 45001,
  esbuildOptions: {
    globalName: 'Themed',
    target: ['es2020'],
    plugins: [],
    define: {},
  },
});
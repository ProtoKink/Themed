import { defineConfig } from 'bc-deeplib/build';

export default defineConfig({
  entry: 'themed.ts',
  outfile: 'themed.js',
  modInfo: {
    name: 'Themed',
    fullName: 'BC Themed',
    repository: 'https://github.com/ProtoKink/Themed',
  },
  distDirName: 'dist',
  publicDirName: 'public',
  scripts: ['./scripts/compile_scss.js', './scripts/copy_files.js'],
  prodRemoteURL: 'https://protokink.github.io/Themed',
  devRemoteURL: 'https://protokink.github.io/Themed/dev',
  host: 'localhost',
  port: 45001,
  esbuildOptions: {
    globalName: 'Themed',
    target: ['es2020'],
    plugins: [],
    define: {},
  },
});
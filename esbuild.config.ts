import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  platform: 'node',
  target: 'nodenext',
  
}).catch(() => process.exit(1));
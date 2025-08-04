import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
// import url from '@rollup/plugin-url';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.js', format: 'cjs', sourcemap: true },
      { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
      // {
      //   file: 'dist/bundle.umd.js',
      //   format: 'umd',
      //   name: 'Nebula',
      //   sourcemap: true,
      //   globals: {
      //     '@mui/material/Button': '@mui/material/Button',
      //     '@mui/material/GlobalStyles': '@mui/material/GlobalStyles',
      //     '@mui/material/ScopedCssBaseline': '@mui/material/ScopedCssBaseline',
      //     '@mui/material/styles': '@mui/material/styles',
      //     'react/jsx-runtime': 'react/jsx-runtime',
      //   }
      // },
    ],
    plugins: [
      del({ targets: ['dist/*'], verbose: true }),
      peerDepsExternal(),
      nodeResolve(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.test.ts', '**/*.test.tsx'],
      }),
      commonjs({ extensions: ['.js', '.ts'] }), // Must be above babel plugin.
      postcss({ minimize: true }),
      image(),
      // url({
      //   include: ['**/*.woff'],
      //   limit: 0,
      //   emitFiles: true,
      //   fileName: './assets/[dirname][name][extname]',
      // }),
      babel({
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs'],
        exclude: [
          '**/*.stories.[jt]s?(x)',
          '**/__snapshots__/**/*.[jt]s?(x)',
          '**/__tests__/**/*.[jt]s?(x)',
          '**/?(*.)+(test).[jt]s?(x)',
        ],
        babelHelpers: 'runtime',
      }),
      terser(),
      copy({ targets: [{ src: 'src/assets/fonts/**/*', dest: 'dist/assets/fonts' }] }),
    ],
    external: ['@emotion/react', '@emotion/styled', '@mui/material', 'react'],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

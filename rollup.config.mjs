// import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs';
// import image from '@rollup/plugin-image'
import nodeResolve from '@rollup/plugin-node-resolve';
// import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript';
// import url from '@rollup/plugin-url'
// import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/cjs/index.js', format: 'cjs', sourcemap: true },
      { file: 'dist/esm/index.js', format: 'esm', sourcemap: true },
      // { file: 'dist/bundle.js', format: 'umd', name: 'Nebula' },
    ],
    plugins: [
      // peerDepsExternal(),
      nodeResolve(),
      commonjs({ extensions: ['.js', '.ts'] }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'],
        // useTsconfigDeclarationDir: true,
      }),
      postcss({ minimize: true, extensions: ['.css'], inject: true, extract: false }),
      // url({
      //   include: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
      //   limit: Infinity,
      //   emitFiles: true,
      //   publicPath: 'dist',
      //   fileName: 'assets/fonts/',
      // }),
      // terser({ module: true, toplevel: true }),
      // image(),
      // babel({
      //   exclude: [
      //     '**/*.stories.[jt]s?(x)',
      //     '**/__snapshots__/**/*.[jt]s?(x)',
      //     '**/__tests__/**/*.[jt]s?(x)',
      //     '**/?(*.)+(test).[jt]s?(x)',
      //   ],
      //   babelHelpers: 'runtime',
      // }),
      // del({ targets: ['dist/*'], verbose: true }),
    ],
    // external: ['@babel/runtime', '@babel/runtime-corejs3', 'core-js', 'react', 'react-dom'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

const fs = require('fs');
const path = require('path');

const production = !process.env.ROLLUP_WATCH;

let config = [{
    input: 'src/main.js',
    output: [
        {
            dev: !production,
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/bundle.js'
        }
    ],
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            css: css => {
                css.write('public/bundle.css');
            }
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration —
        // consult the documentation for details:
        // https://github.com/rollup/rollup-plugin-commonjs
        resolve(),
        commonjs(),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ]
}];


fs.readdirSync('src/components').forEach(file => {
    let name = path.basename(file);
    name = name.substr(0, name.indexOf('.'));
    config.push({
        input: 'src/components/' + file,
        output: {
            dev: !production,
            sourcemap: false,
            format: 'umd',
            name: name,
            file: `dist/${name}.js`
        },
        plugins: [
            svelte({
                dev: !production,
            }),
            resolve(),
            commonjs(),
            production && terser()
        ]
    })
});


export default config;
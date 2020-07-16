import { createRollupConfigs } from "./scripts/base.config.js";
import json from "@rollup/plugin-json";
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

const production = !process.env.ROLLUP_WATCH;

export const config = {
  staticDir: "static",
  distDir: "dist",
  buildDir: `dist/build`,
  serve: !production,
  production,
  rollupWrapper: (cfg) => ({
    ...cfg,
    plugins: [...cfg.plugins, 
      json(),
      globals(),
      builtins(),
      resolve({
        preferBuiltins: true,
      }),
      sourcemaps(),
    ],
  }),
  svelteWrapper: (cfg) => cfg,
  swWrapper: (cfg) => cfg,
};

const configs = createRollupConfigs(config);

export default configs;

/** wrapper example 1 */
// svelteWrapper: (cfg, ctx) => ({
//   ...cfg,
//   preprocess: mdsvex({ extension: '.md' }),
// })

/** wrapper example 2 */
// rollupWrapper: cfg => {
//   cfg.plugins = [...cfg.plugins, myPlugin()]
//   return cfg
// }

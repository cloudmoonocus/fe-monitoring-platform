// packages/core/rollup.config.js
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"

export default {
    input: "lib/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
        },
        {
            file: "dist/index.esm.js",
            format: "es",
        },
    ],
    plugins: [resolve(), commonjs(), typescript()],
}

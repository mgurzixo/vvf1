// const { createVuePlugin } = require("vite-plugin-vue2");
// const path = require("path");

// module.exports = {
//     plugins: [createVuePlugin()],
//     define: {
//         "process.env": {},
//     },
//     alias: {
//         "/@": path.resolve(__dirname, "./src"),
//     },
// };

import path from "path";
import { defineConfig } from "vite";
const { createVuePlugin } = require("vite-plugin-vue2");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [createVuePlugin()],
    define: {
        "process.env": {},
    },
    resolve: {
        alias: {
            "@/": `${path.resolve(__dirname, "src")}/`,
        },
    },
});

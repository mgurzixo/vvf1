const { createVuePlugin } = require("vite-plugin-vue2");

module.exports = {
    plugins: [createVuePlugin()],
    define: {
        "process.env": {},
    },
};

// import { defineConfig } from "vite";
// export default defineConfig({
//     define: {
//         "process.env": {},
//     },
// });

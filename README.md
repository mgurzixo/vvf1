# vvf1

A simple template using formio, vue2, vuex and vite.

-   Inspired from [vite-vue2-starter](https://github.com/matt-auckland/vite-vue2-starter)

-   Using [underfin's vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)

## Scripts

```bash
  pnpm run dev # start dev server
  pnpm run build # build for production
  pnpm run serve # locally preview production build
```

## Usage

```bash
  git clone ...
  cd vvf1
  pnpm install
  pnpm run dev
```

Add a textField with the builder, then test the form,
see how the submission data and the form persist in the store,
and how a database update is simulated with a 2 seconds timeout

## Notes

-   [degit](https://github.com/Rich-Harris/degit) is recommended instead of 'git clone' if you want to start a new project

-   CSS imports are tricky... cf. styles.scss

-   [pnpm](https://www.npmjs.com/package/pnpm) is great!

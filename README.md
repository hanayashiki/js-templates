# JS Templates

A collection of opininated JavaScript project starters.

# The Why

Setting up a JavaScript project is difficult. JavaScript tools are a separate and unrelated sea of libraries, which makes setting up new projects painful and programmers find themselves faced with the same kinds of problems for every new project. Such trouble in setting up a new project eventually forbids programmers from setting up new libraries or new micro-apps whenever there should be one. It should take no pain for us to setup a new JS project, with typechecking, building, linting and package management handled in one breeze, and there are no reason not to achieve that. New JS runtimes, namely Deno and Bun, are built-in with such utilities, but the good old Node environment doesn't and probably never will have an optionated way to do that. That's why everyone builds their own JS boilerplates.

# Starters

## React SPA

```
npx @chenyuwang/js-templates react-spa my-project
```

Based on `pnpm create vite --template react-ts`, and battery-included.

1. Vite + React
   1. `vite-tsconfig-paths`
   2. `vite-plugin-fast-react-svg`
   3. `public/_headers` for Cloudflare Pages
2. TypeScript
   1. `@/` absolute import
3. Tailwind CSS
4. ESLint + Prettier
5. Husky
6. PNPM
7. VSCode Extensions

## NPM

```
npx @chenyuwang/js-templates npm my-project
```

Public NPM package with Tsup and Vitest.

1. Tsup
2. Vitest
3. ESLint + Prettier
4. Husky
5. PNPM
6. VSCode Extensions


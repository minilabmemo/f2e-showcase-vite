# f2e-showcase-vite

Vue 3 in Vite. + tailwind css .

## multi-page app

entry points

- dev :
  - http://localhost:5173/
  - http://localhost:5173/meow/
- prod :
  - https://minilabmemo.github.io/f2e-showcase-vite/
  - https://minilabmemo.github.io/f2e-showcase-vite/meow/

### 分支 - meowskka 作品頁面

- meowskka 首頁 https://minilabmemo.github.io/f2e-showcase-vite/meow/

#### 作品說明

The F2E 六角學院 修煉精神光屋 2023 Mission 1 - 立委競選官網，示範網頁

- 設計稿特別感謝 團隊名稱：團體組長/薩卡班甲魚｜ UI 設計｜ OuO 提供。
- 網頁網址 https://minilabmemo.github.io/f2e-election-meowsakka/
- 功能說明：一頁式介紹頁面，關於薩卡/政策/活動/服務頁面說明文字。

## 使用技術

- Vue3
- Typescript
- tailwind css

## 測試

- test : `npm run test:ui` ,open http://localhost:51204/**vitest**/#/?file=378120240
- e2e :`npm run test:e2e:dev`

## 部署

Use .github/workflows Actions.

- Jobs: test/cypress-run->deploy

---

# f2e-showcase-vite 專案建立細節

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
npm run preview 預覽
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

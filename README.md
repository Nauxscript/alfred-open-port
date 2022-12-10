# alfred-workflow-ts-template
a Template for building a alfred workflow in TypeScript.

## Features

- 🦾 TypeScript, of course
- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest)
- [Unbuild](https://github.com/unjs/unbuild), a unified javascript build system 
- JXA Types, supported by [@jxa/global-type](https://github.com/JXA-userland/JXA/tree/master/packages/@jxa/global-type)
- Eslint
- pnpm

## Usage

- modify the `package.json`
- modify the `artifacts` value in `.github/workflows/release.yml`
- filled in the workflow info in `src/update.sh`
- generate your `info.plist` & `icon.png`

## Preview

# License

[MIT](./LICENSE) License © 2022 [Nauxscript](https://github.com/Nauxscript)
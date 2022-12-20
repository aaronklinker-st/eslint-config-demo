# `@sensortower/eslint-config-demo`

An example ESLint config starting template.

```bash
npm i https://mymavenrepo.com/repo/QMKt2VOnUw3lmDFcg9oN/js/sensortower.eslint-config-demo/1.0.0-alpha4/sensortower.eslint-config-demo-1.0.0-alpha4.tgz
```

This project uses `only-warn` to make all linting errors warnings in your editor. If you want CI to fail if there are any lint errors set the `--max-warnings` flag to 0:

```bash
eslint . --max-warnings 0
```

## Usage

Your project config can extend any of the following, or multiple:

- `@sensortower/eslint-config-demo` or `@sensortower/eslint-config-demo/base`: The base config for JS
- `@sensortower/eslint-config-demo/typescript` (extends `base`)
- `@sensortower/eslint-config-demo/vue3-ts` (extends `typescript`)
- `@sensortower/eslint-config-demo/react-ts` (extends `typescript`)
- `@sensortower/eslint-config-demo/jest`: Base config for Jest

Some require additional config like setting up the parser inside your config files (in this case, `.eslintrc.yml`).

### `base`

No additional config required for setting up Javascript linting, just extend the package's config:

```yaml
extends:
  - "@sensortower/eslint-config-demo"
```

### `typescript`

With Typescript, we extend `@typescript-eslint/recommended-requiring-type-checking`, which does type checking to find additional linting problems. You need to specify the relative path to your `tsconfig.json` file.

```yaml
extends: "@sensortower/eslint-config-demo/typescript"
parserOptions:
  project: "./tsconfig.json"
```

### `vue3-ts`

You also need to pass the relative path to the `tsconfig.json` file for `vue3-ts`. Also set `extraFileExtensions` to make sure `.vue` files can be linted.

```ts
extends: '@sensortower/eslint-config-demo/vue3-ts'
parserOptions:
  project: './tsconfig.json'
  extraFileExtensions: ['.vue']
```

### `react-ts`

```yaml
extends: "@sensortower/eslint-config-demo/react-ts"
parserOptions:
  project: "./tsconfig.json"
```

### `jest`

If your project uses Jest, you can extend the jest config as well.

```yaml
extends:
  - ...
  - "@sensortower/eslint-config-demo/jest"
```

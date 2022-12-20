# `@sensortower/eslint-config-demo`

An example ESLint config starting template.

```bash
npm i https://mymavenrepo.com/repo/QMKt2VOnUw3lmDFcg9oN/js/sensortower.eslint-config-demo/1.0.0-alpha2/sensortower.eslint-config-demo-1.0.0-alpha2.tgz
pnpm i https://mymavenrepo.com/repo/QMKt2VOnUw3lmDFcg9oN/js/sensortower.eslint-config-demo/1.0.0-alpha2/sensortower.eslint-config-demo-1.0.0-alpha2.tgz
yarn add https://mymavenrepo.com/repo/QMKt2VOnUw3lmDFcg9oN/js/sensortower.eslint-config-demo/1.0.0-alpha2/sensortower.eslint-config-demo-1.0.0-alpha2.tgz
```

## Usage

Your project config can extend any of the following, or multiple:

- `@sensortower/eslint-config-demo`: A base JS configuration
- `@sensortower/eslint-config-demo/typescript`: The base JS config and a base typescript config
- `@sensortower/eslint-config-demo/vue3-ts`: The basew JS config, base typescript config, and a base vue config

Some require additional config like setting up the parser inside your config files (in this case, `.eslintrc.yml`).

### Javascript

No additional config required for setting up Javascript linting, just extend the package's config:

```yaml
extends:
- '@sensortower/eslint-config-demo'
```

### Typescript

With Typescript, we extend `@typescript-eslint/recommended-requiring-type-checking`, which does type checking to find additional linting problems. You need to specify the relative path to your `tsconfig.json` file.

```yaml
extends: '@sensortower/eslint-config-demo/typescript'
parserOptions:
  project: './tsconfig.json'
```

### Vue Typescript

You also need to pass the relative path to the `tsconfig.json` file for `vue3-ts`

```ts
extends: '@sensortower/eslint-config-demo/vue3-ts'
parserOptions:
  project: './tsconfig.json'
```

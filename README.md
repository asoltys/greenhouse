# Greenhouse

The site is automatically deployed to [vercel](https://vercel.com) on every push using the [SvelteKit vercel adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel). Check the [documentation](https://kit.svelte.dev/docs#adapters) for other adapters.

## Deploying to vercel

Add `"@sveltejs/adapter-vercel"`: `"next"` to the devDependencies in your `package.json` and run `npm install`.

```shell
pnpm install -D @sveltejs/adapter-vercel
```

Then modify your svelte.config.js:

```javascript
const vercel = require('@sveltejs/adapter-vercel');
...

module.exports = {
  kit: {
    ...
    adapter: vercel()
  }
};
```

## Running locally

Clone the repo, install dependencies and start the development server:

```sh
git clone git@github.com:opensas/sveltekit-landing-page.git

cd sveltekit-landing-page

pnpm install

pnpm dev
```

The project SvelteKit project was created with

```sh
pnpm init svelte@next
```

And then tailwind support was added running:

```sh
pnpx svelte-add tailwindcss  --jit
```

And then run the project with:

```sh
pnpm dev
```

Check the [svelte-add/tailwindcss](https://github.com/svelte-add/tailwindcss) github repo for more info.

### Setup pre-commit git hooks

We have a pre-commit git hook for running prettier on all files to keep the formatting consistent.

`git config core.hooksPath "./git_hooks"` - This will set the git config path to use this directory for hooks.

`chmod +x ./git_hooks/pre-commit` - This will give the hook the necessary permissions to run.

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm start`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

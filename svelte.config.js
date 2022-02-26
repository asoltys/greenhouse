import sveltePreprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel';

export default {
  preprocess: [
    sveltePreprocess({
      defaults: {
        style: 'postcss',
      },
      postcss: true,
    }),
  ],

  kit: {
    adapter: vercel(),
  },
}

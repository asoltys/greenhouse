import path from "path";
import sveltePreprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";

export default {
  preprocess: [
    sveltePreprocess({
      defaults: {
        style: "postcss",
      },
      postcss: true,
    }),
  ],

  kit: {
    adapter: vercel(),

    vite: {
      resolve: {
        alias: {
          $components: path.resolve("src/components"),
          $lib: path.resolve("src/lib"),
        },
      },
    },
  },
};

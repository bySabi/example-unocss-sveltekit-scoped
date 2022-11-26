import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import presetTypography from "@unocss/preset-typography";
import presetAttributify from "@unocss/preset-attributify";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  plugins: [
    UnoCSS({
      mode: "svelte-scoped",
      shortcuts: [
        { logo: "i-logos:svelte-icon w-7em h-7em transform transition-300" },
      ],
      transformers: [transformerDirectives()],
      presets: [
        presetAttributify(),
        presetUno(),
        presetTypography(),
        presetIcons({
          prefix: "i-",
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
        }),
      ],
      safelist: ["bg-orange-300"],
    }),
    sveltekit(),
  ],
});

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          "50": "#fef7f0",
          "100": "#feefe1",
          "200": "#fddfc4",
          "300": "#fbd0a6",
          "400": "#fac089",
          "500": "#f9b06b",
          "600": "#c78d56",
          "700": "#956a40",
          "800": "#64462b",
          "900": "#322315",
          bg: "#EFD0A8",
        },
        dPurp: {
          "50": "#e8e6e6",
          "100": "#d0cdcd",
          "200": "#a19b9c",
          "300": "#72686a",
          "400": "#433639",
          "500": "#140407",
          "600": "#100306",
          "700": "#0c0204",
          "800": "#080203",
          "900": "#040101",
          "950": "#030101",
        },
        eb: { "100": "#002379" },
        lbg: { "100": "#F6F1E9" }, // F9FBE7 good, F6F1E9 cooler (best imo) FFFFE8
        dbg: { "100": "#000000" },
        amrg: { "100": "#A7D129" }, //amr racing green
        olive: {
          "100": "#3E432E",
          "200": "#616F39",
        },
        sl: { "100": "#EC625F" },
        dr: { "100": "#7a072a" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        amarga: ["amarga"],
        lostar: ["lostar"],
        refrankt: ["refrankt"],
        spmR: ["spacemonoR"],
        spmI: ["spacemonoI"],
        spmB: ["spacemonoB"],
        spmBI: ["spacemonoBI"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

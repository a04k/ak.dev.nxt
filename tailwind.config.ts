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
        mint: {
          "100": "#e1f8e6",
          "200": "#c3f1cc",
          "300": "#a5eab3",
          "400": "#87e399",
          "500": "#69dc80",
          "600": "#54b066",
          "700": "#3f844d",
          "800": "#2a5833",
          "900": "#152c1a",
        },
        petronas: {
          "100": "#d6f1f2",
          "200": "#ade3e5",
          "300": "#84d5d8",
          "400": "#5bc7cb",
          "500": "#32b9be",
          "600": "#289498",
          "700": "#1e6f72",
          "800": "#144a4c",
          "900": "#0a2526",
        },
        eb: "#002379",
        lbg: "#F6F1E9", // F9FBE7 good, F6F1E9 cooler (best imo) FFFFE8
        amrg: "#A7D129", //amr racing green
        olive: {
          "100": "#3E432E",
          "200": "#616F39",
        },
        'sl': "#EC625F" ,
        'dr':'#7a072a',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        amarga: ["amarga"],
        lostar: ["lostar"],
        spmR: ["spacemonoR"],
        spmI: ["spacemonoI"],
        spmB: ["spacemonoB"],
        spmBI: ["spacemonoBI"],
        askey:["askey"]
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

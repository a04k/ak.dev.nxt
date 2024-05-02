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
        "beige": {
          "50": "#fef7f0",
          "100": "#feefe1",
          "200": "#fddfc4",
          "300": "#fbd0a6",
          "400": "#fac089",
          "500": "#f9b06b",
          "600": "#c78d56",
          "700": "#956a40",
          "800": "#64462b",
          "900": "#322315"
        },
        "dPurp": {
          "50": "#e8e6e6",
          "100": "#d0cdcd",
          "200": "#a19b9c",
          "300": "#72686a",
          "400": "#433639",
          "500": "#140407",
          "600": "#100306",
          "700": "#0c0204",
          "800": "#080203",
          "900": "#040101"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        amarga: ['amarga'],
        lostar: ['lostar'],
        refrankt: ['refrankt'],
        spmR: ['spacemonoR'],
        spmI: ['spacemonoI'],
        spmB: ['spacemonoB'],
        spmBI: ['spacemonoBI'],
      }
    },
  },
  plugins: [],


};
export default config;

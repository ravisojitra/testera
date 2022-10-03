module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        white_A700_7f: "#ffffff7f",
        white_A700_b2: "#ffffffb2",
        white_A700_cc: "#ffffffcc",
        white_A700_33: "#ffffff33",
        white_A700_99: "#ffffff99",
        black_900: "#000000",
        white_A700_4c: "#ffffff4c",
        gray_301: "#e6e6e6",
        amber_300: "#ffc74b",
        gray_101: "#f7f7f7",
        orange_300: "#f1bd4c",
        gray_300: "#dddddd",
        gray_102: "#f3f3f3",
        gray_100: "#f3f7fc",
        bluegray_900: "#222247",
        gray_300_7f: "#dddddd7f",
        bluegray_800: "#252f57",
        indigo_200: "#83abdb",
        bluegray_400: "#888888",
        indigo_801: "#1f4878",
        bluegray_900_19: "#19355919",
        white_A700: "#ffffff",
        indigo_800: "#214674",
        bluegray_902: "#232348",
        bluegray_901: "#333333",
      },
      borderRadius: {
        radius20: "20px",
        radius40: "40px",
        radius50: "50%",
        radius64: "64px",
        radius80: "80px",
        radius100: "100px",
      },
      borderWidth: { bw05: "0.5px" },
      fontFamily: {
        ubuntu: "Ubuntu",
        sora: "Sora",
        opensans: "Open Sans",
        montserrat: "Montserrat",
        worksans: "Work Sans",
        inter: "Inter",
        poppins: "Poppins",
      },
      letterSpacing: { ls1: "1px", ls2: "2px", ls3: "3px", ls4: "4px" },
      boxShadow: { bs: "10px 10px  20px 0px #19355919" },
      backgroundImage: { gradient: "radial-gradient(#1f4878,#252f57,#222247)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

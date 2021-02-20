const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  presets: [require("@samrobbins/typography")],
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        teal: colors.teal,
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        lime: colors.lime,
        "light-blue": colors.lightBlue,
        rose: colors.rose,
        emerald: colors.emerald,
        npm: "#CB3837",
        gmail: "#EA4335",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
      },
      maxWidth: {
        "85ch": "85ch",
      },
      fontFamily: {
        latex: ["Latin Modern"],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      display: ["hover"],
      backgroundColor: ["active"],
      fontWeight: ["active", "focus"],
      boxShadow: ["group-focus"],
      outline: ["group-focus"],
    },
  },
  plugins: [require("latex-tailwind"), require("@tailwindcss/aspect-ratio")],
};

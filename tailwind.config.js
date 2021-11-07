module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      borderRadius: {
        lg: "20px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

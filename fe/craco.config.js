module.exports = {
  babel: {
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          displayName: true,
          fileName: true,
          meaninglessFileNames: ["styled", "index"],
        },
      ],
    ],
  },
};

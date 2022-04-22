module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#121010",
          green: "#41F50C",
          light: {
            blue: "#0094FF",
          },
          dark: {
            red: "#D62121",
          },
          "graph-bg": "#2B2B2B",
        },
      },
      fontFamily: {
        "myriad-pro": "Myriad Pro",
        nexa: "NexaW01",
      },
      backgroundImage: {
        "overlay-side-bar":
          "linear-gradient(180deg, #333232 0%, rgba(0, 0, 0, 0) 100%)",

        "connect-button":
          "linear-gradient(90deg, #41F50C -2.65%, rgba(127, 249, 0, 0.44) 97.34%)",
        box: "linear-gradient(88.63deg, rgba(196, 196, 196, 0.1) 4.16%, rgba(101, 207, 122, 0.025) 100.55%, rgba(101, 207, 122, 0.1) 100.56%)",
      },
      dropShadow: {
        "overlay-side-bar": "0px 4px 30px rgba(65, 245, 12, 0.2)",
        rank: "0px 0px 4px #7FF900",
      },
      boxShadow: {
        "sidebar-button": "0px 1px 15px rgba(101, 207, 122, 0.2)",
        badge: "0px 0px 3px #EA3836",
        "hottest-game": "0px 1px 7px rgba(101, 207, 122, 0.9)",
        "hottest-game-img": "0px 1px 15px rgba(101, 207, 122, 0.2)",
        "mobile-nav": "0px 4px 20px rgba(65, 245, 12, 0.15)",
      },
    },
  },
  plugins: [],
};

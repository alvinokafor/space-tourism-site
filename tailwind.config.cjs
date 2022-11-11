/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      backgroundImage: {
        "home-bg": "url('/src/assets/home/background-home-desktop.jpg')",
        "home-bg-mobile": "url('/src/assets/home/background-home-mobile.jpg')",
        "home-bg-tablet": "url('/src/assets/home/background-home-tablet.jpg')",
        "destination-bg":
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        "destination-bg-mobile":
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        "destination-bg-tablet":
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        "crew-bg": "url('/src/assets/crew/background-crew-desktop.jpg')",
        "crew-bg-mobile": "url('/src/assets/crew/background-crew-mobile.jpg')",
        "crew-bg-tablet": "url('/src/assets/crew/background-crew-tablet.jpg')",
        "technology-bg":
          "url('/src/assets/technology/background-technology-desktop.jpg')",
        "technology-bg-mobile":
          "url('/src/assets/technology/background-technology-mobile.jpg')",
        "technology-bg-tablet":
          "url('/src/assets/technology/background-technology-tablet.jpg')",
      },
      colors: {
        secondary: "#D0D6F9",
        divider: "#383B4B",
      },
      fontFamily: {
        body: ["Barlow", "sans-serif"],
        title: ["Bellefair", "serif"],
        subHeading: ["Barlow Condensed", "san-serif"]
      },
    },
    fontSize: {
      xs: "0.875rem",
      sm: "0.937rem",
      base: "1rem",
      md: "1.75rem",
      lg: "1.25rem",
      xl: "2rem",
      "2xl": "3.5rem",
      "3xl": "5rem",
      "4xl": "6.25rem",
      "5xl": "9.375rem",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".14em",
      wider: ".16em",
      widest: ".29em",
    },
  },
  plugins: [],
};

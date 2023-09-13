// Define the configuration for Tailwind CSS
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure the DaisyUI plugin for Tailwind CSS
  daisyui: {
    // Enable theming support
    themes: true,
    // Specify the default dark mode theme to be "light"
    darkTheme: "light",
    // Define the color schemes for the different themes
    themes: [
      "autumn"
      // {
      //   light: {
      //     "primary": "#000000",    // Primary color
      //     "secondary": "#383838",  // Secondary color
      //     "accent": "#494949",     // Accent color
      //     "neutral": "#000000",    // Neutral color
      //     "base-100": "#ffffffs,   // Base color
      //     "info": "#ffffff",       // Information color
      //     "success": "#1DB98A",    // Success color
      //     "warning": "#FAB561",    // Warning color
      //     "error": "#EB3A2D",      // Error color
      //   },
      // },
    ],
  },
  // Specify the files to be processed by PurgeCSS
  content: ["./src/**/*.{html,js}"],
  // Customize the default Tailwind CSS theme
  theme: {
    extend: {},
  },
  // Include the DaisyUI plugin in Tailwind CSS
  plugins: [require("daisyui")],
}
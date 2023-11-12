const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					50: "#f2f2f2",
					100: "#f0f0f0",
					200: "#e6e6e6",
					300: "#e5e5e5",
					400: "#d9d9d9",
					500: "#cccccc",
					600: "#909090",
					700: "#606060",
				},
				dark: {
					100: "#0f0f0f",
					200: "#030303",
				},
				white: {
					100: "#f8f8f8",
					DEFAULT: "#ffffff",
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, addComponents }) {
			addComponents({
				".hide-scroll": {
					overflow: "auto",
					scrollbarWidth: "none", // Hide the scrollbar for firefox
					"&::-webkit-scrollbar": {
						display: "none", // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
					},
					"&::-ms-overflow-style": {
						display: "none", // Hide the scrollbar for IE
					},
				},
			});
		}),
	],
};

import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				'fade-in': 'fadeIn 1s ease-in-out forwards',
				'slide-up': 'slideUp 0.8s ease-out forwards',
				'slide-up-delay-1': 'slideUp 0.8s ease-out 0.2s forwards',
				'slide-up-delay-2': 'slideUp 0.8s ease-out 0.4s forwards',
				'bounce-slow': 'bounce 3s infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	darkMode: "class",
	plugins: [heroui()],
};

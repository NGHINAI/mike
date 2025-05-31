import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '0 0% 90%',
				input: '0 0% 90%',
				ring: '0 0% 80%',
				background: '0 0% 100%',
				foreground: '0 0% 10%',
				primary: {
					DEFAULT: '0 0% 10%',
					foreground: '0 0% 98%'
				},
				secondary: {
					DEFAULT: '0 0% 96%',
					foreground: '0 0% 10%'
				},
				destructive: {
					DEFAULT: '0 0% 0%',
					foreground: '0 0% 100%'
				},
				muted: {
					DEFAULT: '0 0% 96%',
					foreground: '0 0% 45%'
				},
				accent: {
					DEFAULT: '0 0% 94%',
					foreground: '0 0% 10%'
				},
				popover: {
					DEFAULT: '0 0% 100%',
					foreground: '0 0% 10%'
				},
				card: {
					DEFAULT: '0 0% 100%',
					foreground: '0 0% 10%'
				},
				custom: {
					gradient: {
						start: 'hsl(0, 0%, 95%)', // Keeping hsl() here as per original structure if these are not directly used by Tailwind like others
						mid: 'hsl(0, 0%, 85%)',
						end: 'hsl(0, 0%, 75%)'
					}
				},
				pulse: {
					'100': '0 0% 90%',
					'200': '0 0% 80%',
					'500': '0 0% 50%',
					'600': '0 0% 40%',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite',
				'float': 'float 6s ease-in-out infinite'
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(90deg, hsl(0, 0%, 85%) 0%, hsl(0, 0%, 55%) 100%)',
				'hero-gradient-2': 'linear-gradient(90deg, hsl(0, 0%, 75%) 0%, hsl(0, 0%, 45%) 100%)',
				'pulse-gradient': 'linear-gradient(180deg, rgba(249,115,22,0.8) 0%, rgba(249,115,22,0) 100%)',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'display': ['Brockmann', 'SF Pro Display', 'Inter', 'sans-serif'],
				'brockmann': ['Brockmann', 'serif'],
				'playfair': ['"Playfair Display"', 'serif'],
			},
			boxShadow: {
				'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'elegant-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

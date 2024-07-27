/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        'SegoeUI,SegoeUI, SegoeUI-Light, SegoeUI-SemiLight, SegoeUI-Bold, SegoeUI-SemiBold, arial, sans, sans-serif'
      ],
      segoesemibold: ['SegoeUI-SemiBold', 'sans-serif'],
      segoebold: ['SegoeUI-Bold', 'sans-serif'],

    },
    fontWeight: {
      segoesemibold: 400,
      segoebold: 500,
    },
  },
  plugins: [],
}
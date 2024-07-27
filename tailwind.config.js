/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        'SegoeUI,SegoeUI, SegoeUI-Light, SegoeUI-SemiLight, SegoeUI-Bold, SegoeUI-SemiBold,-apple-system, arial, sans, sans-serif'
      ],
      segoesemibold: ['SegoeUI-SemiBold', '-apple-system-500'],
      segoebold: ['SegoeUI-Bold', '-apple-system-600'],

    },
    fontWeight: {
      segoesemibold: 400,
      segoebold: 500,
    },
  },
  plugins: [],
}
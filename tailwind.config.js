/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        'Segoe UI', 'SegoeUInBold', 'SegoeUIn SemiBold'
      ],
      segoesemibold: ['Segoe UI SemiBold', '-apple-system-600'],
      segoebold: ['SegoeUI Bold', '-apple-system-700'],
      segoeextrabold: ['SegoeUI Bold', '-apple-system-800'],

    },
    fontWeight: {
      segoesemibold: 400,
      segoebold: 500,
      segoeextrabold: 600,
    },
  },
  plugins: [],
}
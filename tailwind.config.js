/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        'SegoeUI,SegoeUI, SegoeUI-Light, SegoeUI-SemiLight, SegoeUI-Bold, SegoeUI-SemiBold,ClanPro, -apple-system,BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu,Cantarell, Helvetica Neue'
      ],
      segoesemibold: ['SegoeUI-SemiBold', '-apple-system-600'],
      segoebold: ['SegoeUI-Bold', '-apple-system-700'],
      segoeextrabold: ['SegoeUI-Bold', '-apple-system-800'],

    },
    fontWeight: {
      segoesemibold: 400,
      segoebold: 500,
      segoeextrabold: 600,
    },
  },
  plugins: [],
}
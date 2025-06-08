module.exports = {
  // ...existing config
  theme: {
    extend: {
      fontFamily: {
        'clash': ['ClashDisplay-Variable', 'sans-serif'],
        'clash-bold': ['ClashDisplay-Bold', 'sans-serif'],
        'clash-semibold': ['ClashDisplay-Semibold', 'sans-serif'],
        'clash-medium': ['ClashDisplay-Medium', 'sans-serif'],
        'clash-light': ['ClashDisplay-Light', 'sans-serif'],
        'clash-regular': ['ClashDisplay-Regular', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  // ...rest of config
}
module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'minor-spring': 'cubic-bezier(0.18,0.89,0.82,1.04)',
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg - 360deg))",
          },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(80%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-down': {
          '0%': { opacity: '0', transform: 'translateY(-80%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'content-blur': {
          '0%': { filter: 'blur(0.3rem)' },
          '100%': { filter: 'blur(0)' },
        },
      },
      animation: {
        'reveal-up': 'reveal-up 1s ease-out forwards',
        'reveal-down': 'reveal-down 1s ease-out forwards',
        'content-blur': 'content-blur 1s ease-out forwards',
        orbit: "orbit calc(var(--duration) * 1s) linear infinite",

      },
    },
  },
  variants: {},
  plugins: [],
};

// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.2)", opacity: "0", filter: "blur(2px)" },
          "70%": { transform: "scale(1.06)", opacity: "1", filter: "blur(0px)" },
          "100%": { transform: "scale(1)", opacity: "1", filter: "blur(0px)" },
        },
      },
      animation: {
        pop: "pop 520ms cubic-bezier(.2,1.2,.2,1) both",
      },
    },
  },
};

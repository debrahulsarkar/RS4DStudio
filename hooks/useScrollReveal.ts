export const revealViewport = { once: true, margin: "-80px" } as const;
export const revealVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

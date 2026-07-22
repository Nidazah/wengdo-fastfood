export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

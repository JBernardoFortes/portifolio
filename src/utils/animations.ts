const slideFromRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -100,
    opacity: 0,
  },
};

const slideFromLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
  },
};

const slideFromTop = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const slideFromBottom = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -100,
    opacity: 0,
  },
};

const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export {
  slideFromRight,
  slideFromLeft,
  slideFromTop,
  slideFromBottom,
  containerStagger,
};

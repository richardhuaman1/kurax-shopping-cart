export const getDirectionStyle = (
  dir: string,
  size?: number | string,
): {} | React.CSSProperties => {
  switch (dir) {
    case 'left':
      return {
        top: 0,
        left: 0,
        transform: 'translate3d(-100%, 0, 0)',
        width: size,
        height: '100vh',
      };
    case 'right':
      return {
        top: 0,
        right: 0,
        transform: 'translate3d(100%, 0, 0)',
        width: size,
        height: '100vh',
      };
    case 'bottom':
      return {
        left: 0,
        right: 0,
        bottom: 0,
        transform: 'translate3d(0, 100%, 0)',
        width: '100%',
        height: size,
      };
    case 'top':
      return {
        left: 0,
        right: 0,
        top: 0,
        transform: 'translate3d(0, -100%, 0)',
        width: '100%',
        height: size,
      };

    default:
      return {};
  }
};

export const getRandomId = () => (Math.random() + 1).toString(36).substring(7);

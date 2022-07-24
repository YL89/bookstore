import { FC } from 'react';
import { useSpring, animated } from 'react-spring';

const FadeInWrapper: FC<{ children: JSX.Element; className: string }> = ({
  children,
  className,
}) => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <animated.div style={props} className={className}>
      {children}
    </animated.div>
  );
};

const useFadeIn = (): FC<{ children: JSX.Element; className: string }> => {
  return FadeInWrapper;
};

export default useFadeIn;

import { useInView } from 'react-intersection-observer';
import 'animate.css';

const AnimatedElement = ({ 
  children, 
  animation = 'fadeIn', 
  duration = '1s', 
  delay = '0s',
  className = '',
  threshold = 0.1,
  triggerOnce = true
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={`
        ${className}
        ${inView ? `animate__animated animate__${animation}` : 'opacity-0'}
      `}
      style={{
        animationDuration: duration,
        animationDelay: delay,
        visibility: inView ? 'visible' : 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement; 
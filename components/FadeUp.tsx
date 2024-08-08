import { useEffect, useRef, useState } from "react";

type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
};

const FadeUp = ({ children, className = "" }: FadeUpProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;  

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } transition-opacity duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeUp;

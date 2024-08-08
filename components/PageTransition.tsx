import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
    transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
  >
    {children}
  </motion.div>
);

export default PageTransition;

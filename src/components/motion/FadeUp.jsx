import { motion } from "framer-motion";

export default function FadeUp({
  children,
  delay = 0,
  y = 24,
  duration = 0.8,
  className = "",
  once = true,
  ...rest
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

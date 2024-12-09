import { motion, useScroll, useTransform } from 'framer-motion';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientBackground({ children, className = '' }: GradientBackgroundProps) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <motion.div
        style={{ opacity, scale }}
        className="fixed inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(37,99,235,0.1),transparent)]" />
      </motion.div>
      <div className="relative">{children}</div>
    </div>
  );
}
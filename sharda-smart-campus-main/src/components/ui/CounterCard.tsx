import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  target: number;
  suffix?: string;
  label: string;
}

const CounterCard = ({ icon: Icon, target, suffix = "", label }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-6"
    >
      <Icon className="w-10 h-10 mx-auto mb-3 text-gold" />
      <div className="text-4xl font-bold font-heading text-primary-foreground">
        {count}{suffix}
      </div>
      <p className="text-sm mt-1 text-primary-foreground/80">{label}</p>
    </motion.div>
  );
};

export default CounterCard;

import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { HowItWorks } from "../components/HowItWorks";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-16" // Added padding-top for navbar
    >
      <Hero />
      <Stats />
      <HowItWorks />
    </motion.div>
  );
};

export default Index;
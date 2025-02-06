import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FoodContainer3D } from "./FoodContainer3D";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
          alt="Food sharing background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            Together We Can Make a Difference
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Connecting Food Surplus with Those in Need
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We bridge the gap between food providers and orphanages, turning potential waste into meaningful meals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            Join Our Mission
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      <FoodContainer3D />
    </section>
  );
};
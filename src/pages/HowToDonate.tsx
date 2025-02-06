import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Clock, Truck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowToDonate = () => {
  const steps = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Identify Surplus Food",
      description: "Check for excess prepared food that meets safety standards and can be donated.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Schedule Pickup",
      description: "Use our platform to schedule a convenient pickup time for your donation.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Prepare for Pickup",
      description: "Package food properly and have it ready for our verified volunteers.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Complete Donation",
      description: "Receive confirmation and track your impact in the community.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">How to Donate</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Making a difference is easy. Follow these simple steps to donate your surplus food and help those in need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl font-semibold">Ready to Make a Difference?</h2>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button variant="default" className="gap-2">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HowToDonate;
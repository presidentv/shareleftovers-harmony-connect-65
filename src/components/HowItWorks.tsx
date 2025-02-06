import { motion } from "framer-motion";
import { Store, Truck, Home } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Food Providers Register",
    description: "Restaurants and grocery stores sign up to donate their surplus food.",
  },
  {
    icon: Truck,
    title: "We Handle Logistics",
    description: "Our network of NGOs coordinates pickup and delivery.",
  },
  {
    icon: Home,
    title: "Orphanages Receive Meals",
    description: "Fresh, quality food reaches children in need.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A simple, efficient process to connect food providers with those in need
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { motion } from "framer-motion";
import { Heart, Utensils, Building2, Clock } from "lucide-react";

const stats = [
  {
    icon: Utensils,
    value: "50K+",
    label: "Meals Shared",
  },
  {
    icon: Building2,
    value: "100+",
    label: "Partner Restaurants",
  },
  {
    icon: Heart,
    value: "25+",
    label: "Orphanages Supported",
  },
  {
    icon: Clock,
    value: "2hrs",
    label: "Average Response Time",
  },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
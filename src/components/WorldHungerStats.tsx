import { motion } from "framer-motion";
import { Heart, World, Frown, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const stats = [
  {
    icon: World,
    title: "828 Million",
    description: "People affected by hunger globally",
  },
  {
    icon: Heart,
    title: "45% Higher",
    description: "Risk of death in undernourished children",
  },
  {
    icon: Frown,
    title: "3.1 Million",
    description: "Children die from hunger each year",
  },
  {
    icon: AlertCircle,
    title: "1 in 9",
    description: "People don't have enough to eat",
  },
];

export const WorldHungerStats = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            The Global Hunger Crisis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            World hunger is one of humanity's greatest challenges. Every day,
            millions of people go to bed hungry. Together, we can make a
            difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {stat.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-primary font-medium mb-6">
            Every second counts in the fight against hunger.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
            Join Our Mission
          </button>
        </motion.div>
      </div>
    </section>
  );
};
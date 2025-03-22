import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Connect Your Data",
      description: "Link your accounts like utilities, travel, and shopping to automatically track your carbon emissions.",
      image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=400&h=250",
      alt: "Connect data sources"
    },
    {
      number: 2,
      title: "Get Personalized Insights",
      description: "Review your carbon footprint breakdown and receive tailored suggestions to reduce your impact.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=250",
      alt: "Carbon insights dashboard"
    },
    {
      number: 3,
      title: "Take Action & Track Progress",
      description: "Follow your personalized plan, track your progress, and see the positive impact of your actions.",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=400&h=250",
      alt: "Progress tracking"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            How Carbon Crunch Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reducing your carbon footprint has never been easier. Our simple three-step process 
            helps you make a real difference.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div key={step.number} className="relative" variants={itemVariants}>
              <motion.div 
                className="absolute top-0 left-0 w-10 h-10 bg-[#0EA5E9] text-white rounded-full flex items-center justify-center font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {step.number}
              </motion.div>
              <div className="pl-16">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4">
                  <img 
                    src={step.image} 
                    alt={step.alt} 
                    className="rounded-lg shadow-sm w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

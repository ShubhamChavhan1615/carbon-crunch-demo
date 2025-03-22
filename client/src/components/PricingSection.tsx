import { motion } from "framer-motion";
import { CheckIcon } from "@/assets/svg/CheckIcon";

interface PlanFeature {
  included: boolean;
  text: string;
}

interface Plan {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  features: PlanFeature[];
  buttonText: string;
  buttonStyle: "primary" | "outline";
}

export default function PricingSection() {
  const plans: Plan[] = [
    {
      name: "Free",
      description: "Perfect for individuals just getting started",
      price: "$0",
      features: [
        { included: true, text: "Basic carbon footprint tracking" },
        { included: true, text: "Manual data entry" },
        { included: true, text: "Monthly reports" },
        { included: false, text: "Automatic data synchronization" }
      ],
      buttonText: "Get Started",
      buttonStyle: "outline"
    },
    {
      name: "Premium",
      description: "Enhanced features for serious individuals",
      price: "$9.99",
      popular: true,
      features: [
        { included: true, text: "All Free features" },
        { included: true, text: "Automatic data synchronization" },
        { included: true, text: "Personalized reduction plan" },
        { included: true, text: "Weekly carbon insights" }
      ],
      buttonText: "Get Started",
      buttonStyle: "primary"
    },
    {
      name: "Business",
      description: "Complete solution for organizations",
      price: "$29.99",
      features: [
        { included: true, text: "All Premium features" },
        { included: true, text: "Team management & analytics" },
        { included: true, text: "API access & integrations" },
        { included: true, text: "Dedicated account manager" }
      ],
      buttonText: "Contact Sales",
      buttonStyle: "outline"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you or your organization. All plans include core features.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white p-8 rounded-xl shadow-sm border ${
                plan.popular ? "border-[#0EA5E9]" : "border-gray-100"
              } hover:shadow-md transition-all relative`}
              variants={cardVariants}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#0EA5E9] text-white text-xs font-bold py-1 px-3 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    {feature.included ? (
                      <>
                        <CheckIcon className="w-5 h-5 text-[#0EA5E9] mt-0.5 mr-2" />
                        <span className="text-gray-700">{feature.text}</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-400">{feature.text}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <motion.a 
                href="#"
                className={`block w-full ${
                  plan.buttonStyle === "primary"
                    ? "bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white"
                    : "bg-white hover:bg-gray-50 text-[#0EA5E9] border border-[#0EA5E9]"
                } font-medium py-2 px-4 rounded-lg text-center transition-all`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {plan.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

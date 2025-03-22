import { motion } from "framer-motion";
import { Star } from "@/assets/svg/Star";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Carbon Crunch has changed the way I think about my daily choices. I've reduced my carbon footprint by 30% in just 3 months!",
      author: "Sarah Johnson",
      title: "Marketing Manager",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      quote: "As a business owner, Carbon Crunch has helped us implement sustainable practices and reduce our company's environmental impact significantly.",
      author: "Michael Chen",
      title: "Small Business Owner",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The community aspect of Carbon Crunch makes reducing my carbon footprint feel less overwhelming. I love connecting with like-minded people!",
      author: "Emily Rodriguez",
      title: "Environmental Scientist",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
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

  const itemVariants = {
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
    <section id="testimonials" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of individuals and businesses who have reduced their carbon 
            footprint with Carbon Crunch.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#0EA5E9]" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-10 h-10 rounded-full mr-3"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

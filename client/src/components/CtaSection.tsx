import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-16 bg-[#0EA5E9] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Join the Movement for a Greener Future
        </motion.h2>
        <motion.p
          className="text-lg text-white/90 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Start tracking and reducing your carbon footprint today with Carbon Crunch. 
          Together, we can make a real difference.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="bg-white text-[#0EA5E9] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            Get Started for Free
          </motion.a>
          <motion.a
            href="#"
            className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-all"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

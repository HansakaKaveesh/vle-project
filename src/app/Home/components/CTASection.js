"use client";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Transform Your Learning Experience
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join 50,000+ learners accelerating their careers with our interactive platform. 
            Get instant access to 500+ courses and cutting-edge learning tools.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="/signup"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <FaRocket className="text-xl" />
              Start Free Trial
            </a>
            
            <a
              href="/learn-more"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border-2 border-white/20 text-white rounded-xl font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/30 hover:scale-[1.02] transition-all duration-300"
            >
              <FaChartLine className="text-xl" />
              View Success Stories
            </a>
          </motion.div>

          <div className="mt-8 flex justify-center items-center gap-4 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live mentorship sessions</span>
            </div>
            <div className="h-4 w-px bg-blue-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>24/7 learning support</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CTASection;
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Sahand Estate
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Image Section */}
          <motion.img
            src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
            alt="Real Estate"
            className="w-full h-[350px] object-cover rounded-lg shadow-xl"
            whileHover={{ scale: 1.03 }}
          />

          {/* Text Content */}
          <div className="text-slate-700 space-y-6">
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg leading-relaxed"
            >
              Sahand Estate is a trusted name in real estate, known for its excellence and client-first approach. Whether you're looking to buy your first home, rent a luxury apartment, or invest in prime property, we’re your go-to partner.
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg leading-relaxed"
            >
              Our experienced agents are experts in market trends, neighborhood details, and negotiation strategies. We make the journey smooth—offering personal guidance, digital tools, and full transparency at every step.
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg leading-relaxed"
            >
              We believe in relationships over transactions. Our mission is simple: to help you achieve your real estate dreams with confidence, peace of mind, and absolute satisfaction.
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg leading-relaxed"
            >
              From modern apartments to countryside villas, Sahand Estate offers a wide range of properties to fit every need and budget. With our tools, knowledge, and passion—we’re changing the way you experience real estate.
            </motion.p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Ready to find your dream property?
          </h2>
          <p className="text-slate-600 mb-6">Let Sahand Estate guide your way home.</p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

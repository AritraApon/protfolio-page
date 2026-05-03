"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 py-12 md:py-24 hero-gradient px-5 rounded-md">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary-container/40 text-secondary">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span className="font-h3 text-xs md:text-sm">Available for new opportunities</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-on-background leading-tight tracking-tight">
          Hi, I'm <span className="bg-gradient-to-r from-primary-container to-blue-400 bg-clip-text text-transparent">Aritro Mazumdar</span>
          <br />
          <span className="text-3xl md:text-5xl text-on-surface-variant/80">Junior Web Developer</span>
        </h1>

        <p className="text-lg md:text-xl text-on-surface-variant/70 max-w-xl mx-auto md:mx-0 font-body-md">
          I build responsive full-stack web applications using React, Next.js, and MongoDB. Passionate about creating clean UI, authentication systems, and real-world user experiences.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-5 pt-6 justify-center md:justify-start">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full sm:w-auto"
          >
            <Link 
              href="#projects" 
              className="w-full px-10 py-4 rounded-2xl bg-[#58A6FF] text-[#0B0E14] font-h3 text-[18px] flex items-center justify-center gap-2 shadow-lg shadow-[#58A6FF]/20 hover:bg-[#58A6FF]/90 transition-colors"
            >
              View Projects <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full sm:w-auto"
          >
            <a 
              href="/Aritro_Mazumdar_Resume.pdf" 
              download 
              className="w-full px-10 py-4 rounded-2xl bg-[#F78166] text-[#0B0E14] font-h3 text-[18px] flex items-center justify-center gap-2 shadow-lg shadow-[#F78166]/20 hover:bg-[#F78166]/90 transition-colors"
            >
              Download Resume <FaDownload />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ 
          duration: 0.8,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        viewport={{ once: true }}
        className="relative order-1 md:order-2"
      >
        <div className="w-56 h-56 md:w-80 md:h-80 rounded-3xl object-cover overflow-hidden glass-card p-2 border-primary-container/20 mx-auto ">
          <Image
            src={'/Profile.jpeg'}
            alt="Developer Portrait"
            width={320}
            height={320}
            className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>

      </motion.div>
    </section>
  );
}

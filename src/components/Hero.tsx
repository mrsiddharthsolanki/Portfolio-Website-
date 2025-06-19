import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter, Sparkles, Code, Palette } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mrsiddharthsolanki', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/siddharth-solanki-225439325/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-500' },
  ];

  const skills = ['React.js', 'JavaScript', 'UI/UX Design', 'Tailwind CSS', 'Frontend Development'];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Interactive cursor effect */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-blue-500/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main heading with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 dark:border-blue-800/50 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Available for new opportunities
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block text-gray-900 dark:text-white"
              >
                Hi, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
              >
                Siddharth Solanki
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 font-light"
            >
              Frontend Developer | React Enthusiast |{' '}
              <motion.span
                key={currentSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"
              >
                {skills[currentSkill]}
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Aspiring Frontend Developer and B.Tech student at Silver Oak University. 
              Over 20 practical projects completed including blogging platforms, e-commerce, and UI/UX components.
            </motion.p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Hire Me
              <motion.div
                className="w-0 group-hover:w-2 h-2 bg-white rounded-full transition-all duration-300"
              />
            </motion.a>
            
            <motion.a
              href="/siddharth-solanki-resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <Download size={20} />
              Download Resume
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Download size={16} />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center justify-center gap-6 mb-16"
          >
            {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 ${color}`}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Featured metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-16"
          >
            {[
              { number: '20+', label: 'Projects' },
              { number: '3+', label: 'Years Learning' },
              { number: '100%', label: 'Passion' },
            ].map(({ number, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <span className="text-sm mb-2 font-medium">Scroll to explore</span>
              <ChevronDown size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border border-blue-300/30 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;
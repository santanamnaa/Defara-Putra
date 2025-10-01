import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

export function CreativeStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-black text-white py-32">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl tracking-wide leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I AM
          </motion.h2>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-5xl md:text-7xl tracking-wide italic font-light">
              STUDENT
            </h2>
            <motion.div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-white"
              initial={{ rotate: -45, scale: 0 }}
              animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -45, scale: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-7xl tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            TO INNOVATE
          </motion.h2>
        </motion.div>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Computer Science Student at Bina Nusantara University with a passion for web development. 
            Focused on creating innovative solutions that solve real-world problems through modern technologies and frameworks.
          </p>
        </motion.div>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Collaborating on challenging projects to hone both technical and teamwork skills, 
            while applying technology to make a positive impact in the world.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
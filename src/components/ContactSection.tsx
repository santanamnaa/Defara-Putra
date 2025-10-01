import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

interface ContactSectionProps {
  contactImage: string
}

export function ContactSection({ contactImage }: ContactSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl mb-8 tracking-wide">
              GET<br />IN TOUCH
            </h2>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <p className="text-gray-600 mb-2">Email</p>
                <motion.a
                  href="mailto:defara41@gmail.com"
                  className="text-lg hover:text-gray-600 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  defara41@gmail.com
                </motion.a>
              </div>
              
              <div>
                <p className="text-gray-600 mb-2">Phone</p>
                <motion.a
                  href="tel:+6285183066469"
                  className="text-lg hover:text-gray-600 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  +62 85183066469
                </motion.a>
              </div>
              
              <div>
                <p className="text-gray-600 mb-2">Location</p>
                <p className="text-lg">Bandung, Indonesia</p>
              </div>
            </motion.div>
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="https://github.com/dfra9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-3 tracking-wide hover:bg-gray-800 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                VISIT MY PORTFOLIO
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img
              src={contactImage}
              alt="Contact workspace"
              className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
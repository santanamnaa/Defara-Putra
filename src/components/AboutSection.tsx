import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

interface AboutSectionProps {
  workspaceImage: string
}

export function AboutSection({ workspaceImage }: AboutSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-8 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl mb-8 tracking-wide">
            A LITTLE<br />ABOUT ME
          </h2>
          <motion.div
            className="space-y-6 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Computer Science Student at Bina Nusantara University with strong interest in web development. Enjoys collaborating on challenging projects, honing both technical and teamwork skills. Passionate about full-stack development, modern frameworks, and applying technology to real-world problems.
            </p>
            <p>
              Focused on frontend engineering with expertise in React.js, JavaScript, TypeScript, HTML, CSS, and other modern web technologies. Committed to creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me exploring new web development technologies, 
              staying updated with industry trends, and seeking inspiration from innovative solutions.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src={workspaceImage}
            alt="Workspace"
            className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition-all duration-500"
            initial={{ opacity: 0.2 }}
            whileHover={{ opacity: 0 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
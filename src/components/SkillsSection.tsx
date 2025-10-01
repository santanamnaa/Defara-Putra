import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    "MySQL",
    "Microsoft SQL Server",
    "Git",
    "GitHub",
    "Figma"
  ]

  const expertise = [
    "HTML",
    "CSS",
    "JavaScript",
    "C#",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    ".NET",
    "Bootstrap"
  ]

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          className="text-3xl mb-16 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          SKILLS &<br />EXPERTISE
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl mb-8 text-gray-800">Databases & Cloud</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-black mr-4"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  />
                  <span className="text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl mb-8 text-gray-800">Languages, Frameworks & AI/ML</h3>
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-black mr-4"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
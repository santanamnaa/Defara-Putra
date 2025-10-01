import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

interface WorkExperienceProps {
  officeImage: string
}

export function WorkExperience({ officeImage }: WorkExperienceProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      period: "2024 – 2025",
      company: "HIMTI Bina Nusantara",
      role: "Activist",
      description: "Committee Web Development HISHOT (2024) – Active contributor in web projects. Committee DND Alumni Gathering (2024) – Designed event structure. Committee HIVENT (2024) – Built strong teamwork & communication. Committee TECHNO (2024) – Managed tasks and inter-member communication. Committee Equipment Coordination Chairman, Company Visit (2025) – Led coordination team. Committee HIMTI Farewell (2024) – Supported chairperson in program execution."
    },
    {
      period: "Feb 2025 – Feb 2026",
      company: "PT. Permata Agro Persada",
      role: "IT Intern",
      description: "Documented software process flows & requirements. Designed & built software with team collaboration. Developed features & conducted testing. Provided user technical support. Enhanced full-stack development and database management skills. Built intuitive dashboards, reporting tools, and CRUD systems for asset & inventory management."
    }
  ]

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-8 py-20">
      <motion.h2
        className="text-3xl mb-16 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        WORK<br />EXPERIENCE
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-gray-200 pl-6 pb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="text-sm text-gray-500 mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
              >
                {exp.period}
              </motion.div>
              <motion.h3
                className="text-xl mb-1"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
              >
                {exp.company}
              </motion.h3>
              <motion.p
                className="text-gray-700 mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
              >
                {exp.role}
              </motion.p>
              <motion.p
                className="text-gray-600 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
              >
                {exp.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src={officeImage}
            alt="Office workspace"
            className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
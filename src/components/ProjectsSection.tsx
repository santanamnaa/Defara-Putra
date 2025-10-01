import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

interface ProjectsSectionProps {
  projectImages: string[]
}

export function ProjectsSection({ projectImages }: ProjectsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    { title: "EaseNeura", category: "Flutter App" },
    { title: "Illegal Maritime Activities Monitoring System", category: "Web Application" },
    { title: "IT Inventory", category: "Full-Stack System" },
    { title: "LeanTreats", category: "Web Application" },
    { title: "dfra9.github.io", category: "Portfolio Site" },
    { title: "Podomoro", category: "Web App Project" }
  ]

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-8 py-20">
      <motion.h2
        className="text-3xl mb-16 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        NOTABLE<br />PROJECTS
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projectImages.slice(0, 8).map((image, index) => (
          <motion.div
            key={index}
            className="group relative aspect-square overflow-hidden bg-gray-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <motion.img
              src={image}
              alt={projects[index]?.title || `Project ${index + 1}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
              initial={{ y: 20 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-white">
                <h3 className="text-sm mb-1">{projects[index]?.title}</h3>
                <p className="text-xs text-gray-300">{projects[index]?.category}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
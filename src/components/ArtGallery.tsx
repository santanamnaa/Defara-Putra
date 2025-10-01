import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

interface ArtGalleryProps {
  artImages: string[]
}

export function ArtGallery({ artImages }: ArtGalleryProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const artProjects = [
    { title: "EaseNeura", description: "Mental health app" },
    { title: "Maritime Monitoring System", description: "Webapp for tracking" },
    { title: "IT Inventory", description: "Asset management" },
    { title: "LeanTreats", description: "Healthy cake shop" },
    { title: "dfra9 Portfolio", description: "Personal portfolio" },
    { title: "Podomoro", description: "Web app project" }
  ]

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-8 py-20">
      <motion.h2
        className="text-3xl mb-16 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        MY PROJECTS
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {artImages.slice(0, 6).map((image, index) => (
          <motion.div
            key={index}
            className="group relative aspect-square overflow-hidden bg-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={image}
              alt={artProjects[index]?.title || `Art piece ${index + 1}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            />
            
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end p-4"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm">{artProjects[index]?.title}</h3>
                <p className="text-xs opacity-80">{artProjects[index]?.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
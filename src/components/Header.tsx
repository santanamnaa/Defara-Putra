import { motion } from 'motion/react'

interface HeaderProps {
  profileImage: string
}

export function Header({ profileImage }: HeaderProps) {
  return (
    <motion.header 
      className="flex flex-col items-center justify-center min-h-screen px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src={profileImage}
          alt="Defara Putra Nurimaba"
          className="w-24 h-24 rounded-full object-cover grayscale"
        />
      </motion.div>
      
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h1 className="text-4xl tracking-wide mb-4">Defara Putra Nurimaba</h1>
        <motion.div
          className="w-32 h-px bg-black mx-auto mb-4"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <h2 className="text-2xl tracking-widest">FRONTEND ENGINEER</h2>
      </motion.div>
    </motion.header>
  )
}
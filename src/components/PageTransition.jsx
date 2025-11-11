import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function PageTransition({ children }) {
  const reduce = useReducedMotion()
  const variants = {
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: reduce ? 0 : -10, transition: { duration: 0.35, ease: [0.4, 0, 1, 1] } },
  }

  return (
    <motion.main
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  )
}

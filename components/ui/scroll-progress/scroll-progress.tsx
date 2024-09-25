import { motion, useScroll, useSpring } from 'framer-motion'
import { cnBase } from 'tailwind-variants'

interface ScrollProgressProps {
   className?: string
}

export function ScrollProgress({
   className,
}: ScrollProgressProps) {
   const { scrollYProgress } = useScroll()

   const scaleX = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 50,
      restDelta: 0.001,
   })

   return (
      <motion.div
         className={cnBase('fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]', className)}
         style={{
            scaleX,
         }}
      />
   )
}

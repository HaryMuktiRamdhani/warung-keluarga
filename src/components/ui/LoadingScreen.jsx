import { motion, AnimatePresence } from 'framer-motion'
import site from '../../data/site.json'

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-warung-green"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-warung-paper text-2xl font-bold text-warung-green"
          >
            WK
          </motion.div>
          <p className="font-display text-sm tracking-wide text-warung-paper/80">{site.namaWarung}</p>
          <motion.div
            className="h-1 w-32 overflow-hidden rounded-full bg-warung-paper/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full w-1/2 rounded-full bg-warung-yellow"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

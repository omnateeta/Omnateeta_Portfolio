import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaGraduationCap, FaCode } from 'react-icons/fa'

interface Achievement {
  title: string
  description: string
  icon: React.ReactNode
  year: string
}

const achievements: Achievement[] = [
  {
    title: 'Academic Excellence',
    description: 'Maintaining a strong academic record in Computer Science Engineering',
    icon: <FaGraduationCap />,
    year: '2025',
  },
  {
    title: 'Web Development Projects',
    description: 'Successfully developed and deployed multiple full-stack web applications',
    icon: <FaCode />,
    year: '2025',
  },
  {
    title: 'Problem Solving Skills',
    description: 'Consistently solving complex programming challenges and participating in coding competitions',
    icon: <FaAward />,
    year: '2025',
  },
]

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Current Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl text-blue-500 dark:text-blue-400">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  {achievement.description}
                </p>
                <div className="text-sm text-blue-500 dark:text-blue-400 text-center">
                  {achievement.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements 
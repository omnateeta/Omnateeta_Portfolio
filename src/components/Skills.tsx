import React from 'react'
import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaTrophy,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiDjango,
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
  level: number
  color: string
  image: string
}

const skills: Skill[] = [
  { 
    name: 'React', 
    icon: <FaReact />, 
    level: 90, 
    color: 'from-blue-500 to-blue-600',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
  },
  { 
    name: 'TypeScript', 
    icon: <SiTypescript />, 
    level: 85, 
    color: 'from-blue-400 to-blue-500',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
  },
  { 
    name: 'Node.js', 
    icon: <FaNodeJs />, 
    level: 80, 
    color: 'from-green-500 to-green-600',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
  },
  { 
    name: 'Python', 
    icon: <FaPython />, 
    level: 85, 
    color: 'from-yellow-500 to-yellow-600',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
  },
  { 
    name: 'Java', 
    icon: <FaJava />, 
    level: 80, 
    color: 'from-red-500 to-red-600',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
  },
  { 
    name: 'Django', 
    icon: <SiDjango />, 
    level: 75, 
    color: 'from-green-600 to-green-700',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg'
  },
  { 
    name: 'MongoDB', 
    icon: <SiMongodb />, 
    level: 80, 
    color: 'from-green-400 to-green-500',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
  },
  { 
    name: 'Tailwind CSS', 
    icon: <SiTailwindcss />, 
    level: 90, 
    color: 'from-cyan-400 to-cyan-500',
    image: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
  },
  { 
    name: 'SQL', 
    icon: <FaDatabase />, 
    level: 80, 
    color: 'from-purple-500 to-purple-600',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'
  },
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-16 h-16">
                    <img
                      src={skill.image}
                      alt={`${skill.name} logo`}
                      className="w-full h-full object-contain filter dark:invert"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20 rounded-full`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="mt-20 p-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg shadow-inner">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Achievements
        </h3>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-2 border-yellow-500 dark:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaTrophy className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  National Level Hackathon Winner
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Won 1st place in Web Development domain at AGMRCET Varur's 12-hour hackathon
                </p>
                <p className="text-gray-500 dark:text-gray-500 mt-2">
                  Cash Prize: ₹15,000
                </p>
              </div>
            </div>
            <div className="mt-4">
              <img
                src="/images/winner.jpg"
                alt="Hackathon Winner"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 
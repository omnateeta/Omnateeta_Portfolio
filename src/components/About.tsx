import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate Full Stack Developer with a strong foundation in web development
                and a keen eye for creating intuitive user experiences. My journey in tech began
                with a curiosity for building things that make a difference.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I specialize in modern web technologies like React, TypeScript, and Node.js,
                and I'm always eager to learn and adapt to new technologies and methodologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                When I'm not coding, you can find me participating in hackathons, contributing
                to open-source projects, or exploring new technologies to enhance my skills.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      B.E in Computer Science
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      RURAL ENGINEERING COLLEGE HULKOTI
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                      2023 - 2027
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      Full Stack Developer
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your Company Name
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                      2023 - Present
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 
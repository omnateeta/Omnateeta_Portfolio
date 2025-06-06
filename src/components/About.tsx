import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { FaTrophy } from 'react-icons/fa'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src="/images/techpic.jpg"
                  alt="Omnateeta"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="mt-6 text-center max-w-3xl mx-auto">
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  I am a second-year Bachelor of Engineering student in the Computer Science and Engineering department,
                  with a strong interest in technology and continuous learning. I'm currently building my skills in
                  software development and exploring real-world projects to grow as a future tech professional.
                </p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
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
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      Full Stack Developer
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Working on real-world projects to build skills in full-stack development, including web applications using React, Node.js, and MongoDB.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Gained hands-on experience in coding, debugging, and deploying responsive user interfaces.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 
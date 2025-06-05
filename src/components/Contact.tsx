import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

interface FormData {
  name: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-primary dark:text-textPrimary mb-12 text-center">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-tertiary rounded-xl p-8 shadow-glass backdrop-blur-glass"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-textSecondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary text-gray-900 dark:text-textPrimary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-textSecondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary text-gray-900 dark:text-textPrimary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-textSecondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary text-gray-900 dark:text-textPrimary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-secondary text-primary font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-tertiary rounded-xl p-8 shadow-glass backdrop-blur-glass">
                <h3 className="text-xl font-semibold text-primary dark:text-textPrimary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:omnateeta3@gmail.com"
                    className="flex items-center space-x-3 text-gray-600 dark:text-textSecondary hover:text-secondary dark:hover:text-secondary transition-colors"
                  >
                    <HiMail size={24} />
                    <span>omnateeta3@gmail.com</span>
                  </a>
                  <a
                    href="https://github.com/omnateeta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 dark:text-textSecondary hover:text-secondary dark:hover:text-secondary transition-colors"
                  >
                    <FaGithub size={24} />
                    <span>github.com/omnateeta</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/omnateeta-v-unnimath-0b815b338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 dark:text-textSecondary hover:text-secondary dark:hover:text-secondary transition-colors"
                  >
                    <FaLinkedin size={24} />
                    <span>linkedin.com/in/omnateeta-v-unnimath</span>
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-tertiary rounded-xl p-8 shadow-glass backdrop-blur-glass">
                <h3 className="text-xl font-semibold text-primary dark:text-textPrimary mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-textSecondary mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/omnateeta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-primary/50 rounded-full text-gray-600 dark:text-textSecondary hover:text-secondary dark:hover:text-secondary transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/omnateeta-v-unnimath-0b815b338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-primary/50 rounded-full text-gray-600 dark:text-textSecondary hover:text-secondary dark:hover:text-secondary transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="mailto:omnateeta3@gmail.com"
                    className="p-3 bg-gray-100 dark:bg-primary/50 rounded-full text-gray-600 dark:text-textSecondary hover:text-secondary dark:hover:text-secondary transition-colors"
                  >
                    <HiMail size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 
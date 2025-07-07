import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo, experience, education } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Mí</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">¿Quién soy?</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {personalInfo.about}
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <FiMapPin className="text-blue-600" size={20} />
                <span className="text-gray-600">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-blue-600" size={20} />
                <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-blue-600" size={20} />
                <a href={`tel:${personalInfo.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <motion.a
              href={personalInfo.cv}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <FiDownload size={20} />
              Descargar CV
            </motion.a>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Experiencia</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{exp.title}</h4>
                    <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Educación</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{edu.degree}</h4>
                    <p className="text-green-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
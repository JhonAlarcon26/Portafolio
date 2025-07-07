import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiCheck } from 'react-icons/fi';
import { languages } from '../data/portfolioData';

const Languages = () => {
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'nativo':
        return 'bg-green-500';
      case 'avanzado':
        return 'bg-blue-500';
      case 'intermedio':
        return 'bg-yellow-500';
      case 'básico':
      case 'basico':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getLevelText = (level) => {
    switch (level.toLowerCase()) {
      case 'nativo':
        return 'Nativo';
      case 'avanzado':
        return 'Avanzado';
      case 'intermedio':
        return 'Intermedio';
      case 'básico':
      case 'basico':
        return 'Básico';
      default:
        return level;
    }
  };

  return (
    <section id="languages" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Idiomas</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Idiomas que domino para comunicación efectiva en proyectos internacionales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
            >
              {/* Language Icon */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <FiGlobe className="text-blue-600" size={32} />
                </div>
              </div>

              {/* Language Name */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {language.name}
              </h3>

              {/* Level Badge */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getLevelColor(language.level)}`}>
                  {getLevelText(language.level)}
                </span>
                <FiCheck className="text-green-500" size={16} />
              </div>

              {/* Level Description */}
              <p className="text-gray-600 text-sm">
                {language.level.toLowerCase() === 'nativo' && 'Comunicación fluida y natural'}
                {language.level.toLowerCase() === 'avanzado' && 'Comunicación profesional efectiva'}
                {language.level.toLowerCase() === 'intermedio' && 'Comunicación básica y técnica'}
                {language.level.toLowerCase() === 'básico' && 'Comunicación básica'}
                {language.level.toLowerCase() === 'basico' && 'Comunicación básica'}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Comunicación Multicultural
            </h3>
            <p className="text-gray-600 mb-6">
              Mi capacidad para comunicarme en múltiples idiomas me permite colaborar 
              efectivamente con equipos internacionales y clientes de diferentes países, 
              asegurando una comunicación clara y profesional en todos los proyectos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiCheck className="text-green-500" size={16} />
                Documentación técnica
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiCheck className="text-green-500" size={16} />
                Reuniones de proyecto
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiCheck className="text-green-500" size={16} />
                Soporte al cliente
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages; 
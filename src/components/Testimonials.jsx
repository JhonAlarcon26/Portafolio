import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';
import { testimonials } from '../data/portfolioData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimonios</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lo que dicen sobre mi trabajo y colaboraciones profesionales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-600 opacity-20">
                <FiMessageSquare size={40} />
              </div>

              {/* Testimonial Content */}
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.avatar.startsWith('http') ? testimonial.avatar : `${import.meta.env.BASE_URL}${testimonial.avatar.replace(import.meta.env.BASE_URL, '').replace(/^\//, '')}`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ¿Quieres ser el próximo?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Estoy siempre abierto a nuevos proyectos y colaboraciones. ¡Trabajemos juntos para crear algo increíble!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contáctame
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 
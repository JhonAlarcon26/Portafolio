import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiTool, 
  FiMonitor,
  FiGithub,
  FiTerminal,
  FiGlobe,
  FiLayers
} from 'react-icons/fi';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: FiCode, color: 'blue' },
    { id: 'backend', name: 'Backend', icon: FiDatabase, color: 'green' },
    { id: 'tools', name: 'Herramientas', icon: FiTool, color: 'purple' },
    { id: 'others', name: 'Otros', icon: FiMonitor, color: 'orange' }
  ];

  const getSkillIcon = (iconName) => {
    const iconMap = {
      html5: FiGlobe,
      css3: FiLayers,
      javascript: FiCode,
      react: FiCode,
      bootstrap: FiLayers,
      tailwind: FiLayers,
      php: FiCode,
      mysql: FiDatabase,
      nodejs: FiTerminal,
      express: FiTerminal,
      mongodb: FiDatabase,
      git: FiGithub,
      github: FiGithub,
      vscode: FiTerminal,
      postman: FiTool,
      npm: FiTerminal,
      responsive: FiMonitor,
      api: FiCode,
      seo: FiMonitor,
      testing: FiTool
    };
    return iconMap[iconName] || FiCode;
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      orange: 'bg-orange-600'
    };
    return colorMap[color] || 'bg-blue-600';
  };

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Habilidades Técnicas</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `${getColorClasses(category.color)} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <IconComponent size={20} />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills[activeCategory].map((skill, index) => {
            const IconComponent = getSkillIcon(skill.icon);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                    <p className="text-sm text-gray-500">{skill.level}%</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Resumen de Habilidades</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {skillList.length}
                </div>
                <div className="text-gray-600 capitalize">
                  {category === 'frontend' ? 'Frontend' : 
                   category === 'backend' ? 'Backend' :
                   category === 'tools' ? 'Herramientas' : 'Otros'}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
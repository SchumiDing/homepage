'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Skills: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const skillCategories = t.skills.categories;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {t.skills.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              style={{
                animationDelay: inView ? `${categoryIndex * 0.1}s` : '0s',
                animation: inView ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: inView ? `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s` : '0s'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">{t.skills.continuousLearning.title}</h3>
            <p className="text-gray-300 mb-6">
              {t.skills.continuousLearning.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {t.skills.continuousLearning.tags.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

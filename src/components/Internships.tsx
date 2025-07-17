'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Internships: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8 pl-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {t.internships.title}
          </h2>
        </div>
        <div className="space-y-10">
          {t.internships.experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col gap-4 md:flex-row md:items-center md:gap-x-6">
              <img src={exp.icon} alt={exp.company} className="w-[280px] h-auto rounded-lg border border-white/20 object-contain" />
              <div className="flex-1">
                <div className="flex items-baseline space-x-4 mb-2">
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                </div>
                <p className="text-purple-300 mb-2">{exp.position}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

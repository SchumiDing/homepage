'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: '我的故事', icon: '📖' },
    { id: 'journey', label: '技术历程', icon: '🚀' },
    { id: 'philosophy', label: '设计理念', icon: '💡' },
  ];

  const content = {
    story: {
      title: '人工智能算法探索者',
      text: '作为交叉专业的学生，我对人工智能算法有着浓厚兴趣。在校内自学多门AI课程，并辅修人工智能专业。在实习和科研中积累了丰富的实践经验，并成功发表CogSci 2025会议论文。',
      highlights: [
        '人工智能专业辅修',
        '自主学习AI课程',
        '实习与科研实践',
        'CogSci 2025论文发表'
      ]
    },
    journey: {
      title: '视觉与强化学习研究',
      text: '在科研中，我聚焦计算机视觉算法的感知偏差，设计并构建多种CNN和ViT架构。在强化学习领域，深入实践PPO与DQN，并探索MoE、Attention和MADDPG等前沿技术。',
      highlights: [
        'CNN与ViT架构设计',
        '感知偏差研究',
        'PPO / DQN 实践',
        'MoE、Attention 与 MADDPG'
      ]
    },
    philosophy: {
      title: '跨学科融合与创新',
      text: '我坚信跨学科的深度融合能催生创新。将严谨科研方法与实践经验应用于算法设计，不断追求卓越，推动技术在实际场景中的落地与变革。',
      highlights: [
        '科研驱动的算法创新',
        '理论与实践结合',
        '前沿技术持续学习',
        '关注现实应用价值'
      ]
    }
  };

  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {t.about.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.about.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile image placeholder with sci-fi frame */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Sci-fi frame */}
              <div className="absolute inset-0 border-2 border-purple-500/50 rounded-lg transform rotate-1 animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-pink-500/50 rounded-lg transform -rotate-1 animate-pulse delay-1000"></div>
              
              {/* Profile container */}
              <div className="relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl">
                  👨‍💻
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">丁睿毅</h3>
                <p className="text-purple-400">算法+全栈开发</p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">7+</div>
                    <div className="text-sm text-gray-400">年经验</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">5+</div>
                    <div className="text-sm text-gray-400">项目</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content tabs */}
          <div className="space-y-6">
            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {content[activeTab as keyof typeof content].title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {content[activeTab as keyof typeof content].text}
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content[activeTab as keyof typeof content].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

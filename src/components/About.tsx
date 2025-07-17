'use client';

import { useState } from 'react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: '我的故事', icon: '📖' },
    { id: 'journey', label: '技术历程', icon: '🚀' },
    { id: 'philosophy', label: '设计理念', icon: '💡' },
  ];

  const content = {
    story: {
      title: '技术路上的探索者',
      text: '我是一名充满激情的全栈开发者，专注于创造高质量的软件解决方案。从前端的精美界面到后端的强大逻辑，我享受将技术想法转化为实际产品的整个过程。在人工智能和云计算领域也有着浓厚的兴趣和实践经验。',
      highlights: [
        '3+ 年开发经验',
        '20+ 项目交付',
        '专注代码质量',
        '持续技术学习'
      ]
    },
    journey: {
      title: '技术成长历程',
      text: '从最初接触编程的好奇心，到现在能够独立构建复杂的全栈应用，我的技术之路充满了挑战与收获。在学习和工作中不断积累经验，关注新技术趋势，致力于提升代码质量和系统架构能力。',
      highlights: [
        'React/Vue.js 开发',
        'Node.js/Python 后端',
        'TypeScript 专家',
        '云原生架构'
      ]
    },
    philosophy: {
      title: '设计与技术的融合',
      text: '我相信最好的产品来自于技术与设计的完美结合。不仅要关注功能的实现，更要注重用户体验的每一个细节。简洁、直观、高效是我追求的设计原则。',
      highlights: [
        '用户为中心的设计',
        '简洁优雅的界面',
        '高性能优化',
        '无障碍访问支持'
      ]
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            关于我
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            了解我的背景、经验和对技术的热情
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
                <p className="text-purple-400">全栈开发工程师</p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">3+</div>
                    <div className="text-sm text-gray-400">年经验</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">20+</div>
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

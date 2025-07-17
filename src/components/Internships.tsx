'use client';

import React from 'react';

export const Internships: React.FC = () => {
  const experiences = [
    {
      period: '2023.7 - 2024.1',
      company: '中国科学院软件科学研究所',
      position: '自然语言处理实习生',
      icon: '/img/iscas.png',
      details: [
        '基于ChatGLM大语言模型，客制化实现电话营销的人工智能语言模型、部署模型并开发接口。',
        '分析已有电话营销对话数据，设计电话营销的自然语言处理算法。',
        '协助科研工作中的大语言模型使用。',
        '基于Python-HTML-CSS-Javascript开发网站用于大语言模型测试。'
      ]
    },
    {
      period: '2024.6 - 2024.8',
      company: '诺华中国 DDIT 部门',
      position: '数据开发（实习）',
      icon: '/img/novartis.png',
      details: [
        '基于Python，撰写特殊文件解析算法，将旧数据库数据转移到新的AWS数据库中。',
        '阅读基于QVLink语言的数据库处理代码，绘制架构图并整理重构思路。',
        '使用Jenkins流程化平台测试数据处理项目，阅读报错并汇报错误内容。'
      ]
    },
    {
      period: '2024.12 - 2025.3',
      company: '德勤管理咨询',
      position: 'AI 算法实习生',
      icon: '/img/deloitte.png',
      details: [
        '测试并分析多模态算法与开源大语言模型结合下的多Agent查询系统优劣。',
        '开发大语言模型text2sql自动化测试脚本，分析测试数据。',
        '基于提示词和原有text2sql设计，优化大语言模型text2sql架构。',
        '应用前沿多模态处理算法，协助前端高效处理多模态文件。'
      ]
    },
    {
      period: '2025.6 - 2025.9',
      company: '默升科技',
      position: 'AI 本地化部署工程师（实习）',
      icon: '/img/credo.png',
      details: [
        '设计RAG-LLM系统，提升Credo各部门业务效率。',
        '本地化部署Deepseek-r1模型，并构建多模型RAG系统提升搜索性能。',
        '设计并开发基于图的并行RAG系统，用于信息搜索。',
        '设计在线（价值网络训练）及离线（PPO强化学习）算法，收集用户反馈优化模型。'
      ]
    }
  ];

  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8 pl-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            实习经历
          </h2>
        </div>
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
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

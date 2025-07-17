export type Language = 'en' | 'zh';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'ai' | 'design';
}
export interface Translations {
  navigation: {
    home: string;
    about: string;
    skills: string;
    internships: string;
    projects: string;
    contact: string;
    languageToggle: string;
  };
  hero: {
    phrases: string[];
    label: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string;
    tabs: {
      story: string;
      journey: string;
      philosophy: string;
    };
    content: {
      story: { title: string; text: string; highlights: string[] };
      journey: { title: string; text: string; highlights: string[] };
      philosophy: { title: string; text: string; highlights: string[] };
    };
  };
  skills: {
    title: string;
    description: string;
    continuousLearning: {
      title: string;
      subtitle: string;
      tags: string[];
    };
  };
  internships: {
    title: string;
    experiences: Array<{
      period: string;
      company: string;
      position: string;
      icon: string;
      details: string[];
    }>;
  };
  projects: {
    title: string;
    description: string;
    categories: {
      all: string;
      web: string;
      mobile: string;
      ai: string;
      design: string;
    };
    buttons: { preview: string; code: string };
    modal: { techTitle: string; featuresTitle: string; close: string };
    items: ProjectItem[];
  };
  contact: {
    title: string;
    description: string;
    sendMessageTitle: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendButton: {
      sending: string;
      default: string;
    };
    contactMethodsTitle: string;
    togetherTitle: string;
    methods: {
      email: string;
      wechat: string;
      linkedIn: string;
      github: string;
    };
    successMessage: string;
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    navigation: {
      home: '首页',
      about: '关于',
      skills: '技能',
      internships: '实习经历',
      projects: '项目',
      contact: '联系',
      languageToggle: 'EN',
    },
    hero: {
      phrases: ['全栈开发者', '软件工程师', '技术创新者', 'AI探索者'],
      label: '我是一名',
      subtitle:
        '热衷于技术创新与产品开发，专注于构建高质量的软件解决方案。在全栈开发、人工智能和云计算领域有着丰富的实践经验。',
    },
    about: {
      title: '关于我',
      description: '了解我的背景、经验和对技术的热情',
      tabs: { story: '我的故事', journey: '技术历程', philosophy: '设计理念' },
      content: {
        story: {
          title: '人工智能算法探索者',
          text: '作为交叉专业的学生，我对人工智能算法有着浓厚兴趣。在校内自学多门AI课程，并辅修人工智能专业。在实习和科研中积累了丰富的实践经验，并成功发表CogSci 2025会议论文。',
          highlights: ['人工智能专业辅修', '自主学习AI课程', '实习与科研实践', 'CogSci 2025论文发表'],
        },
        journey: {
          title: '视觉与强化学习研究',
          text: '在科研中，我聚焦计算机视觉算法的感知偏差，设计并构建多种CNN和ViT架构。在强化学习领域，深入实践PPO与DQN，并探索MoE、Attention和MADDPG等前沿技术。',
          highlights: ['CNN与ViT架构设计', '感知偏差研究', 'PPO / DQN 实践', 'MoE、Attention 与 MADDPG'],
        },
        philosophy: {
          title: '跨学科融合与创新',
          text: '我坚信跨学科的深度融合能催生创新。将严谨科研方法与实践经验应用于算法设计，不断追求卓越，推动技术在实际场景中的落地与变革。',
          highlights: ['科研驱动的算法创新', '理论与实践结合', '前沿技术持续学习', '关注现实应用价值'],
        },
      },
    },
    skills: {
      title: '技能专长',
      description: '掌握的技术栈和工具，持续学习新技术以保持竞争力',
      continuousLearning: {
        title: '持续学习',
        subtitle:
          '技术日新月异，我始终保持学习的热情，关注最新的技术趋势和最佳实践。',
        tags: [
          '深度强化学习',
          '神经网络架构',
          '高性能计算',
          'CUDA 优化',
          '论文写作',
          '学术研究',
        ],
      },
    },
    internships: {
      title: '实习经历',
      experiences: [
        {
          period: '2023.7 - 2024.1',
          company: '中国科学院软件科学研究所',
          position: '自然语言处理实习生',
          icon: '/homepage/img/iscas.png',
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
          icon: '/homepage/img/novartis.png',
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
          icon: '/homepage/img/deloitte.png',
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
          icon: '/homepage/img/credo.png',
          details: [
            '设计RAG-LLM系统，提升Credo各部门业务效率。',
            '本地化部署Deepseek-r1模型，并构建多模型RAG系统提升搜索性能。',
            '设计并开发基于图的并行RAG系统，用于信息搜索。',
            '设计在线（价值网络训练）及离线（PPO强化学习）算法，收集用户反馈优化模型。'
          ]
        }
      ]
    },
    projects: {
      title: '精选项目',
      description: '展示我的技术能力和创新思维的代表性作品',
      categories: {
        all: '全部',
        web: 'Web 应用',
        mobile: '移动应用',
        ai: 'AI 项目',
        design: '设计作品',
      },
      buttons: { preview: '预览', code: '代码' },
      modal: { techTitle: '技术栈', featuresTitle: '主要功能', close: '✕' },
      items: [
        { id: '1', title: '基于深度强化学习的网络调度算法', description: '设计新型深度强化学习方法解决网络双边匹配问题，优化注意力机制适应约束网络优化需求。项目已发表SCI-1期刊论文，CCF-A会议论文在投。', image: '🧠', technologies: ['Python', 'PyTorch', 'Deep RL', 'CUDA', 'Network Optimization'], features: ['深度强化学习算法设计', '注意力机制优化', '分布式推理算法', '网络双边匹配', '约束优化求解'], githubUrl: 'https://github.com/SchumiDing', category: 'ai' },
        { id: '2', title: '连分网络架构探索', description: '基于连分式理论开发新型神经网络结构，构建高效CUDA和CPU算子，通过减少数据传输时间提升网络推理和更新效率。', image: '🔬', technologies: ['CUDA', 'C++', 'Python', 'Neural Architecture', 'Mathematical Theory'], features: ['CUDA/CPU算子优化', '连分式理论应用', '推理效率提升', '神经网络框架开发', '性能分析验证'], githubUrl: 'https://github.com/SchumiDing', category: 'ai' },
        { id: '3', title: '视觉算法在统计问题上的判断偏差研究', description: '研究卷积神经网络在预测散点图相关系数时的偏差，构建CNN预测人类决策行为的方法论框架。论文已发表于CogSci 2025(CCF-B)。', image: '📊', technologies: ['Python', 'TensorFlow', 'VGG-19', 'Statistical Analysis', 'Computer Vision'], features: ['CNN判断偏差分析', '人类行为预测建模', '散点图相关性预测', '认知科学研究', '方法论框架构建'], githubUrl: 'https://github.com/SchumiDing', category: 'ai' },
        { id: '4', title: '拾光驿站老年服务创业项目', description: '专注老年人故事收集与传播的创业项目，已成立上海拾光驿站老年服务有限公司，2024年全年利润率超50%，获得多个创业奖项。', image: '🎬', technologies: ['视频制作', '内容运营', '看板管理', '商业模式设计', '市场营销'], features: ['老人故事视频采集', '内容制作与优化', '看板管理系统', '商业模式创新', '20+老人采访完成'], liveUrl: 'https://example.com', category: 'design' },
        { id: '5', title: 'Credo AI Chat v0.1.0 – RAG-Powered Q&A with OCR & Database Control', description: 'Credo AI Chat 是一个本地优先的 RAG 系统，结合对话式 AI 引擎、文档摄取、OCR 识别与动态数据库管理，支持多模式问答与实时同步。', image: '🧠', technologies: ['Next.js', 'React', 'TypeScript', 'Python', 'Flask', 'Ollama', 'LangChain', 'Mineru', 'OpenCV'], features: ['双模式聊天：RAG 增强与纯 LLM 完成', '完整聊天历史保留循环', 'Markdown 渲染与代码高亮', '双向向量数据库：网站与 PDF', 'OCR 与 Markdown 自动转换', '前端动态数据库控制与同步', '可编辑系统提示与反馈日志', '流式响应与文件预览支持', 'Flask + Waitress 异步后端'], githubUrl: 'https://github.com/SchumiDing/Credo-AI', category: 'ai' }
      ],
    },
    contact: {
      title: '联系我',
      description: '有项目想法或合作机会？我很乐意与您交流讨论',
      sendMessageTitle: '发送消息',
      nameLabel: '姓名 *',
      emailLabel: '邮箱 *',
      subjectLabel: '主题 *',
      messageLabel: '消息 *',
      sendButton: {
        sending: '发送中...',
        default: '发送消息',
      },
      contactMethodsTitle: '联系方式',
      togetherTitle: '让我们一起创造',
      methods: {
        email: '邮箱',
        wechat: '微信',
        linkedIn: 'LinkedIn',
        github: 'GitHub',
      },
      successMessage: '消息发送成功！我会尽快回复您。',
    },
  },
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      internships: 'Internships',
      projects: 'Projects',
      contact: 'Contact',
      languageToggle: '中文',
    },
    hero: {
      phrases: ['Full Stack Developer', 'Software Engineer', 'Tech Innovator', 'AI Explorer'],
      label: 'I am a',
      subtitle:
        'Passionate about technology innovation and product development, focusing on building high-quality software solutions. Rich experience in full-stack development, AI, and cloud computing.',
    },
    about: {
      title: 'About Me',
      description: 'Learn about my background, experience, and passion for technology.',
      tabs: { story: 'My Story', journey: 'Tech Journey', philosophy: 'Design Philosophy' },
      content: {
        story: {
          title: 'AI Algorithm Explorer',
          text: 'As an interdisciplinary student, I have a strong interest in AI algorithms. I self-studied multiple AI courses at university and minored in Artificial Intelligence. I gained extensive practical experience during internships and research, and successfully published a paper at CogSci 2025.',
          highlights: ['Minored in AI', 'Self-studied AI courses', 'Internship & research experience', 'Published CogSci 2025 paper'],
        },
        journey: {
          title: 'Vision & Reinforcement Learning Research',
          text: 'In research, I focused on perception biases in computer vision algorithms, designing and building various CNN and ViT architectures. In reinforcement learning, I practiced PPO and DQN extensively and explored advanced techniques like MoE, Attention, and MADDPG.',
          highlights: ['Designed CNN & ViT architectures', 'Studied perception bias', 'Practiced PPO / DQN', 'Explored MoE, Attention & MADDPG'],
        },
        philosophy: {
          title: 'Interdisciplinary Innovation',
          text: 'I believe deep interdisciplinary integration fosters innovation. By applying rigorous research methods and practical experience to algorithm design, I continuously pursue excellence and drive technology implementation and transformation in real-world scenarios.',
          highlights: ['Research-driven innovation', 'Theory & practice integration', 'Continuous learning of cutting-edge tech', 'Focused on real-world value'],
        },
      },
    },
    skills: {
      title: 'Skills & Expertise',
      description: 'Technologies and tools I master, continuously learning new skills to stay competitive.',
      continuousLearning: {
        title: 'Continuous Learning',
        subtitle:
          'Technology evolves rapidly; I stay passionate about learning and following the latest trends and best practices.',
        tags: [
          'Deep Reinforcement Learning',
          'Neural Network Architectures',
          'High-Performance Computing',
          'CUDA Optimization',
          'Academic Writing',
          'Research',
        ],
      },
    },
    internships: {
      title: 'Internship Experience',
      experiences: [
        {
          period: '2023.7 - 2024.1',
          company: 'Institute of Software, Chinese Academy of Sciences',
          position: 'NLP Research Intern',
          icon: '/homepage/img/iscas.png',
          details: [
            'Customized and implemented AI language model for telemarketing based on ChatGLM, deployed models and developed APIs.',
            'Analyzed existing telemarketing dialogue data and designed NLP algorithms.',
            'Assisted in research work involving large language models.',
            'Developed website using Python-HTML-CSS-Javascript for LLM testing.'
          ]
        },
        {
          period: '2024.6 - 2024.8',
          company: 'Novartis China DDIT',
          position: 'Data Development Intern',
          icon: '/homepage/img/novartis.png',
          details: [
            'Developed custom file parsing algorithms in Python for migrating legacy database data to new AWS database.',
            'Analyzed QVLink-based database processing code, created architecture diagrams and proposed refactoring strategies.',
            'Tested data processing projects using Jenkins platform, analyzed and reported errors.'
          ]
        },
        {
          period: '2024.12 - 2025.3',
          company: 'Deloitte Consulting',
          position: 'AI Algorithm Intern',
          icon: '/homepage/img/deloitte.png',
          details: [
            'Tested and analyzed multi-agent query systems combining multimodal algorithms with open-source LLMs.',
            'Developed automated testing scripts for LLM text2sql and analyzed test data.',
            'Optimized LLM text2sql architecture based on prompts and existing designs.',
            'Applied cutting-edge multimodal processing algorithms to assist frontend with efficient file handling.'
          ]
        },
        {
          period: '2025.6 - 2025.9',
          company: 'Credo Technology',
          position: 'AI Localization Engineer Intern',
          icon: '/homepage/img/credo.png',
          details: [
            'Designed RAG-LLM system to improve efficiency across Credo departments.',
            'Locally deployed Deepseek-r1 model and built multi-model RAG system to enhance search performance.',
            'Designed and developed graph-based parallel RAG system for information retrieval.',
            'Designed online (value network training) and offline (PPO reinforcement learning) algorithms to optimize models based on user feedback.'
          ]
        }
      ]
    },
    projects: {
      title: 'Featured Projects',
      description: 'Showcase representative works demonstrating my technical skills and innovative thinking.',
      categories: {
        all: 'All',
        web: 'Web Apps',
        mobile: 'Mobile Apps',
        ai: 'AI Projects',
        design: 'Design Works',
      },
      buttons: { preview: 'Preview', code: 'Code' },
      modal: { techTitle: 'Technologies', featuresTitle: 'Key Features', close: 'Close' },
      items: [
        { id: '1', title: 'Network Scheduling Algorithm based on Deep Reinforcement Learning', description: 'Designed a novel deep reinforcement learning method to solve the network bilateral matching problem, optimizing attention mechanisms to meet constrained network optimization requirements. The project has been published in an SCI Q1 journal, and a CCF-A conference paper is under submission.', image: '🧠', technologies: ['Python', 'PyTorch', 'Deep RL', 'CUDA', 'Network Optimization'], features: ['Deep RL algorithm design', 'Attention mechanism optimization', 'Distributed inference algorithm', 'Network bilateral matching', 'Constrained optimization solving'], githubUrl: 'https://github.com/SchumiDing', category: 'ai' },
        { id: '2', title: 'Continued Fraction Network Architecture Exploration', description: 'Developed a novel neural network structure based on continued fraction theory, building efficient CUDA and CPU operators to improve network inference and update efficiency by reducing data transfer time.', image: '🔬', technologies: ['CUDA', 'C++', 'Python', 'Neural Architecture', 'Mathematical Theory'], features: ['CUDA/CPU operator optimization', 'Continued fraction theory application', 'Inference efficiency improvement', 'Neural network framework development', 'Performance analysis and validation'], githubUrl: 'https://github.com/SchumiDing', category: 'ai' },
        { id: '3', title: 'Study of Judgment Bias in Vision Algorithms on Statistical Problems', description: 'Investigated biases of convolutional neural networks when predicting correlation coefficients of scatter plots, building a methodological framework for CNN-based human decision behavior prediction. Paper published in CogSci 2025 (CCF-B).', image: '📊', technologies: ['Python', 'TensorFlow', 'VGG-19', 'Statistical Analysis', 'Computer Vision'], features: ['CNN bias analysis', 'Human behavior prediction modeling', 'Scatter plot correlation prediction', 'Cognitive science research', 'Methodology framework construction'], githubUrl: 'https://github.com/SchumiDing', category: 'ai' },
        { id: '4', title: 'Shiguang Station Elderly Service Startup Project', description: 'An entrepreneurial project focusing on collecting and sharing elderly stories, established Shanghai Shiguang Station Elderly Service Co., Ltd., with an annual profit margin of over 50% in 2024, and received multiple entrepreneurship awards.', image: '🎬', technologies: ['Video Production', 'Content Operation', 'Kanban Management', 'Business Model Design', 'Marketing'], features: ['Elder story video collection', 'Content creation and optimization', 'Kanban management system', 'Business model innovation', '20+ elderly interviews completed'], liveUrl: 'https://example.com', category: 'design' },
        { id: '5', title: 'Credo AI Chat v0.1.0 – RAG-Powered Q&A with OCR & Database Control', description: 'Credo AI Chat is a locally-first RAG system combining a conversational AI engine, document ingestion, OCR recognition, and dynamic database management, supporting multi-modal Q&A and real-time synchronization.', image: '🧠', technologies: ['Next.js', 'React', 'TypeScript', 'Python', 'Flask', 'Ollama', 'LangChain', 'Mineru', 'OpenCV'], features: ['Dual-mode chat: RAG-enhanced and pure LLM completion', 'Complete chat history loop retention', 'Markdown rendering and code highlighting', 'Bidirectional vector database: website and PDF', 'OCR and Markdown auto-conversion', 'Frontend dynamic database control and synchronization', 'Editable system prompts and feedback logs', 'Streaming responses and file preview support', 'Asynchronous backend with Flask + Waitress'], githubUrl: 'https://github.com/SchumiDing/Credo-AI', category: 'ai' }
      ],
    },
    contact: {
      title: 'Contact Me',
      description: 'Got project ideas or collaboration opportunities? I’d love to discuss them.',
      sendMessageTitle: 'Send Message',
      nameLabel: 'Name *',
      emailLabel: 'Email *',
      subjectLabel: 'Subject *',
      messageLabel: 'Message *',
      sendButton: { sending: 'Sending...', default: 'Send Message' },
      contactMethodsTitle: 'Contact Methods',
      togetherTitle: "Let's Create Together",
      methods: { email: 'Email', wechat: 'WeChat', linkedIn: 'LinkedIn', github: 'GitHub' },
      successMessage: 'Message sent successfully! I will get back to you soon.',
    },
  },
};
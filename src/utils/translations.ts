export type Language = 'en' | 'zh';

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
"use client";
import { useState } from "react";
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "web" | "mobile" | "ai" | "design";
}
export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects: Project[] = [
    {
      id: "1",
      title: "基于深度强化学习的网络调度算法",
      description:
        "设计新型深度强化学习方法解决网络双边匹配问题，优化注意力机制适应约束网络优化需求。项目已发表SCI-1期刊论文，CCF-A会议论文在投。",
      image: "🧠",
      technologies: [
        "Python",
        "PyTorch",
        "Deep RL",
        "CUDA",
        "Network Optimization",
      ],
      features: [
        "深度强化学习算法设计",
        "注意力机制优化",
        "分布式推理算法",
        "网络双边匹配",
        "约束优化求解",
      ],
      githubUrl: "https://github.com/SchumiDing",
      category: "ai",
    },
    {
      id: "2",
      title: "连分网络架构探索",
      description:
        "基于连分式理论开发新型神经网络结构，构建高效CUDA和CPU算子，通过减少数据传输时间提升网络推理和更新效率。",
      image: "🔬",
      technologies: [
        "CUDA",
        "C++",
        "Python",
        "Neural Architecture",
        "Mathematical Theory",
      ],
      features: [
        "CUDA/CPU算子优化",
        "连分式理论应用",
        "推理效率提升",
        "神经网络框架开发",
        "性能分析验证",
      ],
      githubUrl: "https://github.com/SchumiDing",
      category: "ai",
    },
    {
      id: "3",
      title: "视觉算法在统计问题上的判断偏差研究",
      description:
        "研究卷积神经网络在预测散点图相关系数时的偏差，构建CNN预测人类决策行为的方法论框架。论文已发表于CogSci 2025(CCF-B)。",
      image: "📊",
      technologies: [
        "Python",
        "TensorFlow",
        "VGG-19",
        "Statistical Analysis",
        "Computer Vision",
      ],
      features: [
        "CNN判断偏差分析",
        "人类行为预测建模",
        "散点图相关性预测",
        "认知科学研究",
        "方法论框架构建",
      ],
      githubUrl: "https://github.com/SchumiDing",
      category: "ai",
    },
    {
      id: "4",
      title: "拾光驿站老年服务创业项目",
      description:
        "专注老年人故事收集与传播的创业项目，已成立上海拾光驿站老年服务有限公司，2024年全年利润率超50%，获得多个创业奖项。",
      image: "🎬",
      technologies: [
        "视频制作",
        "内容运营",
        "看板管理",
        "商业模式设计",
        "市场营销",
      ],
      features: [
        "老人故事视频采集",
        "内容制作与优化",
        "看板管理系统",
        "商业模式创新",
        "20+老人采访完成",
      ],
      liveUrl: "https://example.com",
      category: "design",
    },
    {
      id: "5",
      title: "Credo AI Chat v0.1.0 – RAG-Powered Q&A with OCR & Database Control",
      description:
        "Credo AI Chat 是一个本地优先的 RAG 系统，结合对话式 AI 引擎、文档摄取、OCR 识别与动态数据库管理，支持多模式问答与实时同步。",
      image: "🧠",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "Flask",
        "Ollama",
        "LangChain",
        "Mineru",
        "OpenCV",
      ],
      features: [
        "双模式聊天：RAG 增强与纯 LLM 完成",
        "完整聊天历史保留循环",
        "Markdown 渲染与代码高亮",
        "双向向量数据库：网站与 PDF",
        "OCR 与 Markdown 自动转换",
        "前端动态数据库控制与同步",
        "可编辑系统提示与反馈日志",
        "流式响应与文件预览支持",
        "Flask + Waitress 异步后端",
      ],
      githubUrl: "https://github.com/SchumiDing/Credo-AI",
      category: "ai",
    },
  ];
  const categories = [
    { id: "all", name: "全部", icon: "🌟" },
    { id: "web", name: "Web应用", icon: "🌐" },
    { id: "mobile", name: "移动应用", icon: "📱" },
    { id: "ai", name: "AI项目", icon: "🤖" },
    { id: "design", name: "设计作品", icon: "🎨" },
  ];
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      {" "}
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Section title */}{" "}
        <div className="text-center mb-16">
          {" "}
          <h2 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {" "}
            精选项目{" "}
          </h2>{" "}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {" "}
            展示我的技术能力和创新思维的代表性作品{" "}
          </p>{" "}
        </div>{" "}
        {/* Filter buttons */}{" "}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {" "}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeFilter === category.id ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"}`}
            >
              {" "}
              <span className="mr-2">{category.icon}</span> {category.name}{" "}
            </button>
          ))}{" "}
        </div>{" "}
        {/* Projects grid */}{" "}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {" "}
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {" "}
              {/* Project image placeholder */}{" "}
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center text-6xl">
                {" "}
                {project.image}{" "}
              </div>{" "}
              <div className="p-6">
                {" "}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {" "}
                  {project.title}{" "}
                </h3>{" "}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {" "}
                  {project.description}{" "}
                </p>{" "}
                {/* Technologies */}{" "}
                <div className="flex flex-wrap gap-2 mb-4">
                  {" "}
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                    >
                      {" "}
                      {tech}{" "}
                    </span>
                  ))}{" "}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                      {" "}
                      +{project.technologies.length - 3}{" "}
                    </span>
                  )}{" "}
                </div>{" "}
                {/* Action buttons */}{" "}
                <div className="flex gap-2">
                  {" "}
                  {project.liveUrl && (
                    <button className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                      {" "}
                      预览{" "}
                    </button>
                  )}{" "}
                  {project.githubUrl && (
                    <button className="flex-1 px-3 py-2 border border-purple-500 text-purple-400 text-sm rounded-lg hover:bg-purple-500/10 transition-all">
                      {" "}
                      代码{" "}
                    </button>
                  )}{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* Project modal */}{" "}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            {" "}
            <div className="bg-gray-900 border border-white/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {" "}
              <div className="p-6">
                {" "}
                <div className="flex justify-between items-start mb-4">
                  {" "}
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>{" "}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    {" "}
                    ✕{" "}
                  </button>{" "}
                </div>{" "}
                <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-6 flex items-center justify-center text-8xl">
                  {" "}
                  {selectedProject.image}{" "}
                </div>{" "}
                <p className="text-gray-300 mb-6">
                  {selectedProject.description}
                </p>{" "}
                <div className="grid md:grid-cols-2 gap-6">
                  {" "}
                  <div>
                    {" "}
                    <h4 className="text-lg font-semibold text-white mb-3">
                      技术栈
                    </h4>{" "}
                    <div className="flex flex-wrap gap-2">
                      {" "}
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full"
                        >
                          {" "}
                          {tech}{" "}
                        </span>
                      ))}{" "}
                    </div>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-lg font-semibold text-white mb-3">
                      主要功能
                    </h4>{" "}
                    <ul className="space-y-2">
                      {" "}
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-300 text-sm"
                        >
                          {" "}
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>{" "}
                          {feature}{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-3 mt-6">
                  {" "}
                  {selectedProject.liveUrl && (
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                      {" "}
                      查看项目{" "}
                    </button>
                  )}{" "}
                  {selectedProject.githubUrl && (
                    <button className="px-6 py-3 border border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500/10 transition-all">
                      {" "}
                      查看代码{" "}
                    </button>
                  )}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </section>
  );
};

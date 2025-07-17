"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
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
  const { t } = useLanguage();
  const allProjects: Project[] = t.projects.items;

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  const categories = [
    { id: "all", name: t.projects.categories.all, icon: "🌟" },
    { id: "web", name: t.projects.categories.web, icon: "🌐" },
    { id: "mobile", name: t.projects.categories.mobile, icon: "📱" },
    { id: "ai", name: t.projects.categories.ai, icon: "🤖" },
    { id: "design", name: t.projects.categories.design, icon: "🎨" },
  ];

  useEffect(() => {
    console.log("Projects component mounted");
    console.log("Translations:", t);
    console.log("Projects data:", t.projects.items);
    console.log("Active filter:", activeFilter);
    console.log("Filtered projects:", filteredProjects);
  }, [t, activeFilter, filteredProjects]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      {" "}
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Section title */}{" "}
        <div className="text-center mb-16">
          {" "}
          <h2 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {t.projects.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.projects.description}
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

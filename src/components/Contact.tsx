'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const contactMethods = [
    { icon: '📧', title: t.contact.methods.email, value: 'dingry@outlook.com', link: 'mailto:dingry@outlook.com' },
    { icon: '📱', title: t.contact.methods.wechat, value: 'Schumi', link: '#' },
    { icon: '💼', title: t.contact.methods.linkedIn, value: '/in/ruiyi-ding', link: 'https://linkedin.com' },
    { icon: '🐙', title: t.contact.methods.github, value: '@SchumiDing', link: 'https://github.com/SchumiDing' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
        <div className="bg-gradient-to-br from-pink-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">{t.contact.sendMessageTitle}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder={t.contact.nameLabel}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder={t.contact.emailLabel}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {t.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder={t.contact.subjectLabel}
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder={t.contact.messageLabel}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-pink-400 to-blue-400 text-black font-semibold rounded-lg hover:from-pink-500 hover:to-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.contact.sendButton.sending}
                  </span>
                ) : (
                  t.contact.sendButton.default
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                  {/* TODO: add translation key for success message */}
                  消息发送成功！我会尽快回复您。
                </div>
              )}
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
          <div className="bg-gradient-to-br from-pink-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t.contact.contactMethodsTitle}</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="text-2xl">{method.icon}</div>
                    <div>
                      <div className="text-gray-400 text-sm">{method.title}</div>
                      <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">{t.contact.togetherTitle}</h3>
              <p className="text-gray-300 mb-6">
                无论是创新的产品想法、技术挑战，还是科研邀请，
                我都很乐意与您合作，将想法转化为现实。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  24小时内回复
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  项目沟通
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-white border border-blue-400 rounded-full mr-3"></span>
                  长期科研合作
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2024 SCHUMIDING. 用 ❤️ 和 ☕ 创造于地球
          </p>
        </div>
      </div>
    </section>
  );
};

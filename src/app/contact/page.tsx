'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Square2StackIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'call' | 'email'>('email');
  const [showToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };


  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-yellow-200 px-6 lg:px-32 pt-10 pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold text-gray-900 leading-none mb-6">
            Contact
          </h1>
          <div className="space-y-2">
            <p className="text-gray-600 text-lg">bqacos@gmail.com</p>
            <p className="text-gray-600 text-lg">+1 (402) 769-5766</p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="bg-white px-6 lg:px-32 py-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Tabs */}
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('email')}
                className={`px-3 py-3 rounded-lg font-['Plus_Jakarta_Sans',_sans-serif] text-base transition-colors ${
                  activeTab === 'email'
                    ? 'bg-[rgba(222,207,213,0.88)] text-[#63082b] font-semibold'
                    : 'bg-[rgba(222,207,213,0.2)] text-[#63082b] font-normal'
                }`}
              >
                Send an Email
              </button>
              <button
                onClick={() => setActiveTab('call')}
                className={`px-3 py-3 rounded-lg font-['Plus_Jakarta_Sans',_sans-serif] text-base transition-colors ${
                  activeTab === 'call'
                    ? 'bg-[rgba(222,207,213,0.88)] text-[#63082b] font-semibold'
                    : 'bg-[rgba(222,207,213,0.2)] text-[#63082b] font-normal'
                }`}
              >
                Schedule a Call
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'call' ? (
              <div className="mt-6">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/bailey-costello/15min" 
                  style={{minWidth: '320px', height: '700px'}}
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Mobile Form Layout */}
                <div className="lg:hidden space-y-6">
                  <div className="space-y-1">
                    <label className="block text-base text-black font-['Plus_Jakarta_Sans',_sans-serif]">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#f1f3f5] rounded-lg text-base text-gray-500 placeholder-gray-500"
                      placeholder="Name"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="block text-base text-black font-['Plus_Jakarta_Sans',_sans-serif]">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#f1f3f5] rounded-lg text-base text-gray-500 placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="block text-base text-black font-['Plus_Jakarta_Sans',_sans-serif]">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#f1f3f5] rounded-lg text-base text-gray-500 placeholder-gray-500"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="block text-base text-black font-['Plus_Jakarta_Sans',_sans-serif]">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#f1f3f5] rounded-lg text-base text-gray-500 placeholder-gray-500 resize-none"
                      placeholder="Tell me about your project"
                    />
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <button
                      type="submit"
                      className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-800 transition-colors shrink-0"
                    >
                      Send
                    </button>
                    <p className="text-sm text-gray-500 font-['Plus_Jakarta_Sans',_sans-serif]">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Desktop Form Layout */}
                <div className="hidden lg:block">
                  <div className="flex gap-10">
                    <div className="flex-1 space-y-6">
                      <div className="space-y-1">
                        <label className="block text-base text-black font-['Plus_Jakarta_Sans',_sans-serif]">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#f1f3f5] rounded-lg text-base text-gray-500 placeholder-gray-500"
                          placeholder="Name"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="block text-base text-black font-['Plus_Jakarta_Sans',_sans-serif]">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#f1f3f5] rounded-lg text-base text-gray-500 placeholder-gray-500"
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="block text-base text-black font-['Plus_Jakarta_Sans',_sans-serif]">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#f1f3f5] rounded-lg text-base text-gray-500 placeholder-gray-500"
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <label className="block text-base text-black font-['Plus_Jakarta_Sans',_sans-serif]">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-[#f1f3f5] rounded-lg text-base text-gray-500 placeholder-gray-500 resize-none"
                          placeholder="Tell me about your project"
                        />
                      </div>
                      
                      <div className="flex gap-4 items-center mt-6">
                        <button
                          type="submit"
                          className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-800 transition-colors shrink-0"
                        >
                          Send
                        </button>
                        <p className="text-sm text-gray-500 font-['Plus_Jakarta_Sans',_sans-serif]">
                          I typically respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>



      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg z-50"
        >
          <div className="flex items-center gap-2">
            <Square2StackIcon className="w-5 h-5" />
            <span className="font-medium">Copied to Clipboard</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

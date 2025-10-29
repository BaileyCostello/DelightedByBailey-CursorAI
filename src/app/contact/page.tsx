'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Square2StackIcon } from '@heroicons/react/24/outline';

export default function Contact() {
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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-yellow-200 px-6 lg:px-32 pt-[216px] lg:pt-[216px] pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold text-gray-900 leading-none mb-6">
            Contact
          </h1>
          <div className="space-y-2">
            <p className="text-pink-700 text-base">bqacos@gmail.com</p>
            <p className="text-pink-700 text-base">+1 (402) 769-5766</p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="bg-white px-6 lg:px-32 py-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Email Form */}
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

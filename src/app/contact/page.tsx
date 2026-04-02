'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import { Square2StackIcon } from '@heroicons/react/24/outline';
import TabButton from '@/components/TabButton';

type ContactTab = 'schedule' | 'email';

const EMAIL_SUBJECT = 'DELIGHTED BY BAILEY New Message';

export default function Contact() {
  const [showToast] = useState(false);
  const [activeTab, setActiveTab] = useState<ContactTab>('schedule');
  const [showFallbackMessage, setShowFallbackMessage] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
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
    const payload = {
      email: formData.email,
      message: formData.message,
      subject: EMAIL_SUBJECT,
    };
    // Handle form submission here (e.g. API route) — subject is always standardized
    console.log('Form submitted:', payload);
  };

  useEffect(() => {
    if (activeTab !== 'schedule') {
      setShowFallbackMessage(false);
      return;
    }
    setShowFallbackMessage(false);
    const t = window.setTimeout(() => setShowFallbackMessage(true), 2000);
    return () => window.clearTimeout(t);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Script id="koalendar-queue" strategy="afterInteractive">
        {`window.Koalendar=window.Koalendar||function(){(Koalendar.props=Koalendar.props||[]).push(arguments)};`}
      </Script>
      <Script
        src="https://koalendar.com/assets/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          const w = window as Window & { Koalendar?: (type: string, opts: { url: string; selector: string }) => void };
          w.Koalendar?.('inline', {
            url: 'https://koalendar.com/e/meet-with-bailey-4',
            selector: '#inline-widget-meet-with-bailey-4',
          });
        }}
      />

      {/* Page Header */}
      <section className="bg-white px-6 lg:px-32 pt-[216px] lg:pt-[216px] pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold text-gray-900 leading-none mb-8">Contact</h1>

          <div className="flex flex-wrap gap-3">
            <TabButton selected={activeTab === 'schedule'} onClick={() => setActiveTab('schedule')}>
              Schedule a Call
            </TabButton>
            <TabButton selected={activeTab === 'email'} onClick={() => setActiveTab('email')}>
              Send an Email
            </TabButton>
          </div>
        </div>
      </section>

      {/* Contact Forms / Calendar */}
      <section className="bg-white px-6 lg:px-32 py-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className={activeTab === 'schedule' ? 'block' : 'hidden'}>
              <div className="relative isolate w-full min-h-[420px]">
                {/* Spinner: z-[5] — above fallback (z-0), below calendar (z-10) */}
                {!showFallbackMessage && (
                  <div
                    className="absolute inset-0 z-[5] flex items-start justify-center pt-16 pointer-events-none"
                    aria-busy="true"
                  >
                    <div
                      className="h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-gray-600"
                      role="status"
                      aria-label="Loading calendar"
                    />
                  </div>
                )}
                {/* After 2s: fades in if embed still hasn’t covered this layer */}
                <AnimatePresence>
                  {showFallbackMessage && (
                    <motion.div
                      key="calendar-fallback"
                      className="absolute inset-0 z-0 flex items-start justify-center pt-6 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="pointer-events-auto flex max-w-[calc(100%-24px)] flex-col items-center rounded-[24px] bg-gray-100 px-[124px] py-[40px] text-center text-base text-gray-600 max-sm:px-6">
                        <span className="material-symbols-outlined mb-3 text-4xl" aria-hidden>
                          falling
                        </span>
                        <p>Calendar failed to load, please refresh the page.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div
                  id="inline-widget-meet-with-bailey-4"
                  className="relative z-10 min-h-[420px] w-full"
                />
              </div>
            </div>

            <div className={activeTab === 'email' ? 'block' : 'hidden'}>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="space-y-1 w-full lg:col-span-4">
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

                <div className="space-y-1 w-full lg:col-span-12">
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
                    placeholder="Tell me about your UX role, freelance project, or just say hi!"
                  />
                </div>

                <div className="flex gap-4 items-center lg:col-span-12">
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
              </form>
            </div>
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

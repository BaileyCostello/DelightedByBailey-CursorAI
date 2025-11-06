'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CDGMaintenanceCaseStudy() {
  const [activeTab, setActiveTab] = useState<'audience' | 'personas' | 'userflow' | 'wireframes'>('audience');
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAssets, setLoadedAssets] = useState(0);
  const totalAssets = 17; // Total number of heavy assets

  useEffect(() => {
    const preloadAssets = async () => {
      const assetUrls = [
        '/CDG-Movie.mp4',
        '/CDG-Before-Movie.mp4',
        '/Double Diamond Approach.png',
        '/Audience Analysis Questions 1-3.png',
        '/Audience Analysis Questions 4-6.png',
        '/30 - Persona_Clerk.png',
        '/30 - Persona_Tech.png',
        '/CDG User Flow.png',
        '/CDG Wireframes.png',
        '/CDG DistributionLine.mp4',
        '/CDG On-site Computer.png',
        '/CDG Usability Testing.JPG',
        '/CDG Usability Testing Image.png',
        '/CDG Solution Mockup 1.png',
        '/CDG Solution Mockup 2.png',
        '/CDG Solution Mockup 3.png',
        '/CDG Login Held.png'
      ];

      const loadAsset = (url: string) => {
        return new Promise((resolve) => {
          if (url.endsWith('.mp4')) {
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.onloadedmetadata = () => {
              setLoadedAssets(prev => prev + 1);
              resolve(true);
            };
            video.onerror = () => {
              setLoadedAssets(prev => prev + 1);
              resolve(true);
            };
            video.src = url;
          } else {
            const img = new Image();
            img.onload = () => {
              setLoadedAssets(prev => prev + 1);
              resolve(true);
            };
            img.onerror = () => {
              setLoadedAssets(prev => prev + 1);
              resolve(true);
            };
            img.src = url;
          }
        });
      };

      // Load all assets in parallel
      await Promise.all(assetUrls.map(loadAsset));
      
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    preloadAssets();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin mx-auto mb-4"></div>
            <div className="text-sm text-gray-600">
              Loading assets...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-[#f1f3f5] pt-[216px] lg:pt-[216px] pb-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6">
              Driving Operations Most Valued Metric - Efficiency
            </h1>
            <p className="text-sm text-[#a40047] font-normal leading-6 mb-6">
              Maintenance Management App, CMMS Data Group
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[rgba(222,207,213,0.88)] text-[#63082b] px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[14px] text-nowrap whitespace-pre">Technical</span>
              <span className="bg-[rgba(222,207,213,0.88)] text-[#63082b] px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[14px] text-nowrap whitespace-pre">UX Design</span>
              <span className="bg-[rgba(222,207,213,0.88)] text-[#63082b] px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[14px] text-nowrap whitespace-pre">Research</span>
              <span className="bg-[rgba(222,207,213,0.88)] text-[#63082b] px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[14px] text-nowrap whitespace-pre">Team Management</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After Images */}
      <section className="pt-0 pb-16 bg-[#f1f3f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Before Video */}
            <div className="flex flex-col items-center">
              {/* Mobile Layout */}
              <div className="lg:hidden w-full mb-4">
                <div className="rounded-[16px] border-[12px] border-gray-800 shadow-lg overflow-hidden">
                  <div style={{ padding: '42% 0%', overflow: 'hidden' }}>
                    <video
                      className="rounded-[16px] w-full h-auto"
                      style={{ 
                        width: '100%',
                        height: 'auto',
                        transform: 'scale(2.5)',
                        transformOrigin: 'center',
                        display: 'block'
                      }}
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/CDG-Before-Movie.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              {/* Desktop Layout */}
              <div className="hidden lg:block relative overflow-visible flex items-center justify-center mb-4" style={{ width: '428.72px', minWidth: '428.72px', maxWidth: '428.72px', height: '600px' }}>
                <video
                  className="w-full h-full object-cover object-center rounded-[32px] shadow-lg border-[20px] border-gray-800"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/CDG-Before-Movie.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-gray-500 text-center">
                <span className="font-bold">Before:</span> A blank canvas, created by a single developer <br />
              </p>
            </div>
            {/* After Video */}
            <div className="flex flex-col items-center">
              {/* Mobile Layout */}
              <div className="lg:hidden w-full mb-4">
                <div className="rounded-[16px] border-[12px] border-gray-800 shadow-lg overflow-hidden">
                  <div style={{ padding: '42% 0%', overflow: 'hidden' }}>
                    <video
                      className="rounded-[16px] w-full h-auto"
                      style={{ 
                        width: '100%',
                        height: 'auto',
                        transform: 'scale(2.5)',
                        transformOrigin: 'center',
                        display: 'block'
                      }}
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/CDG-Movie.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              {/* Desktop Layout */}
              <div className="hidden lg:block relative overflow-visible flex items-center justify-center mb-4" style={{ width: '428.72px', minWidth: '428.72px', maxWidth: '428.72px', height: '600px' }}>
                <video
                  className="w-full h-full object-cover object-center rounded-[32px] shadow-lg border-[20px] border-gray-800"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/CDG-Movie.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-gray-500 text-center">
                <span className="font-bold">After:</span> A simple app that conforms neatly into technicians workflows, saves time, and improves response rates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#a40047] text-lg mb-4">Overview</p>
              <p className="text-[#2c3441] text-lg leading-relaxed">
                My client&apos;s SaaS solution for managing maintenance team&apos;s work was second to none for their feature-rich desktop app, but they consistently lost deals to buyers reliant on the complimentary mobile app for technicians.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-[#a40047] text-lg mb-4">Goals</p>
              <div className="space-y-4 text-[#2c3441] text-lg leading-relaxed">
                <p>
                  <span className="font-bold">Convert sales and build trust in buyers</span> who didn&apos;t trust the mobile app&apos;s quality or usability
                </p>
                <p>
                  <span className="font-bold">Increase adoption</span> so that maintenance teams can leverage the timesaving, efficient workflow that the mobile app enabled
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role Highlights Section */}
      <section className="py-20 bg-[#e8d7c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-[#2c3441] text-lg mb-2">Role</p>
              <p className="text-[#2c3441]">Lead UX Designer</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-[#2c3441] text-lg mb-2">Tools</p>
              <p className="text-[#2c3441]">Figma, JIRA</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-[#2c3441] text-lg mb-2">Team</p>
              <div className="text-[#2c3441]">
                <p>3 UX Designers,</p>
                <p>1 Business Analyst</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-[#2c3441] text-lg mb-2">Timeline</p>
              <p className="text-[#2c3441]">4 months</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Double Diamond Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#decfd5] text-lg mb-8 mb-14">Project Phases</p>
            <div className="relative max-w-6xl mx-auto">
              <img 
                src="/Double Diamond Approach.png" 
                alt="Double Diamond Approach - Project Phases"
                className="w-full h-auto rounded-lg shadow-lg scale-150"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Discovery Workshops Section */}
      <section className="lg:h-screen bg-white pt-14 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-[#a40047] text-lg mb-4">Discovery Workshops</p>
                <p className="text-[#2c3441] text-lg mb-8">
                  I designed probing, structured conversations to effectively steer group discussions.
                </p>
              </div>
              <div>
                {/* Empty right column */}
              </div>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveTab('audience')}
                className={`px-3 py-3 rounded-lg font-['Plus_Jakarta_Sans',_sans-serif] text-base transition-colors ${
                  activeTab === 'audience'
                    ? 'bg-[rgba(222,207,213,0.88)] text-[#63082b] font-semibold'
                    : 'bg-[rgba(222,207,213,0.2)] text-[#63082b] font-normal'
                }`}
              >
                Audience Analysis
              </button>
              <button
                onClick={() => setActiveTab('personas')}
                className={`px-3 py-3 rounded-lg font-['Plus_Jakarta_Sans',_sans-serif] text-base transition-colors ${
                  activeTab === 'personas'
                    ? 'bg-[rgba(222,207,213,0.88)] text-[#63082b] font-semibold'
                    : 'bg-[rgba(222,207,213,0.2)] text-[#63082b] font-normal'
                }`}
              >
                Personas
              </button>
              <button
                onClick={() => setActiveTab('userflow')}
                className={`px-3 py-3 rounded-lg font-['Plus_Jakarta_Sans',_sans-serif] text-base transition-colors ${
                  activeTab === 'userflow'
                    ? 'bg-[rgba(222,207,213,0.88)] text-[#63082b] font-semibold'
                    : 'bg-[rgba(222,207,213,0.2)] text-[#63082b] font-normal'
                }`}
              >
                User Flow
              </button>
              <button
                onClick={() => setActiveTab('wireframes')}
                className={`px-3 py-3 rounded-lg font-['Plus_Jakarta_Sans',_sans-serif] text-base transition-colors ${
                  activeTab === 'wireframes'
                    ? 'bg-[rgba(222,207,213,0.88)] text-[#63082b] font-semibold'
                    : 'bg-[rgba(222,207,213,0.2)] text-[#63082b] font-normal'
                }`}
              >
                Wireframes
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'audience' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  We asked 6, high level &quot;right questions&quot; to:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4 p-4 rounded-2xl">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-900 font-normal">Identify the primary users of the app</p>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-2xl">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-900 font-normal">Understand usage, needs, and pain points</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-base text-gray-500 leading-relaxed">
                    &quot;Right questions are thought-provoking. They are rarely simple or easy to answer. They have many sides that need to be surfaced, and typically lead to more questions to expand on ideas.&quot;
                  </p>
                  <p className="text-base text-gray-500 mt-2">
                    - <a href="https://medium.com/@jenbluntly/how-to-start-asking-the-right-questions-bf865ce4ca75#:~:text=Right%20questions%20are%20thought%2Dprovoking,questions%20to%20expand%20on%20ideas." className="text-gray-500 hover:text-gray-700">Jennifer Blunt</a>
                  </p>
                </div>
              </div>

              <div className="relative h-[434px] w-[591px]">
                <div className="absolute bg-white h-[343px] left-0 overflow-hidden rounded-lg shadow-lg top-0 w-[567px]">
                  <img
                    src="/Audience Analysis Questions 1-3.png"
                    alt="Audience Analysis Questions 1-3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bg-white h-[343px] left-[86px] overflow-hidden rounded-lg shadow-lg top-[90px] w-[567px]">
                  <img
                    src="/Audience Analysis Questions 4-6.png"
                    alt="Audience Analysis Questions 4-6"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'personas' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Next, we used personas to dig into our primary users, <span className="font-bold">old-school technicians</span>:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4 p-4 rounded-2xl">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-900 font-normal">Not tech-savvy and easily frustrated by tech</p>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-2xl">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-900 font-normal">On-the-go environment, carrying a cart of tools and a small tablet</p>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-2xl">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-900 font-normal">Poor usability meant low team adoption, resulting in disorganization</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] w-[580px]">
                <div className="absolute h-[400px] left-0 top-0 w-[480px]">
                  <img
                    src="/30 - Persona_Clerk.png"
                    alt="Persona - Clerk"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-[-1px] h-[390px] right-[-1px] w-[480px]">
                  <img
                    src="/30 - Persona_Tech.png"
                    alt="Persona - Tech"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'userflow' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-6 w-[596px]">
                <p className="text-lg text-gray-700 mb-6">
                  With <span className="font-semibold">90% of technician&apos;s tasks being performed outside of the app</span>, I mapped out multiple workflows to help us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4 p-4 rounded-2xl">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-900 font-normal">Architect the app around their processes</p>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-2xl">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-900 font-normal">Explore scenarios and fill in missing details</p>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-2xl">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-900 font-normal">Identify the most critical and painful points in their workflow</p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 w-full h-full -z-10" style={{ top: '144px' }}>
                <img
                  src="/CDG User Flow.png"
                  alt="CDG User Flow"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'wireframes' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Used as a discussion tool to:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4 p-4 rounded-2xl">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-900 font-normal">Build mutual understanding of concepts</p>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-2xl">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-900 font-normal">Experiment with ideas</p>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-2xl">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-yellow-900 font-normal">Quickly shape the bones of the app</p>
                  </div>
                </div>
              </div>

              <div className="relative w-[150%] overflow-hidden">
                <img
                  src="/CDG Wireframes.png"
                  alt="CDG Wireframes"
                  className="h-auto"
                  style={{ 
                    width: '1000px',
                    marginLeft: '0px'
                  }}
                />
          </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* On-site & Usability Testing Section */}
      <section className="pt-64 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#a40047] text-lg mb-4">On-site & Usability Testing</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:max-w-2xl">
                I was invited to one of the most efficient operations in the country
              </h2>
              <p className="text-lg text-[#2c3441] max-w-2xl">
                An American Eagle distribution center, boasting 97.3% efficiency and our client&apos;s biggest champion of the app.
              </p>
              <p className="text-lg text-[#2c3441] mt-4 max-w-2xl">
                Previously unplanned, I organized our team to take full advantage of meeting the technicians and performed moderated usability testing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 self-start"
            >
              {/* Top row - two images side by side */}
              <div className="aspect-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                >
                  <source src="/CDG DistributionLine.mp4" type="video/mp4" />
                </video>
                    </div>
              <div className="aspect-video">
                <img 
                  src="/CDG On-site Computer.png" 
                  alt="On-site computer setup"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                    </div>
              
              {/* Bottom row - single image spanning full width */}
              <div className="col-span-2">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="/CDG Usability Testing.JPG" 
                    alt="Usability testing session with technicians"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* On-site & Usability Testing Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#a40047] text-lg mb-4">On-site & Usability Testing</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                4 of 5 technicians completed the principle workflow with little to no help
              </h2>
              <p className="text-lg text-[#2c3441] max-w-2xl">
                Keeping consistent terminology helped technicians adjust to the changes, and they loved the added flexibility to jump between steps. We left confident in the core solution and made incremental improvements for finding high traffic options.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="self-start"
            >
              <img 
                src="/CDG Usability Testing Image.png" 
                alt="Usability testing results and interface"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-pink-700 text-lg mb-4">Solution</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src="/CDG Solution Mockup 1.png" 
                alt="CDG Solution Mockup 1"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-gray-600" style={{ padding: '0% 8%', marginBottom: '48px' }}>Gamify completed work to engage and motivate teams</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="/CDG Solution Mockup 2.png" 
                alt="CDG Solution Mockup 2"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-gray-600" style={{ padding: '0% 8%', marginBottom: '48px' }}>Large buttons and inputs for technicians often wearing gloves</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                src="/CDG Solution Mockup 3.png" 
                alt="CDG Solution Mockup 3"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-gray-600" style={{ padding: '0% 8%', marginBottom: '48px' }}>Offline mode and timers for warehouses with limited connectivity</p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Outcomes Section */}
      <section className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#a40047] text-lg mb-6">Outcomes</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Existing customers expressed excitement, and prospective buyers viewed the updates as a clear competitive advantage
              </h2>
              <div className="space-y-6 text-lg text-[#2c3441]">
                <p>
                  The project was delivered on time and under budget, which created room for usability testing. While development is still underway, the testing brought confidence to the solution&apos;s effectiveness and projected outcomes:
                </p>
                <ul className="space-y-4">
                  <li>
                    <span className="font-bold text-gray-900">8–12% increase in new sales year over year</span>
                    <br />
                    <span className="text-gray-500">based on SaaS conversion benchmarks</span>
                  </li>
                  <li>
                    <span className="font-bold text-gray-900">15–25% uplift in adoption amongst existing customers</span>
                    <br />
                    <span className="text-gray-500">based on Userpilot&apos;s product adoption benchmarks</span>
                  </li>
                  <li>
                    <span className="font-bold text-gray-900">30–90 seconds saved per work order</span>
                    <br />
                    <span className="text-gray-500">Roughly one work week saved per technician annually</span>
                  </li>
                  <li>
                    <span className="font-bold text-gray-900">~1.5x faster emergency response</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="self-start"
            >
              <img 
                src="/CDG Login Held.png" 
                alt="Mobile app login screen showing the final design"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-20 bg-[#e8d7c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-3xl lg:text-4xl font-bold text-[#fb006d] mb-8 max-w-4xl">
              &quot;We were highly impressed with Bailey&apos;s communication, thoroughness, and willingness to collaborate. The process was fun, and it was energizing to work with her.&quot;
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="text-left">
                <p className="font-semibold text-[#a40047] text-lg">Alexis Lellios</p>
                <p className="text-[#a40047]">Product Manager</p>
                <p className="text-[#a40047]">CMMS Data Group, Client</p>
          </div>
        </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

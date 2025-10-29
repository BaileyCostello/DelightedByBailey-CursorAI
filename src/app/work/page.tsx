'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import { useState, useEffect } from 'react';

export default function Work() {
  const { scrollYProgress } = useScroll();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAssets, setLoadedAssets] = useState(0);
  const totalAssets = 3; // Only preload essential assets (videos and featured case study images)

  useEffect(() => {
    const preloadAssets = async () => {
      const assetUrls = [
        '/ANet Preview Video.mp4',
        '/CDG-Movie.mp4',
        '/Flat-iPad.png'
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
            const img = document.createElement('img');
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

  // Background load gallery section assets after main page loads
  useEffect(() => {
    if (!isLoading) {
      const galleryAssets = [
        '/Dr-Treat-Preview-Image.png',
        '/Exago-Preview-Image.png',
        '/Hanover-Research-Brand-Preview-Image.png',
        '/First-Mid-Preview-Image.png',
        '/Morgan-Lewis-Preview-Image.png',
        '/RISA-Preview-Image.png',
        '/EvoJets Preview Image.png',
        '/Hanover Research Survey Platform Preview Image.png',
        '/Mountain.png'
      ];

      // Load gallery assets in background without blocking UI
      galleryAssets.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
      });
    }
  }, [isLoading]);

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
      {/* Page Header */}
      <section className="bg-white px-6 lg:px-32 pt-32 lg:pt-26 pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold text-black leading-none">
            My Work
          </h1>
        </div>
      </section>

      {/* Featured Case Study - ANet Section */}
      <section className="bg-yellow-50 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Mobile Layout - H2 Title */}
            <p className="text-4xl font-semibold text-gray-900 leading-tight order-1 lg:hidden">
              Helping Teachers Reclaim Time to Focus on Student Outcomes
            </p>

            {/* Mobile Layout - Video */}
            <div className="order-2 lg:hidden overflow-visible">
              <video
                className="w-full h-auto rounded-[32px] shadow-lg border-[20px] border-gray-800"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/ANet Preview Video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Mobile Layout - Description */}
            <div className="order-3 lg:hidden">
              <p className="text-sm text-pink-700 font-normal leading-6 mb-6">
                Lesson Planning Assistant, Achievement Network
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Product Ideation</span>
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
              </div>
              <Button
                href="https://baileycostello.github.io/DelightedByBailey-CursorAI/case-studies/an-lesson-planning"
                variant="secondary"
                size="medium"
                background="light"
                trailingIcon={true}
              >
                Read Case Study
              </Button>
                      </div>

            {/* Desktop Layout - Video */}
            <div className="hidden lg:block h-[600px] w-[624px] relative order-2 overflow-visible flex items-center justify-center">
              <video
                className="w-full h-full object-cover object-center rounded-[32px] shadow-lg border-[20px] border-gray-800 mx-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/ANet Preview Video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Desktop Layout - Left Column (Text Content) */}
            <div className="hidden lg:flex flex-col gap-6 py-5 order-1">
              <p className="text-4xl font-semibold text-gray-900 leading-tight">
                Helping Teachers Reclaim Time to Focus on Student Outcomes
              </p>
              <p className="text-sm text-pink-700 font-normal leading-6">
                Lesson Planning Assistant, Achievement Network
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Product Ideation</span>
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
              </div>
              <div className="flex justify-start">
                <Button
                  href="https://baileycostello.github.io/DelightedByBailey-CursorAI/case-studies/an-lesson-planning"
                  variant="secondary"
                  size="medium"
                  background="light"
                  trailingIcon={true}
                >
                  Read Case Study
                </Button>
                    </div>
                  </div>
              </motion.div>
        </div>
      </section>


      {/* Featured Case Study - CDG Section */}
      <section className="bg-gray-50 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Mobile Layout - H2 Title */}
            <p className="text-4xl font-semibold text-gray-900 leading-tight order-1 lg:hidden">
              Driving Operations Most Valued Metric - Efficiency
            </p>

            {/* Mobile Layout - Image with Video Overlay (appears after title, before badges) */}
            <div className="h-[520px] relative order-2 lg:hidden">
              <div className="relative w-full h-full">
                <img 
                  alt="CDG iPad Mockup" 
                  className="w-full h-full object-contain object-center" 
                  src="/Flat-iPad.png"
                />
                {/* Video Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[68%] h-[81%] relative overflow-hidden rounded-2xl -translate-y-11">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/CDG-Movie.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Badges */}
            <div className="flex flex-wrap gap-2 order-3 lg:hidden">
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Technical</span>
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">UX Design</span>
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Team Management</span>
            </div>

            {/* Mobile Layout - Description */}
            <p className="text-sm text-pink-700 font-normal leading-6 order-4 lg:hidden">
              Maintenance Operations App, CMMS Data Group
            </p>

            {/* Mobile Layout - Button */}
            <div className="flex lg:hidden justify-start order-5">
              <Button
                href="/case-studies/cdg-maintenance"
                variant="secondary"
                size="medium"
                background="light"
                trailingIcon={true}
              >
                Read Case Study
              </Button>
            </div>

            {/* Desktop Layout - Left Column (Text Content) */}
            <div className="hidden lg:flex flex-col gap-6 py-5 order-1">
              <p className="text-4xl font-semibold text-gray-900 leading-tight">
                Driving Operations Most Valued Metric - Efficiency
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Technical</span>
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">UX Design</span>
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Team Management</span>
              </div>
              <p className="text-sm text-pink-700 font-normal leading-6">
                Maintenance Operations App, CMMS Data Group
              </p>
              <div className="flex justify-start">
                <Button
                  href="/case-studies/cdg-maintenance"
                  variant="secondary"
                  size="medium"
                  background="light"
                  trailingIcon={true}
                >
                  Read Case Study
                </Button>
              </div>
            </div>

            {/* Desktop Layout - Right Column (Image with Video Overlay) */}
            <div className="hidden lg:block h-[700px] relative order-2">
              <div className="relative w-full h-full">
                <img 
                  alt="CDG iPad Mockup" 
                  className="w-full h-full object-contain object-center" 
                  src="/Flat-iPad.png"
                />
                {/* Video Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[68%] h-[81%] relative overflow-hidden rounded-2xl -translate-y-11">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/CDG-Movie.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
              </motion.div>
        </div>
      </section>

      {/* Featured Case Study - Exago Section */}
      <section className="bg-white py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Mobile Layout - H2 Title */}
            <p className="text-4xl font-semibold text-gray-900 leading-tight order-1 lg:hidden">
              Improving Usability to Drive Sales
            </p>

            {/* Mobile Layout - Image */}
            <div className="h-[520px] relative order-2 lg:hidden">
              <div className="relative w-full h-full">
                <img 
                  alt="Exago AR Preview Screen" 
                  className="w-full h-full object-contain object-center" 
                  src="/Advanced Reports/Exago AR Preview Screen.png"
                />
              </div>
            </div>

            {/* Mobile Layout - Badges */}
            <div className="flex flex-wrap gap-2 order-3 lg:hidden">
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">UX Design</span>
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Technical</span>
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
            </div>

            {/* Mobile Layout - Description */}
            <p className="text-sm text-pink-700 font-normal leading-6 order-4 lg:hidden">
              Data Reporting Tool, Exago BI
            </p>

            {/* Mobile Layout - Button */}
            <div className="flex lg:hidden justify-start order-5">
              <Button
                href="/case-studies/exago-bi"
                variant="secondary"
                size="medium"
                background="light"
                trailingIcon={true}
              >
                Read Case Study
              </Button>
            </div>

            {/* Desktop Layout - Left Column (Text Content) */}
            <div className="hidden lg:flex flex-col gap-6 py-5 order-1">
              <p className="text-4xl font-semibold text-gray-900 leading-tight">
                Improving Usability to Drive Sales
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">UX Design</span>
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Technical</span>
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
              </div>
              <p className="text-sm text-pink-700 font-normal leading-6">
                Data Reporting Tool, Exago BI
              </p>
              <div className="flex justify-start">
                <Button
                  href="/case-studies/exago-bi"
                  variant="secondary"
                  size="medium"
                  background="light"
                  trailingIcon={true}
                >
                  Read Case Study
                </Button>
              </div>
            </div>

            {/* Desktop Layout - Right Column (Image) */}
            <div className="hidden lg:block h-[700px] relative order-2">
              <div className="relative w-full h-full">
                <img 
                  alt="Exago AR Preview Screen" 
                  className="w-full h-full object-contain object-center" 
                  src="/Advanced Reports/Exago AR Preview Screen.png"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="gallery-section" className="relative py-32 px-6 lg:px-32">
        <style jsx>{`
          .card {
            transition: transform 0.3s ease;
          }
          .card:hover ~ .card {
            transform: translateX(112px);
          }
          .card:has(~ .card:hover) {
            transform: translateX(-112px);
          }
        `}</style>
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/Mountain.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 56%',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section - Centered at Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left mb-32 relative z-20"
          >
            <h2 className="text-4xl font-bold text-pink-800 leading-tight mb-8">
              Throw Something New at Me
            </h2>
            <Button
              href="/contact/"
              variant="secondary"
              size="medium"
              background="light"
              trailingIcon={true}
              className="inline-flex"
            >
              Tell Me About Your Project
            </Button>
          </motion.div>

          {/* Preview Images Carousel */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            className="relative -mx-6 lg:-mx-32 overflow-x-hidden"
          >
            <div 
              className="flex gap-2 animate-scroll-smooth"
              style={{
                width: 'calc(380px * 8 + 570px * 4 + 8px * 15)' // 8 small cards + 4 medium cards + 15 gaps
              }}
            >
              {/* First Set of Cards */}
              {/* Dr.Treat Preview */}
              <div className="group flex-shrink-0 w-[760px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="Dr.Treat App Preview"
                    className="w-full h-full object-contain rounded-xl"
                    src="/Dr-Treat-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Pet Telehealth App, Dr.Treat</p>
                  </div>
                </div>
              </div>

              {/* Exago Preview */}
              <div className="group flex-shrink-0 w-[380px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="Exago Preview"
                    className="w-full h-full object-contain rounded-xl"
                    src="/Exago-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Business Intelligence (BI) & Reporting Software, Exago</p>
                  </div>
                </div>
              </div>

              {/* Hanover Research Preview */}
              <div className="group flex-shrink-0 w-[570px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="Hanover Research Preview"
                    className="w-3/4 h-3/4 object-contain rounded-xl mx-auto"
                    src="/Hanover-Research-Brand-Preview-Image.png"
                    width={372}
                    height={297}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Brand & Win / Loss Analysis, Hanover Research</p>
                  </div>
                </div>
              </div>

              {/* EvoJets Preview */}
              <div className="group flex-shrink-0 w-[380px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="EvoJets Preview"
                    className="w-full h-full object-contain rounded-xl pb-2"
                    src="/EvoJets Preview Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Private Jet Charter App, EvoJets</p>
                  </div>
                </div>
              </div>

              {/* First Mid Preview */}
              <div className="group flex-shrink-0 w-[380px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="First Mid Preview"
                    className="w-full h-full object-contain rounded-xl"
                    src="/First-Mid-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Accounting Software, First Mid Ag Services</p>
                  </div>
                </div>
              </div>

              {/* RISA Preview */}
              <div className="group flex-shrink-0 w-[570px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="RISA Preview"
                    className="w-11/12 h-11/12 object-contain rounded-xl mx-auto"
                    src="/RISA-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Structural Engineering Software, RISA</p>
                  </div>
                </div>
              </div>

              {/* Survey Platform Preview */}
              <div className="group flex-shrink-0 w-[380px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="Survey Platform Preview"
                    className="w-full h-full object-contain rounded-xl"
                    src="/Hanover Research Survey Platform Preview Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Survey Platform, Hanover Research</p>
                  </div>
                </div>
              </div>

              {/* Morgan Lewis Preview */}
              <div className="group flex-shrink-0 w-[380px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="Morgan Lewis Preview"
                    className="w-full h-full object-contain rounded-xl"
                    src="/Morgan-Lewis-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Client Matter Resource, Morgan Lewis</p>
                  </div>
                </div>
              </div>


              {/* Duplicate Set for Seamless Loop */}
              {/* Dr.Treat Preview */}
              <div className="group flex-shrink-0 w-[760px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="Dr.Treat App Preview"
                    className="w-full h-full object-contain rounded-xl"
                    src="/Dr-Treat-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Pet Telehealth App, Dr.Treat</p>
                  </div>
                </div>
              </div>

              {/* Exago Preview */}
              <div className="group flex-shrink-0 w-[380px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="Exago Preview"
                    className="w-full h-full object-contain rounded-xl"
                    src="/Exago-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Business Intelligence (BI) & Reporting Software, Exago</p>
                  </div>
                </div>
              </div>

              {/* Hanover Research Preview */}
              <div className="group flex-shrink-0 w-[570px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="Hanover Research Preview"
                    className="w-3/4 h-3/4 object-contain rounded-xl mx-auto"
                    src="/Hanover-Research-Brand-Preview-Image.png"
                    width={372}
                    height={297}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Brand & Win / Loss Analysis, Hanover Research</p>
                  </div>
                </div>
              </div>

              {/* EvoJets Preview */}
              <div className="group flex-shrink-0 w-[380px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="EvoJets Preview"
                    className="w-full h-full object-contain rounded-xl pb-2"
                    src="/EvoJets Preview Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Private Jet Charter App, EvoJets</p>
                  </div>
                </div>
              </div>

              {/* First Mid Preview */}
              <div className="group flex-shrink-0 w-[380px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="First Mid Preview"
                    className="w-full h-full object-contain rounded-xl"
                    src="/First-Mid-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Accounting Software, First Mid Ag Services</p>
                  </div>
                </div>
              </div>

              {/* Morgan Lewis Preview */}
              <div className="group flex-shrink-0 w-[380px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="Morgan Lewis Preview"
                    className="w-full h-full object-contain rounded-xl"
                    src="/Morgan-Lewis-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Client Matter Resource, Morgan Lewis</p>
                  </div>
                </div>
              </div>

              {/* RISA Preview */}
              <div className="group flex-shrink-0 w-[570px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="RISA Preview"
                    className="w-11/12 h-11/12 object-contain rounded-xl mx-auto"
                    src="/RISA-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Structural Engineering Software, RISA</p>
                  </div>
                </div>
              </div>

              {/* Survey Platform Preview */}
              <div className="group flex-shrink-0 w-[380px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/36 backdrop-blur-sm h-[320px] px-4 py-4">
                  <Image
                    alt="Survey Platform Preview"
                    className="w-full h-full object-contain rounded-xl"
                    src="/Hanover Research Survey Platform Preview Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-left pb-2">
                    <p className="text-xs text-gray-900 whitespace-nowrap font-semibold tracking-wide">Survey Platform, Hanover Research</p>
                  </div>
                </div>
              </div>

              </div>
            </motion.div>

        </div>
      </section>
    </div>
  );
}

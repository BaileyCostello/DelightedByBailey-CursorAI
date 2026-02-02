'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import CaseStudyCard from '@/components/CaseStudyCard';
import QuoteCardsCarousel from '@/components/QuoteCardsCarousel';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/outline';

// Animated testimonials cycling component with dots
const AnimatedTestimonials = () => {
  const testimonials = [
    {
      quote: "You're a very good listener. If only we had been able to work with you full time - the possibilities would have been endless.",
      name: "Gillian Kradin",
      title: "Director of Product",
      company: "Achievement Network, Client"
    },
    {
      quote: "Bailey is the perfect blend of humble and opinionated. Any company would be lucky to have her.",
      name: "Alex Agoado", 
      title: "VP of Product",
      company: "Exago, Former Boss"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsVisible(true);
      }, 1000); // Wait for complete fade out before fade in
    }, 7000); // Change every 7 seconds

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setIsVisible(false);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsVisible(true);
    }, 300);
    
    // Restart auto-playing after 6 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 6000);
  };

  return (
    <div className="flex flex-col gap-3 min-h-[400px] justify-center text-left">
      {/* Quote content */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col gap-4 text-left"
      >
        {/* Quote text */}
        <div className="flex flex-col font-bold w-full text-left">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-500 break-words w-full max-w-none">
            &ldquo;{testimonials[currentIndex].quote}&rdquo;
          </p>
        </div>
        
        {/* Author info */}
        <div className="flex justify-start items-start text-left">
          <div className="text-pink-700 font-normal leading-4 text-sm text-left">
            <p className="font-semibold mb-0.5">{testimonials[currentIndex].name}</p>
            <p className="mb-0.5">{testimonials[currentIndex].title}</p>
            <p className="mb-0">{testimonials[currentIndex].company}</p>
          </div>
        </div>
      </motion.div>

        {/* Navigation dots */}
        <div className="flex justify-start gap-2 py-4 px-1">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-pink-500 scale-125' 
                : 'bg-pink-300 hover:bg-pink-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Animated text cycling component
// Scrolling accomplishments carousel component
const AccomplishmentsCarousel = () => {
  const accomplishments = [
    "Helped rescue a client's project to meet a critical deadline",
    "Reduced usability related support tickets by 18%",
    "Helped secure funding and partnerships for multiple start-ups",
    "Turned a conference presentation into a first-click test",
    "Turned successful projects into long-term partnerships",
    "Created the flagship UX internship role where I worked in college",
  ];

  // Calculate card width and total width for animation
  const cardWidthMobile = 264; // Narrower width for mobile (280 - 16)
  const cardWidthDesktop = 334; // Base width for desktop (350 - 16)
  const gap = 16; // gap-4 = 16px
  const singleSetWidthMobile = accomplishments.length * (cardWidthMobile + gap);
  const singleSetWidthDesktop = accomplishments.length * (cardWidthDesktop + gap);

  return (
    <div className="relative -mx-6 lg:-mx-32 overflow-x-hidden">
      {/* Fade gradients at edges - smaller on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div 
        className="flex gap-4 animate-scroll-accomplishments lg:w-auto"
        style={{
          width: `${singleSetWidthMobile * 2}px`,
          '--desktop-width': `${singleSetWidthDesktop * 2}px`
        } as React.CSSProperties & { '--desktop-width': string }}
      >
        {/* Render cards twice for seamless loop */}
        {[...accomplishments, ...accomplishments].map((accomplishment, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-gray-800 text-white rounded-2xl w-[264px] lg:w-[334px] flex items-center"
            style={{
              padding: '16px 24px'
            }}
          >
            <p className="text-base font-medium leading-6">
              {accomplishment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const pathname = usePathname();

  // Scroll to case-studies section when navigating to /#case-studies
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#case-studies') {
      const scrollToSection = () => {
        const el = document.getElementById('case-studies');
        if (el) {
          const navHeight = 72; // match nav h-18
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      };
      // Small delay when navigating from another page so layout is complete
      requestAnimationFrame(() => requestAnimationFrame(scrollToSection));
    }
  }, [pathname]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white min-h-screen flex flex-col pt-32 pb-14 px-6 sm:px-12 md:px-12 lg:px-32">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
          {/* Mobile: Headshot first, then text. Desktop: 12-column grid layout */}
          <div className="flex flex-col md:grid md:grid-cols-12 md:items-start md:gap-6 lg:gap-8 mb-12 md:mb-16 flex-1 mt-12 md:mt-16">
            {/* Mobile: Headshot (Above text) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:hidden flex-shrink-0 mb-6"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/Headshot.png"
                  alt="Bailey Costello"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '999px' }}
                />
              </div>
            </motion.div>
            
            {/* Text Content - 7 columns on desktop */}
            <div className="flex flex-col md:col-span-7 mb-8 md:mb-0">
              {/* Header Text */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[40px] sm:text-[48px] md:text-[56px] leading-[1.1] font-bold text-black mb-6"
              >
                Make bets. Validate.
                <br />
                <span className="text-pink-500">Win people over.</span>
              </motion.h1>
              
              {/* Subtext - wraps after "by" on desktop */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[16px] text-gray-600 leading-6"
              >
                <span className="md:block">Hi, I&apos;m Bailey - a multidisciplinary designer driven by</span>
                <span className="md:block"> curiosity, competition, and complex challenges.</span>
              </motion.p>
            </div>
            
            {/* Desktop: Headshot - 5 columns, centered, max 244px */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden md:flex md:col-span-5 items-center justify-center"
            >
              <div className="w-[244px] h-[244px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/Headshot.png"
                  alt="Bailey Costello"
                  width={244}
                  height={244}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '999px' }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Line Separator */}
          <div className="w-full h-px bg-[#d9d9d9] mb-12 md:mb-16" />
          
          {/* KPIs Section - Mobile: 2 rows (3+2), Desktop: 1 row (5) */}
          <div className="flex flex-col md:block">
            {/* First Row - 3 KPIs on mobile, all 5 on desktop */}
            <div className="grid grid-cols-3 md:grid-cols-12 gap-6 md:gap-6 lg:gap-8 mb-6 md:mb-0">
              {/* KPI 1: Years Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="flex flex-col md:col-span-2"
              >
                <span className="text-[36px] font-bold text-black mb-1 leading-[1.1]">8</span>
                <span className="text-[16px] text-gray-600">Years Experience</span>
              </motion.div>
              
              {/* KPI 2: Industries */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="flex flex-col md:col-span-2"
              >
                <span className="text-[36px] font-bold text-black mb-1 leading-[1.1]">15+</span>
                <span className="text-[16px] text-gray-600">Industries</span>
              </motion.div>
              
              {/* KPI 3: Design Awards */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="flex flex-col md:col-span-2"
              >
                <span className="text-[36px] font-bold text-black mb-1 leading-[1.1]">3</span>
                <span className="text-[16px] text-gray-600">Design Awards</span>
              </motion.div>
              
              {/* KPI 4: IAAP Certification - Hidden on mobile first row, shown on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="hidden md:flex flex-col md:col-span-4"
              >
                <div className="mb-1 h-[39.6px] flex items-center">
                  <Image
                    src="/IAAP Logo.png"
                    alt="IAAP"
                    width={80}
                    height={40}
                    className="h-[39.6px] w-auto object-contain"
                  />
                </div>
                <span className="text-[16px] text-gray-600">Certified Professional in Accessibility Core Competencies</span>
              </motion.div>
              
              {/* KPI 5: Location - Hidden on mobile first row, shown on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="hidden md:flex flex-col md:col-span-2"
              >
                <span className="text-[36px] font-bold text-black mb-1 inline-flex items-center leading-[1.1]">
                  <span 
                    className="material-symbols-outlined text-[48px] leading-[1.1]" 
                    style={{ fontVariationSettings: '"FILL" 1', height: '39.6px', display: 'inline-flex', alignItems: 'center', overflow: 'visible' }}
                  >
                    location_on
                  </span>
                </span>
                <span className="text-[16px] text-gray-600">Brooklyn, NY</span>
              </motion.div>
            </div>
            
            {/* Second Row - Mobile only: 2 KPIs */}
            <div className="grid grid-cols-3 md:hidden gap-6">
              {/* KPI 4: IAAP Certification - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="flex flex-col col-span-2"
              >
                <div className="mb-1 h-[39.6px] flex items-center">
                  <Image
                    src="/IAAP Logo.png"
                    alt="IAAP"
                    width={80}
                    height={40}
                    className="h-[39.6px] w-auto object-contain"
                  />
                </div>
                <span className="text-[16px] text-gray-600">Certified Professional in Accessibility Core Competencies</span>
              </motion.div>
              
              {/* KPI 5: Location - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="flex flex-col col-span-1"
              >
                <span className="text-[36px] font-bold text-black mb-1 inline-flex items-center leading-[1.1]">
                  <span 
                    className="material-symbols-outlined text-[48px] leading-[1.1]" 
                    style={{ fontVariationSettings: '"FILL" 1', height: '39.6px', display: 'inline-flex', alignItems: 'center', overflow: 'visible' }}
                  >
                    location_on
                  </span>
                </span>
                <span className="text-[16px] text-gray-600">Brooklyn, NY</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockups Section */}
      <section className="bg-yellow-200 pt-20 pb-14 px-6 lg:px-32 lg:min-h-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Column - Section Title */}
            <div 
              className="flex flex-col items-start pb-4 mb-[-16px] relative z-10 lg:w-1/2 lg:sticky lg:top-[30%] lg:-translate-y-1/2 lg:self-start"
            >
              {/* Desktop - Animated Text */}
              <div className="hidden lg:block text-5xl font-bold leading-none text-black max-w-2xl">
                <motion.p 
                  className="mb-0 text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0 }}
                  viewport={{ once: true, margin: "-25%" }}
                >
                  Design
                </motion.p>
                <motion.p 
                  className="mb-0 text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-25%" }}
                >
                  Meet
                </motion.p>
                <motion.p 
                  className="mb-0 text-pink-500 whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true, margin: "-25%" }}
                >
                  Product Strategy
                </motion.p>
              </div>
              
              {/* Mobile - Original Text */}
              <h2 className="lg:hidden text-4xl font-bold text-pink-500 leading-tight text-left">
                Design Meets <br /> Product Strategy
              </h2>
            </div>

            {/* Right Column - Mockups Container with Overlapping Layout */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative lg:w-1/2"
            >
              {/* First Mockup - Dr.Treat */}
              <div className="flex items-end justify-center mb-[-144px]">
                <motion.div 
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  style={{
                    x: useTransform(useScroll().scrollYProgress, [0, 1], [0, 80])
                  }}
                  className="h-[520px] w-[310px] relative shrink-0 lg:ml-0"
                >
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    style={{
                      y: useTransform(useScroll().scrollYProgress, [0, 1], [0, -50])
                    }}
                    className="w-full h-full"
                  >
                    <Image 
                      alt="Dr.Treat App Mockup" 
                      className="w-full h-full object-cover object-center" 
                      src="./Dr-Treat-Mockup.png"
                      width={310}
                      height={520}
                      unoptimized
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Second Mockup - VolunTime */}
              <div className="flex items-end justify-center lg:pr-[30%]">
                <motion.div 
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-88px" }}
                  style={{
                    x: useTransform(useScroll().scrollYProgress, [0, 1], [0, -80])
                  }}
                  className="h-[520px] w-[310px] relative shrink-0 -ml-[60px]"
                >
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    style={{
                      y: useTransform(useScroll().scrollYProgress, [0, 1], [0, -30])
                    }}
                    className="w-full h-full"
                  >
                    <Image 
                      alt="VolunTime App Mockup" 
                      className="w-full h-full object-cover object-center" 
                      src="./VolunTime-Mockup.png"
                      width={310}
                      height={520}
                      unoptimized
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Complex Projects Callout Section */}

      {/* Jupiter Prototype Section - overflow-x-hidden only here so 108vw MacBook doesn't cause page scrollbar */}
      <section className="bg-black py-42 px-6 lg:py-32 lg:px-32 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Animated Circles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-row items-center justify-start pb-2 mb-0"
            >
              {[1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + (index * 0.2),
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="w-8 h-8 -ml-2 relative shrink-0"
                >
                  <img 
                    alt={`Circle ${index}`}
                    className="block w-full h-full object-contain" 
                    src={`/Circle ${index}.png`}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Main Heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-yellow-50 leading-tight max-w-[426px] relative z-10"
            >
              Complex problems invite creative solutions
            </motion.p>

            {/* MacBook Device with Video */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto mt-4 md:max-w-4xl w-[108vw] -mx-[4vw] left-1/2 -translate-x-1/2 md:w-auto md:mx-auto md:left-auto md:translate-x-0"
            >
              <motion.div 
                className="relative"
                style={{
                  opacity: useTransform(useScroll().scrollYProgress, [0, 0.1, 0.15, 1], [0, 0, 1, 1]),
                  scale: useTransform(useScroll().scrollYProgress, [0, 0.05, 0.16, 1], [0.4, 0.4, 1, 1.5])
                }}
              >
                <Image
                  src="/MacBook Pro Dark Device Screen.png"
                  alt="MacBook Pro Device"
                  width={800}
                  height={483}
                  className="w-full h-auto"
                  unoptimized
                />
                
                {/* Video Overlay */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: useTransform(useScroll().scrollYProgress, [0, 0.1, 0.3, 1], [0, 0, 1, 1])
                  }}
                >
                  <div className="w-[79.5%] h-[85.5%] relative overflow-hidden rounded-lg -translate-y-[5px]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      <source src="/JupiterAnimated.mp4" type="video/mp4" />
                    </video>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* My Favorite Stories Section */}
      <section id="case-studies" className="bg-white py-14 px-6 lg:px-32 scroll-mt-[72px]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            {/* Section Header */}
            <h2 className="text-[36px] font-bold text-black leading-tight">
              My Favorite Stories
            </h2>

            {/* Case Study Cards */}
            <div className="flex flex-col gap-8">
              {/* CDG Case Study */}
              <CaseStudyCard
                previewImage="/CDG Mockup.png"
                previewImageAlt="CDG Maintenance Operations App"
                companyLogo="/MVPOne Logo.png"
                companyLogoAlt="MVPOne"
                title="Driving Operational Efficiency"
                subtitle="Maintenance Management App, CMMS Data Group"
                kpis={[
                  { value: "8-12%", label: "Projected increase in Monthly Recurring Revenue (MRR)" },
                  { value: "15-25%", label: "Projected increase in Daily Active Users (DAU)" }
                ]}
                href="/case-studies/cdg-maintenance"
                index={0}
              />

              {/* ANet Case Study */}
              <CaseStudyCard
                previewImage="/ANet Hero Image.png"
                previewImageAlt="ANet Lesson Planning Assistant"
                companyLogo="/ANet Logo.png"
                companyLogoAlt="Achievement Network"
                title="&ldquo;I feel like every teacher across the country could use this.&rdquo;"
                subtitle="Lesson Planning Concept, Achievement Network"
                kpis={[
                  { value: "$50,000", label: "Increase in Annual Recurring Revenue (ARR)" }
                ]}
                href="/case-studies/an-lesson-planning"
                graphicOverlay="/ANet Graphic.png"
                graphicOverlayAlt="ANet Graphic"
                index={1}
              />

              {/* Exago Case Study */}
              <CaseStudyCard
                previewImage="/Advanced Reports/Exago AR Preview Screen.png"
                previewImageAlt="Exago Advanced Reports"
                companyLogo="/Exago Logo.png"
                companyLogoAlt="Exago BI"
                title="Winning Deals Through Design"
                subtitle="Reporting and Dashboard Builder Platform, Exago BI"
                kpis={[
                  { value: "11%", label: "Projected increase in Annual Recurring Revenue (ARR)" },
                  { value: "18%", label: "Reduction in usability related support tickets" },
                  { value: "3.5x", label: "Increase in upgrades to newest release" }
                ]}
                href="/case-studies/exago-bi"
                index={2}
              />
            </div>
          </motion.div>
        </div>
      </section>

        {/* Why People Love Working With Me Section */}
        <section className="bg-yellow-200 relative">
          {/* Quote Cards - Horizontal Scroll Container */}
          <QuoteCardsCarousel />
        </section>


      {/* Final CTA Section */}
      <section className="bg-black py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1"
          >
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-[56px] font-bold text-yellow-50 leading-tight">
                  There&apos;s so much<span className="hidden md:inline"><br /></span> more to talk about
                </h2>
                <p className="text-base text-red-200 font-normal">
                  Like that time I ...
                </p>
              </div>
              
              {/* Button - Tablet and Desktop */}
              <div className="hidden md:flex justify-end">
                <Button
                  href="/contact/"
                  variant="primary"
                  size="medium"
                  background="light"
                  trailingIcon={true}
                  className="w-[240px] px-8 py-6 text-[24px] font-semibold"
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </div>

            {/* Accomplishments Carousel */}
            <div className="mt-4">
              <AccomplishmentsCarousel />
            </div>

            {/* Button - Mobile only, centered below cards */}
            <div className="flex justify-center mt-10 md:hidden">
              <Button
                href="/contact/"
                variant="primary"
                size="medium"
                background="light"
                trailingIcon={true}
                className="w-full md:w-[240px] px-8 py-6 text-[24px] font-semibold"
              >
                Let&apos;s Talk
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

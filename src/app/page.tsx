'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import { useState, useEffect } from 'react';

// Animated testimonials cycling component
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsVisible(true);
      }, 1000); // Wait for complete fade out before fade in
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex flex-col gap-4 h-full ${testimonials[currentIndex].quote.length > 100 ? 'justify-start' : 'justify-center'}`}
    >
      {/* Quote text */}
      <div className="flex flex-col font-bold">
        <p className="text-5xl font-bold text-pink-500 leading-normal">
          &ldquo;{testimonials[currentIndex].quote}&rdquo;
        </p>
      </div>
      
      {/* Author info */}
      <div className="flex justify-between items-center">
        <div className="text-pink-700 font-normal leading-6 text-sm">
          <p className="font-semibold mb-0">{testimonials[currentIndex].name}</p>
          <p className="mb-0">{testimonials[currentIndex].title}</p>
          <p>{testimonials[currentIndex].company}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Animated text cycling component
const AnimatedHeadlines = () => {
  const headlines = [
    "Helped rescue a client's project to meet a critical deadline",
    "Reduced usability related support tickets by 18%",
    "Helped secure funding for multiple start-ups", 
    "Turned a conference presentation into a first-click test",
    "Turned successful projects into long-term partnerships",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        setIsVisible(true);
      }, 1000); // Wait for complete fade out before fade in
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <motion.p 
      className="text-xl font-bold text-yellow-50 max-w-[356px]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {headlines[currentIndex]}
    </motion.p>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white h-[90vh] flex items-center pt-8 pb-14 px-6 lg:px-32 lg:pt-8 lg:pb-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end"
          >
            {/* Left Column - Main Heading */}
            <div className="flex flex-col">
              <p className="text-base text-gray-700 mb-0 leading-6">
                Hi, I am a
              </p>
              <div className="text-7xl font-bold leading-none text-black">
                <motion.p 
                  className="mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0 }}
                >
                  Strategic
                </motion.p>
                <motion.p 
                  className="mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Analytical
                </motion.p>
                <motion.p 
                  className="mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  Curious
                </motion.p>
                <motion.p 
                  className="text-pink-500 mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  Designer
                </motion.p>
              </div>
            </div>
            
            {/* Right Column - Description and Buttons */}
            <div className="flex flex-col gap-10 mt-16">
              <motion.div 
                className="text-base text-gray-700 leading-6 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <p className="mb-0">
                  8 years experience as a UX and Product Designer - last seen leading projects and delighting clients with compelling solutions backed by research.
                </p>
                <p className="mb-0">&nbsp;</p>
                <p>
                  <span>I am also proudly a </span>
                  <span className="underline font-semibold">
                    <a 
                      href="https://www.accessibilityassociation.org/cpacc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-700 hover:text-pink-600 underline"
                    >
                      Certified Professional in Accessibility Core Competencies
                    </a>
                  </span>
                  <span> (IAAP)</span>
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <Button
                  href="/work/"
                  variant="primary"
                  size="medium"
                  background="light"
                  trailingIcon={true}
                >
                  View My Work
                </Button>
                <Button
                  href="/contact/"
                  variant="outline"
                  size="medium"
                  background="light"
                  trailingIcon={true}
                >
                  Let&apos;s Talk
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mockups Section */}
      <section className="bg-yellow-200 py-14 pb-[144px] px-6 md:px-20 lg:px-56 xl:px-96 2xl:px-[28rem]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            {/* Section Title */}
            <motion.div 
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0, ease: "easeOut" }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex flex-col items-start pb-4 mb-[-16px] relative z-10"
            >
              <h2 className="text-4xl font-bold text-pink-500 leading-tight text-left">
                Design Meet Product Strategy
              </h2>
            </motion.div>

            {/* Mockups Container with Overlapping Layout */}
            <div className="relative">
              {/* First Mockup - Dr.Treat */}
              <div className="flex items-end justify-between mb-[-144px]">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true, margin: "5%" }}
                  style={{
                    x: useTransform(useScroll().scrollYProgress, [0, 1], [0, 100])
                  }}
                  className="flex flex-col gap-2 items-end justify-end flex-1 mr-[-48px]"
                >
                  <p className="text-pink-700 text-sm text-right max-w-[188px] pb-6">
                    Pet Telehealth App,<br />Dr.Treat
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  style={{
                    x: useTransform(useScroll().scrollYProgress, [0, 1], [0, 80])
                  }}
                  className="h-[520px] w-[310px] relative shrink-0"
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
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Second Mockup - VolunTime */}
              <div className="flex items-end justify-between">
                <motion.div 
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-88px" }}
                  style={{
                    x: useTransform(useScroll().scrollYProgress, [0, 1], [0, -80])
                  }}
                  className="h-[520px] w-[310px] relative shrink-0"
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
                    />
                  </motion.div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "5%" }}
                  style={{
                    x: useTransform(useScroll().scrollYProgress, [0, 1], [0, -100])
                  }}
                  className="flex flex-col gap-2 items-start justify-end flex-1 ml-[-48px]"
                >
                  <p className="text-pink-700 text-sm max-w-[188px] pb-6">
                    Student Volunteering App,<br />VolunTIME Keepers
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Complex Projects Callout Section */}

      {/* Featured Case Study - ANet Section */}
      <section className="bg-gray-50 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Mobile Layout - Featured Case Study Label */}
            <p className="text-base text-pink-700 font-normal leading-6 order-1 lg:hidden">
              Featured Case Study
            </p>

            {/* Mobile Layout - H2 Title */}
            <p className="text-4xl font-bold text-pink-500 leading-tight order-2 lg:hidden">
              &ldquo;I feel like every teacher across the country could use this.&rdquo;
            </p>

            {/* Mobile Layout - Image */}
            <div className="order-3 lg:hidden overflow-visible">
              <Image
                alt="ANet FOCUS - Standards Page"
                className="w-full h-auto"
                src="./ANet FOCUS - Standards Page.png"
                width={400}
                height={300}
              />
            </div>

            {/* Mobile Layout - Description */}
            <div className="order-4 lg:hidden">
              <p className="text-sm text-pink-700 font-normal leading-6 mb-6">
                Lesson Planning Assistant, Achievement Network
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Product Ideation</span>
                <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
              </div>
              <Button
                href="/case-studies/anet-lesson-planning"
                variant="secondary"
                size="medium"
                background="light"
                trailingIcon={true}
              >
                Read Case Study
              </Button>
            </div>

            {/* Desktop Layout - Image */}
            <div className="hidden lg:block h-[600px] relative order-2 overflow-visible">
              <Image
                alt="ANet FOCUS - Standards Page"
                className="w-full h-full object-cover object-center"
                src="./ANet FOCUS - Standards Page.png"
                width={600}
                height={600}
              />
            </div>

            {/* Desktop Layout - Left Column (Text Content) */}
            <div className="hidden lg:flex flex-col gap-6 order-1">
              <p className="text-base text-pink-700 font-normal leading-6">
                Featured Case Study
              </p>
              <p className="text-4xl font-bold text-pink-500 leading-tight">
                &ldquo;I feel like every teacher across the country could use this.&rdquo;
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
                  href="/case-studies/anet-lesson-planning"
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

      {/* Jupiter Prototype Section */}
      <section className="bg-black py-42 px-6 lg:py-32 lg:px-32">
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
                  {index === 1 ? (
                    <img 
                      alt="" 
                      className="block max-w-none size-full -rotate-90" 
                      src="http://localhost:3845/assets/f93e3ea266e5591b8964d18277e1051807b8b043.svg" 
                    />
                  ) : index === 2 ? (
                    <img 
                      alt="" 
                      className="block max-w-none size-full -rotate-90" 
                      src="http://localhost:3845/assets/b053d3a3129da0f97a613306e460df1f25caf840.svg" 
                    />
                  ) : index === 3 ? (
                    <img 
                      alt="" 
                      className="block max-w-none size-full -rotate-90" 
                      src="http://localhost:3845/assets/3c1690cd218185e9b420f8d1bc40c03332b9d18f.svg" 
                    />
                  ) : (
                    <img 
                      alt="" 
                      className="block max-w-none size-full -rotate-90" 
                      src="http://localhost:3845/assets/f8ed10c80e052df2bf1b702f7da6b38d34e6f529.svg" 
                    />
                  )}
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
                  src="./MacBook Pro Dark Device Screen.png"
                  alt="MacBook Pro Device"
                  width={800}
                  height={483}
                  className="w-full h-auto"
                />
                
                {/* Video Overlay */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: useTransform(useScroll().scrollYProgress, [0, 0.2, 0.5, 1], [0, 0, 1, 1])
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
                      <source src="./JupiterAnimated.mp4" type="video/mp4" />
                    </video>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Project Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-sm text-red-200 font-normal leading-6"
              style={{
                y: useTransform(useScroll().scrollYProgress, [0, 0.16, 1], [0, 0, 124])
              }}
            >
              Climate Risk Analysis, Jupiter Intel
            </motion.p>
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
            {/* Mobile Layout - Featured Case Study Label */}
            <p className="text-base text-pink-700 font-normal leading-6 order-1 lg:hidden">
              Featured Case Study
            </p>

            {/* Mobile Layout - H2 Title */}
            <p className="text-4xl font-bold text-pink-500 leading-tight order-2 lg:hidden">
              Driving operations most valued metric - efficiency
            </p>

            {/* Mobile Layout - Image (appears after title, before badges) */}
            <div className="h-[520px] relative order-3 lg:hidden">
              <Image 
                alt="CDG iPad Mockup" 
                className="w-full h-full object-contain object-center" 
                src="./CDG Mockup.png"
                width={600}
                height={520}
              />
            </div>

            {/* Mobile Layout - Badges */}
            <div className="flex flex-wrap gap-2 order-4 lg:hidden">
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Technical</span>
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">UX Design</span>
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Team Management</span>
            </div>

            {/* Mobile Layout - Description */}
            <p className="text-sm text-pink-700 font-normal leading-6 order-5 lg:hidden">
              Maintenance Operations App, CMMS Data Group
            </p>

            {/* Mobile Layout - Button */}
            <div className="flex lg:hidden justify-start order-6">
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
            <div className="hidden lg:flex flex-col gap-6 order-1">
              <p className="text-base text-pink-700 font-normal leading-6">
                Featured Case Study
              </p>
              <p className="text-4xl font-bold text-pink-500 leading-tight">
                Driving operations most valued metric - efficiency
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

            {/* Desktop Layout - Right Column (Image) */}
            <div className="hidden lg:block h-[700px] relative order-2">
              <Image 
                alt="CDG iPad Mockup" 
                className="w-full h-full object-contain object-center" 
                src="./CDG Mockup.png"
                width={700}
                height={700}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#eee2d8] py-14 pb-[112px] px-6 md:px-20 lg:px-56 xl:px-96 2xl:px-[28rem]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 h-[400px]"
          >
            <AnimatedTestimonials />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-black py-14 px-6 md:px-20 lg:px-56 xl:px-96 2xl:px-[28rem]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            {/* Header Text and Image Row */}
            <div className="flex flex-col isolate items-start pb-4 pt-0 px-0 relative shrink-0 w-full">
              <div className="flex flex-col gap-4 mb-[-16px] relative shrink-0 w-full z-[2]">
                <p className="text-4xl font-bold text-yellow-50 leading-tight max-w-[400px]">
                  There&apos;s so much more to talk about
                </p>
              </div>
              <div className="flex flex-col gap-10 lg:flex-row lg:gap-10 lg:items-end">
                {/* Image */}
                <div className="h-[289px] w-[286px] rounded-3xl overflow-hidden relative shrink-0 z-[1]">
                  <Image 
                    alt="Bailey Costello Headshot" 
                    className="w-full h-full object-cover" 
                    src="./Headshot.png"
                    width={286}
                    height={289}
                  />
                </div>

                {/* Text and Button */}
                <div className="flex flex-col gap-10 items-start justify-end h-[289px] relative flex-1">
                  <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 w-full">
                    <p className="text-base text-red-200 font-normal">
                      Like that time I
                    </p>
                    <AnimatedHeadlines />
                  </div>
                  <div className="flex justify-start">
                    <Button
                      href="/contact/"
                      variant="primary"
                      size="medium"
                      background="light"
                      trailingIcon={true}
                    >
                      Let&apos;s Talk
                    </Button>
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

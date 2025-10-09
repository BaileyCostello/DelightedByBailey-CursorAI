'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/Button';


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
                    Certified Professional in Accessibility Core Competencies
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
                  href="/work"
                  variant="primary"
                  size="medium"
                  background="light"
                  trailingIcon={true}
                >
                  View My Work
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="medium"
                  background="light"
                  trailingIcon={true}
                >
                  Get In Touch
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
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true, margin: "5%" }}
                  className="flex flex-col gap-2 items-end justify-end flex-1 mr-[-16px]"
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
                  className="h-[412px] w-[245px] relative shrink-0"
                >
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    style={{
                      y: useTransform(useScroll().scrollYProgress, [0, 1], [0, -50])
                    }}
                    className="w-full h-full"
                  >
                    <img 
                      alt="Dr.Treat App Mockup" 
                      className="w-full h-full object-cover object-center" 
                      src="/Dr-Treat-Mockup.png" 
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
                  className="h-[413px] w-[245px] relative shrink-0"
                >
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    style={{
                      y: useTransform(useScroll().scrollYProgress, [0, 1], [0, -30])
                    }}
                    className="w-full h-full"
                  >
                    <img 
                      alt="VolunTime App Mockup" 
                      className="w-full h-full object-cover object-center" 
                      src="/VolunTime-Mockup.png" 
                    />
                  </motion.div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "5%" }}
                  className="flex flex-col gap-2 items-start justify-end flex-1 ml-[-16px]"
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

      {/* Featured Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of projects that showcase my approach to user-centered design 
              and problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AN Lesson Planning Assistant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href="/case-studies/an-lesson-planning">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      AN Lesson Planning Assistant
                    </h3>
                    <p className="text-gray-600 mb-4">
                      AI-powered tool that helps educators create engaging lesson plans 
                      with personalized recommendations and curriculum alignment.
                    </p>
                    <span className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-200">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* CDG Maintenance Management App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href="/case-studies/cdg-maintenance">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      CDG Maintenance Management App
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Streamlined maintenance workflow system for facility managers 
                      to track, schedule, and optimize equipment maintenance.
                    </p>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/work"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              View All Projects
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About My Design Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I believe great design happens when we truly understand the people we&apos;re designing for.
              </p>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
              >
                Learn More About Me →
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">User Research</h3>
                <p className="text-sm text-gray-600">Understanding user needs through interviews, surveys, and usability testing.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Strategic Design</h3>
                <p className="text-sm text-gray-600">Aligning design decisions with business goals and user objectives.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Prototyping</h3>
                <p className="text-sm text-gray-600">Rapid iteration and testing of design concepts before development.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-sm text-gray-600">Working closely with developers, PMs, and stakeholders throughout the process.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

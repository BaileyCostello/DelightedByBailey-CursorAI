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

      {/* Complex Projects Callout Section */}
      <section className="bg-black py-14 px-6 md:px-20 lg:px-56 xl:px-96 2xl:px-[28rem]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-4xl font-bold text-yellow-50 leading-tight">
              Complex problems invite creative solutions
            </p>
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
              <img 
                alt="CDG iPad Mockup" 
                className="w-full h-full object-contain object-center" 
                src="/CDG Mockup.png" 
              />
            </div>

            {/* Mobile Layout - Badges */}
            <div className="flex flex-wrap gap-2 order-4 lg:hidden">
              <span className="bg-pink-800/16 px-2 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Technical</span>
              <span className="bg-pink-800/16 px-2 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">UX Design</span>
              <span className="bg-pink-800/16 px-2 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
              <span className="bg-pink-800/16 px-2 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Team Management</span>
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
                <span className="bg-pink-800/16 px-2 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Technical</span>
                <span className="bg-pink-800/16 px-2 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">UX Design</span>
                <span className="bg-pink-800/16 px-2 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
                <span className="bg-pink-800/16 px-2 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Team Management</span>
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
            <div className="hidden lg:block h-[600px] relative order-2">
              <img 
                alt="CDG iPad Mockup" 
                className="w-full h-full object-contain object-center" 
                src="/CDG Mockup.png" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#eee2d8] py-14 px-6 md:px-20 lg:px-56 xl:px-96 2xl:px-[28rem]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-5xl font-bold text-pink-500 leading-normal">
              "You're a very good listener. If only we had been able to work with you full time - the possibilities would have been endless."
            </p>
            <div className="flex justify-between items-center">
              <div className="text-pink-700 font-normal leading-6 text-sm">
                <p className="font-semibold mb-0">Gillian Kradin</p>
                <p className="mb-0">Director of Product</p>
                <p>Achievement Network, Client</p>
              </div>
            </div>
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
                  There's so much more to talk about
                </p>
              </div>
              <div className="flex flex-col gap-10 lg:flex-row lg:gap-10 lg:items-end">
                {/* Image */}
                <div className="h-[289px] w-[286px] rounded-3xl overflow-hidden relative shrink-0 z-[1]">
                  <img 
                    alt="Bailey Costello Headshot" 
                    className="w-full h-full object-cover" 
                    src="/Headshot.png" 
                  />
                </div>

                {/* Text and Button */}
                <div className="flex flex-col gap-10 items-start justify-end h-[289px] relative flex-1">
                  <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 w-full">
                    <p className="text-base text-red-200 font-normal">
                      Like that time I
                    </p>
                    <p className="text-xl font-bold text-yellow-50">
                      Helped secure funding and partnerships for 2 start-ups
                    </p>
                  </div>
                  <div className="flex justify-start">
                    <Button
                      href="/contact"
                      variant="primary"
                      size="medium"
                      background="light"
                      trailingIcon={true}
                    >
                      Get In Touch
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

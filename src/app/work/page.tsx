'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';

export default function Work() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-white px-6 lg:px-32 pt-10 pb-6">
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
            <p className="text-4xl font-bold text-gray-900 leading-tight order-1 lg:hidden">
              Helping Teachers Reclaim Time to Focus on Student Outcomes
            </p>

            {/* Mobile Layout - Image */}
            <div className="order-2 lg:hidden overflow-visible">
              <Image
                alt="ANet FOCUS - Standards Page"
                className="w-full h-auto"
                src="/ANet FOCUS - Standards Page.png"
                width={400}
                height={300}
              />
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
                src="/ANet FOCUS - Standards Page.png"
                width={600}
                height={600}
              />
            </div>

            {/* Desktop Layout - Left Column (Text Content) */}
            <div className="hidden lg:flex flex-col gap-6 order-1">
              <p className="text-4xl font-bold text-gray-900 leading-tight">
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
            <p className="text-4xl font-bold text-gray-900 leading-tight order-1 lg:hidden">
              Driving operations most valued metric - efficiency
            </p>

            {/* Mobile Layout - Image (appears after title, before badges) */}
            <div className="h-[520px] relative order-2 lg:hidden">
              <Image 
                alt="CDG iPad Mockup" 
                className="w-full h-full object-contain object-center" 
                src="/CDG Mockup.png"
                width={600}
                height={520}
              />
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
            <div className="hidden lg:flex flex-col gap-6 order-1">
              <p className="text-4xl font-bold text-gray-900 leading-tight">
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
                src="/CDG Mockup.png"
                width={700}
                height={700}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

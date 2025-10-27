'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function ANetLessonPlanning() {
  const slowMarqueeRef = useRef<HTMLDivElement>(null);
  const fastMarqueeRef = useRef<HTMLDivElement>(null);


  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gray-100 pt-32 lg:pt-26 pb-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Helping Teachers Reclaim Time to Focus on Student Outcomes
            </h1>
            <p className="text-sm text-pink-700 font-normal leading-6 mb-6">
              Lesson Planning Resource, Achievement Network
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Product Ideation</span>
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Video */}
      <section className="bg-gray-100 py-8 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="w-full lg:w-[calc(100%-288px)] mx-auto">
            <video
              className="w-full h-[600px] rounded-2xl shadow-lg border-[20px] border-gray-800 object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/ANet Preview Video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-base font-normal text-pink-700 mb-6">Overview</p>
              <p className="text-base text-gray-700 leading-6">
                We started without a solution, or even a particular problem in mind. We simply knew we wanted to focus on teachers - thinking they would have the biggest impact on student learning.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-base font-normal text-pink-700 mb-6">Goals</p>
              <ul className="space-y-4">
                <li className="text-base text-gray-700 leading-6">
                  Enable teachers to improve outcomes for 1 million students nationwide
                </li>
                <li className="text-base text-gray-700 leading-6">
                  Leverage rough ideas and qualitative research to understand what the market needs
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role Highlights */}
      <section className="bg-yellow-200 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Role</h3>
              <p className="text-base text-gray-700">Lead UX Designer & Researcher</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools</h3>
              <p className="text-base text-gray-700">Figma, Zoom</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team</h3>
              <p className="text-base text-gray-700">1 Product Owner<br />1 Team of Educational Coaches</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h3>
              <p className="text-base text-gray-700">4 months</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div>
              <p className="text-base font-normal text-pink-700 mb-6">Interviews</p>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                We spoke with over 30 teachers across the US
              </h3>
               <p className="text-base text-gray-700 leading-6">
                 We discussed a wide range of challenges and quickly saw the burnout. Teachers everywhere struggling to meet unique student needs and keep them engaged during lessons. As themes emerged, we dug deeper into problems around lesson planning. Teachers shared stories of working late into the night, even during their children&apos;s sporting events, just to stay prepared. They described gaps in curriculum and the countless hours spent searching for meaningful content online.
               </p>
            </div>
            <div>
              <Image
                alt="Teacher Persona"
                className="w-full h-auto rounded-2xl mb-6"
                src="/ANet Persona.png"
                width={600}
                height={400}
              />
              <p className="text-base text-gray-500 leading-6">
                Meet our persona Jada, created for quick re-alignment
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Text Section */}
      <section className="lg:min-h-screen flex flex-col pt-32 pb-32">
        <div className="w-full">
          <div className="wrapper">
            <div ref={slowMarqueeRef} className="marquee marquee-slow">
              <p className="text-2xl font-bold text-gray-900 mr-6">I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;</p>
              <p className="text-2xl font-bold text-gray-900 mr-6">I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;&nbsp;&nbsp;&nbsp;I used to think ...&nbsp;</p>
            </div>
          </div>
          <div className="wrapper mt-16">
            <div ref={fastMarqueeRef} className="marquee marquee-fast">
              <p className="text-[128px] font-bold text-gray-900">But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;</p>
              <p className="text-[128px] font-bold text-gray-900">But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;&nbsp;&nbsp;&nbsp;But now I think ...&nbsp;</p>
            </div>
          </div>
        </div>
        
        {/* Our North Star Content */}
        <div className="px-6 lg:px-32 mt-14">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl"
              >
                <p className="text-base font-normal text-pink-700 mb-6">Our North Star</p>
                <p className="text-base text-gray-700 leading-6 mb-8">
                  We carefully refined our problem statement after each new insight, over time we set very specific goals for our solution:
                </p>
                <p className="text-xl font-bold text-gray-900 leading-6">
                  As a teacher, I need immediate and actionable resources that I trust to help me address student misunderstandings, so that I can adjust instruction and provide individual support
                </p>
              </motion.div>
              <div></div>
            </div>
          </div>
        </div>
      </section>


      {/* Concept Testing Section */}
      <section className="bg-gray-50 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-base font-normal text-pink-700 mb-6">3 Imperfect Concepts</p>
            <p className="text-base text-gray-700 leading-6 max-w-3xl">
              Next, we set out to get rapid feedback on rough ideas. None of them perfect, but each helped shape the final solution.
            </p>
          </motion.div>

          <div className="p-8 rounded-2xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Header and Description - left column on desktop, first on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 lg:order-1"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-4 text-left">1. Video Library</h3>
                <p className="text-base text-gray-700 leading-6 text-left">
                  Teachers liked videos, but sometimes reading was faster or they weren&apos;t in a place where they could watch a video.
                </p>
              </motion.div>
              
              {/* Image - right column on desktop, second on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-2 lg:order-2"
              >
                <Image
                  alt="Video Library Concept"
                  className="w-full h-auto rounded-2xl"
                  src="/ANet Concept 1.png"
                  width={600}
                  height={400}
                />
              </motion.div>
            </div>
          </div>

          <div className="p-8 rounded-2xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Header and Description - right column on desktop, first on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-4 text-left">2. Chat Bot Assistant</h3>
                <p className="text-base text-gray-700 leading-6 text-left">
                  Teachers generally didn&apos;t care for chatbots, but liked content around student pitfalls and misunderstandings.
                </p>
              </motion.div>
              
              {/* Image - left column on desktop, second on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <Image
                  alt="Chat Bot Concept"
                  className="w-full h-auto rounded-2xl"
                  src="/ANet Concept 2.png"
                  width={600}
                  height={400}
                />
              </motion.div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Header and Description - left column on desktop, first on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 lg:order-1"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-4 text-left">3. Mobile App</h3>
                <p className="text-base text-gray-700 leading-6 text-left">
                  Teachers liked the library of resources, but lesson planning was easiest done on a computer.
                </p>
              </motion.div>
              
              {/* Image - right column on desktop, second on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-2 lg:order-2"
              >
                <Image
                  alt="Mobile App Concept"
                  className="w-full h-auto rounded-2xl"
                  src="/ANet Concept 3.png"
                  width={600}
                  height={400}
                />
              </motion.div>
            </div>
          </div>

          {/* Further Refinement Subsection */}
          <div className="p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Header and Description - right column on desktop, first on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-4 text-left">4. Further Refinement</h3>
                <p className="text-base text-gray-700 leading-6 text-left mb-6">
                  We continued to tweak the solution for another 5 rounds of feedback.
                </p>
                <p className="text-base text-gray-700 leading-6 text-left">
                  The only reason we stopped testing was because, after the sixth round of testing, the designs received an incredible response:
                </p>
              </motion.div>
              
              {/* Image - left column on desktop, second on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <Image
                  alt="ANet Concept 4"
                  className="w-full h-auto rounded-2xl"
                  src="/ANet Concept 4.png"
                  width={600}
                  height={400}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Quote Section */}
      <section className="bg-yellow-200 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div className="text-left">
              <blockquote className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                &quot;I feel like every teacher across the country could use this.&quot;
              </blockquote>
              <p className="text-base text-pink-700">
                One of the many delighted teachers we spoke with
              </p>
            </div>
            <div>
              {/* Empty right column for better text wrapping */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-base font-normal text-pink-700 mb-6">Solution</p>
            <p className="text-base text-gray-700 leading-6 max-w-4xl mb-8">
              Every inch of the resource library has intention behind it, thoughtfully inspired by teacher&apos;s favorite resources, built for teacher&apos;s fast-paced environment, and based on Universal Design for Learning (UDL) to support diverse students who might otherwise fall behind.
            </p>
          </motion.div>

            {/* Image with overlay annotations */}
            <div className="relative">
              <Image
                alt="ANet FOCUS - Standards Page"
                className="w-full h-auto rounded-2xl shadow-2xl"
                src="/ANet FOCUS - Standards Page.png"
                width={1200}
                height={800}
              />
              
              {/* Annotations positioned absolutely over the image */}
              <div className="absolute top-[15%] -right-8 backdrop-blur-lg p-4 rounded-lg shadow-lg w-1/2 sm:max-w-xs" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <div style={{ backgroundColor: 'rgba(232, 215, 200, 0.3)' }} className="absolute inset-0 rounded-lg"></div>
                <p className="text-sm text-pink-700 relative z-10">
                  Each section flows naturally with teacher&apos;s lesson planning process.
                </p>
              </div>

              <div className="absolute top-[25%] -right-8 backdrop-blur-lg p-4 rounded-lg shadow-lg w-1/2 sm:max-w-xs" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <div style={{ backgroundColor: 'rgba(232, 215, 200, 0.3)' }} className="absolute inset-0 rounded-lg"></div>
                <p className="text-sm text-pink-700 relative z-10">
                  With a sea bad resources, quality content was key to earning teacher&apos;s trust. They found live classroom videos and addressing student misunderstandings especially helpful.
                </p>
              </div>

              <div className="absolute top-[50%] -right-8 backdrop-blur-lg p-4 rounded-lg shadow-lg w-1/2 sm:max-w-xs" style={{ transform: 'translateY(40px)', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <div style={{ backgroundColor: 'rgba(232, 215, 200, 0.3)' }} className="absolute inset-0 rounded-lg"></div>
                <p className="text-sm text-pink-700 mb-3 relative z-10">
                  I redesigned highly praised content to be more easily understood and actionable - adding a new layer to guide teachers on how to prioritize their time in the classroom. Old:
                </p>
                <Image
                  alt="Old Vertical Progression"
                  className="w-full h-auto rounded relative z-10"
                  src="/OLD Vertical Progression.png"
                  width={200}
                  height={150}
                />
              </div>

              <div className="absolute bottom-0 -right-8 backdrop-blur-lg p-4 rounded-lg shadow-lg w-1/2 sm:max-w-xs" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <div style={{ backgroundColor: 'rgba(232, 215, 200, 0.3)' }} className="absolute inset-0 rounded-lg"></div>
                <p className="text-sm text-pink-700 mb-3 relative z-10">
                  We learned that teachers primarily trusted other teachers, so I created a simple solution for the community to provide feedback.
                </p>
                <Image
                  alt="Helpful Solution"
                  className="w-full h-auto rounded relative z-10"
                  src="/Helpful Solution.png"
                  width={200}
                  height={100}
                />
              </div>
            </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-white py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div className="text-left">
              <p className="text-base font-normal text-pink-700 mb-6">Outcomes</p>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                An undeniable differentiator in the education market
              </h3>
              <p className="text-base text-gray-700 leading-6">
                Relief! This is what we heard most from teachers, who felt that our concept would free up hours from their busy schedules and come more prepared to help students engage in the classroom.<br /><br /> The success of the project reached Achievement Network&apos;s Board of Directors, who were so impressed it sparked a large company initiative to develop the content needed for a working proof of concept.<br /><br /> Pleased with my work, they hired my agency to do the development work for the project while I continued working with them regularly for two years, earning over 50k in revenue.
              </p>
            </div>
            <div>
              {/* Empty right column for better text wrapping */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="bg-yellow-200 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-3xl lg:text-4xl font-bold text-pink-500 mb-8 max-w-4xl">
              &quot;You&apos;re a very good listener. If only we had been able to work with you full time - the possibilities would have been endless.&quot;
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="text-left">
                <p className="font-semibold text-pink-700 text-lg">Gillian Kradin</p>
                <p className="text-pink-700">Director of Product</p>
                <p className="text-pink-700">Achievement Network, Client</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
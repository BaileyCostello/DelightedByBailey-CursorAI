'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';

export default function ANetLessonPlanning() {


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-14 px-6 lg:px-32">
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
            <p className="text-base text-gray-900 leading-6">
              I led the product design and research for an online resource to help teachers build high quality lesson plans, remediate misunderstandings in the classroom, and support Universal Design for Learning (UDL).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-gray-100 py-8 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              alt="ANet FOCUS - Standards Page"
              className="w-full h-auto rounded-2xl shadow-2xl"
              src="./ANet FOCUS - Standards Page.png"
              width={1200}
              height={800}
            />
          </motion.div>
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
                We discussed a wide range of challenges and quickly saw the burnout. Teachers everywhere struggling to meet unique student needs and keep them engaged during lessons. As themes emerged, we refined our questions to dig deeper into lesson planning. Teachers shared stories of working late into the night, even during their children's sporting events, just to stay prepared. They described gaps in curriculum and the countless hours spent searching for meaningful content online.
              </p>
            </div>
            <div>
              <Image
                alt="Teacher Persona"
                className="w-full h-auto rounded-2xl shadow-lg mb-6"
                src="./ANet Persona.png"
                width={600}
                height={400}
              />
              <p className="text-base text-gray-700 leading-6">
                Meet our persona: I captured our teachers most common shared goals, likes, and pains for quick re-alignment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Text Section */}
      <section className="h-screen flex flex-col justify-center">
        <div className="w-full">
          <div className="overflow-hidden">
            <div className="flex whitespace-nowrap">
              <span className="text-2xl font-bold text-gray-900 mr-8">I used to think ...</span>
              <span className="text-2xl font-bold text-gray-900 mr-8">I used to think ...</span>
              <span className="text-2xl font-bold text-gray-900 mr-8">I used to think ...</span>
            </div>
          </div>
          <div className="overflow-hidden mt-48">
            <div className="flex whitespace-nowrap">
              <span className="text-[128px] font-bold text-gray-900 mr-12">But now I think ...</span>
              <span className="text-[128px] font-bold text-gray-900 mr-12">But now I think ...</span>
              <span className="text-[128px] font-bold text-gray-900 mr-12">But now I think ...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-gray-50 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
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
              As a teacher, I need immediate and actionable resources that I trust to help me address student misunderstandings for content I've recently taught, so that I can adjust instruction and provide individual support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Concept Testing Section */}
      <section className="py-14 px-6 lg:px-32">
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

          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Video Library</h3>
                <p className="text-base text-gray-700 leading-6 text-center">
                  Teachers liked videos, but sometimes reading was faster or they weren't in a place where they could watch a video.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  alt="Video Library Concept"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  src="./ANet Concept 1.png"
                  width={600}
                  height={400}
                />
              </motion.div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:order-1"
              >
                <Image
                  alt="Chat Bot Concept"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  src="./ANet Concept 2.png"
                  width={600}
                  height={400}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Chat Bot Assistant</h3>
                <p className="text-base text-gray-700 leading-6 text-center">
                  Teachers generally didn't care for chatbots, but liked content around student pitfalls and misunderstandings.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Mobile App</h3>
                <p className="text-base text-gray-700 leading-6 text-center">
                  Teachers liked the library of resources, but lesson planning was easiest done on a computer.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  alt="Mobile App Concept"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  src="./ANet Concept 3.png"
                  width={600}
                  height={400}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Further Refinement Section */}
      <section className="bg-gray-50 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Further Refinement</h2>
              <p className="text-base text-gray-700 leading-6 mb-6">
                We continued to tweak the solution for another 5 rounds of feedback.
              </p>
              <p className="text-base text-gray-700 leading-6">
                The only reason we stopped testing was because, after the sixth round of testing, the designs received an incredible response:
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                alt="ANet Hero Image"
                className="w-full h-auto rounded-2xl shadow-lg"
                src="./ANet Hero Image.png"
                width={600}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <blockquote className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-8">
              "I feel like every teacher across the country could use this."
            </blockquote>
            <p className="text-base text-gray-600">
              One of the many delighted teachers we spoke with
            </p>
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
              Every inch of the resource library has intention behind it, thoughtfully inspired by teacher's favorite resources, built for teacher's fast-paced environment, and based on Universal Design for Learning (UDL) to support diverse students who might otherwise fall behind.
            </p>
            <Image
              alt="ANet FOCUS - Standards Page"
              className="w-full h-auto rounded-2xl shadow-2xl"
              src="./ANet FOCUS - Standards Page.png"
              width={1200}
              height={800}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Each section flows naturally with teacher's lesson planning process.
              </h3>
              <p className="text-base text-gray-700 leading-6">
                Teachers lamented over the sea of bad resources online - building trust and quality content was key. They found live classroom videos and content that proactively diagnosed common misunderstandings especially helpful.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                alt="ANet Concept 4"
                className="w-full h-auto rounded-2xl shadow-lg"
                src="./ANet Concept 4.png"
                width={600}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-gray-50 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-base font-normal text-pink-700 mb-6">Outcomes</p>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              An undeniable differentiator in the education market
            </h3>
            <p className="text-base text-gray-700 leading-6">
              Relief! This is what we heard most from teachers, who felt that our concept would free up hours from their busy schedules and come more prepared to help students engage in the classroom. The success of the project reached Achievement Network's Board of Directors, who were so impressed it sparked a large company initiative to develop the content needed for a working proof of concept. Pleased with my work, they hired my agency to do the development work for the project while I continued working with them regularly for two years, earning over 50k in revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <blockquote className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              "You're a very good listener. If only we had been able to work with you full time - the possibilities would have been endless."
            </blockquote>
            <div className="text-base text-gray-600">
              <p className="font-medium">Gillian Kradin</p>
              <p>Director of Product</p>
              <p>Achievement Network, Client</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
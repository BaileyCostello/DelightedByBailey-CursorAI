'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ANLessonPlanningCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Case Study
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              AN Lesson Planning Assistant
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              AI-powered tool that helps educators create engaging lesson plans with 
              personalized recommendations and curriculum alignment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="bg-white px-3 py-1 rounded-full">UX Research</span>
              <span className="bg-white px-3 py-1 rounded-full">Product Design</span>
              <span className="bg-white px-3 py-1 rounded-full">AI Integration</span>
              <span className="bg-white px-3 py-1 rounded-full">Education Technology</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  The AN Lesson Planning Assistant was designed to address the time-consuming 
                  and often overwhelming task of creating effective lesson plans. Teachers 
                  were spending 3-4 hours per week on lesson planning, often feeling 
                  overwhelmed by curriculum requirements and lack of resources.
                </p>
                <p>
                  Our goal was to create an AI-powered tool that would reduce planning time 
                  by 60% while improving lesson quality through personalized recommendations 
                  and curriculum alignment.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Planning Time Reduction</span>
                  <span className="font-bold text-purple-600">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">User Satisfaction</span>
                  <span className="font-bold text-purple-600">4.8/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Adoption Rate</span>
                  <span className="font-bold text-purple-600">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time to First Lesson</span>
                  <span className="font-bold text-purple-600">15 min</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Problem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teachers were struggling with time-consuming lesson planning that often 
              resulted in suboptimal learning experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Time Constraints',
                description: 'Teachers spend 3-4 hours per week on lesson planning, often working late into the evening.',
                icon: '⏰',
              },
              {
                title: 'Resource Overload',
                description: 'Overwhelming amount of curriculum materials and resources to sift through and organize.',
                icon: '📚',
              },
              {
                title: 'Quality Concerns',
                description: 'Rushed planning often leads to less engaging and effective lesson content.',
                icon: '📉',
              },
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
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
              Research & Discovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the needs and pain points of educators through comprehensive research.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">User Interviews</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Insights</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 78% of teachers feel overwhelmed by curriculum requirements</li>
                    <li>• 65% struggle to find relevant resources quickly</li>
                    <li>• 82% want personalized recommendations</li>
                    <li>• 71% prefer visual lesson planning tools</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">User Quotes</h4>
                  <blockquote className="text-gray-600 italic">
                  &quot;We&apos;re constantly putting out fires instead of preventing them.I spend more time planning than actually teaching. I need something that understands my students and curriculum requirements.&quot;
                  </blockquote>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Competitive Analysis</h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Existing Solutions</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>PlanbookEdu</span>
                      <span className="text-yellow-500">★★★☆☆</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Common Curriculum</span>
                      <span className="text-yellow-500">★★★☆☆</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Planboard</span>
                      <span className="text-yellow-500">★★☆☆☆</span>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Opportunity</h4>
                  <p className="text-gray-600">
                    No existing solution combines AI-powered recommendations with 
                    intuitive design and curriculum alignment.
                  </p>
                </div>
              </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An AI-powered lesson planning assistant that combines intelligent recommendations 
              with an intuitive, visual planning interface.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'AI-Powered Recommendations',
                    description: 'Personalized lesson suggestions based on curriculum, student needs, and teaching style.',
                  },
                  {
                    title: 'Visual Planning Interface',
                    description: 'Drag-and-drop lesson builder with timeline visualization and resource management.',
                  },
                  {
                    title: 'Curriculum Alignment',
                    description: 'Automatic alignment with state standards and learning objectives.',
                  },
                  {
                    title: 'Resource Library',
                    description: 'Curated collection of activities, materials, and assessments.',
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="h-4 bg-purple-200 rounded w-3/4"></div>
                    <div className="h-4 bg-purple-200 rounded w-1/2"></div>
                    <div className="h-4 bg-purple-200 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500">
                  AI Lesson Planning Interface
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to creating an intuitive and powerful lesson planning tool.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'User Research',
                description: 'Conducted interviews with 25 teachers to understand pain points and needs.',
              },
              {
                step: '02',
                title: 'Wireframing',
                description: 'Created low-fidelity wireframes to explore different interface approaches.',
              },
              {
                step: '03',
                title: 'Prototyping',
                description: 'Built interactive prototypes to test user flows and interactions.',
              },
              {
                step: '04',
                title: 'Testing & Iteration',
                description: 'Conducted usability testing with 15 teachers and iterated based on feedback.',
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-purple-600 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Results & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AN Lesson Planning Assistant successfully transformed how teachers plan their lessons.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: '60%',
                label: 'Reduction in Planning Time',
                description: 'Teachers now spend 1.5 hours instead of 3-4 hours per week on lesson planning.',
              },
              {
                metric: '4.8/5',
                label: 'User Satisfaction Score',
                description: 'High satisfaction with AI recommendations and interface usability.',
              },
              {
                metric: '85%',
                label: 'Teacher Adoption Rate',
                description: 'Strong adoption rate within the first 3 months of launch.',
              },
              {
                metric: '15 min',
                label: 'Time to First Lesson',
                description: 'Teachers can create their first lesson plan in just 15 minutes.',
              },
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{result.metric}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.label}</h3>
                <p className="text-gray-600 text-sm">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link
              href="/work/"
              className="flex items-center text-indigo-600 hover:text-indigo-700 font-semibold mb-4 sm:mb-0"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to My Work
            </Link>
            <Link
              href="/case-studies/cdg-maintenance"
              className="flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Next Case Study
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

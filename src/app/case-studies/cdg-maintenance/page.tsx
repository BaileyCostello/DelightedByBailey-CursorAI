'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CDGMaintenanceCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Case Study
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              CDG Maintenance Management App
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamlined maintenance workflow system for facility managers to track, 
              schedule, and optimize equipment maintenance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="bg-white px-3 py-1 rounded-full">Enterprise UX</span>
              <span className="bg-white px-3 py-1 rounded-full">Workflow Design</span>
              <span className="bg-white px-3 py-1 rounded-full">Data Visualization</span>
              <span className="bg-white px-3 py-1 rounded-full">Facility Management</span>
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
                  The CDG Maintenance Management App was designed to address the complex 
                  challenges faced by facility managers in tracking and scheduling 
                  equipment maintenance across multiple locations.
                </p>
                <p>
                  Our goal was to create a comprehensive system that would reduce 
                  equipment downtime by 40% and improve maintenance efficiency through 
                  intelligent scheduling and real-time tracking.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Downtime Reduction</span>
                  <span className="font-bold text-blue-600">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Task Completion Rate</span>
                  <span className="font-bold text-blue-600">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">User Efficiency</span>
                  <span className="font-bold text-blue-600">+65%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cost Savings</span>
                  <span className="font-bold text-blue-600">$2.3M</span>
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
              The Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Facility managers were struggling with inefficient maintenance processes 
              that led to equipment failures and increased costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Reactive Maintenance',
                description: 'Equipment failures were addressed only after breakdowns occurred, leading to costly emergency repairs.',
                icon: '⚠️',
              },
              {
                title: 'Poor Visibility',
                description: 'No centralized view of maintenance schedules, equipment status, or technician availability.',
                icon: '👁️',
              },
              {
                title: 'Inefficient Scheduling',
                description: 'Manual scheduling processes resulted in conflicts, missed appointments, and resource waste.',
                icon: '📅',
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
              Understanding the complex workflows and pain points of facility management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">User Research</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Insights</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 73% of maintenance tasks were reactive rather than preventive</li>
                    <li>• 68% of facility managers used spreadsheets for scheduling</li>
                    <li>• 45% of equipment failures could be prevented with proper scheduling</li>
                    <li>• 82% wanted real-time visibility into maintenance status</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">User Quotes</h4>
                  <blockquote className="text-gray-600 italic">
                  &quot;We&apos;re constantly putting out fires instead of preventing them. I need a system that helps me stay ahead of equipment issues.&quot;
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Process Mapping</h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Current Workflow</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Equipment failure reported</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Manual scheduling via phone/email</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Technician dispatched</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Work completed and documented</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Pain Points</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• No preventive maintenance scheduling</li>
                    <li>• Poor communication between teams</li>
                    <li>• Lack of equipment history tracking</li>
                    <li>• Manual reporting and documentation</li>
                  </ul>
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
              A comprehensive maintenance management platform that transforms reactive 
              maintenance into proactive, data-driven operations.
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
                    title: 'Predictive Scheduling',
                    description: 'AI-powered maintenance scheduling based on equipment usage, history, and failure patterns.',
                  },
                  {
                    title: 'Real-time Dashboard',
                    description: 'Centralized view of all maintenance activities, equipment status, and technician locations.',
                  },
                  {
                    title: 'Mobile Technician App',
                    description: 'Field technicians can access work orders, update status, and document completed tasks.',
                  },
                  {
                    title: 'Analytics & Reporting',
                    description: 'Comprehensive insights into maintenance performance, costs, and equipment health.',
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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
                    <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                    <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                    <div className="h-4 bg-blue-200 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500">
                  Maintenance Dashboard Interface
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
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
              A systematic approach to creating an intuitive and powerful maintenance management system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Stakeholder Interviews',
                description: 'Conducted interviews with facility managers, technicians, and maintenance coordinators.',
              },
              {
                step: '02',
                title: 'Information Architecture',
                description: 'Designed the system structure and navigation to support complex workflows.',
              },
              {
                step: '03',
                title: 'Prototyping & Testing',
                description: 'Created interactive prototypes and conducted usability testing sessions.',
              },
              {
                step: '04',
                title: 'Implementation Support',
                description: 'Worked closely with development team to ensure design fidelity and user experience.',
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
                <div className="text-3xl font-bold text-blue-600 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
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
              The CDG Maintenance Management App transformed facility operations and 
              delivered significant business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: '40%',
                label: 'Reduction in Equipment Downtime',
                description: 'Proactive maintenance scheduling prevented equipment failures.',
              },
              {
                metric: '95%',
                label: 'Task Completion Rate',
                description: 'Improved scheduling and communication increased completion rates.',
              },
              {
                metric: '65%',
                label: 'Increase in User Efficiency',
                description: 'Streamlined workflows and better visibility improved productivity.',
              },
              {
                metric: '$2.3M',
                label: 'Annual Cost Savings',
                description: 'Reduced emergency repairs and improved equipment lifespan.',
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
                <div className="text-4xl font-bold text-blue-600 mb-2">{result.metric}</div>
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
              href="/case-studies/an-lesson-planning"
              className="flex items-center text-indigo-600 hover:text-indigo-700 font-semibold mb-4 sm:mb-0"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Case Study
            </Link>
            <Link
              href="/work/"
              className="flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Back to My Work
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

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Work() {
  const projects = [
    {
      id: 'an-lesson-planning',
      title: 'AN Lesson Planning Assistant',
      description: 'AI-powered tool that helps educators create engaging lesson plans with personalized recommendations and curriculum alignment.',
      category: 'Education Technology',
      year: '2024',
      image: '/api/placeholder/600/400',
      link: '/case-studies/an-lesson-planning',
      color: 'from-purple-50 to-pink-50',
      iconColor: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      id: 'cdg-maintenance',
      title: 'CDG Maintenance Management App',
      description: 'Streamlined maintenance workflow system for facility managers to track, schedule, and optimize equipment maintenance.',
      category: 'Enterprise Software',
      year: '2024',
      image: '/api/placeholder/600/400',
      link: '/case-studies/cdg-maintenance',
      color: 'from-blue-50 to-cyan-50',
      iconColor: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              My Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of projects that showcase my approach to user-centered design, 
              strategic thinking, and creative problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={project.link}>
                  <div className={`bg-gradient-to-br ${project.color} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                    <div className="mb-6">
                      <div className={`w-16 h-16 ${project.iconColor} rounded-xl flex items-center justify-center mb-4`}>
                        <svg className={`w-8 h-8 ${project.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500">{project.category}</span>
                        <span className="text-sm font-medium text-gray-500">{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <span className={`${project.textColor} font-semibold group-hover:underline`}>
                        View Case Study →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              My Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project follows a structured approach to ensure we solve the right problems 
              and create meaningful experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Research & Discovery',
                description: 'Understanding user needs, business goals, and technical constraints through interviews, surveys, and competitive analysis.',
              },
              {
                step: '02',
                title: 'Ideation & Strategy',
                description: 'Brainstorming solutions, defining user personas, and creating a strategic roadmap for the design approach.',
              },
              {
                step: '03',
                title: 'Design & Prototyping',
                description: 'Creating wireframes, high-fidelity designs, and interactive prototypes to test and iterate on concepts.',
              },
              {
                step: '04',
                title: 'Testing & Refinement',
                description: 'Conducting usability testing, gathering feedback, and refining designs based on user insights.',
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Skills & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for creating exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design</h3>
              <div className="space-y-2">
                {['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Design Systems', 'Accessibility'].map((skill) => (
                  <div key={skill} className="bg-gray-50 rounded-lg px-4 py-2 text-gray-700">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools</h3>
              <div className="space-y-2">
                {['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle', 'InVision', 'Miro'].map((tool) => (
                  <div key={tool} className="bg-gray-50 rounded-lg px-4 py-2 text-gray-700">
                    {tool}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research</h3>
              <div className="space-y-2">
                {['User Interviews', 'Usability Testing', 'A/B Testing', 'Analytics', 'Personas', 'Journey Mapping'].map((skill) => (
                  <div key={skill} className="bg-gray-50 rounded-lg px-4 py-2 text-gray-700">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

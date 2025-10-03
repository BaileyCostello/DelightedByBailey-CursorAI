'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a Senior UX & Product Designer passionate about creating digital experiences 
              that make a real difference in people's lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                My Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  With over 8 years of experience in UX and Product Design, I've had the privilege 
                  of working with startups and Fortune 500 companies to create digital experiences 
                  that users love.
                </p>
                <p>
                  My journey began in graphic design, but I quickly discovered my passion for 
                  understanding human behavior and solving complex problems through design. 
                  This led me to specialize in user experience design, where I could combine 
                  my creative skills with analytical thinking.
                </p>
                <p>
                  Today, I focus on creating products that not only look beautiful but also 
                  solve real problems and bring joy to users' daily lives. I believe great 
                  design happens when we truly understand the people we're designing for.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold text-indigo-600">BC</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Bailey Costello</h3>
                  <p className="text-indigo-600 font-semibold">Senior UX & Product Designer</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    <span className="text-gray-700">8+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">50+ Projects Completed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
                My Design Philosophy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide my approach to design and problem-solving.
              </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'User-Centered Design',
                description: 'Every decision starts with understanding the user. I believe in putting people at the center of the design process.',
                icon: '👥',
              },
              {
                title: 'Simplicity & Clarity',
                description: 'Complex problems require simple solutions. I strive to create intuitive experiences that feel effortless.',
                icon: '✨',
              },
              {
                title: 'Data-Driven Decisions',
                description: 'I combine qualitative insights with quantitative data to make informed design decisions.',
                icon: '📊',
              },
              {
                title: 'Collaborative Approach',
                description: 'Great design happens when diverse perspectives come together. I value teamwork and cross-functional collaboration.',
                icon: '🤝',
              },
              {
                title: 'Continuous Learning',
                description: 'The design field evolves rapidly. I stay curious and continuously learn new tools, methods, and approaches.',
                icon: '📚',
              },
              {
                title: 'Impact & Purpose',
                description: 'I focus on creating designs that make a meaningful difference in people\'s lives and business outcomes.',
                icon: '🎯',
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
              Experience & Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey and educational background.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h3>
              <div className="space-y-8">
                {[
                  {
                    title: 'Senior UX Designer',
                    company: 'TechCorp',
                    period: '2022 - Present',
                    description: 'Leading design for enterprise products, managing a team of 3 designers, and driving design system development.',
                  },
                  {
                    title: 'UX Designer',
                    company: 'StartupXYZ',
                    period: '2020 - 2022',
                    description: 'Designed mobile and web applications for a fast-growing startup, working closely with product and engineering teams.',
                  },
                  {
                    title: 'Product Designer',
                    company: 'DesignStudio',
                    period: '2018 - 2020',
                    description: 'Created user interfaces and experiences for various clients across healthcare, finance, and e-commerce industries.',
                  },
                ].map((job, index) => (
                  <div key={index} className="border-l-4 border-indigo-200 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
                    <p className="text-indigo-600 font-medium">{job.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{job.period}</p>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Education & Certifications</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Master of Design',
                    institution: 'Stanford University',
                    year: '2018',
                    description: 'Focus on Human-Computer Interaction and Design Thinking',
                  },
                  {
                    title: 'Bachelor of Fine Arts',
                    institution: 'Art Institute of California',
                    year: '2016',
                    description: 'Graphic Design and Digital Media',
                  },
                  {
                    title: 'Certified Usability Analyst',
                    institution: 'Human Factors International',
                    year: '2019',
                    description: 'Professional certification in usability testing and user research',
                  },
                ].map((edu, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900">{edu.title}</h4>
                    <p className="text-indigo-600 font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fun Facts About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A few things that make me who I am beyond design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { fact: 'Coffee Cups Per Day', value: '3-4', icon: '☕' },
              { fact: 'Design Books Read', value: '50+', icon: '📚' },
              { fact: 'Countries Visited', value: '15', icon: '✈️' },
              { fact: 'Languages Spoken', value: '3', icon: '🗣️' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">{item.value}</div>
                <div className="text-gray-600">{item.fact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

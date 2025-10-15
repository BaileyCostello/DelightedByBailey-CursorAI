'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CDGMaintenanceCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f1f3f5] py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6">
              Driving Operations Most Valued Metric, Efficiency
            </h1>
            <p className="text-sm text-[#a40047] font-normal leading-6 mb-6">
              Maintenance Management App, CMMS Data Group
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[rgba(222,207,213,0.88)] text-[#63082b] px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[14px] text-nowrap whitespace-pre">Technical</span>
              <span className="bg-[rgba(222,207,213,0.88)] text-[#63082b] px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[14px] text-nowrap whitespace-pre">UX Design</span>
              <span className="bg-[rgba(222,207,213,0.88)] text-[#63082b] px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[14px] text-nowrap whitespace-pre">Research</span>
              <span className="bg-[rgba(222,207,213,0.88)] text-[#63082b] px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[14px] text-nowrap whitespace-pre">Team Management</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After Images */}
      <section className="py-16 bg-[#f1f3f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex flex-col">
              <div className="bg-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden mb-4 relative" style={{ aspectRatio: '3/4' }}>
                <img 
                  src="/Flat-iPad.png" 
                  alt="iPad device frame"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <video 
                  src="/CDG App Before .mp4" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center center', clipPath: 'inset(24px 54px 80px 54px)', transform: 'translateY(-24px)' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <p className="text-gray-500">
                <span className="font-bold">Before:</span> A blank canvas, created by a single developer
              </p>
            </div>
            <div className="flex flex-col">
              <div className="bg-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden mb-4 relative" style={{ aspectRatio: '3/4' }}>
                <img 
                  src="/Flat-iPad.png" 
                  alt="iPad device frame"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[68%] h-[81%] relative overflow-hidden rounded-2xl -translate-y-11">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/CDG Movie.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <p className="text-gray-500">
                <span className="font-bold">After:</span> A simple app that conforms neatly into technicians workflows, saves time, and improves response rates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#a40047] text-lg mb-4">Overview</p>
              <p className="text-[#2c3441] text-lg leading-relaxed">
                My client&apos;s SaaS solution for managing maintenance team&apos;s work in warehouses, hospitals, and municipalities was second to none for their feature-rich desktop app, but they consistently lost deals to buyers reliant on the complimentary mobile app for technicians.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-[#a40047] text-lg mb-4">Goals</p>
              <div className="space-y-4 text-[#2c3441] text-lg leading-relaxed">
                <p>
                  <span className="font-bold">Convert sales and build trust in buyers</span> who didn&apos;t trust the mobile app&apos;s quality or usability
                </p>
                <p>
                  <span className="font-bold">Increase adoption</span> so that maintenance teams can leverage the timesaving, efficient workflow that the mobile app enabled
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role Highlights Section */}
      <section className="py-20 bg-[#e8d7c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-[#2c3441] text-lg mb-2">Role</p>
              <p className="text-[#2c3441]">Lead UX Designer</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-[#2c3441] text-lg mb-2">Tools</p>
              <p className="text-[#2c3441]">Figma, JIRA</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-[#2c3441] text-lg mb-2">Team</p>
              <div className="text-[#2c3441]">
                <p>3 UX Designers,</p>
                <p>1 Business Analyst</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-[#2c3441] text-lg mb-2">Timeline</p>
              <p className="text-[#2c3441]">4 months</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Double Diamond Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#decfd5] text-lg mb-8">Project Phases</p>
            <div className="relative max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#63082b] rounded-lg shadow-lg mb-4"></div>
                  <p className="text-[#faf6f3] text-lg">Discover</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#63082b] rounded-lg shadow-lg mb-4"></div>
                  <p className="text-[#faf6f3] text-lg">Concept</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#63082b] rounded-lg shadow-lg mb-4"></div>
                  <p className="text-[#faf6f3] text-lg">Iterate</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#63082b] rounded-lg shadow-lg mb-4"></div>
                  <p className="text-[#faf6f3] text-lg">Deliver</p>
                </div>
              </div>
              <div className="flex justify-center space-x-8 mt-4">
                <div className="bg-[#a40047] border border-[#2f0616] rounded-full px-4 py-2">
                  <p className="text-[#faf6f3] text-sm">Test</p>
                </div>
                <div className="bg-[#a40047] border border-[#2f0616] rounded-full px-4 py-2">
                  <p className="text-[#faf6f3] text-sm">Build</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Discovery Workshops Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#a40047] text-lg mb-4">Discovery Workshops</p>
            <p className="text-[#2c3441] text-lg mb-8">
              I designed probing, structured conversations to effectively steer group discussions through a user-centric lens.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">User Research</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">Personas</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">User Flow</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">Wireframes</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Workshop Goals</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Identify the primary users of the app</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Understand usage, needs, and pain points</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Architect the app around their processes</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Explore scenarios and fill in missing details</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Identify the most critical and painful points in their workflow</h4>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Workshop Outcomes</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Build mutual understanding of concepts</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Experiment with ideas</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quickly shape the bones of the app</h4>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <img 
                  src="/CDG Wireframes.png" 
                  alt="Wireframes showing the app structure"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* On-site & Usability Testing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#a40047] text-lg mb-4">On-site & Usability Testing</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              I was invited to visit one of the most efficient operations in the country
            </h2>
            <p className="text-xl text-[#2c3441] max-w-3xl">
              An American Eagle distribution center, boasting 97.3% efficiency and our client&apos;s biggest champion of the app.
            </p>
            <p className="text-lg text-[#2c3441] mt-4">
              Previously unplanned, I organized our team to take full advantage of meeting the technicians and performed moderated usability testing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <img 
                  src="/CDG Usability Testing Image.png" 
                  alt="Usability testing in progress"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <img 
                  src="/CDG Usability Testing.JPG" 
                  alt="Testing session with technicians"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                We tested the principle workflow, where 4 of 5 technicians completed it with little to no help
              </h3>
              <div className="space-y-4 text-lg text-[#2c3441]">
                <p>
                  Keeping consistent terminology helped technicians adjust to the updates, while we vastly improved the find-ability of options and the flexibility to jump between steps.
                </p>
                <p>
                  Their initial aversion to change dissipated and feedback turned to finding important information. As a result, we highlighted and restructured content.
                </p>
              </div>
              
              <div className="mt-8">
                <img 
                  src="/Flat-iPad.png" 
                  alt="iPad showing the app interface"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#a40047] text-lg mb-4">Solution</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              A comprehensive mobile app that streamlines maintenance workflows
            </h2>
            <p className="text-xl text-[#2c3441] max-w-3xl">
              The solution focused on creating an intuitive mobile experience that technicians could easily adopt and use in their daily workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <img 
                src="/CDG Solution Mockup 1.png" 
                alt="Dashboard view of the mobile app"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Clean, intuitive dashboard showing work orders, progress tracking, and quick actions for technicians.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <img 
                src="/CDG Solution Mockup 2.png" 
                alt="Parts and tools management"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Parts & Tools</h3>
              <p className="text-gray-600 text-sm">
                Easy access to required parts and tools with inventory tracking and availability status.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <img 
                src="/CDG Solution Mockup 3.png" 
                alt="Work order details and tracking"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Work Order Details</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive work order information with offline capabilities and real-time updates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#a40047] text-lg mb-6">Outcomes</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Existing customers expressed excitement, and prospective buyers viewed the updates as a clear competitive advantage
              </h2>
              <div className="space-y-6 text-lg text-[#2c3441]">
                <p>
                  The project was delivered on time and under budget, which created room for usability testing. While development is still underway, the testing brought confidence to the solution&apos;s effectiveness and projected outcomes:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-bold text-gray-900">8–12% increase in new sales year over year</span>
                    <span className="text-gray-500 ml-2">based on SaaS conversion benchmarks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-900">15–25% uplift in adoption amongst existing customers</span>
                    <span className="text-gray-500 ml-2">based on Userpilot&apos;s product adoption benchmarks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-900">30–90 seconds saved per work order</span>
                    <span className="text-gray-500 ml-2">Roughly one work week saved per technician annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-gray-900">~1.5x faster emergency response</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="/CDG Login Held.png" 
                alt="Mobile app login screen showing the final design"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-20 bg-[#e8d7c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <blockquote className="text-3xl lg:text-4xl font-bold text-[#fb006d] mb-8 max-w-4xl mx-auto">
              &quot;We were highly impressed with Bailey&apos;s communication, thoroughness, and willingness to collaborate. The process was fun, and it was energizing to work with her.&quot;
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-left">
                <p className="font-semibold text-[#a40047] text-lg">Alexis Lellios</p>
                <p className="text-[#a40047]">Product Manager</p>
                <p className="text-[#a40047]">CMMS Data Group, Client</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link
              href="https://baileycostello.github.io/DelightedByBailey-CursorAI/case-studies/an-lesson-planning"
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

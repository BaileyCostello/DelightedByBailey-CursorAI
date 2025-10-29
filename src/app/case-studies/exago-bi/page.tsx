'use client';

import { motion } from 'framer-motion';
// import img from 'next/image';

export default function ExagoBI() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gray-100 pt-32 lg:pt-26 pb-14 px-6 lg:px-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-8"
          >
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Improving Usability to Drive Sales
            </h1>
            <p className="text-sm text-pink-700 font-normal leading-6 mb-6">
              Data Reporting Tool, Exago BI
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">UX Design</span>
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Technical</span>
              <span className="bg-pink-800/16 px-2 pt-1 pb-0.5 rounded-lg font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[1.7] text-[#63082b] text-[14px] text-nowrap whitespace-pre">Research</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-4xl">
              <img
                alt="Exago AR Preview Screen"
                className="w-full h-auto rounded-xl"
                src="/Advanced Reports/Exago AR Preview Screen.png"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Overview and Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="text-base font-normal text-pink-700 mb-6">Overview</p>
                <p className="text-base text-gray-700 leading-6">
                  After a year-long lull in sales, the CEO decided to make a dramatic change to the roadmap, dropping everything to elevate core product offerings, including Exago&apos;s most valuable and best selling report building platform.
                </p>
              </div>
              <div>
                <p className="text-base font-normal text-pink-700 mb-6 mt-12">Goals</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-base text-yellow-900 leading-6">
                      Make the sales evaluation process more effective and address buyer concerns to secure deals
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-base text-yellow-900 leading-6">
                      Improve the usability such that first-time users could build a simple report without guidance
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Right Column - Sales Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="bg-white border border-gray-200 p-8 rounded-2xl mb-6">
                <img
                  alt="New Sales and Maintenance Revenue by Year"
                  className="w-full h-auto rounded-xl"
                  src="/Advanced Reports/NewSalesAndMaintenanceRevenueByYear.png"
                />
              </div>
              <p className="text-base text-gray-500 leading-6">
                2018 and 2019 were Exago&apos;s best years for gaining new clients, but that momentum crashed in 2020.
              </p>
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
              <p className="text-base text-gray-700">Product Designer</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools</h3>
              <p className="text-base text-gray-700">Figma, Zoom, Google Drive</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team</h3>
              <p className="text-base text-gray-700">1 Product Manager<br />5 Developers<br />1 Sales Engineer</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h3>
              <p className="text-base text-gray-700">8 months</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="bg-yellow-200 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center gap-1">
                <div className="bg-pink-800 px-4 py-2 rounded-full">
                  <span className="text-base font-normal text-yellow-50">1</span>
                </div>
                <span className="text-base font-normal text-pink-700">Research</span>
              </div>
              <div className="w-[104px] h-px bg-red-300"></div>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-yellow-50 px-4 py-2 rounded-full">
                  <span className="text-base font-normal text-pink-800">2</span>
                </div>
                <span className="text-base font-normal text-pink-700">Design</span>
              </div>
              <div className="w-[104px] h-px bg-red-300"></div>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-yellow-50 px-4 py-2 rounded-full">
                  <span className="text-base font-normal text-pink-800">3</span>
                </div>
                <span className="text-base font-normal text-pink-700">Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interviews Section */}
      <section className="bg-white py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-base font-normal text-pink-700 mb-6">Interviews</p>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                We spoke with sales and customer-facing colleagues
              </h3>
              <p className="text-base text-gray-700 leading-6">
                To identify different kinds of buyers, their needs, responsibilities, and frustrations. We cross referenced our notes with the projects overall goals to narrow our target audience down to two distinct personas:
              </p>
            </motion.div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="bg-white pt-0 pb-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 p-6 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  alt="Persona 1"
                  className="w-full h-auto rounded-xl"
                  src="/Advanced Reports/Persona 1.png"
                />
                <img
                  alt="Persona 2"
                  className="w-full h-auto rounded-xl"
                  src="/Advanced Reports/Persona 2.png"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Discovery Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-base text-gray-700 leading-6 max-w-3xl mb-8">
              I met with Exago&apos;s senior sales engineer to understand what was causing people to say no to Exago&apos;s report creation tool. During our conversation, two unforgiving comments stood out and summarized the first problem well:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <blockquote className="text-xl font-semibold text-gray-900 mb-6">
                &quot;There&apos;s an immediate negative reaction when sales introduces the advanced report designer to prospects.&quot;
              </blockquote>
              <p className="text-base text-gray-600">
                Nick Avossa<br />
                Senior Sales Engineer
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <blockquote className="text-xl font-semibold text-gray-900 mb-6">
                &quot;This looks like the product we&apos;re trying to leave - if it hadn&apos;t been updated in 3 years.&quot;
              </blockquote>
              <p className="text-base text-gray-600">
                One buyer during a sales call
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outdated Interface Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-base text-gray-700 leading-6">
                These comments weren&apos;t all that surprising; the tool&apos;s style hadn&apos;t been updated since it&apos;s inception in 2006.<br /><br />
                It was, however, surprising to hear that more than half of lost deals specifically mentioned the outdated interface as one of the reasons they chose a competitor over Exago.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 p-8 rounded-2xl">
                <img
                  alt="The outdated report builder interface, circa 2006"
                  className="w-full h-auto rounded-xl"
                  src="/Advanced Reports/Exago 2006.png"
                />
              </div>
              <p className="text-base text-gray-500 leading-6 mt-4">
                The outdated report builder interface, circa 2006
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-base font-normal text-pink-700 mb-6">User Journey</p>
            <p className="text-base text-gray-700 leading-6 mb-8">
              Next, I asked Nick to walk me through the entire buyer&apos;s journey and point out where the biggest issues arose.
            </p>
          </motion.div>

          <div className="mb-8">
            <div className="bg-gray-100 p-8 rounded-2xl">
              <img
                alt="Buyers Journey"
                className="w-full h-auto rounded-xl"
                src="/Advanced Reports/Buyers Journey.png"
              />
            </div>
          </div>

          <p className="text-base text-gray-700 leading-6 max-w-4xl">
            The sales evaluation process suffered from drop-off at two key points:
            <ul className="list-disc list-outside mt-4 mb-4 space-y-2 ml-6">
              <li>Buyers trying to build their first report, especially when they went ahead of the sales team and tried it without guidance</li>
              <li>Internal demos, where buyers tried to convince the business to allocate budget</li>
            </ul>
            These efforts quickly devolved into frustration and distrust with the salesperson, making buyers skeptical that they, let alone their organization, could get value out of the product.
          </p>
        </div>
      </section>

      {/* Usability Testing Section */}
      <section className="bg-gray-50 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-base font-normal text-pink-700 mb-6">Internal Usability Testing</p>
              <p className="text-base text-gray-700 leading-6">
                After establishing that usability was very low, I wanted to know exactly where people were stumbling throughout this process. To test this, I organized usability testing. The sessions highlighted unhelpful, unintuitive workflows and difficulties navigating the interface. At this point, we were armed with a clear direction for what to address under our limited timeline.
              </p>
            </motion.div>
            <div>
              {/* Empty right column for better text wrapping */}
            </div>
          </div>
        </div>
      </section>

      {/* Design Phase */}
      <section className="bg-yellow-200 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center gap-1">
                <div className="bg-yellow-50 px-4 py-2 rounded-full">
                  <span className="text-base font-normal text-pink-800">1</span>
                </div>
                <span className="text-base font-normal text-pink-700">Research</span>
              </div>
              <div className="w-[104px] h-px bg-red-300"></div>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-pink-800 px-4 py-2 rounded-full">
                  <span className="text-base font-normal text-yellow-50">2</span>
                </div>
                <span className="text-base font-normal text-pink-700">Design</span>
              </div>
              <div className="w-[104px] h-px bg-red-300"></div>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-yellow-50 px-4 py-2 rounded-full">
                  <span className="text-base font-normal text-pink-800">3</span>
                </div>
                <span className="text-base font-normal text-pink-700">Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Fresh Coat of Paint Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-base font-normal text-pink-700 mb-6">A Fresh Coat of Paint</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-stretch">
            <div className="flex flex-col">
              <div className="bg-gray-100 p-8 rounded-2xl h-full flex flex-col">
                <img
                  alt="Before: The outdated report builder interface, circa 2006"
                  className="w-full h-auto rounded-xl flex-1 object-contain"
                  src="/Advanced Reports/OldARGrid.png"
                />
              </div>
                <p className="text-base text-gray-500 leading-6 mt-4 min-h-[3rem]">
                  <span className="font-bold">Before:</span> The outdated report builder interface, circa 2006
                </p>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-100 p-8 rounded-2xl h-full flex flex-col">
                <img
                  alt="After: A cleaner, more breathable look that maintained it&apos;s core structure for long time existing users"
                  className="w-full h-auto rounded-xl flex-1 object-contain"
                  src="/Advanced Reports/NewARGrid.png"
                />
              </div>
                <p className="text-base text-gray-500 leading-6 mt-4 min-h-[3rem]">
                  <span className="font-bold">After:</span> A cleaner, more breathable look that maintained it&apos;s core structure for long time existing users. I also introduced signifiers for previously hidden, important actions that user&apos;s failed to find during usability testing.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fast and Familiar Interaction Design Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-base font-normal text-pink-700">Fast and Familiar Interaction Design</p>
          </motion.div>

          <p className="text-base text-gray-700 leading-6 max-w-4xl mb-8">
            According to Jakob&apos;s Law, users spend most of their time on other sites and therefore prefer your site to work the same way. We updated interactions to behave more predictably by mirroring Microsoft Excel and Google Sheets, further easing the learning curve.
          </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-stretch">
              <div>
                <div className="bg-gray-100 p-8 rounded-2xl h-full flex flex-col">
                  <img
                    alt="AR Grid Interaction"
                    className="w-full h-auto rounded-xl flex-1 object-contain"
                    src="/Advanced Reports/ARGridInteraction.gif"
                  />
                </div>
              </div>
              <div>
                <div className="bg-gray-100 p-8 rounded-2xl h-full flex flex-col">
                  <img
                    alt="AR Drag Interaction"
                    className="w-full h-auto rounded-xl flex-1 object-contain"
                    src="/Advanced Reports/ARDragInteraction.gif"
                  />
                </div>
              </div>
            </div>

        </div>
      </section>

      {/* Clean and Responsive Report Viewing Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-base font-normal text-pink-700">Clean and Responsive Report Viewing</p>
          </motion.div>

          <p className="text-base text-gray-700 leading-6 max-w-4xl mb-8">
            The highest-traffic page needed to be simple and flexible for all users.
          </p>

          <div className="mb-8">
            <div className="bg-gray-100 p-8 rounded-2xl">
              <img
                alt="Responsive Report Viewer"
                className="w-full h-auto rounded-xl"
                src="/Advanced Reports/ResponsiveReportViewer.gif"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Egregious Points of Friction Section */}
      <section className="bg-gray-50 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-base font-normal text-pink-700 mb-6">3 Egregious Points of Friction</p>
          </motion.div>

          {/* The Forced Wizard Workflow */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">The Forced Wizard Workflow</h3>
            <p className="text-base text-gray-700 leading-6 mb-8 max-w-4xl">
              When someone clicked Create New Report, they expected to start playing with a new shiny reporting toy, but instead were thrown into an unexpected workflow that killed momentum. We stripped the 5 step wizard down to a single dialog, <span className="font-bold">saving people an estimated 17 seconds every time they build a report.</span>
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col">
                <div className="bg-gray-100 p-8 rounded-2xl h-full flex flex-col">
                  <img
                    alt="Before: A bloated, 5-step process that disoriented users."
                    className="w-full h-auto rounded-xl flex-1 object-contain"
                    src="/Advanced Reports/ARWizard.png"
                  />
                </div>
                <p className="text-base text-gray-500 leading-6 mt-4">
                  <span className="font-bold">Before:</span> A bloated, 5-step process that disoriented users.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="bg-gray-100 p-8 rounded-2xl h-full flex flex-col">
                  <img
                    alt="After: A simpler dialog that builds anticipation for the next screen."
                    className="w-full h-auto rounded-xl flex-1 object-contain"
                    src="/Advanced Reports/ARDialog.png"
                  />
                </div>
                <p className="text-base text-gray-500 leading-6 mt-4">
                  <span className="font-bold">After:</span> A simpler dialog that builds anticipation for the next screen.
                </p>
              </div>
            </div>
          </div>

          {/* Desire Path Blocked by an Error State */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Desire Path Blocked by an Error State</h3>
            <p className="text-base text-gray-700 leading-6 mb-8 max-w-4xl">
              New and experienced users alike would run into an annoying error over and over, indicating a &quot;desire path.&quot;
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <img
                    alt="Desire Paths: Good design accounts for the fastest or most common path for users to get from A to B."
                    className="w-full h-auto rounded-xl"
                    src="/Advanced Reports/Desire Path.png"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    alt="Happy Path: The ideal user journey that follows the intended design flow."
                    className="w-full h-auto rounded-xl"
                    src="/Advanced Reports/Happy Path.png"
                  />
                </div>
                <p className="text-base text-gray-500 leading-6">
                  <span className="font-bold">Desire Paths:</span> Good design accounts for the fastest or most common path for users to get from A to B.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="bg-gray-100 px-8 py-6 rounded-2xl h-full flex flex-col">
                  <img
                    alt="Updated Flow: We couldn&apos;t fully eliminate the step, but integrated it into the workflow and prevented the error."
                    className="w-full h-auto rounded-xl flex-1 object-contain max-w-md mx-auto"
                    src="/Advanced Reports/New and Old Workflow.png"
                  />
                </div>
                <p className="text-base text-gray-500 leading-6 mt-4">
                  <span className="font-bold">Updated Flow:</span> We couldn&apos;t fully eliminate the step, but integrated it into the workflow and prevented the error.
                </p>
              </div>
            </div>
          </div>

          {/* The Information Architecture */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">The Information Architecture</h3>
            <p className="text-base text-gray-700 leading-6 mb-8 max-w-4xl">
              People struggled to locate options - I watched many users hover over every single icon in the toolbar before finding what they were looking for.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col">
                <div className="bg-gray-100 p-8 rounded-2xl h-full flex flex-col">
                  <img
                    alt="Before: The most important options were hidden under a single icon."
                    className="w-full h-auto rounded-xl flex-1 object-contain"
                    src="/Advanced Reports/Old Information Architecture Cog.png"
                  />
                </div>
                <p className="text-base text-gray-500 leading-6 mt-4 min-h-[3rem]">
                  <span className="font-bold">Before:</span> The most important options were hidden under a single icon.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="bg-gray-100 p-8 rounded-2xl h-full flex flex-col">
                  <img
                    alt="2nd Iteration: I surfaced options people use for nearly every report and introduced labels to make the toolbar easy to scan."
                    className="w-full h-auto rounded-xl flex-1 object-contain"
                    src="/Advanced Reports/PreliminaryIA.png"
                  />
                </div>
                <p className="text-base text-gray-500 leading-6 mt-4 min-h-[3rem]">
                  <span className="font-bold">2nd Iteration:</span> I surfaced options people use for nearly every report and introduced labels to make the toolbar easy to scan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Click Testing Section */}
      <section className="bg-gray-50 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-base font-normal text-pink-700 mb-6">First Click Testing</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-base text-gray-700 leading-6 mb-4">
                Sensitive to those with years of muscle memory, I was determined to test toolbar changes with existing users - despite having no allocated time for it.
              </p>
              <p className="text-base text-gray-700 leading-6 mb-8">
                I was handed the perfect opportunity, a chance to present at Exago&apos;s client conference.
              </p>
              <p className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                In 4 hours total, I achieved testing with 20+ clients and the highest rated presentation of 8 speakers.
              </p>
              <p className="text-base text-gray-500 leading-6">
                Based on a post-conference survey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 p-8 rounded-2xl">
                <div className="flex flex-col gap-6">
                  <img
                    alt="The conference was over zoom that year due to the pandemic, so I leveraged annotated screenshots and zoom polling to collect responses, then used the report designer itself to analyze and share the test results."
                    className="w-full h-auto rounded-xl"
                    src="/Advanced Reports/IATest.png"
                  />
                  <img
                    alt="First Click Test Summary showing test results"
                    className="w-full h-auto rounded-xl"
                    src="/Advanced Reports/FirstClickTestSummary.png"
                  />
                </div>
              </div>
              <p className="text-base text-gray-500 leading-6 mt-4">
                The conference was over zoom that year due to the pandemic, so I leveraged annotated screenshots and zoom polling to collect responses, then used the report designer itself to analyze and share the test results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Phase */}
      <section className="bg-yellow-200 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center gap-1">
                <div className="bg-yellow-50 px-4 py-2 rounded-full">
                  <span className="text-base font-normal text-pink-800">1</span>
                </div>
                <span className="text-base font-normal text-pink-700">Research</span>
              </div>
              <div className="w-[104px] h-px bg-red-300"></div>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-yellow-50 px-4 py-2 rounded-full">
                  <span className="text-base font-normal text-pink-800">2</span>
                </div>
                <span className="text-base font-normal text-pink-700">Design</span>
              </div>
              <div className="w-[104px] h-px bg-red-300"></div>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-pink-800 px-4 py-2 rounded-full">
                  <span className="text-base font-normal text-yellow-50">3</span>
                </div>
                <span className="text-base font-normal text-pink-700">Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-yellow-200 py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <img
              alt="The final design with key usability enhancements implemented."
                  className="w-full h-auto rounded-xl"
              src="/Advanced Reports/Exago Solution.png"
            />
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-base font-normal text-pink-700 mb-6">Outcomes</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                Fewer questions during sales calls, reduced support tickets, and more upgrades.
              </h3>
              <p className="text-base text-gray-700 leading-6 mb-6">
                Nick noticed buyers stopped having a severe negative reaction to the interface, but people still needed at least some training to use the tool effectively. The usability improvements helped, but weren&apos;t quite enough for first timers to build a realistic report without help.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                alt="Exago AR Preview Screen showing the final solution"
                className="w-full h-auto rounded-xl"
                src="/Advanced Reports/Exago AR Preview Screen.png"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sales Numbers Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                <img
                  alt="New Sales and Maintenance Revenue by Quarter"
                  className="w-full h-auto rounded-xl"
                  src="/Advanced Reports/NewSalesAndMaintenanceRevenueByQuarter.png"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="text-base font-normal text-pink-700 mb-6">Sales Numbers</p>
              <p className="text-lg text-gray-700 leading-7">
                We released these improvements in Q1 of 2021, but by Q3, Exago was acquired. We can only look at the first two quarters, where Q1 and Q2 had better results than 2020 and were comparable to Exago&apos;s best years - indicating that we were poised for a great year in sales.
              </p>
              <p className="text-base text-gray-500 leading-6">
                This data is unfortunately not enough to qualify the project&apos;s impact, nor does it tell the story of outside factors - like turnover in the sales department, the COVID-19 pandemic, and fluctuations in the BI market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Success Metrics Section */}
      <section className="py-14 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-base font-normal text-pink-700 mb-6">Customer Excitement</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Reduction in Support Tickets</h4>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">18</span>
                    <span className="text-base text-gray-600 ml-2">%</span>
                  </div>
                  <p className="text-base text-gray-600">for usability related support tickets</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Upgrades to the Newest Release</h4>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">14</span>
                    <span className="text-base text-gray-600 ml-2">of 80 clients</span>
                  </div>
                  <p className="text-base text-gray-600">3.5x more than previous release</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-end"
            >
              <p className="text-base text-gray-500 leading-6">
                14 upgrades sounds small, but this indicated a huge leap in improvements. The process is painful, resource intensive, and can take up to a year to accomplish. The usability updates, along with one other big feature helped drive this result.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

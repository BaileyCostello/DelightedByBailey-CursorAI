'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';

export default function Work() {

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-white px-6 lg:px-32 pt-10 pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-semibold text-black leading-none">
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
            <p className="text-4xl font-semibold text-gray-900 leading-tight order-1 lg:hidden">
              Helping Teachers Reclaim Time to Focus on Student Outcomes
            </p>

            {/* Mobile Layout - Image */}
            <div className="order-2 lg:hidden overflow-visible">
              <Image
                alt="ANet FOCUS - Standards Page"
                className="w-full h-auto"
                src="./ANet FOCUS - Standards Page.png"
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
                href="https://baileycostello.github.io/DelightedByBailey-CursorAI/case-studies/an-lesson-planning"
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
                src="./ANet FOCUS - Standards Page.png"
                width={600}
                height={600}
              />
                      </div>

            {/* Desktop Layout - Left Column (Text Content) */}
            <div className="hidden lg:flex flex-col gap-6 py-5 order-1">
              <p className="text-4xl font-semibold text-gray-900 leading-tight">
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
                  href="https://baileycostello.github.io/DelightedByBailey-CursorAI/case-studies/an-lesson-planning"
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
            <p className="text-4xl font-semibold text-gray-900 leading-tight order-1 lg:hidden">
              Driving operations most valued metric - efficiency
            </p>

            {/* Mobile Layout - Image with Video Overlay (appears after title, before badges) */}
            <div className="h-[520px] relative order-2 lg:hidden">
              <div className="relative w-full h-full">
                <Image 
                  alt="CDG iPad Mockup" 
                  className="w-full h-full object-contain object-center" 
                  src="/CDG Mockup.png"
                  width={600}
                  height={520}
                />
                {/* Video Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[68%] h-[81%] relative overflow-hidden rounded-2xl -translate-y-11">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="./CDG Movie.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
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
            <div className="hidden lg:flex flex-col gap-6 py-5 order-1">
              <p className="text-4xl font-semibold text-gray-900 leading-tight">
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

            {/* Desktop Layout - Right Column (Image with Video Overlay) */}
            <div className="hidden lg:block h-[700px] relative order-2">
              <div className="relative w-full h-full">
                <Image 
                  alt="CDG iPad Mockup" 
                  className="w-full h-full object-contain object-center" 
                  src="/CDG Mockup.png"
                  width={700}
                  height={700}
                />
                {/* Video Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[68%] h-[81%] relative overflow-hidden rounded-2xl -translate-y-11">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="./CDG Movie.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
              </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="relative py-32 px-6 lg:px-32">
        <style jsx>{`
          .card {
            transition: transform 0.3s ease;
          }
          .card:hover ~ .card {
            transform: translateX(112px);
          }
          .card:has(~ .card:hover) {
            transform: translateX(-112px);
          }
        `}</style>
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("./Mountains.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left -mb-5 relative z-20"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Throw something new at me
            </h2>
          </motion.div>

          {/* Preview Images Carousel */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            className="relative -mx-6 lg:-mx-32"
          >
            <div 
              className="flex gap-8 animate-scroll-smooth"
              style={{
                width: 'calc(450px * 14 + 32px * 13)' // 7 cards duplicated + 13 gaps
              }}
            >
              {/* First Set of Cards */}
              {/* Dr.Treat Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="Dr.Treat App Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./Dr-Treat-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Pet Telehealth App, Dr.Treat</p>
                  </div>
                </div>
              </div>

              {/* Exago Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="Exago Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./Exago-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Business Intelligence (BI) & Reporting Software, Exago</p>
                  </div>
                </div>
              </div>

              {/* Hanover Research Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="Hanover Research Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./Hanover-Research-Brand-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Brand & Win / Loss Analysis, Hanover Research</p>
                  </div>
                </div>
              </div>

              {/* First Mid Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="First Mid Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./First-Mid-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Accounting Software, First Mid Ag Services</p>
                  </div>
                </div>
              </div>

              {/* Morgan Lewis Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="Morgan Lewis Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./Morgan-Lewis-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Client Matter Resource, Morgan Lewis</p>
                  </div>
                </div>
              </div>

              {/* RISA Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="RISA Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./RISA-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Structural Engineering Software, RISA</p>
                  </div>
                </div>
              </div>

              {/* Survey Platform Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="Survey Platform Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./Hanover-Research-Brand-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Survey Platform, Hanover Research</p>
                  </div>
                </div>
              </div>


              {/* Duplicate Set for Seamless Loop */}
              {/* Dr.Treat Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="Dr.Treat App Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./Dr-Treat-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Pet Telehealth App, Dr.Treat</p>
                  </div>
                </div>
              </div>

              {/* Exago Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="Exago Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./Exago-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Business Intelligence (BI) & Reporting Software, Exago</p>
                  </div>
                </div>
              </div>

              {/* Hanover Research Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="Hanover Research Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./Hanover-Research-Brand-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Brand & Win / Loss Analysis, Hanover Research</p>
                  </div>
                </div>
              </div>

              {/* First Mid Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="First Mid Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./First-Mid-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Accounting Software, First Mid Ag Services</p>
                  </div>
                </div>
              </div>

              {/* Morgan Lewis Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="Morgan Lewis Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./Morgan-Lewis-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Client Matter Resource, Morgan Lewis</p>
                  </div>
                </div>
              </div>

              {/* RISA Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="RISA Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./RISA-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Structural Engineering Software, RISA</p>
                  </div>
                </div>
              </div>

              {/* Survey Platform Preview */}
              <div className="group flex-shrink-0 w-[450px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/20 backdrop-blur-sm h-[400px] px-6 py-5">
                  <Image
                    alt="Survey Platform Preview"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-[1.1] group-hover:z-20 transition-transform duration-300"
                    src="./Hanover-Research-Brand-Preview-Image.png"
                    width={400}
                    height={300}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-left pb-2">
                    <p className="text-sm text-gray-900 whitespace-nowrap font-semibold tracking-wide">Survey Platform, Hanover Research</p>
                  </div>
                </div>
              </div>

              </div>
            </motion.div>

          {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            className="text-left mt-12"
          >
            <Button
              href="/contact/"
              variant="primary"
              size="medium"
              background="light"
              trailingIcon={true}
            >
              Tell Me About Your Project
            </Button>
            </motion.div>
        </div>
      </section>
    </div>
  );
}

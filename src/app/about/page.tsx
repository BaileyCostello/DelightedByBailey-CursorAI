'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import { 
  LightBulbIcon, 
  BeakerIcon, 
  UserGroupIcon, 
  RocketLaunchIcon, 
  HandRaisedIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-white px-6 lg:px-32 pt-10 pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold text-black leading-none">
            About
          </h1>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative h-[500px] px-6 lg:px-32 py-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("./Brooklyn Image.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%',
            backgroundRepeat: 'no-repeat',
            y: y
          }}
        />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="backdrop-blur-sm bg-white/60 px-6 py-3 rounded-2xl">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#a40047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="#a40047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-semibold text-pink-700 text-base">
                Based in Brooklyn, NYC
              </p>
            </div>
            <p className="text-gray-700 text-sm">
              Available for remote work worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#eee2d8] px-6 lg:px-32 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="flex flex-row gap-10 flex-1">
            <div className="flex-1">
              <p className="text-pink-700 text-base mb-4">Experience</p>
              <p className="text-[#63082b] text-4xl font-bold leading-tight">8 Years</p>
            </div>
            <div className="flex-1">
              <p className="text-pink-700 text-base mb-4">Industries</p>
              <p className="text-[#63082b] text-4xl font-bold leading-tight">10+</p>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-pink-700 text-base mb-4">Projects</p>
            <p className="text-[#63082b] text-4xl font-bold leading-tight">30+</p>
          </div>
        </div>
      </section>

      {/* What makes me a great fit & Why my peers love working with me */}
      <section className="bg-[#eee2d8] px-6 lg:px-32 py-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* Left Column - What makes me a great fit */}
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-base font-bold text-black mb-6 pb-4">What makes me a great fit</h2>
            <div className="space-y-4 text-[#2c3441] text-base">
              <p>
                I&apos;m a product-focused designer and ideas person. I believe great design is equal parts creativity, usability, and strategic thinking - and I bring all three to the table.
              </p>
              <p>
                <span className="font-bold">Competitive</span><br />
                I am my mother&apos;s daughter <span className="text-lg">😂</span>. Driven by strategy and differentiation - I love building brands that stand out.
              </p>
              <p>
                <span className="font-bold">Analytical</span><br />
                I love solving usability problems - some of my favorite work is simplifying technical systems that leave room for confusion.
              </p>
              <p>
                <span className="font-bold">Curious</span><br />
                I love learning about unique, sometimes complex industries, business strategies, and how to delight audiences.
              </p>
            </div>
            <div className="mt-6 pt-4">
              <Button 
                href="/contact/" 
                variant="secondary" 
                size="medium"
                trailingIcon={true}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>

          {/* Right Column - Why my peers love working with me */}
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-base font-bold text-black mb-6 pb-4">Why my peers love working with me</h2>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {/* Left Column Cards */}
              <div className="flex flex-col gap-2">
                <div className="bg-[#a40047] p-4 rounded-2xl shadow-lg">
                  <LightBulbIcon className="w-6 h-6 mb-4 text-[#faf6f3]" />
                  <p className="text-[#faf6f3] text-base">Bright Ideas</p>
                </div>
                <div className="bg-[#63082b] p-4 rounded-2xl shadow-lg">
                  <BeakerIcon className="w-6 h-6 mb-4 text-[#faf6f3]" />
                  <p className="text-[#faf6f3] text-base">Lean Research</p>
                </div>
                <div className="bg-[#420920] p-4 rounded-2xl shadow-lg">
                  <FaceSmileIcon className="w-6 h-6 mb-4 text-[#faf6f3]" />
                  <p className="text-[#faf6f3] text-base">Client and Team Relationships</p>
                </div>
              </div>
              
              {/* Right Column Cards */}
              <div className="flex flex-col gap-2">
                <div className="bg-[#63082b] p-4 rounded-2xl shadow-lg">
                  <RocketLaunchIcon className="w-6 h-6 mb-4 text-[#faf6f3]" />
                  <p className="text-[#faf6f3] text-base">Adaptable and Quick Learner</p>
                </div>
                <div className="bg-[#2f0616] p-4 rounded-2xl shadow-lg flex-1 flex flex-col justify-between">
                  <div>
                    <HandRaisedIcon className="w-6 h-6 mb-4 text-[#faf6f3]" />
                    <p className="text-[#faf6f3] text-base">Accessibility</p>
                  </div>
                  <p className="text-[#decfd5] text-sm mt-2">
                    <a 
                      href="https://www.accessibilityassociation.org/cpacc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#decfd5] hover:text-white underline"
                    >
                      Certified Professional in Accessibility Core Competencies (IAAP)
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[#2c3441] text-base">
              <span className="font-bold"> </span>I know because I asked  <span className="text-lg">😉</span>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
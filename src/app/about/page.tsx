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
        <div className="max-w-7xl mx-auto flex gap-10">
          <div className="flex-1">
            <p className="text-pink-700 text-base mb-4">Experience</p>
            <p className="text-[#63082b] text-4xl font-bold leading-tight">8 Years</p>
          </div>
          <div className="flex-1">
            <p className="text-pink-700 text-base mb-4">Industries</p>
            <p className="text-[#63082b] text-4xl font-bold leading-tight">10+</p>
          </div>
        </div>
      </section>

      {/* Industries List */}
      <section className="bg-[#eee2d8] px-6 lg:px-32 py-6 pb-14">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-2 text-gray-700 text-sm">
            <p>B2B / Software as a Service</p>
            <p>Business Intelligence & Data Analytics</p>
            <p>Start Ups</p>
            <p>Marketing & Sales</p>
            <p>Law</p>
            <p>Education</p>
            <p>Accounting, Lending & Banks</p>
            <p>Operations Management</p>
            <p>Travel</p>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="bg-white px-6 lg:px-32 py-14">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black leading-tight mb-10">
            My peers love working with me for my
          </h2>
          
          <div className="grid grid-cols-2 gap-2 mb-10 h-[400px]">
            {/* Left Column */}
            <div className="flex flex-col gap-2">
              <div className="bg-[#64092b] p-4 rounded-2xl shadow-lg flex-1">
                <LightBulbIcon className="w-6 h-6 mb-4 text-[#faf6f3]" />
                <p className="text-[#faf6f3] text-base">Bright Ideas</p>
              </div>
              
              <div className="bg-[#2f0616] p-4 rounded-2xl shadow-lg flex-1">
                <BeakerIcon className="w-6 h-6 mb-4 text-[#faf6f3]" />
                <p className="text-[#faf6f3] text-base">Lean Research</p>
              </div>
              
              <div className="bg-[#2f0616] p-4 rounded-2xl shadow-lg flex-1">
                <FaceSmileIcon className="w-6 h-6 mb-4 text-[#faf6f3]" />
                <p className="text-[#faf6f3] text-base">Client and Team Relationships</p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-2">
              <div className="bg-[#2f0616] p-4 rounded-2xl shadow-lg flex-1">
                <RocketLaunchIcon className="w-6 h-6 mb-4 text-[#faf6f3]" />
                <p className="text-[#faf6f3] text-base">Adaptability</p>
              </div>
              
              <div className="bg-[#2f0616] p-4 rounded-2xl shadow-lg flex-1">
                <HandRaisedIcon className="w-6 h-6 mb-4 text-[#faf6f3]" />
                <p className="text-[#faf6f3] text-base">Accessibility</p>
                <p className="text-[#decfd5] text-sm mt-2">
                  Certified Professional in Accessibility Core Competencies (IAAP)
                </p>
              </div>
            </div>
          </div>
          
          <Button 
            href="/contact" 
            variant="secondary" 
            size="medium"
            trailingIcon={true}
          >
            Let&apos;s Work Together
          </Button>
        </div>
      </section>
    </div>
  );
}
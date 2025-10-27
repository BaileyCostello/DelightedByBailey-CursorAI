'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Button from '@/components/Button';
import {
  LightBulbIcon,
  BeakerIcon,
  RocketLaunchIcon,
  HandRaisedIcon,
  FaceSmileIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardTilts, setCardTilts] = useState({
    brightIdeas: { rotateX: 0, rotateY: 0 },
    leanResearch: { rotateX: 0, rotateY: 0 },
    clientRelationships: { rotateX: 0, rotateY: 0 },
    adaptableLearner: { rotateX: 0, rotateY: 0 },
    accessibility: { rotateX: 0, rotateY: 0 }
  });
  const [cardsInView, setCardsInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [brooklynImageLoaded, setBrooklynImageLoaded] = useState(false);

  // Create refs for each card
  const brightIdeasRef = useRef<HTMLDivElement>(null);
  const leanResearchRef = useRef<HTMLDivElement>(null);
  const clientRelationshipsRef = useRef<HTMLDivElement>(null);
  const adaptableLearnerRef = useRef<HTMLDivElement>(null);
  const accessibilityRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Preload Brooklyn image
  useEffect(() => {
    const img = document.createElement('img');
    img.onload = () => setBrooklynImageLoaded(true);
    img.onerror = () => setBrooklynImageLoaded(true); // Still set to true to avoid infinite loading
    img.src = '/Brooklyn Image.png';
  }, []);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Viewport detection for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Cards are in view when 10% visible
          setCardsInView(entry.intersectionRatio >= 0.1);
        });
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px'
      }
    );

    const currentRef = cardsContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Calculate tilts whenever mouse position changes (only when cards are in view)
  useEffect(() => {
    const calculateTilt = (cardRef: React.RefObject<HTMLDivElement | null>) => {
      if (!cardRef.current) return { rotateX: 0, rotateY: 0 };
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = mousePosition.x - centerX;
      const deltaY = mousePosition.y - centerY;
      
      // Simple calculation with stronger multiplier - no constraints
      const rotateX = (deltaY / rect.height) * -5; // Slightly stronger tilt
      const rotateY = (deltaX / rect.width) * 5; // Slightly stronger tilt
      
      return { rotateX, rotateY };
    };

    if (!cardsInView) {
      // Reset tilts when cards are not in view
      setCardTilts({
        brightIdeas: { rotateX: 0, rotateY: 0 },
        leanResearch: { rotateX: 0, rotateY: 0 },
        clientRelationships: { rotateX: 0, rotateY: 0 },
        adaptableLearner: { rotateX: 0, rotateY: 0 },
        accessibility: { rotateX: 0, rotateY: 0 }
      });
      return;
    }

    const newTilts = {
      brightIdeas: calculateTilt(brightIdeasRef),
      leanResearch: calculateTilt(leanResearchRef),
      clientRelationships: calculateTilt(clientRelationshipsRef),
      adaptableLearner: calculateTilt(adaptableLearnerRef),
      accessibility: calculateTilt(accessibilityRef)
    };
    
    setCardTilts(newTilts);
  }, [mousePosition, cardsInView]);


  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-white px-6 lg:px-32 pt-32 lg:pt-26 pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold text-black leading-none">
            About
            </h1>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative h-[500px] px-6 lg:px-32 py-20 overflow-hidden">
        {!brooklynImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-500">Loading...</div>
          </div>
        )}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/Brooklyn Image.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%',
            backgroundRepeat: 'no-repeat',
            y: y,
            opacity: brooklynImageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
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

      {/* KPI Section & Why my peers love working with me */}
      <section className="bg-[#eee2d8] px-6 lg:px-32 py-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* Left Column - KPI Section */}
          <div className="flex-1 order-1 lg:order-1">
            <div className="space-y-8">
              {/* First Row - Experience and Industries */}
              <div className="flex flex-row gap-10">
                <div className="flex-1">
                  <p className="text-pink-700 text-base mb-4">Experience</p>
                  <p className="text-[#63082b] text-4xl font-bold leading-tight">8 Years</p>
                </div>
                <div className="flex-1 relative">
                  <p className="text-pink-700 text-base mb-4">Industries</p>
                  <p className="text-[#63082b] text-4xl font-bold leading-tight">15+</p>
                  <button
                    onClick={() => setShowIndustries(!showIndustries)}
                    className="flex items-center gap-1 text-pink-700 text-sm underline hover:text-pink-800 transition-colors mt-2"
                  >
                    {showIndustries ? 'Hide Industries' : 'Show Industries'}
                    {showIndustries ? (
                      <ChevronUpIcon className="w-4 h-4" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4" />
                    )}
                  </button>
                  
                  {/* Industries Dropdown - Absolute positioned to not affect layout */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: showIndustries ? 'auto' : 0,
                      opacity: showIndustries ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute top-full left-0 right-0 z-10 overflow-hidden"
                  >
                    <div className="pt-4 bg-[#eee2d8]">
                      <div className="flex flex-col gap-2 text-sm text-[#63082b]">
                        <div>B2B / SaaS</div>
                        <div>B2C</div>
                        <div>Start Ups</div>
                        <div>BI & Data Analytics</div>
                        <div>Marketing & Sales</div>
                        <div>Law</div>
                        <div>Education</div>
                        <div>Accounting, Lending & Banks</div>
                        <div>Operations & Management</div>
                        <div>Travel</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Second Row - Projects */}
              <div className="lg:py-10">
                <p className="text-pink-700 text-base mb-4">Projects</p>
                <p className="text-[#63082b] text-4xl font-bold leading-tight">30+</p>
              </div>
              
              {/* Let's Talk Button */}
              <div className="mt-6 pt-4 lg:block hidden">
                <Button 
                  href="/contact/" 
                  variant="secondary" 
                  size="medium"
                  trailingIcon={true}
                >
                  Let&apos;s Talk
                </Button>
              </div>
              
              {/* Mobile padding for industries dropdown space - only when expanded */}
              <motion.div
                className="lg:hidden"
                initial={false}
                animate={{
                  height: showIndustries ? 120 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              />
            </div>
          </div>

          {/* Right Column - Why my peers love working with me */}
          <div className="flex-1 order-2 lg:order-2">
            <h2 className="text-base font-bold text-black mb-6 pb-4">Why my peers love working with me</h2>
            <div ref={cardsContainerRef} className="grid grid-cols-2 gap-2 mb-4">
              {/* Left Column Cards */}
              <div className="flex flex-col gap-2">
                <motion.div 
                  ref={brightIdeasRef}
                  className="bg-[#a40047] p-4 rounded-2xl shadow-lg relative overflow-hidden"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: isDesktop ? `perspective(1000px) rotateX(${cardTilts.brightIdeas.rotateX}deg) rotateY(${cardTilts.brightIdeas.rotateY}deg) scale(1.02)` : 'none',
                    boxShadow: isDesktop ? `${Math.sin(cardTilts.brightIdeas.rotateY * Math.PI / 180) * 20}px ${Math.sin(cardTilts.brightIdeas.rotateX * Math.PI / 180) * 20}px ${20 + Math.abs(cardTilts.brightIdeas.rotateX) + Math.abs(cardTilts.brightIdeas.rotateY)}px rgba(0, 0, 0, 0.3)` : '0 10px 25px rgba(0, 0, 0, 0.3)',
                    transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out"
                  }}
                >
                  <LightBulbIcon className="w-6 h-6 mb-4 text-[#faf6f3] relative z-10" />
                  <p className="text-[#faf6f3] text-base relative z-10">Bright Ideas</p>
          </motion.div>
                <motion.div 
                  ref={leanResearchRef}
                  className="bg-[#63082b] p-4 rounded-2xl shadow-lg relative overflow-hidden"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: isDesktop ? `perspective(1000px) rotateX(${cardTilts.leanResearch.rotateX}deg) rotateY(${cardTilts.leanResearch.rotateY}deg) scale(1.02)` : 'none',
                    boxShadow: isDesktop ? `${Math.sin(cardTilts.leanResearch.rotateY * Math.PI / 180) * 20}px ${Math.sin(cardTilts.leanResearch.rotateX * Math.PI / 180) * 20}px ${20 + Math.abs(cardTilts.leanResearch.rotateX) + Math.abs(cardTilts.leanResearch.rotateY)}px rgba(0, 0, 0, 0.3)` : '0 10px 25px rgba(0, 0, 0, 0.3)',
                    transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out"
                  }}
                >
                  <BeakerIcon className="w-6 h-6 mb-4 text-[#faf6f3] relative z-10" />
                  <p className="text-[#faf6f3] text-base relative z-10">Lean Research</p>
                </motion.div>
                <motion.div 
                  ref={clientRelationshipsRef}
                  className="bg-[#420920] p-4 rounded-2xl shadow-lg relative overflow-hidden"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: isDesktop ? `perspective(1000px) rotateX(${cardTilts.clientRelationships.rotateX}deg) rotateY(${cardTilts.clientRelationships.rotateY}deg) scale(1.02)` : 'none',
                    boxShadow: isDesktop ? `${Math.sin(cardTilts.clientRelationships.rotateY * Math.PI / 180) * 20}px ${Math.sin(cardTilts.clientRelationships.rotateX * Math.PI / 180) * 20}px ${20 + Math.abs(cardTilts.clientRelationships.rotateX) + Math.abs(cardTilts.clientRelationships.rotateY)}px rgba(0, 0, 0, 0.3)` : '0 10px 25px rgba(0, 0, 0, 0.3)',
                    transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out"
                  }}
                >
                  <FaceSmileIcon className="w-6 h-6 mb-4 text-[#faf6f3] relative z-10" />
                  <p className="text-[#faf6f3] text-base relative z-10">Client and Team Relationships</p>
                </motion.div>
              </div>
              
              {/* Right Column Cards */}
              <div className="flex flex-col gap-2">
                <motion.div 
                  ref={adaptableLearnerRef}
                  className="bg-[#63082b] p-4 rounded-2xl shadow-lg relative overflow-hidden"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: isDesktop ? `perspective(1000px) rotateX(${cardTilts.adaptableLearner.rotateX}deg) rotateY(${cardTilts.adaptableLearner.rotateY}deg) scale(1.02)` : 'none',
                    boxShadow: isDesktop ? `${Math.sin(cardTilts.adaptableLearner.rotateY * Math.PI / 180) * 20}px ${Math.sin(cardTilts.adaptableLearner.rotateX * Math.PI / 180) * 20}px ${20 + Math.abs(cardTilts.adaptableLearner.rotateX) + Math.abs(cardTilts.adaptableLearner.rotateY)}px rgba(0, 0, 0, 0.3)` : '0 10px 25px rgba(0, 0, 0, 0.3)',
                    transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out"
                  }}
                >
                  <RocketLaunchIcon className="w-6 h-6 mb-4 text-[#faf6f3] relative z-10" />
                  <p className="text-[#faf6f3] text-base relative z-10">Adaptable and Quick Learner</p>
            </motion.div>
                <motion.div 
                  ref={accessibilityRef}
                  className="bg-[#2f0616] p-4 rounded-2xl shadow-lg flex-1 flex flex-col justify-between relative overflow-hidden"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: isDesktop ? `perspective(1000px) rotateX(${cardTilts.accessibility.rotateX}deg) rotateY(${cardTilts.accessibility.rotateY}deg) scale(1.02)` : 'none',
                    boxShadow: isDesktop ? `${Math.sin(cardTilts.accessibility.rotateY * Math.PI / 180) * 20}px ${Math.sin(cardTilts.accessibility.rotateX * Math.PI / 180) * 20}px ${20 + Math.abs(cardTilts.accessibility.rotateX) + Math.abs(cardTilts.accessibility.rotateY)}px rgba(0, 0, 0, 0.3)` : '0 10px 25px rgba(0, 0, 0, 0.3)',
                    transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out"
                  }}
                >
                  <div className="relative z-10">
                    <HandRaisedIcon className="w-6 h-6 mb-4 text-[#faf6f3]" />
                    <p className="text-[#faf6f3] text-base">Accessibility</p>
                  </div>
                  <p className="text-[#decfd5] text-sm mt-2 relative z-10">
                    <a 
                      href="https://www.accessibilityassociation.org/cpacc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#decfd5] hover:text-white underline"
                    >
                      Certified Professional in Accessibility Core Competencies (IAAP)
                    </a>
                  </p>
                </motion.div>
              </div>
          </div>
            <p className="text-[#63082b] text-base">
              <span className="font-bold"> </span>I know because I asked  <span className="text-lg">😉</span>
            </p>
            
            {/* Mobile Let's Talk Button */}
            <div className="lg:hidden mt-6 pt-4">
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
        </div>
      </section>

    </div>
  );
}
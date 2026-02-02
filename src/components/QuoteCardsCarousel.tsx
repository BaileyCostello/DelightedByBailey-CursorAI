'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, PanInfo } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Quote {
  photo: string;
  quote: string;
  signature: string;
  subtext: string;
}

const quotes: Quote[] = [
  {
    photo: '/Gillian Photo.png',
    quote: "You're a very good listener. If only we had been able to work with you full time - the possibilities would have been endless.",
    signature: 'Gillian Kradin',
    subtext: 'Director of Product at Achievement Network'
  },
  {
    photo: '/AAgoado Photo.png',
    quote: "Bailey is the perfect blend of humble and opinionated. Any company would be lucky to have her.",
    signature: 'Alex Agoado',
    subtext: 'VP of Product at Exago'
  },
  {
    photo: '/Tom Photo.png',
    quote: "Bailey has a real gift for helping stakeholders find alignment - even when things are unclear or complex. It's one of the most critical aspects of the job and watching her naturally do that is always impressive.",
    signature: 'Tom McClean',
    subtext: 'UX & Design Lead at DOOR3'
  },
  {
    photo: '/Alexis Photo.png',
    quote: "We were highly impressed with Bailey's communication, thoroughness, and willingness to collaborate. The process was fun, and it was energizing to work with her.",
    signature: 'Alexis Lellios',
    subtext: 'Product Manager at CMMS Data Group'
  },
  {
    photo: '/Fede Photo.png',
    quote: "Bailey is someone you can count on when difficult challenges come up. Her mix of design skills, leadership, and computer science background makes her a genuinely well-rounded designer.",
    signature: 'Fede Fernandez Nunez',
    subtext: 'Senior User Experience Designer at DOOR3'
  }
];

export default function QuoteCardsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const cardWidth = 400;
  const cardWidthMobile = 350;
  const gap = 32;
  const gapMobile = 24;
  const totalScrollDistance = (quotes.length - 1) * (cardWidth + gap);
  const totalScrollDistanceMobile = (quotes.length - 1) * (cardWidthMobile + gapMobile);
  
  // Mobile drag state
  const xMobile = useMotionValue(0);
  const xMobileSpring = useSpring(xMobile, { damping: 50, stiffness: 150 });
  
  // Track scroll progress through the wrapper (desktop only)
  // Only use scroll when mounted and on desktop to avoid hydration issues
  const { scrollYProgress } = useScroll({
    target: isMounted && isDesktop ? scrollWrapperRef : undefined,
    offset: ["start start", "end start"]
  });
  
  // Convert vertical scroll progress to horizontal x position (desktop only)
  const xRaw = useTransform(scrollYProgress, [0.03, 0.69], [0, -totalScrollDistance]);
  const x = useSpring(xRaw, { damping: 30, stiffness: 200 });
  
  // Update focused index based on scroll progress (desktop) or drag position (mobile)
  useEffect(() => {
    if (isMobile) {
      const unsubscribe = xMobileSpring.on('change', (latest) => {
        // Calculate which card is centered based on drag position
        const cardIndex = Math.round(-latest / (cardWidthMobile + gapMobile));
        const clampedIndex = Math.min(Math.max(0, cardIndex), quotes.length - 1);
        setFocusedIndex(clampedIndex);
      });
      return () => unsubscribe();
    } else if (isDesktop) {
      const unsubscribe = scrollYProgress.on('change', (latest) => {
        const scaledProgress = Math.min(Math.max((latest - 0.03) / (0.69 - 0.03), 0), 1);
        const index = Math.floor(scaledProgress * quotes.length);
        const clampedIndex = Math.min(Math.max(0, index), quotes.length - 1);
        setFocusedIndex(clampedIndex);
      });
      return () => unsubscribe();
    }
  }, [scrollYProgress, xMobileSpring, isMobile, isDesktop]);

  // Detect screen size and handle hydration
  useEffect(() => {
    setIsMounted(true);
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 900);
      setIsMobile(width < 900);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle drag end for mobile - snap to nearest card with velocity consideration
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!isMobile) return;
    
    const currentX = xMobile.get();
    const velocity = info.velocity.x;
    const velocityThreshold = 380; // Slightly lower so a lighter swipe advances one card (was 500)
    const progress = -currentX / (cardWidthMobile + gapMobile);
    // Slight bias (0.1) so you don't need to drag full 50% to snap to next card
    const snapBias = 0.1;
    
    let cardIndex: number;
    
    // If there's significant velocity, move one card in that direction
    if (Math.abs(velocity) > velocityThreshold) {
      const currentIndex = Math.floor(progress + snapBias);
      const clampedCurrent = Math.min(Math.max(0, currentIndex), quotes.length - 1);
      if (velocity < 0) {
        // Dragging left (negative velocity) = moving to next card
        cardIndex = Math.min(clampedCurrent + 1, quotes.length - 1);
      } else {
        // Dragging right (positive velocity) = moving to previous card
        cardIndex = Math.max(clampedCurrent - 1, 0);
      }
    } else {
      // No significant velocity, snap to nearest card (bias makes next card easier to reach)
      cardIndex = Math.round(progress + snapBias);
    }
    
    const clampedIndex = Math.min(Math.max(0, cardIndex), quotes.length - 1);
    const targetX = -clampedIndex * (cardWidthMobile + gapMobile);
    
    xMobile.set(targetX);
    setFocusedIndex(clampedIndex);
  };

  // Render placeholder for ref during SSR/initial mount to prevent hydration errors
  if (!isMounted) {
    return <div ref={scrollWrapperRef} style={{ height: '1px', overflow: 'hidden', position: 'absolute', visibility: 'hidden' }} aria-hidden="true" />;
  }

  return (
    <>
      {/* Desktop/Tablet: Scroll transform behavior */}
      {isDesktop ? (
        <div 
          ref={scrollWrapperRef} 
          style={{ 
            height: '364vh',
            position: 'relative'
          }}
        >
          <div 
            ref={containerRef}
            className="sticky top-0 left-0 right-0 h-screen w-full flex flex-col justify-center overflow-x-hidden bg-yellow-200 z-10"
            style={{
              transition: 'transform 0.3s ease-out',
              willChange: 'transform'
            }}
          >
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-32">
              {/* Section Header */}
              <motion.h2
                ref={headerRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-[36px] font-bold text-black leading-tight mb-12"
              >
                Why People <span className="text-pink-500">Love</span>
                <br />
                Working With Me
              </motion.h2>
              
              <motion.div
                className="flex gap-8 items-center"
                style={{
                  x: x,
                }}
              >
                {quotes.map((quote, index) => {
                  const isFocused = focusedIndex === index;
                  
                  return (
                    <motion.div
                      key={index}
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      className="flex-shrink-0 w-[400px] bg-gray-50 rounded-2xl p-6 flex flex-col min-h-[464px]"
                      style={{
                        backgroundColor: isFocused ? '#E8CEBE' : '#F9FAFB',
                        transition: 'background-color 0.15s ease'
                      }}
                    >
                      {/* Photo */}
                      <div className="mb-4 flex justify-start">
                        <div className="w-[64px] h-[64px] rounded-full overflow-hidden">
                          <Image
                            src={quote.photo}
                            alt={quote.signature}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                        </div>
                      </div>

                      {/* Quote */}
                      <p
                        className="text-[24px] font-normal leading-[120%] text-black mb-4 flex-1 self-stretch"
                        style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif', textAlign: 'left' }}
                      >
                        {quote.quote}
                      </p>

                      {/* Signature */}
                      <p
                        className="text-[28px]"
                        style={{ fontFamily: '"Oooh Baby", cursive' }}
                      >
                        {quote.signature}
                      </p>

                      {/* Subtext */}
                      <p className="text-base text-gray-600">
                        {quote.subtext}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Mobile: Manual drag/swipe behavior */}
      {!isDesktop && (
        <div className="py-14 w-full overflow-x-hidden" style={{ maxWidth: '100vw' }}>
          <div className="w-full px-6">
            {/* Section Header */}
            <motion.h2
              ref={headerRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[36px] font-bold text-black leading-tight mb-12"
            >
              Why People <span className="text-pink-500">Love</span>
              <br />
              Working With Me
            </motion.h2>
          </div>
          
          {/* Cards container - full width with overflow hidden for mobile only */}
          <div className="w-full overflow-x-hidden" style={{ maxWidth: '100vw' }}>
            <motion.div
              className="flex items-center"
              drag="x"
              dragConstraints={{
                left: -totalScrollDistanceMobile,
                right: 0
              }}
              dragElastic={0.2}
              dragMomentum={false}
              style={{
                x: xMobileSpring,
                gap: `${gapMobile}px`,
                paddingLeft: '24px', // px-6 = 24px
                paddingRight: '24px',
                width: 'max-content'
              }}
              onDragEnd={handleDragEnd}
            >
              {quotes.map((quote, index) => {
                const isFocused = focusedIndex === index;
                
                return (
                  <motion.div
                    key={index}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="flex-shrink-0 w-[350px] bg-gray-50 rounded-2xl p-6 flex flex-col min-h-[464px]"
                    style={{
                      backgroundColor: isFocused ? '#E8CEBE' : '#F9FAFB',
                      transition: 'background-color 0.15s ease'
                    }}
                  >
                    {/* Photo */}
                    <div className="mb-4 flex justify-start">
                      <div className="w-[64px] h-[64px] rounded-full overflow-hidden">
                        <Image
                          src={quote.photo}
                          alt={quote.signature}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                    </div>

                    {/* Quote */}
                    <p
                      className="text-[24px] font-normal leading-[120%] text-black mb-4 flex-1 self-stretch"
                      style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif', textAlign: 'left' }}
                    >
                      {quote.quote}
                    </p>

                    {/* Signature */}
                    <p
                      className="text-[28px]"
                      style={{ fontFamily: '"Oooh Baby", cursive' }}
                    >
                      {quote.signature}
                    </p>

                    {/* Subtext */}
                    <p className="text-base text-gray-600">
                      {quote.subtext}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}

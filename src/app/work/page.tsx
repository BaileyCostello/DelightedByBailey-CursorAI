'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState, useCallback, useEffect, useRef, type CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import TabButton from '@/components/TabButton';

type GallerySegment = 'enterprise' | 'b2b' | 'consumer';

type GalleryItem = {
  id: string;
  title: string;
  subtext: string;
  segment: GallerySegment;
  image: string;
  logo: string;
  /** Extra classes on the preview <Image> (e.g. scale) while card stays 434px tall. */
  previewImageClassName?: string;
  /** Optional positioning for fill images (merged onto Next/Image; overrides default inset). */
  previewImageStyle?: CSSProperties;
  /** Optional Tailwind classes for the client logo (defaults to max-h-10 sm:max-h-12). */
  logoImageClassName?: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'first-mid',
    title: 'Accounting Platform',
    subtext: 'Banking   |   Enterprise',
    segment: 'enterprise',
    image: '/Gallery/First Mid Preview Image.png',
    logo: '/Gallery/First Mid Logo.png',
  },
  {
    id: 'jupiter',
    title: 'Climate Risk Intelligence',
    subtext: 'Insurance   |   B2B',
    segment: 'b2b',
    image: '/Gallery/Jupiter Preview Image.png',
    logo: '/Gallery/Jupiter Logo.png',
  },
  {
    id: 'evojets',
    title: 'Private Jet Chartering App',
    subtext: 'Travel   |   Consumer',
    segment: 'consumer',
    image: '/Gallery/EvoJets Preview Image.png',
    logo: '/Gallery/EvoJets Logo.png',
    previewImageClassName: 'scale-[1.14]',
    previewImageStyle: { inset: '30px 0 0 -1px' },
  },
  {
    id: 'risa',
    title: 'Structural Design Platform',
    subtext: 'Engineering   |   B2B',
    segment: 'b2b',
    image: '/Gallery/RISA Preview Image.png',
    logo: '/Gallery/RISA logo.png',
    previewImageClassName: 'scale-[1.07]',
    logoImageClassName: 'max-h-8 sm:max-h-9 w-auto object-contain object-right',
  },
  {
    id: 'arnold-porter',
    title: 'Corporate Intranet',
    subtext: 'Legal   |   Enterprise',
    segment: 'enterprise',
    image: '/Gallery/ASpace Preview Image.png',
    logo: '/Gallery/Arnold & Porter Logo.png',
  },
  {
    id: 'hanover-market',
    title: 'Market Research Intelligence',
    subtext: 'Sales & Marketing   |   B2B',
    segment: 'b2b',
    image: '/Gallery/Hanover Research Brand Preview Image.png',
    logo: '/Gallery/Hanover Research Logo.png',
  },
  {
    id: 'dr-treat',
    title: 'Personalized Veterinary Services',
    subtext: 'Health Tech   |   Consumer',
    segment: 'consumer',
    image: '/Gallery/Dr Treat Preview Image.png',
    logo: '/Gallery/Dr.Treat Logo.png',
  },
  {
    id: 'exago',
    title: 'Reporting & Dashboard Platform',
    subtext: 'Data Analytics   |   B2B',
    segment: 'b2b',
    image: '/Gallery/Exago Preview Image.png',
    logo: '/Gallery/Exago.png',
  },
  {
    id: 'morgan-lewis',
    title: 'Client Matter Intelligence',
    subtext: 'Legal   |   Enterprise',
    segment: 'enterprise',
    image: '/Gallery/Morgan Lewis Preview Image.png',
    logo: '/Gallery/Morgan Lewis Logo.png',
  },
  {
    id: 'hanover-survey',
    title: 'Survey Research Platform',
    subtext: 'Data Analytics   |   B2B',
    segment: 'b2b',
    image: '/Gallery/Hanover Research Survey Platform Preview Image.png',
    logo: '/Gallery/Hanover Research Logo.png',
  },
  {
    id: 'voluntime',
    title: 'Student Volunteering App',
    subtext: 'Lifestyle   |   Consumer',
    segment: 'consumer',
    image: '/Gallery/VolunTIME Preview Image.png',
    logo: '/Gallery/VoluntTIME Keeper Logo.png',
  },
];

const FILTERS: { key: 'all' | GallerySegment; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'enterprise', label: 'Enterprise' },
  { key: 'b2b', label: 'B2B' },
  { key: 'consumer', label: 'Consumer' },
];

/** Max vertical drift (px) for each column while the gallery section crosses the viewport (Dann Petty–style). */
const GALLERY_PARALLAX_SHIFT = 185;

function GalleryCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}) {
  return (
    <article className="flex h-[434px] flex-col rounded-[20px] bg-white p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="flex min-h-0 flex-1 flex-col text-left cursor-pointer group"
      >
        <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-2xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className={`object-contain object-center ${item.previewImageClassName ?? ''}`}
            style={item.previewImageStyle}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="mt-3 shrink-0 flex items-end justify-between gap-4 pt-1">
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-neutral-900 leading-snug">{item.title}</h2>
            <p className="text-sm text-neutral-500 mt-1 whitespace-pre-wrap">{item.subtext}</p>
          </div>
          <div className="shrink-0 flex items-center justify-end w-[100px] sm:w-[120px] h-10 sm:h-12 relative">
            <Image
              src={item.logo}
              alt=""
              width={120}
              height={48}
              className={
                item.logoImageClassName ??
                'max-h-10 sm:max-h-12 w-auto object-contain object-right'
              }
            />
          </div>
        </div>
      </button>
    </article>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<'all' | GallerySegment>('all');
  const [modal, setModal] = useState<{ src: string; alt: string; label: string } | null>(null);
  const gallerySectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: gallerySectionRef,
    offset: ['start end', 'end start'],
  });

  const leftColumnY = useTransform(
    scrollYProgress,
    [0, 1],
    [GALLERY_PARALLAX_SHIFT, -GALLERY_PARALLAX_SHIFT],
  );
  const rightColumnY = useTransform(
    scrollYProgress,
    [0, 1],
    [-GALLERY_PARALLAX_SHIFT, GALLERY_PARALLAX_SHIFT],
  );

  const visibleItems = useMemo(() => {
    if (filter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.segment === filter);
  }, [filter]);

  const openModal = useCallback((item: GalleryItem) => {
    setModal({ src: item.image, alt: item.title, label: `${item.title} — ${item.subtext}` });
  }, []);

  const closeModal = useCallback(() => setModal(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (modal) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [modal, closeModal]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] overflow-x-hidden">
      <section className="bg-white px-6 lg:px-32 pt-[216px] lg:pt-[216px] pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold text-gray-900 leading-none mb-8">Gallery</h1>

          <div className="flex flex-wrap gap-3">
            {FILTERS.map(({ key, label }) => (
              <TabButton key={key} selected={filter === key} onClick={() => setFilter(key)}>
                {label}
              </TabButton>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={gallerySectionRef}
        className="relative left-[-1px] mt-[30px] px-6 lg:px-32 py-10"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-6 sm:hidden">
                {visibleItems.map((item) => (
                  <GalleryCard key={item.id} item={item} onOpen={openModal} />
                ))}
              </div>
              <div className="hidden sm:flex gap-6 lg:gap-8">
                <motion.div
                  className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-8 will-change-transform"
                  style={{ y: prefersReducedMotion ? 0 : leftColumnY }}
                >
                  {visibleItems
                    .filter((_, i) => i % 2 === 0)
                    .map((item) => (
                      <GalleryCard key={item.id} item={item} onOpen={openModal} />
                    ))}
                </motion.div>
                <motion.div
                  className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-8 pt-[114px] will-change-transform"
                  style={{ y: prefersReducedMotion ? 0 : rightColumnY }}
                >
                  {visibleItems
                    .filter((_, i) => i % 2 === 1)
                    .map((item) => (
                      <GalleryCard key={item.id} item={item} onOpen={openModal} />
                    ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {visibleItems.length === 0 && (
            <p className="text-neutral-500 text-center py-16">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <section className="bg-black text-white py-16 sm:py-20 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight max-w-xl">
            Throw something new at me, I&apos;m listening.
          </h2>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center shrink-0 rounded-full bg-[#E8C4B8] px-10 py-3.5 text-base font-semibold text-neutral-900 hover:bg-[#ddb4a8] transition-colors duration-200"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      {modal && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 px-4"
          onClick={closeModal}
          role="presentation"
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-20 right-6 sm:right-12 text-white hover:text-neutral-300 transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 max-w-[90vw] text-center">
            <p className="text-white text-lg font-semibold whitespace-pre-wrap">{modal.label}</p>
          </div>
          <div
            className="mt-24 max-w-[min(90vw,1200px)] max-h-[min(75vh,800px)] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            <Image
              src={modal.src}
              alt={modal.alt}
              width={1200}
              height={900}
              className="max-w-full max-h-[min(75vh,800px)] w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

interface KPI {
  value: string;
  label: string;
}

interface CaseStudyCardProps {
  previewImage: string;
  previewImageAlt: string;
  companyLogo: string;
  companyLogoAlt: string;
  title: string;
  subtitle: string;
  kpis: KPI[];
  href: string;
  graphicOverlay?: string;
  graphicOverlayAlt?: string;
  index: number;
}

export default function CaseStudyCard({
  previewImage,
  previewImageAlt,
  companyLogo,
  companyLogoAlt,
  title,
  subtitle,
  kpis,
  href,
  graphicOverlay,
  graphicOverlayAlt,
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-gray-50 rounded-[24px] p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Left Column - Preview Image and Logo */}
        <div className="flex flex-col justify-between">
          {/* Preview Image Container - Centered vertically */}
          <div className="relative w-full flex-1 flex justify-center items-center mb-4">
            <div className="relative w-full max-w-full flex justify-center items-center">
              <Image
                src={previewImage}
                alt={previewImageAlt}
                width={600}
                height={400}
                className="h-auto object-contain mx-auto"
                style={{ 
                  maxHeight: '560px',
                  ...(graphicOverlay && {
                    paddingLeft: '16px',
                    paddingRight: '16px'
                  }),
                  ...(previewImage.includes('Exago') && {
                    paddingTop: '24px',
                    paddingBottom: '24px'
                  })
                }}
                unoptimized
              />
              {/* Graphic Overlay (for ANet) */}
              {graphicOverlay && (
                <div className="absolute bottom-0 right-0 flex justify-end">
                  <Image
                    src={graphicOverlay}
                    alt={graphicOverlayAlt || ''}
                    width={200}
                    height={200}
                    className="w-auto h-auto object-contain max-w-[50%] md:max-w-[40%]"
                    unoptimized
                  />
                </div>
              )}
            </div>
          </div>
          {/* Company Logo - 20% smaller on mobile, aligned to bottom */}
          <div className="flex items-end">
            <div className="scale-80 md:scale-100 origin-bottom-left">
              <Image
                src={companyLogo}
                alt={companyLogoAlt}
                width={132}
                height={34}
                className="w-auto object-contain"
                style={{ maxHeight: '34px', maxWidth: '132px' }}
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Right Column - Title, Subtitle, KPIs, Button */}
        <div className="flex flex-col justify-center">
          {/* Title */}
          <h3 className="text-[36px] font-bold text-black mb-3 leading-[1.1] md:leading-tight">
            {title}
          </h3>
          
          {/* Subtitle */}
          <p className="text-[16px] text-gray-600 mb-6">
            {subtitle}
          </p>

          {/* KPIs - 2 columns for 2 or fewer KPIs, 3 columns for 3+ KPIs on desktop, max 2 per row on mobile */}
          <div className={`grid gap-6 mb-6 auto-rows-fr ${kpis.length <= 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
            {kpis.map((kpi, kpiIndex) => (
              <motion.div
                key={kpiIndex}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + (kpiIndex * 0.1),
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col"
              >
                <span className="text-[30px] md:text-[36px] font-bold text-pink-500 leading-tight mb-1">
                  {kpi.value}
                </span>
                <span className="text-[16px] text-pink-700 leading-tight">
                  {kpi.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-3">
            <Button
              href={href}
              variant="secondary"
              size="medium"
              background="light"
              trailingIcon={true}
            >
              Read Case Study
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

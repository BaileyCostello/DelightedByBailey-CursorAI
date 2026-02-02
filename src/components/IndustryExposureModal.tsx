'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const industriesLeft = [
  'B2B / SaaS',
  'B2C',
  'Finance & Accounting',
  'BI & Data Analytics',
  'Operations & Management',
  'Marketing & Sales',
];

const industriesRight = [
  'Education',
  'Travel',
  'Structural Engineering',
  'Healthcare',
  'Insurance',
  'Law',
];

interface IndustryExposureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IndustryExposureModal({ isOpen, onClose }: IndustryExposureModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60"
            onClick={onClose}
            aria-hidden="true"
          />
          {/* Desktop: centered modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[101] hidden md:flex items-center justify-center p-4 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="bg-gray-900 rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-50">Industry Exposure</h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 p-1 text-gray-50 hover:opacity-70 transition-opacity rounded"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <ul className="list-disc list-inside text-base text-gray-50 space-y-1">
                  {industriesLeft.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside text-base text-gray-50 space-y-1">
                  {industriesRight.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-base text-gray-400 mb-8">
                I pride myself on my ability to quickly adapt to new landscapes - I simply ask the right questions and stay relentlessly curious.
              </p>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-full text-base font-semibold bg-yellow-200 text-red-800 hover:bg-yellow-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
          {/* Mobile: slide up from bottom */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[101] md:hidden pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="bg-gray-900 rounded-t-2xl shadow-xl max-h-[85vh] overflow-y-auto px-6 pt-6 pb-8 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-50">Industry Exposure</h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 p-1 text-gray-50 hover:opacity-70 transition-opacity rounded"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <ul className="list-disc list-inside text-base text-gray-50 space-y-1">
                  {industriesLeft.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside text-base text-gray-50 space-y-1">
                  {industriesRight.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-base text-gray-400 mb-8">
                I pride myself on my ability to quickly adapt to new landscapes - I simply ask the right questions and stay relentlessly curious.
              </p>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full px-6 py-3 rounded-full text-base font-semibold bg-yellow-200 text-red-800 hover:bg-yellow-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

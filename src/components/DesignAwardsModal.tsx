'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const awards = [
  {
    award: 'W3 Award',
    project: 'Website Redesign',
    client: 'Retrievr',
    url: 'https://www.w3award.com/winners/gallery/?event=1064&search=door3&id=268002',
  },
  {
    award: 'Web Excellence Award',
    project: 'Student Performance App',
    client: 'Achievement Network',
    url: 'https://we-awards.com/winner/myanet-performance-tab/',
  },
  {
    award: 'GDUSA',
    project: 'Pet Telehealth App',
    client: 'Dr. Treat',
    url: 'https://gdusa.com/competitions/health-wellness-design/?current_year=2022&section=gallery&section_id=0',
  },
];

interface DesignAwardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DesignAwardsModal({ isOpen, onClose }: DesignAwardsModalProps) {
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
                <h2 className="text-2xl font-bold text-gray-50">Design Awards</h2>
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
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="text-base font-bold text-gray-50 pb-3 pr-4">Award</th>
                      <th className="text-base font-bold text-gray-50 pb-3 pr-4">Project</th>
                      <th className="text-base font-bold text-gray-50 pb-3 pr-4">Client</th>
                      <th className="text-base font-bold text-gray-50 pb-3 w-10 text-right"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {awards.map((row) => (
                      <tr key={row.award} className="align-middle">
                        <td className="text-base text-gray-50 py-2 pr-4">{row.award}</td>
                        <td className="text-base text-gray-50 py-2 pr-4">{row.project}</td>
                        <td className="text-base text-gray-50 py-2 pr-4">{row.client}</td>
                        <td className="text-base text-gray-50 py-2 w-10 text-right align-middle">
                          <a
                            href={row.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-8 h-8 rounded text-gray-400 hover:bg-gray-800 hover:text-gray-50 transition-colors"
                            aria-label={`Open ${row.award} in new tab`}
                          >
                            <span className="material-symbols-outlined text-[20px] leading-none">open_in_new</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
                <h2 className="text-2xl font-bold text-gray-50">Design Awards</h2>
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
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="text-base font-bold text-gray-50 pb-3 pr-4">Award</th>
                      <th className="text-base font-bold text-gray-50 pb-3 pr-4">Project</th>
                      <th className="text-base font-bold text-gray-50 pb-3 pr-4">Client</th>
                      <th className="text-base font-bold text-gray-50 pb-3 w-10 text-right"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {awards.map((row) => (
                      <tr key={row.award} className="align-middle">
                        <td className="text-base text-gray-50 py-2 pr-4">{row.award}</td>
                        <td className="text-base text-gray-50 py-2 pr-4">{row.project}</td>
                        <td className="text-base text-gray-50 py-2 pr-4">{row.client}</td>
                        <td className="text-base text-gray-50 py-2 w-10 text-right align-middle">
                          <a
                            href={row.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-8 h-8 rounded text-gray-400 hover:bg-gray-800 hover:text-gray-50 transition-colors"
                            aria-label={`Open ${row.award} in new tab`}
                          >
                            <span className="material-symbols-outlined text-[20px] leading-none">open_in_new</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

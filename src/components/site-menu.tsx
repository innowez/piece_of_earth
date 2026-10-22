'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu } from './generated/Menu';

export function SiteMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-[45px] lg:w-[172px] h-12 shrink-0 overflow-hidden origin-center bg-transparent border-none p-0 cursor-pointer"
      >
        <svg
          viewBox="-1.25 -1.25 30.5 16.5"
          preserveAspectRatio="none"
          className="absolute lg:left-[calc(50%_-_15.25px_+_48px)] top-[35.417%] w-[30.5px] h-[calc(29.167%_+_2.5px)] [transform:scaleX(-1)]"
        >
          <motion.line
            x1={28}
            y1={14}
            animate={open ? { x1: 6, y1: 15, x2: 22, y2: -1 } : { x1: 28, y1: 14, x2: 12, y2: 14 }}
            x2={12}
            y2={14}
            stroke="#6d440c"
            strokeWidth={2.5}
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            transition={{ duration: 0.32, ease: 'easeInOut' }}
          />
          <motion.line
            x1={28}
            y1={0}
            animate={open ? { x1: 6, y1: -1, x2: 22, y2: 15 } : { x1: 28, y1: 0, x2: 0, y2: 0 }}
            x2={0}
            y2={0}
            stroke="#6d440c"
            strokeWidth={2.5}
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            transition={{ duration: 0.32, ease: 'easeInOut' }}
          />
        </svg>
      </motion.button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="fixed inset-0 z-[100] flex">
                {/* Backdrop / Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 bg-black/45 backdrop-blur-[2px]"
                  aria-hidden="true"
                />

                {/* Left Drawer Panel */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                  className="relative z-10 w-[85vw] max-w-[380px] sm:max-w-[420px] h-[100dvh] shadow-2xl flex flex-col bg-[#f3e8d5] border-r border-[#6d440c]/20"
                >
                  <Menu onClose={() => setOpen(false)} />
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

export default SiteMenu;

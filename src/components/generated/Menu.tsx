'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const navText =
  "text-[#6d440c] whitespace-pre font-['Cinzel',_system-ui,_sans-serif] text-[28px] font-normal [font-variation-settings:'wght'_500] leading-[38px] lowercase";

function NavItem(p: {
  "data-figma-id": string;
  text: string;
  href?: string;
  onNavigate?: () => void;
}) {
  const content = (
    <motion.span
      className={`${navText} min-w-0 relative shrink-0 self-stretch inline-block ${p.href ? 'cursor-pointer' : 'cursor-default'}`}
      whileHover={{ x: 10, color: "#845436" }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {p.text}
    </motion.span>
  );

  if (p.href) {
    return (
      <Link
        href={p.href}
        onClick={p.onNavigate}
        data-figma-id={p["data-figma-id"]}
        className="no-underline self-stretch"
      >
        {content}
      </Link>
    );
  }

  return <div data-figma-id={p["data-figma-id"]} className="self-stretch">{content}</div>;
}

export function Menu({ onClose }: { onClose?: () => void }) {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" className="absolute w-0 h-0 overflow-hidden">
      <defs>
        <path id="figma-vector-42" d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fillRule="nonzero" />
      </defs>
    </svg>
    <div
      data-figma-id="513:74"
      className="relative w-full min-h-[100dvh] bg-[url('/images/a1d84f70-a95b-446e-be43-b21a7d61468d.png')] bg-[#f3e8d5] bg-blend-multiply [background-size:100.02%_142.93%] [background-position:50.048%_53.546%] bg-no-repeat flex flex-col min-w-0 pt-[168px] px-6 pb-[72px] box-border justify-between"
    >
      <div data-figma-id="513:75" className="flex flex-col min-w-0 gap-8 relative shrink-0 max-w-[480px] mx-auto w-full">
        <NavItem data-figma-id="513:76" text="Home" href="/" onNavigate={onClose} />
        <NavItem data-figma-id="513:77" text="About Us" href="/about" onNavigate={onClose} />
        <NavItem data-figma-id="513:78" text="Pottery" />
        <div data-figma-id="513:79" className="relative w-full h-[38px] shrink-0 flex flex-col gap-[19px]">
          <motion.div
            data-figma-id="451:560"
            className="min-w-0 flex items-center gap-4 relative h-max shrink-0 self-stretch cursor-default"
            whileHover="hover"
            initial="rest"
          >
            <motion.span
              className={`${navText} relative shrink-0`}
              variants={{ rest: { x: 0 }, hover: { x: 10, color: "#845436" } }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {"nature experiences"}
            </motion.span>
            <motion.div
              data-figma-id="451:562"
              className="relative w-7 h-7 shrink-0 overflow-hidden"
              variants={{ rest: { rotate: 0 }, hover: { rotate: 180 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg
                data-figma-id="451:563"
                viewBox="-1.098 -1.098 18.195 10.195"
                preserveAspectRatio="none"
                className="absolute left-[calc(calc(50%_+_8px)_-_1.098px)] top-[calc(calc(50%_+_4px)_-_1.098px)] w-[18.195px] h-[10.195px] origin-top-left [transform:matrix(-1,0,0,-1,0,0)]"
              >
                <path d="M16 8L8 0 0 8" fill="none" stroke="#6d440c" strokeWidth={2} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
        <NavItem data-figma-id="513:90" text="Products" />
        <NavItem data-figma-id="513:80" text="Blogs" />
      </div>
      <motion.div
        data-figma-id="513:81"
        className="bg-[#fff8e7] [box-shadow:inset_0_0_0_1px_#6d440c] flex w-[138px] h-12 px-4 py-2.5 box-border items-center justify-center gap-2 mx-auto cursor-pointer"
        whileHover={{ scale: 1.04, backgroundColor: "#6d440c" }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <span className="text-[#6d440c] whitespace-pre font-['Montserrat',_system-ui,_sans-serif] text-base font-medium leading-5 relative shrink-0">
          {"Contact Now"}
        </span>
      </motion.div>
      <motion.button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        data-figma-id="513:83"
        className="overflow-hidden absolute top-8 w-9 h-9 right-8 bg-transparent border-none p-0 cursor-pointer"
        whileHover={{ scale: 1.15, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <svg data-figma-id="513:84" viewBox="0 0 14 14" preserveAspectRatio="none" className="absolute left-[20.833%] top-[20.833%] w-[58.333%] h-[58.333%]">
          <use href="#figma-vector-42" fill="#6d440c" />
        </svg>
      </motion.button>
    </div>
  </>;
}
export default Menu;

'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const navText =
  "text-[#6d440c] whitespace-pre font-['Cinzel',_system-ui,_sans-serif] text-[22px] sm:text-[25px] font-normal [font-variation-settings:'wght'_500] leading-[34px] sm:leading-[38px] lowercase";

function NavItem(p: {
  "data-figma-id": string;
  text: string;
  href?: string;
  onNavigate?: () => void;
}) {
  const content = (
    <motion.span
      className={`${navText} min-w-0 relative shrink-0 self-stretch inline-block ${p.href ? 'cursor-pointer' : 'cursor-default'}`}
      whileHover={{ x: 8, color: "#845436" }}
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
      className="relative w-full h-full min-h-0 bg-[url('/images/a1d84f70-a95b-446e-be43-b21a7d61468d.jpg')] bg-[#f3e8d5] bg-blend-multiply bg-cover bg-center bg-no-repeat flex flex-col justify-between p-6 sm:p-8 box-border overflow-y-auto"
    >
      {/* Top Bar with Brand Logo & Close Button */}
      <div className="flex items-center justify-between w-full mb-6 shrink-0">
        <Link
          href="/"
          onClick={onClose}
          className="relative w-[130px] h-9 shrink-0 bg-[url('/images/a0cff4ec-b706-4f7a-bf6e-e2aac10b18d2.png')] bg-[length:117.465%_254.047%] bg-[position:44.663%_61.292%] bg-no-repeat block"
        />
        <motion.button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          data-figma-id="513:83"
          className="w-9 h-9 flex items-center justify-center bg-transparent border-none p-0 cursor-pointer text-[#6d440c] rounded-full hover:bg-[#6d440c]/10 transition-colors"
          whileHover={{ scale: 1.15, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <svg data-figma-id="513:84" viewBox="0 0 14 14" className="w-4 h-4">
            <use href="#figma-vector-42" fill="#6d440c" />
          </svg>
        </motion.button>
      </div>

      {/* Nav Items */}
      <div data-figma-id="513:75" className="flex flex-col min-w-0 gap-5 sm:gap-6 relative shrink-0 w-full my-auto py-2">
        <NavItem data-figma-id="513:76" text="Home" href="/" onNavigate={onClose} />
        <NavItem data-figma-id="513:77" text="About Us" href="/about" onNavigate={onClose} />
        <NavItem data-figma-id="513:78" text="Pottery" href="/pottery" onNavigate={onClose} />
        <NavItem data-figma-id="513:78" text="Nature Experiences" href="/nature-experiences" onNavigate={onClose} />
        <NavItem data-figma-id="513:90" text="Products" href='/products' onNavigate={onClose} />
        <NavItem data-figma-id="513:80" text="Blogs" />
      </div>

      {/* Bottom Action: Contact Now */}
      <div className="pt-6 shrink-0 w-full">
        <Link href="/#contact-form" onClick={onClose} className="no-underline w-full block">
          <motion.div
            data-figma-id="513:81"
            className="bg-[#fff8e7] [box-shadow:inset_0_0_0_1px_#6d440c] flex w-full h-12 px-4 py-2.5 box-border items-center justify-center gap-2 cursor-pointer"
            whileHover="hover"
            initial="rest"
            whileTap={{ scale: 0.98 }}
            variants={{
              rest: { scale: 1, backgroundColor: "#fff8e7" },
              hover: { scale: 1.02, backgroundColor: "#6d440c" },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.span
              variants={{
                rest: { color: "#6d440c" },
                hover: { color: "#fff8e7" },
              }}
              transition={{ duration: 0.2 }}
              className="whitespace-pre font-['Montserrat',_system-ui,_sans-serif] text-base font-medium leading-5 relative shrink-0"
            >
              {"Contact Now"}
            </motion.span>
          </motion.div>
        </Link>
      </div>
    </div>
  </>;
}
export default Menu;

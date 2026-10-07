'use client';

import { useState } from "react";
import Link from "next/link";
import {
    FONT_CINZEL,
    FONT_MONTSERRAT,
    FONT_MONTSERRAT_16C,
    ROW3,
    TEXT5,
    TEXT6,
} from "@/constant";
import { Header } from "../header";

const FAQ_ITEMS = [
    {
        question: "Do I need any prior pottery experience?",
        answer: "Not at all! Our one-day sessions are beginner-friendly and designed for complete beginners. We will guide you step-by-step through every process.",
    },
    {
        question: "What is included in the workshop fee?",
        answer: "All clay materials, guidance from experienced potters, studio tools, and firing of your handcrafted pieces are included.",
    },
    {
        question: "When can I collect my finished pottery?",
        answer: "Pottery requires slow drying and two kiln firings (bisque and glaze). Your finished piece will typically be ready for pickup or shipping in 2 to 3 weeks.",
    },
    {
        question: "Are the workshops suitable for children?",
        answer: "Yes, children aged 6 and above are welcome when accompanied by an adult. Handbuilding is especially fun and engaging for young minds.",
    },
    {
        question: "How do I book a workshop?",
        answer: "You can book directly by clicking 'Book Your Slot' above or contacting us via WhatsApp. We will confirm dates and timings with you.",
    },
    {
        question: "What should I wear to the pottery session?",
        answer: "Wear comfortable clothes that you don't mind getting a little clay on, and keep short nails if possible for easier wheel throwing. Aprons are provided.",
    },
    {
        question: "Can I take my creations home on the same day?",
        answer: "Unfired clay pieces are fragile and need to dry slowly before being fired in the kiln. We take care of the firing process and notify you once ready.",
    },
];

function SocialMediaIcon(p: {
    "data-figma-id": string;
    viewBox: string;
    iconClassName: string;
    href: string;
}) {
    return (
        <div
            data-figma-id={p["data-figma-id"]}
            className="relative w-8 h-8 shrink-0 bg-[#6d440c] rounded-[100px] flex box-border items-center justify-center p-2 gap-2.5 cursor-pointer hover:bg-[#845436] transition-colors"
        >
            <div data-figma-id="641:161" className="relative w-6 h-6 shrink-0 flex box-border items-center justify-center p-2.5 gap-2.5">
                <svg data-figma-id="641:162" viewBox={p.viewBox} preserveAspectRatio="none" className={`relative shrink-0 ${p.iconClassName}`}>
                    <use href={p.href} fill="#fff8e7" />
                </svg>
            </div>
        </div>
    );
}

export function Pottery() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [showAllFaqs, setShowAllFaqs] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const visibleFaqs = showAllFaqs ? FAQ_ITEMS : FAQ_ITEMS.slice(0, 5);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <>
            <svg aria-hidden="true" data-mp-layer-tree-ignore="true" className="absolute w-0 h-0 overflow-hidden">
                <defs>
                    <path id="figma-vector-136" d="M15.34 3.46C15.103 3.46 14.871 3.53 14.673 3.662C14.476 3.794 14.322 3.982 14.231 4.201C14.141 4.42 14.117 4.661 14.163 4.894C14.209 5.127 14.324 5.341 14.491 5.509C14.659 5.676 14.873 5.791 15.106 5.837C15.339 5.883 15.58 5.859 15.799 5.769C16.018 5.678 16.206 5.524 16.338 5.327C16.47 5.129 16.54 4.897 16.54 4.66C16.54 4.342 16.414 4.037 16.189 3.811C15.963 3.586 15.658 3.46 15.34 3.46ZM19.94 5.88C19.92 5.05 19.765 4.229 19.48 3.45C19.227 2.783 18.831 2.178 18.32 1.68C17.825 1.167 17.22 0.774 16.55 0.53C15.773 0.236 14.951 0.077 14.12 0.06C13.06 0 12.72 0 10 0C7.28 0 6.94 0 5.88 0.06C5.049 0.077 4.227 0.236 3.45 0.53C2.782 0.777 2.177 1.17 1.68 1.68C1.167 2.175 0.774 2.78 0.53 3.45C0.236 4.227 0.077 5.049 0.06 5.88C0 6.94 0 7.28 0 10C0 12.72 0 13.06 0.06 14.12C0.077 14.951 0.236 15.773 0.53 16.55C0.774 17.22 1.167 17.825 1.68 18.32C2.177 18.83 2.782 19.223 3.45 19.47C4.227 19.764 5.049 19.923 5.88 19.94C6.94 20 7.28 20 10 20C12.72 20 13.06 20 14.12 19.94C14.951 19.923 15.773 19.764 16.55 19.47C17.22 19.226 17.825 18.833 18.32 18.32C18.832 17.823 19.228 17.218 19.48 16.55C19.765 15.771 19.92 14.95 19.94 14.12C19.94 13.06 20 12.72 20 10C20 7.28 20 6.94 19.94 5.88ZM18.14 14C18.133 14.635 18.018 15.264 17.8 15.86C17.64 16.295 17.384 16.688 17.05 17.01C16.725 17.34 16.333 17.596 15.9 17.76C15.304 17.978 14.675 18.093 14.04 18.1C13.04 18.15 12.67 18.16 10.04 18.16C7.41 18.16 7.04 18.16 6.04 18.1C5.381 18.113 4.724 18.011 4.1 17.8C3.686 17.627 3.312 17.372 3 17.05C2.668 16.729 2.415 16.335 2.26 15.9C2.015 15.295 1.88 14.652 1.86 14C1.86 13 1.8 12.63 1.8 10C1.8 7.37 1.8 7 1.86 6C1.864 5.351 1.982 4.708 2.21 4.1C2.386 3.678 2.656 3.302 3 3C3.303 2.655 3.679 2.382 4.1 2.2C4.709 1.979 5.352 1.864 6 1.86C7 1.86 7.37 1.8 10 1.8C12.63 1.8 13 1.8 14 1.86C14.635 1.867 15.264 1.982 15.86 2.2C16.314 2.369 16.722 2.643 17.05 3C17.377 3.308 17.633 3.683 17.8 4.1C18.022 4.709 18.137 5.352 18.14 6C18.19 7 18.2 7.37 18.2 10C18.2 12.63 18.19 13 18.14 14ZM10 4.87C8.986 4.872 7.995 5.175 7.153 5.739C6.31 6.304 5.654 7.106 5.268 8.044C4.881 8.981 4.781 10.012 4.98 11.007C5.179 12.001 5.668 12.915 6.386 13.631C7.104 14.347 8.018 14.835 9.013 15.032C10.008 15.229 11.039 15.127 11.975 14.739C12.912 14.35 13.713 13.692 14.276 12.849C14.839 12.006 15.14 11.014 15.14 10C15.141 9.325 15.009 8.657 14.751 8.033C14.493 7.409 14.115 6.843 13.637 6.366C13.159 5.889 12.592 5.512 11.968 5.255C11.344 4.998 10.675 4.867 10 4.87ZM10 13.33C9.341 13.33 8.698 13.135 8.15 12.769C7.602 12.403 7.176 11.883 6.923 11.274C6.671 10.666 6.605 9.996 6.734 9.35C6.862 8.704 7.18 8.111 7.645 7.645C8.111 7.18 8.704 6.862 9.35 6.734C9.996 6.605 10.666 6.671 11.274 6.923C11.883 7.176 12.403 7.602 12.769 8.15C13.135 8.698 13.33 9.341 13.33 10C13.33 10.437 13.244 10.87 13.077 11.274C12.909 11.678 12.664 12.045 12.355 12.355C12.045 12.664 11.678 12.909 11.274 13.077C10.87 13.244 10.437 13.33 10 13.33Z" fillRule="nonzero" />
                    <path id="figma-vector-137" d="M74.54 54.2L121.166 0L110.116 0L69.632 47.06L37.296 0L0 0L48.898 71.164L0 128L11.05 128L53.804 78.303L87.952 128L125.248 128L74.537 54.2L74.54 54.2ZM59.406 71.79L54.451 64.704L15.031 8.318L32.003 8.318L63.814 53.824L68.768 60.91L110.121 120.06L93.151 120.06L59.406 71.793L59.406 71.79Z" fillRule="nonzero" />
                    <path id="figma-vector-138" d="M180.783 34.08C179.663 23.27 177.254 11.32 168.384 5.04C161.514 0.17 152.483 -0.01 144.053 0C126.233 0.01 108.403 0.03 90.583 0.04C73.443 0.06 56.303 0.07 39.163 0.09C32.003 0.1 25.043 -0.46 18.393 2.64C12.683 5.3 8.213 10.36 5.523 15.99C1.793 23.82 1.013 32.69 0.563 41.35C-0.267 57.12 -0.177 72.931 0.813 88.691C1.543 100.191 3.393 112.9 12.283 120.23C20.163 126.72 31.283 127.04 41.503 127.05C73.943 127.08 106.393 127.11 138.843 127.13C143.003 127.14 147.343 127.06 151.583 126.6C159.923 125.7 167.873 123.31 173.233 117.13C178.643 110.9 180.033 102.23 180.853 94.02C182.853 74.1 182.833 53.99 180.783 34.08ZM71.823 91.49L71.823 35.64L120.184 63.56L71.823 91.49Z" fillRule="nonzero" />
                    <path id="figma-vector-139" d="M78.2 49.69L78.2 80.78L116.66 80.78L110.57 122.66L78.2 122.66L78.2 219.15C71.71 220.05 65.07 220.52 58.33 220.52C50.55 220.52 42.91 219.9 35.47 218.7L35.47 122.66L0 122.66L0 80.78L35.47 80.78L35.47 42.74C35.47 19.14 54.6 0 78.21 0L78.21 0.02C78.28 0.02 78.34 0 78.41 0L116.67 0L116.67 36.22L91.67 36.22C84.24 36.22 78.21 42.25 78.21 49.68L78.2 49.69Z" fillRule="nonzero" />
                    <path id="figma-vector-12" d="M28 14L12 14M28 0L0 0" fillRule="nonzero" />
                    <path id="figma-derived-14" d="M0.084 9.877C0.083 11.618 0.541 13.318 1.413 14.816L0 19.934L5.279 18.56C6.734 19.347 8.371 19.762 10.038 19.763L10.042 19.763C15.53 19.763 19.998 15.331 20 9.885C20.001 7.246 18.966 4.764 17.086 2.897C15.206 1.03 12.706 0.001 10.042 0C4.553 0 0.086 4.431 0.084 9.877ZM3.227 14.558L3.03 14.247C2.202 12.94 1.764 11.429 1.765 9.878C1.767 5.351 5.48 1.668 10.045 1.668C12.256 1.669 14.334 2.524 15.897 4.076C17.459 5.628 18.319 7.691 18.319 9.884C18.317 14.411 14.604 18.095 10.042 18.095L10.039 18.095C8.553 18.094 7.096 17.698 5.826 16.95L5.524 16.772L2.391 17.587L3.227 14.558Z" fillRule="nonzero" />
                    <path id="figma-derived-15" d="M2.571 0.432C2.385 0.021 2.189 0.013 2.011 0.006C1.866 0 1.7 0 1.534 0C1.368 0 1.099 0.062 0.871 0.309C0.643 0.556 0 1.153 0 2.368C0 3.582 0.892 4.756 1.016 4.921C1.14 5.086 2.737 7.658 5.266 8.648C7.368 9.47 7.796 9.307 8.252 9.266C8.708 9.224 9.724 8.668 9.932 8.092C10.139 7.516 10.139 7.021 10.077 6.918C10.015 6.815 9.849 6.753 9.6 6.63C9.351 6.507 8.128 5.909 7.9 5.827C7.671 5.745 7.506 5.703 7.34 5.951C7.174 6.198 6.697 6.753 6.552 6.918C6.407 7.083 6.262 7.104 6.013 6.98C5.764 6.856 4.963 6.596 4.012 5.755C3.272 5.101 2.773 4.292 2.628 4.045C2.483 3.798 2.612 3.665 2.737 3.542C2.849 3.431 2.986 3.253 3.11 3.109C3.234 2.965 3.276 2.862 3.359 2.697C3.442 2.533 3.4 2.388 3.338 2.265C3.276 2.141 2.792 0.92 2.571 0.432Z" fillRule="nonzero" />
                </defs>
            </svg>

            <div data-figma-id="133:6" className="relative w-full self-start bg-[#fff8e7] flex flex-col overflow-x-hidden">
                <Header />

                {/* Hero image band with "Pottery" title overlay */}
                <div data-figma-id="133:194" className="relative w-full h-[220px] sm:h-[320px] lg:h-[471px] bg-[url('/images/e435442310b5e5e616b37cd991d317d3bfd1b0e1.jpg')] bg-[length:100%_171.975%] bg-[position:0%_63.655%] bg-no-repeat">
                    <span data-figma-id="302:781" className={`whitespace-pre text-center ${FONT_CINZEL} text-white text-[32px] sm:text-[40px] lg:text-[48px] leading-[43px] sm:leading-[54px] lg:leading-[65px] lowercase [mix-blend-mode:overlay] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 [font-variation-settings:"wght"_500]`}>
                        {"Pottery"}
                    </span>
                </div>

                {/* A Slow Clay Immersion In Nature Section */}
                <div data-figma-id="443:322" className="relative w-full bg-[#f3e8d5] flex flex-col py-16 sm:py-20 lg:py-[72px] px-6 xl:px-[120px] box-border">
                    <div data-figma-id="443:321" className="flex flex-col min-w-0 items-center gap-3 sm:gap-4 relative h-max shrink-0 self-stretch max-w-[1200px] mx-auto text-center">
                        <span data-figma-id="443:51" className={`${FONT_CINZEL} text-2xl sm:text-3xl lg:text-[36px] leading-[1.3] text-[#6d440c] uppercase tracking-[0.06em] min-w-0 relative shrink-0 self-stretch font-normal`}>
                            {"A Slow Clay Immersion In Nature"}
                        </span>
                        <span className={`${FONT_CINZEL} text-center text-xl sm:text-2xl lg:text-[28px] uppercase tracking-[0.06em] text-[#6d440c] min-w-0 relative shrink-0 self-stretch font-normal`}>
                            {"One day ExPerience"}
                        </span>
                        <p className={`${FONT_MONTSERRAT} text-base sm:text-lg text-[#364139] font-normal text-center leading-relaxed max-w-[760px] mx-auto mt-1 sm:mt-2`}>
                            Take a break from busy routine life. In this peaceful, natural setting,<br className="hidden sm:inline" /> you can relax, take your time, and express your creative side by crafting with clay.
                        </p>

                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-figma-id="133:188"
                            className="mt-5 sm:mt-7 relative inline-flex items-center justify-center bg-[#845436] hover:bg-[#6e442a] text-[#fff8e7] px-6 py-2.5 sm:py-3 gap-2.5 transition-colors duration-200 cursor-pointer shadow-sm group no-underline"
                        >
                            <div data-figma-id="72:284" className="relative w-5 h-5 shrink-0 overflow-hidden">
                                <svg data-figma-id="72:285" viewBox="0 0 20 19.934" preserveAspectRatio="none" className="absolute left-0 top-0 w-full h-[99.669%]">
                                    <use href="#figma-derived-14" fill="#fff8e7" />
                                </svg>
                                <svg data-figma-id="72:286" viewBox="0 0 10.113 9.306" preserveAspectRatio="none" className="absolute left-[24.909%] top-[26.578%] w-[50.565%] h-[46.532%]">
                                    <use href="#figma-derived-15" fill="#fff8e7" />
                                </svg>
                            </div>
                            <span data-figma-id="72:287" className={`${FONT_MONTSERRAT} text-[15px] sm:text-[16px] leading-[20px] text-[#fff8e7] font-medium relative shrink-0`}>
                                {"Book Your Slot"}
                            </span>
                        </a>
                    </div>
                </div>

                {/* The Experience Section - Alternate Rows */}
                <div className="relative w-full bg-[#fff8e7] flex flex-col py-16 sm:py-20 lg:py-28 px-6 sm:px-10 xl:px-[120px] box-border">
                    <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16 sm:gap-24 lg:gap-32">
                        {/* Row 1: The Experience (Text Left, Image Right) */}
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 xl:gap-24">
                            <div className="w-full lg:max-w-[440px] xl:max-w-[460px] flex flex-col gap-4">
                                <h3 className={`${FONT_CINZEL} text-2xl sm:text-3xl lg:text-[34px] leading-tight text-[#6d440c] uppercase tracking-[0.06em] font-normal`}>
                                    {"The Experience"}
                                </h3>
                                <p className={`${FONT_MONTSERRAT} text-[#364139] text-base sm:text-lg leading-[1.8] font-normal`}>
                                    {"Explore hand-building techniques to bring your ideas to life and shape artistic forms with clay. Enjoy a calm, hands-on process as you create a custom piece to keep in your home."}
                                </p>
                            </div>
                            <div className="w-full lg:max-w-[560px] flex flex-col items-center">
                                <div className="relative w-full aspect-[16/10] sm:aspect-[3/2] overflow-hidden bg-[#e5dcce]">
                                    <img
                                        src="/images/e308f07ee7ac0e7d682b6d3c273acc0bc01ce87b.jpg"
                                        alt="Crafting Stories in Clay"
                                        className="w-full h-full object-cover object-[50%_62%] transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <span className={`${FONT_MONTSERRAT} text-base sm:text-[17px] text-[#364139] text-center font-normal mt-4 block`}>
                                    {"Crafting Stories in Clay"}
                                </span>
                            </div>
                        </div>

                        {/* Row 2: Wheel Throwing (Image Left, Text Right) */}
                        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 xl:gap-24">
                            <div className="w-full lg:max-w-[560px] flex flex-col items-center">
                                <div className="relative w-full aspect-[16/10] sm:aspect-[3/2] overflow-hidden bg-[#e5dcce]">
                                    <img
                                        src="/images/e308f07ee7ac0e7d682b6d3c273acc0bc01ce87b.jpg"
                                        alt="The Joy of Wheel Throwing"
                                        className="w-full h-full object-cover object-[50%_62%] transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <span className={`${FONT_MONTSERRAT} text-base sm:text-[17px] text-[#364139] text-center font-normal mt-4 block`}>
                                    {"The Joy of Wheel Throwing"}
                                </span>
                            </div>
                            <div className="w-full lg:max-w-[440px] xl:max-w-[460px] flex flex-col gap-4">
                                <p className={`${FONT_MONTSERRAT} text-[#364139] text-base sm:text-lg leading-[1.8] font-normal`}>
                                    {"Transition from handbuilding to a fun, playful session on the potter’s wheel. Guided by a potter, feel the wet clay spin and move between your hands as you experience shaping forms on the wheel."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Frequently Asked Questions */}
                <div data-figma-id="443:322" className="relative w-full bg-[#f3e8d5] flex flex-col py-16 sm:py-20 lg:py-[72px] px-6 sm:px-10 xl:px-[120px] box-border">
                    <div className="w-full max-w-[840px] mx-auto flex flex-col">
                        <h2 className={`${FONT_CINZEL} text-2xl sm:text-3xl lg:text-[34px] leading-[1.3] text-[#6d440c] uppercase tracking-[0.06em] text-center font-normal mb-8 sm:mb-12`}>
                            {"Frequently Asked Questions"}
                        </h2>

                        <div className="flex flex-col w-full">
                            {visibleFaqs.map((faq, index) => {
                                const isOpen = openFaq === index;
                                return (
                                    <div key={index} className="border-b border-[#c8bca9]/70 flex flex-col">
                                        <button
                                            type="button"
                                            onClick={() => toggleFaq(index)}
                                            className="w-full py-4 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer group bg-transparent border-none p-0"
                                            aria-expanded={isOpen}
                                        >
                                            <span className={`${FONT_MONTSERRAT} text-[15px] sm:text-[16px] font-semibold text-[#364139] group-hover:text-[#6d440c] transition-colors leading-snug`}>
                                                {faq.question}
                                            </span>
                                            <span className="shrink-0 flex items-center justify-center w-5 h-5 text-[#364139]">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div className="pb-5 pt-1 pr-6">
                                                <p className={`${FONT_MONTSERRAT} text-[14px] sm:text-[15px] text-[#554d42] leading-relaxed font-normal`}>
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowAllFaqs(!showAllFaqs)}
                            className={`${FONT_MONTSERRAT} text-[14px] sm:text-[15px] font-medium text-[#845436] hover:text-[#6d440c] underline underline-offset-4 mt-8 transition-colors cursor-pointer mx-auto block bg-transparent border-none`}
                        >
                            {showAllFaqs ? "Show less" : "Show more"}
                        </button>
                    </div>
                </div>

                {/* Begin the Conversation — contact form */}
                <div data-figma-id="79:831" className="relative w-full bg-[#fff8e7] py-16 sm:py-20 lg:py-28 px-6 sm:px-10 xl:px-[120px] box-border">
                    <div className="relative w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
                        {/* Left Cottage Photo */}
                        <div
                            data-figma-id="79:767"
                            className="relative w-full lg:w-[500px] xl:w-[563px] h-[340px] sm:h-[440px] lg:h-[524px] shrink-0 bg-[#d9d9d9] bg-[url('/images/e45c144a-179d-45d9-a65e-d96cd694e95c.jpg')] [background-size:211.512%_131.107%] [background-position:22.559%_9.392%] bg-no-repeat shadow-sm"
                        />

                        {/* Right Form */}
                        <div data-figma-id="79:830" className="relative w-full lg:max-w-[560px] xl:max-w-[589px] flex flex-col gap-8 sm:gap-9">
                            <h2 data-figma-id="79:813" className={`${FONT_CINZEL} text-[#6d440c] text-3xl sm:text-4xl lg:text-[40px] leading-[1.25] uppercase tracking-wide font-normal`}>
                                {"Begin the"}<br />{"Conversation"}
                            </h2>

                            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 sm:gap-7 w-full">
                                <div data-figma-id="79:816" className="border-b border-[#5f7053] pb-2 sm:pb-3 w-full">
                                    <input
                                        type="text"
                                        required
                                        data-figma-id="79:815"
                                        className={`${FONT_MONTSERRAT} ${TEXT6} text-base placeholder-[#364139] w-full bg-transparent focus:outline-none focus:placeholder-opacity-60`}
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div data-figma-id="79:821" className="flex flex-col sm:flex-row gap-6 sm:gap-7 w-full">
                                    <div data-figma-id="79:817" className="border-b border-[#5f7053] pb-2 sm:pb-3 flex-1">
                                        <input
                                            type="email"
                                            required
                                            data-figma-id="79:818"
                                            className={`${FONT_MONTSERRAT} ${TEXT6} text-base placeholder-[#364139] w-full bg-transparent focus:outline-none focus:placeholder-opacity-60`}
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div data-figma-id="79:819" className="border-b border-[#5f7053] pb-2 sm:pb-3 flex-1">
                                        <input
                                            type="tel"
                                            data-figma-id="79:820"
                                            className={`${FONT_MONTSERRAT} ${TEXT6} text-base placeholder-[#364139] w-full bg-transparent focus:outline-none focus:placeholder-opacity-60`}
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>

                                <div data-figma-id="79:822" className="border-b border-[#5f7053] pb-2 sm:pb-3 w-full">
                                    <textarea
                                        rows={1}
                                        data-figma-id="79:823"
                                        className={`${FONT_MONTSERRAT} ${TEXT6} text-base placeholder-[#364139] w-full bg-transparent focus:outline-none focus:placeholder-opacity-60 resize-none`}
                                        placeholder="Message"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    data-figma-id="79:824"
                                    className={`relative w-[108px] h-12 shrink-0 bg-[#845436] hover:bg-[#6e442a] [box-shadow:inset_0_0_0_1px_#845436] ${ROW3} transition-colors duration-200 cursor-pointer shadow-sm mt-1 border-none`}
                                >
                                    <span data-figma-id="79:825" className={`${FONT_MONTSERRAT_16C} relative shrink-0`}>
                                        {"Submit"}
                                    </span>
                                </button>
                            </form>

                            <p data-figma-id="79:827" className={`${FONT_MONTSERRAT} ${TEXT5} text-[14px] sm:text-base font-normal leading-relaxed`}>
                                {formSubmitted
                                    ? "Thank you! Your message has been received. We'll connect with you shortly."
                                    : "Thank you for reaching out. We'll connect with you shortly via WhatsApp or email."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div data-figma-id="641:137" className="relative w-full bg-[#f3e8d5] shadow-[inset_0_1px_0_0_#6d440c] flex flex-col box-border px-6 xl:px-[120px] py-12 lg:py-[72px] gap-2.5">
                    <div data-figma-id="641:138" className="relative w-full flex flex-col gap-8 lg:gap-10 max-w-[1200px] mx-auto">
                        <div data-figma-id="641:139" className="flex flex-col min-w-0 gap-8 lg:gap-10 relative h-max shrink-0 self-stretch">
                            <div data-figma-id="641:140" className="flex flex-col sm:flex-row justify-between min-w-0 relative h-max shrink-0 self-stretch flex-wrap gap-8">
                                <div data-figma-id="641:141" className="relative w-full max-w-[296px] h-[86px] sm:h-[114px] shrink-0 flex flex-col gap-8">
                                    <div data-figma-id="641:142" className="relative w-full max-w-[370px] h-[86px] sm:h-[114px] shrink-0 bg-[url('/images/a0cff4ec-b706-4f7a-bf6e-e2aac10b18d2.png')] bg-[length:117.465%_254.047%] bg-[position:44.663%_61.292%] bg-no-repeat" />
                                </div>
                                <div data-figma-id="641:144" className="relative w-full sm:w-max h-max shrink-0 flex flex-col sm:flex-row justify-start sm:justify-end gap-8 sm:gap-[60px] lg:gap-[100px]">
                                    <div data-figma-id="641:145" className="relative w-max h-max shrink-0 flex flex-col gap-4">
                                        <span data-figma-id="641:146" className={`${FONT_MONTSERRAT} text-[#6d440c] whitespace-pre text-[20px] font-medium leading-[24.38px] uppercase relative shrink-0 self-stretch`}>
                                            {"Quick Links"}
                                        </span>
                                        <div data-figma-id="641:147" className="flex flex-col min-w-[157px] gap-3 relative h-max shrink-0 self-stretch">
                                            <Link href="/" className={`${FONT_MONTSERRAT} text-[16px] leading-[20px] text-[#6d440c] hover:opacity-75 transition-opacity font-normal relative shrink-0 no-underline`}>
                                                Home
                                            </Link>
                                            <Link href="/about" className={`${FONT_MONTSERRAT} text-[16px] leading-[20px] text-[#6d440c] hover:opacity-75 transition-opacity font-normal relative shrink-0 no-underline`}>
                                                About Us
                                            </Link>
                                            <span data-figma-id="641:150" className={`${FONT_MONTSERRAT} text-[16px] leading-[20px] text-[#6d440c] whitespace-pre font-semibold relative shrink-0`}>
                                                {"Pottery"}
                                            </span>
                                            <span className={`${FONT_MONTSERRAT} text-[16px] leading-[20px] text-[#6d440c] font-normal relative shrink-0 cursor-pointer hover:opacity-75`}>
                                                Nature Experiences
                                            </span>
                                            <span className={`${FONT_MONTSERRAT} text-[16px] leading-[20px] text-[#6d440c] font-normal relative shrink-0 cursor-pointer hover:opacity-75`}>
                                                Products
                                            </span>
                                            <span className={`${FONT_MONTSERRAT} text-[16px] leading-[20px] text-[#6d440c] font-normal relative shrink-0 cursor-pointer hover:opacity-75`}>
                                                Contact
                                            </span>
                                        </div>
                                    </div>
                                    <div data-figma-id="641:154" className="relative w-max h-max shrink-0 flex flex-col gap-4">
                                        <span data-figma-id="641:155" className={`${FONT_MONTSERRAT} text-[#6d440c] whitespace-pre text-[20px] font-medium leading-[24.38px] uppercase relative shrink-0 self-stretch`}>
                                            {"Contact"}
                                        </span>
                                        <span data-figma-id="641:156" className={`${FONT_MONTSERRAT} text-[16px] leading-[20px] text-[#6d440c] whitespace-pre-line font-normal min-w-[125px] relative h-max shrink-0 self-stretch`}>
                                            {"Phone Number\nEmail Address\nLocation"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div data-figma-id="641:157" className="border-t border-dashed border-[#6d440c] min-w-0 relative h-0 shrink-0 self-stretch" />
                        </div>
                        <div data-figma-id="641:158" className="flex flex-col-reverse sm:flex-row justify-between items-center min-w-0 relative h-max shrink-0 self-stretch gap-4">
                            <div data-figma-id="641:159" className="relative w-[164px] h-max shrink-0 flex gap-3">
                                <SocialMediaIcon data-figma-id="641:160" viewBox="0 0 20 20" iconClassName="w-4 h-4" href="#figma-vector-136" />
                                <SocialMediaIcon data-figma-id="641:163" viewBox="0 0 125.248 128" iconClassName="w-3.5 h-3.5" href="#figma-vector-137" />
                                <SocialMediaIcon data-figma-id="641:166" viewBox="0 0 182.337 127.131" iconClassName="w-5 h-3.5" href="#figma-vector-138" />
                                <SocialMediaIcon data-figma-id="641:169" viewBox="0 0 116.67 220.52" iconClassName="w-2 h-4" href="#figma-vector-139" />
                            </div>
                            <span data-figma-id="641:172" className={`${FONT_MONTSERRAT} text-[16px] leading-[20px] text-[#6d440c] whitespace-pre text-center sm:text-left font-normal relative shrink-0`}>
                                {"© 2026 A piece of earth. All Rights Reserved."}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pottery;
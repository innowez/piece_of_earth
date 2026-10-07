'use client';

import { FONT_CINZEL, FONT_MONTSERRAT, FONT_MONTSERRAT_16C, ROW3, TEXT5, TEXT6 } from "@/constant";
import { useState } from "react";

export default function Form() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };
    return (
        <>
            {/* Begin the Conversation — contact form */}
            <div id="contact-form" data-figma-id="79:831" className="relative w-full bg-[#fff8e7] py-16 sm:py-20 lg:py-28 px-6 sm:px-10 xl:px-[120px] box-border">
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
        </>
    );
}
"use client"

import SiteMenu from "./site-menu"
import { FONT_MONTSERRAT } from "@/constant";
export const Header = () => {
    return (
        <>
            <div data-figma-id="133:184" className="fixed top-0 left-0 right-0 z-50 w-full bg-[#fff8e7] [filter:drop-shadow(0px_2px_8px_rgba(0,0,0,0.06))] flex justify-between box-border px-4 sm:px-6 xl:px-[120px] py-3 sm:py-5 items-center">
                <SiteMenu />
                <div data-figma-id="133:187" className="relative w-[110px] h-9 sm:w-[156px] sm:h-12 shrink-0 bg-[url('/images/a0cff4ec-b706-4f7a-bf6e-e2aac10b18d2.png')] bg-[length:117.465%_254.047%] bg-[position:44.663%_61.292%] bg-no-repeat" />
                <div data-figma-id="133:188" className="relative w-9 h-9 sm:w-[171px] sm:h-10 shrink-0 bg-[#fff8e7] shadow-[inset_0_0_0_1px_#9ba47f] flex box-border items-center justify-center py-2 px-2 sm:py-2.5 sm:px-3 gap-2">
                    <div data-figma-id="72:284" className="relative w-5 h-5 shrink-0 overflow-hidden">
                        <svg data-figma-id="72:285" viewBox="0 0 20 19.934" preserveAspectRatio="none" className="absolute left-0 top-0 w-full h-[99.669%]">
                            <use href="#figma-derived-14" fill="#9ba47f" />
                        </svg>
                        <svg data-figma-id="72:286" viewBox="0 0 10.113 9.306" preserveAspectRatio="none" className="absolute left-[24.909%] top-[26.578%] w-[50.565%] h-[46.532%]">
                            <use href="#figma-derived-15" fill="#9ba47f" />
                        </svg>
                    </div>
                    <span data-figma-id="72:287" className={`${FONT_MONTSERRAT} hidden sm:inline text-[16px] leading-[20px] text-[#9ba47f] whitespace-pre font-medium relative shrink-0`}>
                        {"Book Your Slot"}
                    </span>
                </div>
            </div>
            <div className="h-[68px] sm:h-[88px] w-full shrink-0" aria-hidden="true" />
        </ >
    );
};
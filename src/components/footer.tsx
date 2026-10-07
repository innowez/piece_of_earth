import { FONT_MONTSERRAT } from "@/constant";
import Link from "next/link";

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

export default function Footer() {
    return (
        <>
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
        </>
    )
}
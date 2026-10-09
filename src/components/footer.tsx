'use client'
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
            className="relative w-9 h-9 shrink-0 bg-[#6d440c] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#845436] transition-colors"
        >
            <svg data-figma-id="641:162" viewBox={p.viewBox} preserveAspectRatio="none" className={`relative shrink-0 ${p.iconClassName}`}>
                <use href={p.href} fill="#fff8e7" />
            </svg>
        </div>
    );
}

export default function Footer() {
    return (
        <>
            <svg aria-hidden="true" className="absolute w-0 h-0 overflow-hidden">
                <defs>
                    <path id="figma-vector-136" d="M15.34 3.46C15.103 3.46 14.871 3.53 14.673 3.662C14.476 3.794 14.322 3.982 14.231 4.201C14.141 4.42 14.117 4.661 14.163 4.894C14.209 5.127 14.324 5.341 14.491 5.509C14.659 5.676 14.873 5.791 15.106 5.837C15.339 5.883 15.58 5.859 15.799 5.769C16.018 5.678 16.206 5.524 16.338 5.327C16.47 5.129 16.54 4.897 16.54 4.66C16.54 4.342 16.414 4.037 16.189 3.811C15.963 3.586 15.658 3.46 15.34 3.46ZM19.94 5.88C19.92 5.05 19.765 4.229 19.48 3.45C19.227 2.783 18.831 2.178 18.32 1.68C17.825 1.167 17.22 0.774 16.55 0.53C15.773 0.236 14.951 0.077 14.12 0.06C13.06 0 12.72 0 10 0C7.28 0 6.94 0 5.88 0.06C5.049 0.077 4.227 0.236 3.45 0.53C2.782 0.777 2.177 1.17 1.68 1.68C1.167 2.175 0.774 2.78 0.53 3.45C0.236 4.227 0.077 5.049 0.06 5.88C0 6.94 0 7.28 0 10C0 12.72 0 13.06 0.06 14.12C0.077 14.951 0.236 15.773 0.53 16.55C0.774 17.22 1.167 17.825 1.68 18.32C2.177 18.83 2.782 19.223 3.45 19.47C4.227 19.764 5.049 19.923 5.88 19.94C6.94 20 7.28 20 10 20C12.72 20 13.06 20 14.12 19.94C14.951 19.923 15.773 19.764 16.55 19.47C17.22 19.226 17.825 18.833 18.32 18.32C18.832 17.823 19.228 17.218 19.48 16.55C19.765 15.771 19.92 14.95 19.94 14.12C19.94 13.06 20 12.72 20 10C20 7.28 20 6.94 19.94 5.88ZM18.14 14C18.133 14.635 18.018 15.264 17.8 15.86C17.64 16.295 17.384 16.688 17.05 17.01C16.725 17.34 16.333 17.596 15.9 17.76C15.304 17.978 14.675 18.093 14.04 18.1C13.04 18.15 12.67 18.16 10.04 18.16C7.41 18.16 7.04 18.16 6.04 18.1C5.381 18.113 4.724 18.011 4.1 17.8C3.686 17.627 3.312 17.372 3 17.05C2.668 16.729 2.415 16.335 2.26 15.9C2.015 15.295 1.88 14.652 1.86 14C1.86 13 1.8 12.63 1.8 10C1.8 7.37 1.8 7 1.86 6C1.864 5.351 1.982 4.708 2.21 4.1C2.386 3.678 2.656 3.302 3 3C3.303 2.655 3.679 2.382 4.1 2.2C4.709 1.979 5.352 1.864 6 1.86C7 1.86 7.37 1.8 10 1.8C12.63 1.8 13 1.8 14 1.86C14.635 1.867 15.264 1.982 15.86 2.2C16.314 2.369 16.722 2.643 17.05 3C17.377 3.308 17.633 3.683 17.8 4.1C18.022 4.709 18.137 5.352 18.14 6C18.19 7 18.2 7.37 18.2 10C18.2 12.63 18.19 13 18.14 14ZM10 4.87C8.986 4.872 7.995 5.175 7.153 5.739C6.31 6.304 5.654 7.106 5.268 8.044C4.881 8.981 4.781 10.012 4.98 11.007C5.179 12.001 5.668 12.915 6.386 13.631C7.104 14.347 8.018 14.835 9.013 15.032C10.008 15.229 11.039 15.127 11.975 14.739C12.912 14.35 13.713 13.692 14.276 12.849C14.839 12.006 15.14 11.014 15.14 10C15.141 9.325 15.009 8.657 14.751 8.033C14.493 7.409 14.115 6.843 13.637 6.366C13.159 5.889 12.592 5.512 11.968 5.255C11.344 4.998 10.675 4.867 10 4.87ZM10 13.33C9.341 13.33 8.698 13.135 8.15 12.769C7.602 12.403 7.176 11.883 6.923 11.274C6.671 10.666 6.605 9.996 6.734 9.35C6.862 8.704 7.18 8.111 7.645 7.645C8.111 7.18 8.704 6.862 9.35 6.734C9.996 6.605 10.666 6.671 11.274 6.923C11.883 7.176 12.403 7.602 12.769 8.15C13.135 8.698 13.33 9.341 13.33 10C13.33 10.437 13.244 10.87 13.077 11.274C12.909 11.678 12.664 12.045 12.355 12.355C12.045 12.664 11.678 12.909 11.274 13.077C10.87 13.244 10.437 13.33 10 13.33Z" fillRule="nonzero" />
                    <path id="figma-vector-137" d="M74.54 54.2L121.166 0L110.116 0L69.632 47.06L37.296 0L0 0L48.898 71.164L0 128L11.05 128L53.804 78.303L87.952 128L125.248 128L74.537 54.2L74.54 54.2ZM59.406 71.79L54.451 64.704L15.031 8.318L32.003 8.318L63.814 53.824L68.768 60.91L110.121 120.06L93.151 120.06L59.406 71.793L59.406 71.79Z" fillRule="nonzero" />
                    <path id="figma-vector-138" d="M180.783 34.08C179.663 23.27 177.254 11.32 168.384 5.04C161.514 0.17 152.483 -0.01 144.053 0C126.233 0.01 108.403 0.03 90.583 0.04C73.443 0.06 56.303 0.07 39.163 0.09C32.003 0.1 25.043 -0.46 18.393 2.64C12.683 5.3 8.213 10.36 5.523 15.99C1.793 23.82 1.013 32.69 0.563 41.35C-0.267 57.12 -0.177 72.931 0.813 88.691C1.543 100.191 3.393 112.9 12.283 120.23C20.163 126.72 31.283 127.04 41.503 127.05C73.943 127.08 106.393 127.11 138.843 127.13C143.003 127.14 147.343 127.06 151.583 126.6C159.923 125.7 167.873 123.31 173.233 117.13C178.643 110.9 180.033 102.23 180.853 94.02C182.853 74.1 182.833 53.99 180.783 34.08ZM71.823 91.49L71.823 35.64L120.184 63.56L71.823 91.49Z" fillRule="nonzero" />
                    <path id="figma-vector-139" d="M78.2 49.69L78.2 80.78L116.66 80.78L110.57 122.66L78.2 122.66L78.2 219.15C71.71 220.05 65.07 220.52 58.33 220.52C50.55 220.52 42.91 219.9 35.47 218.7L35.47 122.66L0 122.66L0 80.78L35.47 80.78L35.47 42.74C35.47 19.14 54.6 0 78.21 0L78.21 0.02C78.28 0.02 78.34 0 78.41 0L116.67 0L116.67 36.22L91.67 36.22C84.24 36.22 78.21 42.25 78.21 49.68L78.2 49.69Z" fillRule="nonzero" />
                </defs>
            </svg>

            <footer data-figma-id="641:137" className="relative w-full bg-[#f3e8d5] shadow-[inset_0_1px_0_0_#6d440c] flex flex-col box-border px-6 xl:px-[120px] py-10 sm:py-12 lg:py-[72px]">
                <div data-figma-id="641:138" className="relative w-full flex flex-col gap-8 lg:gap-10 max-w-[1200px] mx-auto">
                    {/* Top Content: Logo and 2 Navigation Columns */}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-8 lg:gap-10 w-full">
                        {/* Logo */}
                        <div data-figma-id="641:141" className="shrink-0">
                            <div
                                data-figma-id="641:142"
                                className="w-[150px] h-[46px] sm:w-[170px] sm:h-[52px] lg:w-[210px] lg:h-[64px] shrink-0 bg-[url('/images/a0cff4ec-b706-4f7a-bf6e-e2aac10b18d2.png')] bg-[length:117.465%_254.047%] bg-[position:44.663%_61.292%] bg-no-repeat"
                            />
                        </div>

                        {/* Navigation Columns (Side by Side on both Mobile and Desktop) */}
                        <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-row sm:gap-[60px] lg:gap-[100px] w-full sm:w-auto">
                            {/* Quick Links */}
                            <div data-figma-id="641:145" className="flex flex-col gap-3 sm:gap-4">
                                <span data-figma-id="641:146" className={`${FONT_MONTSERRAT} text-[#6d440c] text-base sm:text-[20px] font-medium leading-tight sm:leading-[24.38px] uppercase`}>
                                    {"Quick Links"}
                                </span>
                                <div data-figma-id="641:147" className="flex flex-col gap-2 sm:gap-3">
                                    <Link href="/" className={`${FONT_MONTSERRAT} text-[15px] sm:text-[16px] leading-snug sm:leading-[20px] text-[#6d440c] hover:opacity-75 transition-opacity font-normal no-underline`}>
                                        Home
                                    </Link>
                                    <Link href="/about" className={`${FONT_MONTSERRAT} text-[15px] sm:text-[16px] leading-snug sm:leading-[20px] text-[#6d440c] hover:opacity-75 transition-opacity font-normal no-underline`}>
                                        About Us
                                    </Link>
                                    <Link href="/pottery" className={`${FONT_MONTSERRAT} text-[15px] sm:text-[16px] leading-snug sm:leading-[20px] text-[#6d440c] font-normal no-underline`}>
                                        Pottery
                                    </Link>
                                    <Link href="/nature-experiences" className={`${FONT_MONTSERRAT} text-[15px] sm:text-[16px] leading-snug sm:leading-[20px] text-[#6d440c] font-normal cursor-pointer hover:opacity-75 no-underline`}>
                                        Nature Experiences
                                    </Link>
                                    <Link href="/products" className={`${FONT_MONTSERRAT} text-[15px] sm:text-[16px] leading-snug sm:leading-[20px] text-[#6d440c] font-normal cursor-pointer hover:opacity-75 no-underline`}>
                                        Products
                                    </Link>
                                    <Link href="#contact-form" className={`${FONT_MONTSERRAT} text-[15px] sm:text-[16px] leading-snug sm:leading-[20px] text-[#6d440c] font-normal cursor-pointer hover:opacity-75 no-underline`}>
                                        Contact
                                    </Link>
                                </div>
                            </div>

                            {/* Contact */}
                            <div data-figma-id="641:154" className="flex flex-col gap-3 sm:gap-4">
                                <span data-figma-id="641:155" className={`${FONT_MONTSERRAT} text-[#6d440c] text-base sm:text-[20px] font-medium leading-tight sm:leading-[24.38px] uppercase`}>
                                    {"Contact"}
                                </span>
                                <div className="flex flex-col gap-2 sm:gap-3">
                                    <span className={`${FONT_MONTSERRAT} text-[15px] sm:text-[16px] leading-snug sm:leading-[20px] text-[#6d440c] font-normal`}>
                                        Phone Number
                                    </span>
                                    <span className={`${FONT_MONTSERRAT} text-[15px] sm:text-[16px] leading-snug sm:leading-[20px] text-[#6d440c] font-normal`}>
                                        Email Address
                                    </span>
                                    <span className={`${FONT_MONTSERRAT} text-[15px] sm:text-[16px] leading-snug sm:leading-[20px] text-[#6d440c] font-normal`}>
                                        Location
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dashed Separator Line */}
                    <div data-figma-id="641:157" className="border-t border-dashed border-[#6d440c]/40 sm:border-[#6d440c] w-full my-2 sm:my-0" />

                    {/* Bottom Content: Social Icons & Copyright */}
                    <div data-figma-id="641:158" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
                        <div data-figma-id="641:159" className="flex items-center gap-3">
                            <SocialMediaIcon data-figma-id="641:160" viewBox="0 0 20 20" iconClassName="w-4 h-4" href="#figma-vector-136" />
                            <SocialMediaIcon data-figma-id="641:163" viewBox="0 0 125.248 128" iconClassName="w-3.5 h-3.5" href="#figma-vector-137" />
                            <SocialMediaIcon data-figma-id="641:166" viewBox="0 0 182.337 127.131" iconClassName="w-5 h-3.5" href="#figma-vector-138" />
                            <SocialMediaIcon data-figma-id="641:169" viewBox="0 0 116.67 220.52" iconClassName="w-2.5 h-4" href="#figma-vector-139" />
                        </div>
                        <span data-figma-id="641:172" className={`${FONT_MONTSERRAT} text-[14px] sm:text-[16px] leading-[20px] text-[#6d440c] text-left font-normal`}>
                            {"© 2026 A piece of earth. All Rights Reserved."}
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}
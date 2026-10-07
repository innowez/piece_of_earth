import React from 'react';
import { SiteMenu } from '@/components/site-menu';
import { Header } from '../header';

const FONT_MONTSERRAT = "font-[Montserrat,system-ui,sans-serif]";
const FONT_CINZEL = "font-[Cinzel,system-ui,sans-serif] font-normal";

function Home(p: {
  "data-figma-id": string;
  text: string;
}) {
  return <span data-figma-id={p["data-figma-id"]} className={`${FONT_MONTSERRAT} text-[16px] leading-[20px] text-[#6d440c] whitespace-pre font-normal relative shrink-0`}>
    {p.text}
  </span>;
}
function SocialMediaIcon(p: {
  "data-figma-id": string;
  viewBox: string;
  iconClassName: string;
  href: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} className="relative w-8 h-8 shrink-0 bg-[#6d440c] rounded-[100px] flex box-border items-center justify-center p-2 gap-2.5">
    <div data-figma-id="641:161" className="relative w-6 h-6 shrink-0 flex box-border items-center justify-center p-2.5 gap-2.5">
      <svg data-figma-id="641:162" viewBox={p.viewBox} preserveAspectRatio="none" className={`relative shrink-0 ${p.iconClassName}`}>
        <use href={p.href} fill="#fff8e7" />
      </svg>
    </div>
  </div>;
}
function Frame315(p: {
  "data-figma-id": string;
  imageClassName: string;
  text: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} className="relative w-[calc(50%-12px)] sm:w-[calc(50%-16px)] lg:w-[336px] flex-none flex flex-col gap-3 sm:gap-4">
    <div data-figma-id="457:815" className={`${p.imageClassName} w-full h-[172px] sm:h-[240px] lg:h-[325px] shrink-0`} />
    <div data-figma-id="457:816" className="flex flex-col min-w-0 gap-2 sm:gap-3 relative h-max shrink-0 self-stretch">
      <span data-figma-id="457:817" className={`${FONT_MONTSERRAT} whitespace-pre text-center text-[#364139] text-[18px] sm:text-[24px] font-medium leading-[22px] sm:leading-[29.256px] min-w-0 min-h-0 relative flex-1 self-stretch`}>
        {p.text}
      </span>
      <span data-figma-id="457:818" className={`${FONT_MONTSERRAT} whitespace-pre text-center text-[#364139] leading-[24px] text-[14px] sm:text-[16px] font-medium min-w-0 min-h-0 relative flex-1 self-stretch`}>
        {"What they do"}
      </span>
    </div>
  </div>;
}
export function AboutUs() {
  return <>
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
      {/* Header */}
      <Header />

      {/* Hero image band with "About us" title overlay */}
      <div data-figma-id="133:194" className="relative w-full h-[220px] sm:h-[320px] lg:h-[471px] bg-[url('/images/74ff52e3-1f6a-4da4-8acf-4c5a11373ff7.jpg')] bg-[length:100%_171.975%] bg-[position:0%_63.655%] bg-no-repeat">
        <span data-figma-id="302:781" className={`whitespace-pre text-center ${FONT_CINZEL} text-white text-[32px] sm:text-[40px] lg:text-[48px] leading-[43px] sm:leading-[54px] lg:leading-[65px] lowercase [mix-blend-mode:overlay] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 [font-variation-settings:"wght"_500]`}>
          {"About us"}
        </span>
      </div>

      {/* Our story */}
      <div data-figma-id="451:691" className="relative w-full max-w-[996px] mx-auto mt-16 lg:mt-[120px] px-6 lg:px-0 flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
        <div data-figma-id="451:690" className="relative w-full lg:w-[426px] shrink-0 flex flex-col gap-4 lg:gap-5">
          <div data-figma-id="451:689" className="flex flex-col min-w-0 gap-3 lg:gap-5 relative h-max shrink-0 self-stretch">
            <span data-figma-id="140:203" className={`${FONT_CINZEL} text-[#6d440c] whitespace-pre text-center lg:text-left text-[32px] sm:text-[40px] lg:text-[48px] leading-[43px] sm:leading-[54px] lg:leading-[65px] min-w-0 relative shrink-0 self-stretch`}>
              {"our story"}
            </span>
            <span data-figma-id="140:204" className={`${FONT_MONTSERRAT} text-[#364139] leading-[20px] lg:leading-[24px] whitespace-pre text-center lg:text-left text-[14px] sm:text-[16px] lg:text-[18px] font-medium lg:text-justify min-w-0 relative h-max shrink-0 self-stretch`}>
              {"A Piece of Earth began very simply:\nas a choice."}
            </span>
          </div>
          <span data-figma-id="140:202" className={`${FONT_MONTSERRAT} text-[#364139] leading-[20px] lg:leading-[24px] whitespace-pre-line text-center lg:text-left text-[12px] sm:text-[14px] lg:text-[16px] font-normal min-w-0 relative h-max shrink-0 self-stretch`}>
            {"We are a family-rooted collective who choose a \ncalmer life. We want to slow down, tend a garden, \nand closely observe the wild flora and fauna sharing \nthis space with us. Instead of rushing through the \nworld, we choose to creatively document her—\nlearning her rhythms, experimenting with natural \npigments, and finding our place within her.\n\nAt the core of this journey is pottery. Working with \nclay keeps us quite literally in touch with the ground, \nusing the earth herself to tell the stories we wonder \nabout and trace the patterns we admire. Clay cannot \nbe rushed; the craft demands full presence, teaching \na deep, grounding patience as a form takes shape in \nthe hands and quiets the mind."}
          </span>
        </div>
        <div data-figma-id="133:198" className="relative w-full h-[280px] sm:h-[328px] lg:h-auto lg:w-[522px] lg:min-h-[513px] shrink-0 self-stretch bg-[#d9d9d9] bg-[url('/images/f69dfd2f616edd808571b2d8e668bbba199992b3.jpg')] bg-cover bg-center bg-no-repeat" />
      </div>

      {/* Our team */}
      <div data-figma-id="457:930" className="relative w-full mt-16 lg:mt-[120px] bg-[#f3e8d5] flex flex-col box-border px-6 xl:px-[144px] py-12 lg:py-[72px] gap-2.5">
        <div data-figma-id="457:929" className="relative w-full flex flex-col items-center gap-8 lg:gap-12">
          <span data-figma-id="457:845" className={`whitespace-pre text-center ${FONT_CINZEL} text-[#6d440c] text-[32px] sm:text-[40px] lg:text-[48px] leading-[43px] sm:leading-[54px] lg:leading-[65px] min-w-0 relative shrink-0 self-stretch`}>
            {"our team"}
          </span>
          <div data-figma-id="457:928" className="flex flex-wrap justify-center min-w-0 items-start gap-6 sm:gap-8 lg:gap-[72px] relative h-max w-full max-w-[1200px] mx-auto shrink-0 self-stretch">
            <Frame315 data-figma-id="457:814" imageClassName="bg-[url('/images/40efe39f-11a5-42d0-9fa0-c085441fd95a.jpg')] bg-cover bg-center bg-no-repeat" text="Jyothis" />
            <Frame315 data-figma-id="457:846" imageClassName="bg-[url('/images/485d8742-a2fc-4411-b79c-577315dcb171.jpg')] bg-cover bg-center bg-no-repeat" text="Lilly" />
            <Frame315 data-figma-id="457:882" imageClassName="bg-[url('/images/5aa739dc-168b-47bf-956b-06bb113e26bf.jpg')] bg-cover bg-center bg-no-repeat" text="Rajesh" />
            <Frame315 data-figma-id="457:862" imageClassName="bg-[url('/images/4766ea83-dc2a-4834-bd50-119ae3687a24.jpg')] bg-[length:100%_142.308%] bg-[position:0%_100.353%] bg-no-repeat" text="Subhanu" />
            <Frame315 data-figma-id="457:894" imageClassName="bg-[url('/images/9a0eb1d5-e70b-4419-b159-fd9c32432594.jpg')] bg-cover bg-center bg-no-repeat" text="Thejaswitha" />
          </div>
        </div>
      </div>

      {/* Begin the Conversation — contact form */}
      <div data-figma-id="142:329" className="relative w-full max-w-[1200px] mx-auto mt-16 lg:mt-[120px] px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div data-figma-id="142:330" className="relative w-full h-[280px] sm:h-[328px] lg:h-[524px] lg:w-[563px] shrink-0 bg-[#d9d9d9] bg-[url('/images/1e312c08-6059-4e9b-abb8-551dacd8fcec.jpg')] bg-[length:211.512%_131.107%] bg-[position:22.559%_9.392%] bg-no-repeat" />
        <div data-figma-id="142:331" className="relative w-full lg:w-[589px] shrink-0 flex flex-col gap-6 lg:gap-9">
          <div data-figma-id="142:332" className="flex flex-col min-w-0 gap-5 lg:gap-7 relative h-max shrink-0 self-stretch">
            <span data-figma-id="142:333" className={`${FONT_CINZEL} text-[#6d440c] whitespace-pre-line text-[24px] sm:text-[30px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[49px] lowercase min-w-0 relative h-max shrink-0 self-stretch`}>
              {"Begin the\nConversation"}
            </span>
            <div data-figma-id="142:334" className="flex flex-col min-w-0 gap-8 lg:gap-12 relative h-max shrink-0 self-stretch">
              <div data-figma-id="142:335" className="flex flex-col min-w-0 gap-5 lg:gap-7 relative h-max shrink-0 self-stretch">
                <div data-figma-id="142:336" className="shadow-[inset_0_-1px_0_0_#5f7053] flex box-border items-center justify-center min-w-0 py-3 px-0 gap-2.5 relative h-max shrink-0 self-stretch">
                  <span data-figma-id="142:337" className={`${FONT_MONTSERRAT} text-[#364139] whitespace-pre text-[16px] font-medium leading-[30px] min-w-0 relative flex-1`}>
                    {"Full Name"}
                  </span>
                </div>
                <div data-figma-id="142:338" className="flex flex-col sm:flex-row min-w-0 gap-5 sm:gap-7 relative h-max shrink-0 self-stretch">
                  <div data-figma-id="142:339" className="shadow-[inset_0_-1px_0_0_#5f7053] flex box-border items-center justify-center min-w-0 py-3 px-0 gap-2.5 relative h-max flex-1">
                    <span data-figma-id="142:340" className={`${FONT_MONTSERRAT} text-[#364139] whitespace-pre text-[16px] font-medium leading-[30px] min-w-0 relative flex-1`}>
                      {"Email Address"}
                    </span>
                  </div>
                  <div data-figma-id="142:341" className="shadow-[inset_0_-1px_0_0_#5f7053] flex box-border items-center justify-center min-w-0 py-3 px-0 gap-2.5 relative h-max flex-1">
                    <span data-figma-id="142:342" className={`${FONT_MONTSERRAT} text-[#364139] whitespace-pre text-[16px] font-medium leading-[30px] min-w-0 relative flex-1`}>
                      {"Phone Number"}
                    </span>
                  </div>
                </div>
                <div data-figma-id="142:343" className="shadow-[inset_0_-1px_0_0_#5f7053] flex box-border items-center justify-center min-w-0 py-3 px-0 gap-2.5 relative h-max shrink-0 self-stretch">
                  <span data-figma-id="142:344" className={`${FONT_MONTSERRAT} text-[#364139] whitespace-pre text-[16px] font-medium leading-[30px] min-w-0 relative flex-1`}>
                    {"Message"}
                  </span>
                </div>
              </div>
              <div data-figma-id="142:345" className="relative w-[108px] h-12 shrink-0 bg-[#845436] shadow-[inset_0_0_0_1px_#845436] flex box-border items-center justify-center py-2.5 px-6 gap-2">
                <span data-figma-id="142:346" className={`${FONT_MONTSERRAT} text-[16px] leading-[20px] text-[#fff8e7] whitespace-pre font-medium relative shrink-0`}>
                  {"Submit"}
                </span>
              </div>
            </div>
          </div>
          <span data-figma-id="142:347" className={`${FONT_MONTSERRAT} text-[#364139] leading-[24px] whitespace-pre-line text-[14px] sm:text-[16px] font-medium min-w-0 min-h-0 relative flex-1 self-stretch`}>
            {"Thank you for reaching out. We'll connect with you shortly via \nWhatsApp or email."}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div data-figma-id="641:137" className="relative w-full mt-16 lg:mt-[120px] bg-[#f3e8d5] shadow-[inset_0_1px_0_0_#6d440c] flex flex-col box-border px-6 xl:px-[120px] py-12 lg:py-[72px] gap-2.5">
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
                    <Home data-figma-id="641:148" text="Home" />
                    <Home data-figma-id="641:149" text="About Us" />
                    <span data-figma-id="641:150" className={`${FONT_MONTSERRAT} text-[16px] leading-[20px] text-[#6d440c] whitespace-pre font-normal relative shrink-0 [font-variation-settings:"wght"_500]`}>
                      {"Pottery"}
                    </span>
                    <Home data-figma-id="641:151" text="Nature Experiences" />
                    <Home data-figma-id="641:152" text="Products" />
                    <Home data-figma-id="641:153" text="Contact" />
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
  </>;
}
export default AboutUs;

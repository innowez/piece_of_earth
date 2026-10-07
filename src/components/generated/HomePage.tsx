import Footer from '../footer';
import Form from '../form';
import { Header } from '../header';

const FONT_MONTSERRAT = "font-['Montserrat',_system-ui,_sans-serif]";
const FONT_CINZEL = "font-['Cinzel',_system-ui,_sans-serif] font-normal";

const TEXT1 = "whitespace-pre leading-[22px]";
const TEXT5 = "text-[#364139] whitespace-normal leading-6";
const TEXT6 = "text-[#364139] font-normal leading-[30px]";
const TEXT7 = "whitespace-pre text-5xl leading-[65px] text-center";

const FONT_MONTSERRAT_16 = `${FONT_MONTSERRAT} text-[#6d440c] whitespace-pre text-base font-medium leading-5`;
const FONT_MONTSERRAT_16C = `${FONT_MONTSERRAT} text-[#fff8e7] whitespace-pre text-base font-medium leading-5`;
const FONT_MONTSERRAT_16D = `${FONT_MONTSERRAT} text-[#6d440c] whitespace-pre text-base font-normal leading-5`;
const FONT_MONTSERRAT_18 = `${FONT_MONTSERRAT} whitespace-pre leading-[22px] text-[#845436] text-lg font-medium`;
const FONT_MONTSERRAT_18B = `${FONT_MONTSERRAT} whitespace-pre leading-[22px] text-[#fff8e7] text-lg font-medium`;
const FONT_CINZEL_24 = `${FONT_CINZEL} text-2xl leading-[32.352px] text-[#6d440c] lowercase whitespace-pre text-center`;

const ROW1 = "flex py-2.5 px-3 box-border items-center justify-center gap-2";
const ROW3 = "flex py-2.5 px-6 box-border items-center justify-center gap-2";
const COL1 = "flex flex-col";

function Frame291(p: { "data-figma-id": string; bgClassName: string; text: string }) {
  return (
    <div data-figma-id={p["data-figma-id"]} className="relative w-full max-w-[564px] min-w-0 flex-1 h-[737px] flex flex-col gap-4">
      <div data-figma-id="443:293" className="flex flex-col min-w-0 gap-4 relative h-[655px] shrink-0 self-stretch">
        <div data-figma-id="443:277" className={`${p.bgClassName} min-w-0 relative h-[617px] shrink-0 self-stretch`} />
        <span data-figma-id="443:280" className={`${FONT_CINZEL_24} min-w-0 relative shrink-0 self-stretch`}>
          {p.text}
        </span>
      </div>
      <div data-figma-id="443:282" className="flex min-w-0 justify-between gap-4 relative h-[56px] shrink-0 self-stretch">
        <div
          data-figma-id="443:287"
          className={`bg-[#845436] [box-shadow:inset_0_0_0_1px_#845436] ${ROW1} w-1/2 flex-1 min-w-0 relative h-12 shrink-0 self-stretch`}
        >
          <div data-figma-id="443:288" className="relative w-5 h-5 shrink-0 overflow-hidden">
            <svg data-figma-id="443:289" viewBox="0 0 256 257.147" preserveAspectRatio="none" className="absolute left-0 top-0 w-full h-[99.669%]">
              <use href="#figma-vector-1" fill="#fff8e7" />
            </svg>
            <svg
              data-figma-id="443:290"
              viewBox="0 0 129.447 120.054"
              preserveAspectRatio="none"
              className="absolute left-[24.909%] top-[26.578%] w-[50.565%] h-[46.532%]"
            >
              <use href="#figma-vector-2" fill="#fff8e7" />
            </svg>
          </div>
          <span data-figma-id="443:291" className={`${FONT_MONTSERRAT_18B} relative shrink-0`}>
            {"Book Your Slot"}
          </span>
        </div>
        <div
          data-figma-id="443:283"
          className={`[box-shadow:inset_0_0_0_1px_#845436] ${ROW1} min-w-0 w-1/2 flex-1 relative h-12 shrink-0 self-stretch`}
        >
          <span data-figma-id="443:286" className={`${FONT_MONTSERRAT_18} relative shrink-0`}>
            {"Learn More"}
          </span>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
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

      <div data-figma-id="72:235" className="relative w-full self-start bg-[#fff8e7] flex flex-col overflow-x-hidden">
        {/* Header */}
        <Header />

        {/* Hero — full screen */}
        <div
          data-figma-id="72:280"
          className="relative w-full h-[calc(100vh-88px)] bg-[url('/images/e0096f1e-32c9-4ff5-90f9-2777e10acbc8.png')] bg-cover bg-center bg-no-repeat"
        />

        {/* Finding Your Piece of Earth */}
        <div data-figma-id="79:763" className="relative w-full max-w-[996px] mx-auto mt-[120px] flex flex-col items-center gap-12">
          <span data-figma-id="75:541" className={`${FONT_CINZEL} ${TEXT7} text-[#6d440c] min-w-0 relative shrink-0 self-stretch`}>
            {"Finding Your Piece of Earth"}
          </span>
          <div data-figma-id="79:762" className="min-w-0 flex items-center gap-[82px] relative h-max shrink-0 self-stretch">
            <div data-figma-id="79:761" className="flex flex-col min-w-0 gap-12 relative h-[264px] flex-1">
              <span data-figma-id="76:553" className={`${FONT_MONTSERRAT} ${TEXT5} text-lg font-normal text-justify min-w-0 relative h-[168px] shrink-0 self-stretch`}>
                <span className="absolute top-0 left-0 whitespace-pre leading-6 text-left">
                  {"We are a pottery studio and a sanctuary, tucked \naway in the mystical Wayanad, born from a deep \nlove for the living world.\n\nHere, we gather in mutual care to learn nature’s \nlanguage through art and honour the delicate life \naround us."}
                </span>
              </span>
              <div data-figma-id="76:567" className={`relative w-[135px] h-12 shrink-0 [box-shadow:inset_0_0_0_1px_#845436] ${ROW3}`}>
                <span data-figma-id="76:571" className={`${FONT_MONTSERRAT} ${TEXT1} text-[#6d440c] text-lg font-medium relative shrink-0`}>
                  {"Our Story"}
                </span>
              </div>
            </div>
            <div
              data-figma-id="76:552"
              className="bg-[url('/images/2a63cd7b-b07a-4fe5-a73b-88e4ad69b20b.jpg')] bg-cover bg-center bg-no-repeat min-w-0 relative h-[457px] flex-1"
            />
          </div>
        </div>

        {/* Experiences */}
        <div data-figma-id="443:322" className="relative w-full mt-[120px] bg-[#f3e8d5] flex flex-col py-[72px] px-6 xl:px-[120px] box-border gap-12">
          <div data-figma-id="443:321" className="flex flex-col min-w-0 items-center gap-4 relative h-max shrink-0 self-stretch">
            <span data-figma-id="443:51" className={`${FONT_CINZEL} ${TEXT7} text-[#6d440c] min-w-0 relative shrink-0 self-stretch`}>
              {"experiences"}
            </span>
            <p className={`${FONT_MONTSERRAT} ${TEXT5} text-lg font-normal text-center whitespace-pre-line w-full max-w-[1200px] mx-auto`}>
              {"Nurturing, intimate art space that invites you to learn the language of the\nearth and discover a deeper connection through slow, mindful craft."}
            </p>
          </div>
          <div data-figma-id="443:319" className="min-w-0 flex items-center justify-center gap-9 relative h-max shrink-0 self-stretch">
            <Frame291
              data-figma-id="443:294"
              bgClassName="bg-[url('/images/8f1a0111-5f93-442e-850a-f5be07cd0613.jpg')] [background-size:100%_134.142%] [background-position:0%_95.613%] bg-no-repeat"
              text="Pottery"
            />
            <Frame291
              data-figma-id="443:295"
              bgClassName="bg-[url('/images/d3fbae90-efca-48e4-810c-bff2d5063df0.jpg')] [background-size:142.802%_100%] [background-position:41.64%_0%] bg-no-repeat"
              text="Nature journaling"
            />
            {/* <Frame291
              data-figma-id="443:307"
              bgClassName="bg-[url('/images/e1c2f04c-5678-443f-b172-954594315705.jpg')] bg-cover bg-center bg-no-repeat"
              text="Nature colors"
            /> */}
          </div>
        </div>

        {/* Decorative band + Enquire now */}
        {/* <div data-figma-id="443:499" className="relative w-full h-[720px] overflow-hidden">
          <div
            className="absolute inset-0 [filter:brightness(1.27)_contrast(0.88)] bg-[url('/images/c66f636d-7eee-4f76-b4f4-2bfe2c881d3b.png')] bg-cover bg-center bg-no-repeat pointer-events-none"
          />
          <div data-figma-id="641:258" className={`absolute left-[7.6%] bottom-[72px] w-[183px] h-12 bg-[#fff8e7] rounded-md ${ROW1}`}>
            <div data-figma-id="641:259" className="relative w-5 h-5 shrink-0 overflow-hidden">
              <svg data-figma-id="641:260" viewBox="0 0 256 257.147" preserveAspectRatio="none" className="absolute left-0 top-0 w-full h-[99.669%]">
                <use href="#figma-vector-1" fill="#6d440c" />
              </svg>
              <svg data-figma-id="641:261" viewBox="0 0 129.447 120.054" preserveAspectRatio="none" className="absolute left-[24.909%] top-[26.578%] w-[50.565%] h-[46.532%]">
                <use href="#figma-vector-2" fill="#6d440c" />
              </svg>
            </div>
            <span data-figma-id="641:262" className={`${FONT_MONTSERRAT} ${TEXT1} text-[#6d440c] text-lg font-medium relative shrink-0`}>
              {"Enquire now"}
            </span>
          </div>
        </div> */}

        {/* Products */}
        <div data-figma-id="443:456" className="relative w-full max-w-[1183px] mx-auto mt-[120px] flex flex-col items-center gap-12">
          <div data-figma-id="443:342" className="relative w-full max-w-[704px] shrink-0 flex flex-col gap-5">
            <span data-figma-id="443:343" className={`${FONT_CINZEL} text-[#6d440c] lowercase ${TEXT7} min-w-0 relative shrink-0 self-stretch`}>
              {"PRODUCTS"}
            </span>
            <p className={`${FONT_MONTSERRAT} ${TEXT5} text-base font-normal text-center whitespace-pre-line min-w-0 relative shrink-0 self-stretch`}>
              {"Our curated collection brings a piece of the earth into your home through small-batch, handcrafted ceramics and terracotta pieces inspired by the delicate beauty of the wild."}
            </p>
          </div>
          <div data-figma-id="443:397" className="min-w-0 flex items-center gap-[52px] relative h-max shrink-0 self-stretch">
            <div data-figma-id="443:394" className="relative w-[643px] h-[553px] shrink-0">
              <div
                data-figma-id="443:341"
                className="absolute left-5 top-0 w-[603px] h-[553px] bg-[url('/images/5fe47613-902a-4e9a-bd47-4addf9a17e3e.jpg')] [background-size:100%_163.542%] [background-position:0%_100.075%] bg-no-repeat"
              />
              <div data-figma-id="443:353" className="absolute left-[calc(50%_+_-321.5px)] top-[calc(50%_+_-19.5px)] w-[643px] h-max flex justify-between items-center">
                <div
                  data-figma-id="443:411"
                  className="relative w-10 h-10 shrink-0 bg-[#fff8e7] [box-shadow:inset_0_0_0_1px_#6d440c] overflow-hidden origin-center [transform:matrix(-1,0,0,1,0,0)]"
                >
                  <svg
                    data-figma-id="443:400"
                    viewBox="0 0 14 24"
                    preserveAspectRatio="none"
                    className="absolute left-[20%] top-[67.5%] w-[35%] h-[60%] origin-top-left [transform:matrix(0,-1,1,0,0,0)]"
                  >
                    <path d="M0 16C0.742 16 1.85 16.733 2.78 17.475C3.98 18.429 5.027 19.569 5.826 20.876C6.425 21.856 7 23.044 7 24C7 23.044 7.575 21.855 8.174 20.876C8.974 19.569 10.021 18.429 11.219 17.475C12.15 16.733 13.26 16 14 16M7 24L7 0" fill="none" stroke="#6d440c" strokeWidth={1} vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
                  </svg>
                </div>
                <div data-figma-id="443:408" className="relative w-10 h-10 shrink-0 bg-[#fff8e7] [box-shadow:inset_0_0_0_1px_#6d440c] overflow-hidden">
                  <svg
                    data-figma-id="443:400~2"
                    viewBox="0 0 14 24"
                    preserveAspectRatio="none"
                    className="absolute left-[20%] top-[67.5%] w-[35%] h-[60%] origin-top-left [transform:matrix(0,-1,1,0,0,0)]"
                  >
                    <path d="M0 16C0.742 16 1.85 16.733 2.78 17.475C3.98 18.429 5.027 19.569 5.826 20.876C6.425 21.856 7 23.044 7 24C7 23.044 7.575 21.855 8.174 20.876C8.974 19.569 10.021 18.429 11.219 17.475C12.15 16.733 13.26 16 14 16M7 24L7 0" fill="none" stroke="#6d440c" strokeWidth={1} vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
                  </svg>
                </div>
              </div>
            </div>
            <div data-figma-id="443:396" className="relative w-[488px] h-[260px] shrink-0 overflow-hidden">
              <div data-figma-id="443:386" className="absolute left-0 top-0 w-[488px] h-[552px] flex flex-col gap-8">
                <div data-figma-id="443:362" className="flex flex-col min-w-0 justify-center gap-12 relative h-[260px] shrink-0 self-stretch">
                  <div data-figma-id="443:363" className="flex flex-col min-w-0 items-center gap-5 relative h-[100px] shrink-0 self-stretch">
                    <span data-figma-id="443:364" className={`${FONT_CINZEL} text-2xl leading-[32.352px] text-[#6d440c] whitespace-pre min-w-0 relative shrink-0 self-stretch`}>
                      {"the natural history desk"}
                    </span>
                    <span data-figma-id="443:365" className={`${FONT_MONTSERRAT} ${TEXT5} text-base font-medium text-justify min-w-0 relative h-12 shrink-0 self-stretch`}>
                      <span className="absolute top-0 left-0 whitespace-pre leading-6 text-left">
                        {"Terracotta pen holders etched with bold, sculptural\nstories of the living world and ancient time."}
                      </span>
                    </span>
                  </div>
                  <div data-figma-id="443:366" className="relative w-[336px] h-max shrink-0 flex items-center gap-4">
                    <div data-figma-id="443:367" className={`relative w-[194px] h-10 shrink-0 [box-shadow:inset_0_0_0_1px_#6d440c] flex py-2.5 px-4 box-border items-center gap-[11px]`}>
                      <span data-figma-id="443:368" className={`${FONT_MONTSERRAT_16} relative shrink-0`}>
                        {"Explore all Products"}
                      </span>
                    </div>
                    <div data-figma-id="443:369" className={`relative w-[126px] h-10 shrink-0 bg-[#6d440c] ${ROW1}`}>
                      <div data-figma-id="72:284~2" className="relative w-5 h-5 shrink-0 overflow-hidden">
                        <svg data-figma-id="72:285~2" viewBox="0 0 20 19.934" preserveAspectRatio="none" className="absolute left-0 top-0 w-full h-[99.669%]">
                          <use href="#figma-derived-122" fill="#fff8e7" />
                        </svg>
                        <svg data-figma-id="72:286~2" viewBox="0 0 10.113 9.306" preserveAspectRatio="none" className="absolute left-[24.909%] top-[26.578%] w-[50.565%] h-[46.532%]">
                          <use href="#figma-derived-123" fill="#fff8e7" />
                        </svg>
                      </div>
                      <span data-figma-id="72:287~2" className={`${FONT_MONTSERRAT_16C} relative shrink-0`}>
                        {"Buy Now"}
                      </span>
                    </div>
                  </div>
                </div>
                <div data-figma-id="443:374" className="flex flex-col min-w-0 justify-center gap-12 relative h-[260px] shrink-0 self-stretch">
                  <div data-figma-id="443:375" className="flex flex-col min-w-0 items-center gap-5 relative h-[172px] shrink-0 self-stretch">
                    <span data-figma-id="443:376" className={`${FONT_CINZEL} text-2xl leading-[32.352px] text-[#6d440c] whitespace-pre min-w-0 relative shrink-0 self-stretch`}>
                      {"ceramic planter"}
                    </span>
                    <span data-figma-id="443:377" className={`${FONT_MONTSERRAT} ${TEXT5} text-base font-medium text-justify min-w-0 relative h-[120px] shrink-0 self-stretch`}>
                      <span className="absolute top-0 left-0 whitespace-pre leading-6 text-left">
                        {"Crafted from natural clay and finished by hand, this ceramic \nplanter brings warmth and character to any space. \nDesigned for both indoor and outdoor plants, each piece \ncelebrates the subtle imperfections that make handmade \npottery unique."}
                      </span>
                    </span>
                  </div>
                  <div data-figma-id="443:378" className="relative w-[336px] h-max shrink-0 flex items-center gap-4">
                    <div data-figma-id="443:379" className={`relative w-[194px] h-10 shrink-0 [box-shadow:inset_0_0_0_1px_#6d440c] flex py-2.5 px-4 box-border items-center gap-[11px]`}>
                      <span data-figma-id="443:380" className={`${FONT_MONTSERRAT_16} relative shrink-0`}>
                        {"Explore all Products"}
                      </span>
                    </div>
                    <div data-figma-id="443:381" className={`relative w-[126px] h-10 shrink-0 bg-[#6d440c] ${ROW1}`}>
                      <div data-figma-id="72:284~3" className="relative w-5 h-5 shrink-0 overflow-hidden">
                        <svg data-figma-id="72:285~3" viewBox="0 0 20 19.934" preserveAspectRatio="none" className="absolute left-0 top-0 w-full h-[99.669%]">
                          <use href="#figma-derived-122" fill="#fff8e7" />
                        </svg>
                        <svg data-figma-id="72:286~3" viewBox="0 0 10.113 9.306" preserveAspectRatio="none" className="absolute left-[24.909%] top-[26.578%] w-[50.565%] h-[46.532%]">
                          <use href="#figma-derived-123" fill="#fff8e7" />
                        </svg>
                      </div>
                      <span data-figma-id="72:287~3" className={`${FONT_MONTSERRAT_16C} relative shrink-0`}>
                        {"Buy Now"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blogs / Journal */}
        {/* <div data-figma-id="92:39" className="relative w-full max-w-[1200px] mx-auto mt-[120px] flex flex-col gap-6">
          <div data-figma-id="79:724" className="flex justify-between min-w-0 items-end relative h-max shrink-0 self-stretch">
            <span data-figma-id="79:725" className={`${FONT_CINZEL} text-[#6d440c] whitespace-pre text-[36px] leading-[49px] relative shrink-0`}>
              {"BLOGS / JOURNAL"}
            </span>
            <div data-figma-id="79:726" className={`relative w-[188px] h-12 shrink-0 [box-shadow:inset_0_0_0_1px_#845436] ${ROW3}`}>
              <span data-figma-id="79:727" className={`${FONT_MONTSERRAT_16} relative shrink-0`}>
                {"Read All Journals"}
              </span>
            </div>
          </div>
          <div data-figma-id="92:38" className="flex flex-col min-w-0 gap-6 relative h-max shrink-0 self-stretch">
            <div
              data-figma-id="79:728"
              className="bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%),url('/images/c1c6f796-a183-4c06-99f1-5ccaa157e3e7.jpg')] bg-cover bg-center bg-no-repeat min-w-0 relative h-[500px] shrink-0 self-stretch"
            >
              <span data-figma-id="79:716" className={`absolute left-[48px] top-[388px] w-[calc(100%_-_96px)] max-w-[699px] h-16 ${FONT_CINZEL} text-2xl leading-[32.352px] text-[#fff8e7] whitespace-normal`}>
                <span className="absolute top-0 left-0 whitespace-pre leading-8 text-left">
                  {"stories from the studio, reflections from the garden, \nand observations gathered along the way."}
                </span>
              </span>
            </div>
            <div data-figma-id="92:37" className="min-w-0 flex items-center gap-5 relative h-max shrink-0 self-stretch">
              <div data-figma-id="92:10" className={`relative w-full max-w-[386.667px] min-w-0 flex-1 h-[331px] shrink-0 ${SURFACE1} ${COL2}`}>
                <div data-figma-id="79:731" className="relative w-[330.67px] h-[74px] shrink-0 flex flex-col gap-3">
                  <span data-figma-id="79:729" className={`${FONT_CINZEL} ${TEXT1} text-base [font-variation-settings:'wght'_500] text-[#fff8e7] min-w-0 relative shrink-0 self-stretch`}>
                    {"Lessons from the Garden"}
                  </span>
                  <span data-figma-id="79:730" className={`${FONT_MONTSERRAT} text-[#fff8e7] whitespace-normal text-sm font-medium leading-5 min-w-0 relative h-10 shrink-0 self-stretch`}>
                    <span className="absolute top-0 left-0 whitespace-pre leading-5 text-left">
                      {"What plants teach us about patience, growth, \nand care."}
                    </span>
                  </span>
                </div>
              </div>
              <div
                data-figma-id="92:16"
                className={`relative w-full max-w-[386.667px] min-w-0 flex-1 h-[331px] shrink-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_48.187%,rgba(0,0,0,0.5)_100%),url('/images/638fee76-bddf-4422-8741-faa56d5a945e.png')] bg-cover bg-center bg-no-repeat ${COL2}`}
              >
                <div data-figma-id="92:17" className="relative w-[330.67px] h-[74px] shrink-0 flex flex-col gap-3">
                  <span data-figma-id="92:18" className={`${FONT_CINZEL} ${TEXT1} text-base [font-variation-settings:'wght'_500] text-[#fff8e7] min-w-0 relative shrink-0 self-stretch`}>
                    {"Lessons from the Garden"}
                  </span>
                  <span data-figma-id="92:19" className={`${FONT_MONTSERRAT} text-[#fff8e7] whitespace-normal text-sm font-medium leading-5 min-w-0 relative h-10 shrink-0 self-stretch`}>
                    <span className="absolute top-0 left-0 whitespace-pre leading-5 text-left">
                      {"What plants teach us about patience, growth, \nand care."}
                    </span>
                  </span>
                </div>
              </div>
              <div data-figma-id="92:11" className={`relative w-full max-w-[386.667px] min-w-0 flex-1 h-[331px] shrink-0 ${SURFACE1} ${COL2}`}>
                <div data-figma-id="92:30" className="relative w-[330.67px] h-[74px] shrink-0 flex flex-col gap-3">
                  <span data-figma-id="92:31" className={`${FONT_CINZEL} ${TEXT1} text-base [font-variation-settings:'wght'_500] text-[#fff8e7] min-w-0 relative shrink-0 self-stretch`}>
                    {"Lessons from the Garden"}
                  </span>
                  <span data-figma-id="92:32" className={`${FONT_MONTSERRAT} text-[#fff8e7] whitespace-normal text-sm font-medium leading-5 min-w-0 relative h-10 shrink-0 self-stretch`}>
                    <span className="absolute top-0 left-0 whitespace-pre leading-5 text-left">
                      {"What plants teach us about patience, growth, \nand care."}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Testimonials */}
        <div data-figma-id="183:53" className="relative w-full mt-[120px] bg-[#f3e8d5] flex flex-col box-border gap-2.5 py-[72px] px-6">
          <div data-figma-id="183:54" className="relative w-full max-w-[630px] mx-auto shrink-0 flex flex-col items-center gap-[72px]">
            <div data-figma-id="183:55" className="flex flex-col min-w-0 items-center gap-10 relative h-max shrink-0 self-stretch">
              <span data-figma-id="183:56" className={`${FONT_CINZEL} text-[#6d440c] whitespace-pre text-[36px] leading-[49px] text-center min-w-0 relative shrink-0 self-stretch`}>
                {"TESTIMONIALS"}
              </span>
              <div data-figma-id="183:57" className="flex flex-col min-w-0 items-center gap-8 relative h-[116px] shrink-0 self-stretch">
                <span data-figma-id="183:58" className={`${FONT_MONTSERRAT} ${TEXT6} whitespace-normal text-xl italic text-center min-w-0 relative h-[60px] shrink-0 self-stretch`}>
                  <span
                    data-figma-text-line="0"
                    className="absolute left-[calc(50%_+_2.617px)] -translate-x-1/2 top-0 w-[603.32px] h-[30px] block whitespace-pre leading-[30px] text-left"
                  >
                    {"“I came to learn pottery and left with a completely different "}
                  </span>
                  <span
                    data-figma-text-line="1"
                    className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[607.422px] h-[30px] block whitespace-pre leading-[30px] text-left"
                  >
                    {"appreciation for slowing down and creating with my hands”"}
                  </span>
                </span>
                <span data-figma-id="183:59" className={`${FONT_CINZEL} text-[#6d440c] whitespace-pre text-xl leading-[26.96px] text-center min-w-0 relative shrink-0 self-stretch`}>
                  {"ananya"}
                </span>
              </div>
            </div>
            <div data-figma-id="183:94" className="relative w-max h-[110px] shrink-0 flex flex-col items-center gap-12">
              <div data-figma-id="183:60" className="relative w-20 h-max shrink-0 flex items-center justify-center gap-3">
                <div data-figma-id="183:61" className="relative w-3.5 h-3.5 shrink-0 bg-[#6d440c] rounded-full" />
                <div data-figma-id="183:62" className="relative w-2.5 h-2.5 shrink-0 bg-[rgba(109,68,12,0.15)] rounded-full" />
                <div data-figma-id="183:63" className="relative w-2.5 h-2.5 shrink-0 bg-[rgba(109,68,12,0.15)] rounded-full" />
                <div data-figma-id="183:64" className="relative w-2.5 h-2.5 shrink-0 bg-[rgba(109,68,12,0.15)] rounded-full" />
              </div>
              <div data-figma-id="183:65" className={`relative w-[197px] h-12 shrink-0 [box-shadow:inset_0_0_0_1px_#845436] ${ROW3}`}>
                <div data-figma-id="183:66" className="relative w-6 h-6 shrink-0 overflow-hidden">
                  <div data-figma-id="183:67" className="absolute left-[7.811%] top-[6.252%] w-[84.451%] h-[87.463%]">
                    <svg data-figma-id="183:68" viewBox="0 0 10.844 5.605" preserveAspectRatio="none" className="absolute left-[5.168%] top-0 w-[80.254%] h-[40.051%] opacity-[0.987]">
                      <use href="#figma-vector-148" fill="#f44336" />
                    </svg>
                    <svg data-figma-id="183:69" viewBox="0 0 3.005 6.199" preserveAspectRatio="none" className="absolute left-0 top-[27.987%] w-[22.241%] h-[44.299%] opacity-[0.997]">
                      <use href="#figma-vector-149" fill="#ffc107" />
                    </svg>
                    <svg data-figma-id="183:70" viewBox="0 0 6.64 6.584" preserveAspectRatio="none" className="absolute left-[50.86%] top-[40.775%] w-[49.14%] h-[47.046%] opacity-[0.999]">
                      <use href="#figma-vector-150" fill="#448aff" />
                    </svg>
                    <svg data-figma-id="183:71" viewBox="0 0 10.685 5.672" preserveAspectRatio="none" className="absolute left-[5.552%] top-[59.466%] w-[79.077%] h-[40.534%] opacity-[0.993]">
                      <use href="#figma-vector-151" fill="#43a047" />
                    </svg>
                  </div>
                </div>
                <span data-figma-id="183:72" className={`${FONT_MONTSERRAT_16} relative shrink-0`}>
                  {"Write a review"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="183:95" className="absolute left-[calc(50%_+_-560px)] top-[calc(50%_+_-19.5px)] w-[1120px] h-max flex justify-between items-center">
            <div data-figma-id="183:96" className="relative w-10 h-10 shrink-0 bg-[#f3e8d5] overflow-hidden origin-center [transform:matrix(-1,0,0,1,0,0)]">
              <svg
                data-figma-id="183:97"
                viewBox="-0.5 -0.5 15 25"
                preserveAspectRatio="none"
                className="absolute left-[calc(20%_-_0.5px)] top-[calc(67.5%_-_0.5px)] w-[calc(35%_+_1px)] h-[calc(60%_+_1px)] origin-top-left [transform:matrix(0,-1,1,0,0,0)]"
              >
                <use href="#figma-vector-153" fill="transparent" stroke="#6d440c" strokeWidth={1} vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
              </svg>
            </div>
            <div data-figma-id="183:98" className="relative w-10 h-10 shrink-0 bg-[#f3e8d5] overflow-hidden">
              <svg
                data-figma-id="183:99"
                viewBox="-0.5 -0.5 15 25"
                preserveAspectRatio="none"
                className="absolute left-[calc(20%_-_0.5px)] top-[calc(67.5%_-_0.5px)] w-[calc(35%_+_1px)] h-[calc(60%_+_1px)] origin-top-left [transform:matrix(0,-1,1,0,0,0)]"
              >
                <use href="#figma-vector-153" fill="transparent" stroke="#6d440c" strokeWidth={1} vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
              </svg>
            </div>
          </div>
        </div>

        {/* Begin the Conversation — contact form */}
        <Form />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

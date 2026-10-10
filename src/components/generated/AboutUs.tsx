import { Header } from '../header';
import Form from '../form';
import Footer from '../footer';

const FONT_MONTSERRAT = "font-[Montserrat,system-ui,sans-serif]";
const FONT_CINZEL = "font-[Cinzel,system-ui,sans-serif] font-normal";

function Frame315(p: {
  "data-figma-id": string;
  imageSrc: string;
  objectPosition?: string;
  text: string;
}) {
  const webpSrc = p.imageSrc.replace(/\.(jpg|jpeg)$/, '.webp');
  return (
    <div data-figma-id={p["data-figma-id"]} className="relative w-[calc(50%-12px)] sm:w-[calc(50%-16px)] lg:w-[336px] flex-none flex flex-col gap-3 sm:gap-4">
      <div data-figma-id="457:815" className="w-full h-[172px] sm:h-[240px] lg:h-[325px] shrink-0 overflow-hidden bg-[#d9d9d9]">
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={p.imageSrc}
            alt={p.text}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover ${p.objectPosition || 'object-center'}`}
          />
        </picture>
      </div>
      <div data-figma-id="457:816" className="flex flex-col min-w-0 gap-2 sm:gap-3 relative h-max shrink-0 self-stretch">
        <span data-figma-id="457:817" className={`${FONT_MONTSERRAT} whitespace-pre text-center text-[#364139] text-[18px] sm:text-[24px] font-medium leading-[22px] sm:leading-[29.256px] min-w-0 min-h-0 relative flex-1 self-stretch`}>
          {p.text}
        </span>
        <span data-figma-id="457:818" className={`${FONT_MONTSERRAT} whitespace-pre text-center text-[#364139] leading-[24px] text-[14px] sm:text-[16px] font-medium min-w-0 min-h-0 relative flex-1 self-stretch`}>
          {"What they do"}
        </span>
      </div>
    </div>
  );
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
      <div data-figma-id="133:194" className="relative w-full h-[220px] sm:h-[320px] lg:h-[471px] overflow-hidden bg-[#e5dcce]">
        <picture>
          <source srcSet="/images/74ff52e3-1f6a-4da4-8acf-4c5a11373ff7.webp" type="image/webp" />
          <img
            src="/images/74ff52e3-1f6a-4da4-8acf-4c5a11373ff7.jpg"
            alt="About us"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[0%_63.655%]"
          />
        </picture>
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
        <div data-figma-id="133:198" className="relative w-full h-[280px] sm:h-[328px] lg:h-auto lg:w-[522px] lg:min-h-[513px] shrink-0 self-stretch overflow-hidden bg-[#d9d9d9]">
          <picture>
            <source srcSet="/images/f69dfd2f616edd808571b2d8e668bbba199992b3.webp" type="image/webp" />
            <img
              src="/images/f69dfd2f616edd808571b2d8e668bbba199992b3.jpg"
              alt="Our story"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
      </div>

      {/* Our team */}
      <div data-figma-id="457:930" className="relative w-full mt-16 lg:mt-[120px] bg-[#f3e8d5] flex flex-col box-border px-6 xl:px-[144px] py-12 lg:py-[72px] gap-2.5">
        <div data-figma-id="457:929" className="relative w-full flex flex-col items-center gap-8 lg:gap-12">
          <span data-figma-id="457:845" className={`whitespace-pre text-center ${FONT_CINZEL} text-[#6d440c] text-[32px] sm:text-[40px] lg:text-[48px] leading-[43px] sm:leading-[54px] lg:leading-[65px] min-w-0 relative shrink-0 self-stretch`}>
            {"our team"}
          </span>
          <div data-figma-id="457:928" className="flex flex-wrap justify-center min-w-0 items-start gap-6 sm:gap-8 lg:gap-[72px] relative h-max w-full max-w-[1200px] mx-auto shrink-0 self-stretch">
            <Frame315 data-figma-id="457:814" imageSrc="/images/40efe39f-11a5-42d0-9fa0-c085441fd95a.jpg" text="Jyothis" />
            <Frame315 data-figma-id="457:846" imageSrc="/images/485d8742-a2fc-4411-b79c-577315dcb171.jpg" text="Lilly" />
            <Frame315 data-figma-id="457:882" imageSrc="/images/5aa739dc-168b-47bf-956b-06bb113e26bf.jpg" text="Rajesh" />
            <Frame315 data-figma-id="457:862" imageSrc="/images/4766ea83-dc2a-4834-bd50-119ae3687a24.jpg" objectPosition="object-[0%_100%]" text="Subhanu" />
            <Frame315 data-figma-id="457:894" imageSrc="/images/9a0eb1d5-e70b-4419-b159-fd9c32432594.jpg" text="Thejaswitha" />
          </div>
        </div>
      </div>

      {/* Begin the Conversation — contact form */}
      <Form />

      {/* Footer */}
      <Footer />
    </div>
  </>;
}
export default AboutUs;

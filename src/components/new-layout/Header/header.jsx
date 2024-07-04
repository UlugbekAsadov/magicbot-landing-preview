import { useEffect, useState } from "react";
import HeaderRightSection from "@/components/layout/Header/header-right-section";
import Link from "next/link";
import SwitchDarkLight from "@/components/elements/SwitchDarkLight";
import Image from "next/image";

export default function Header({ headerClass, lang }) {
  const [width, setWidth] = useState(window.innerWidth);
  const tabletScreenWidth = 768;
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full  header-color sticky top-0 z-30">
      <div
        id="header"
        className={` site-header ${headerClass} max-w-[1600px] w-full mx-auto !relative  `}
      >
        <div className="container-fluid">
          <div className="flex items-center justify-content-between">
            <div className="">
              <div className="header-left flex flex-align-c">
                <Link href={`/${lang}`}>
                  <svg
                    width="140"
                    height="56"
                    viewBox="0 0 215 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3821_4183"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="191"
                      y="17"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M191.809 17.4351H206.399V32.0035H191.809V17.4351Z"
                        className="logo-white-part"
                      />
                    </mask>
                    <g mask="url(#mask0_3821_4183)">
                      <path
                        d="M199.098 21.3208C199.188 22.1494 199.524 22.8661 200.106 23.4708C200.7 24.0643 201.405 24.4002 202.223 24.501C203.488 24.6242 204.753 24.6801 206.03 24.6689C204.753 24.6577 203.488 24.7249 202.223 24.8481C201.405 24.9377 200.7 25.2848 200.106 25.8783C199.524 26.4718 199.188 27.1885 199.098 28.0283C198.964 29.3161 198.908 30.6038 198.919 31.8916C198.93 30.6038 198.874 29.3161 198.751 28.0283C198.662 27.1885 198.315 26.4718 197.732 25.8783C197.15 25.2848 196.445 24.9377 195.616 24.8481C194.351 24.7249 193.085 24.6577 191.809 24.6689C193.085 24.6801 194.351 24.6242 195.616 24.501C196.445 24.4002 197.15 24.0643 197.732 23.4708C198.315 22.8661 198.662 22.1494 198.751 21.3208C198.874 20.033 198.93 18.7452 198.919 17.4463C198.908 18.7452 198.964 20.033 199.098 21.3208Z"
                        className="logo-white-part"
                      />
                    </g>
                    <mask
                      id="mask1_3821_4183"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="200"
                      y="22"
                      width="11"
                      height="11"
                    >
                      <path
                        d="M200.666 22.9333H210.531V32.0037H200.666V22.9333Z"
                        className="logo-white-part"
                      />
                    </mask>
                    <g mask="url(#mask1_3821_4183)">
                      <path
                        d="M207.026 26.6286C207.071 27.0541 207.25 27.4124 207.541 27.7148C207.843 28.0171 208.202 28.1963 208.616 28.2411C209.254 28.3083 209.893 28.3307 210.542 28.3307C209.893 28.3195 209.254 28.3531 208.616 28.4202C208.202 28.465 207.843 28.633 207.541 28.9354C207.25 29.2377 207.071 29.6072 207.026 30.0215C206.97 30.671 206.936 31.3317 206.948 31.9812C206.948 31.3317 206.914 30.671 206.858 30.0215C206.813 29.6072 206.634 29.2377 206.343 28.9354C206.04 28.633 205.682 28.465 205.268 28.4202C204.63 28.3531 203.991 28.3195 203.342 28.3307C203.991 28.3307 204.63 28.3083 205.268 28.2411C205.682 28.1963 206.04 28.0171 206.343 27.7148C206.634 27.4124 206.813 27.0541 206.858 26.6286C206.914 25.9791 206.948 25.3296 206.948 24.6689C206.936 25.3296 206.97 25.9791 207.026 26.6286Z"
                        className="logo-white-part"
                      />
                    </g>
                    <mask
                      id="mask2_3821_4183"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="200"
                      y="17"
                      width="10"
                      height="6"
                    >
                      <path
                        d="M200.666 17.4351H209.266V22.9332H200.666V17.4351Z"
                        className="logo-white-part"
                      />
                    </mask>
                    <g mask="url(#mask2_3821_4183)">
                      <path
                        d="M204.327 19.4172C204.394 20.0107 204.708 20.3354 205.29 20.4026C205.682 20.4362 206.074 20.4586 206.466 20.4586C206.074 20.4474 205.682 20.4698 205.29 20.5034C204.708 20.5706 204.394 20.8953 204.327 21.4888C204.282 21.8919 204.271 22.2838 204.271 22.687C204.271 22.2838 204.26 21.8919 204.215 21.4888C204.159 20.8953 203.834 20.5706 203.252 20.5034C202.86 20.4698 202.468 20.4474 202.076 20.4586C202.468 20.4586 202.86 20.4362 203.252 20.4026C203.834 20.3354 204.159 20.0107 204.215 19.4172C204.26 19.0252 204.271 18.6221 204.271 18.219C204.271 18.6221 204.282 19.0252 204.327 19.4172Z"
                        className="logo-white-part"
                      />
                    </g>
                    <path
                      d="M8.82031 55.4659H15.2031V38.4114L22.0786 48.4784H26.5242L33.3885 38.4562V55.4659H39.7714V27.1799H34.3628L24.3406 41.8492L14.2737 27.1799H8.82031V55.4659Z"
                      className="logo-white-part"
                    />
                    <path
                      d="M51.6941 55.8689C54.8408 55.8689 57.4275 54.861 59.2527 53.0022L59.9358 55.4657H64.5046V42.7001C64.5046 37.0788 60.6973 33.6858 54.3592 33.6858C48.9395 33.6858 45.3897 36.2725 44.6171 40.8749H50.5184C50.8879 39.3855 52.422 38.3777 54.404 38.3777C56.8228 38.3777 58.4801 39.7439 58.4801 41.8491V42.8121H50.7983C46.3975 42.8121 43.5645 45.3652 43.5645 49.2845C43.5645 53.3605 46.6775 55.8689 51.6941 55.8689ZM49.6337 49.0381C49.6337 47.5824 50.8431 46.653 52.702 46.653H58.5249C58.4017 49.5308 56.1733 51.4681 53.1051 51.4681C50.9999 51.4681 49.6337 50.4939 49.6337 49.0381Z"
                      className="logo-white-part"
                    />
                    <path
                      d="M78.9632 64.4353C85.7491 64.4353 90.0715 60.6392 90.0715 54.29V34.2457H85.5139L84.8645 36.5972C83.0056 34.7384 80.4189 33.6858 77.3842 33.6858C71.4046 33.6858 67.127 38.0866 67.127 44.2678C67.127 50.4939 71.4046 54.8946 77.3842 54.8946C79.9374 54.8946 82.1994 54.1332 83.935 52.8006V54.29C83.935 57.7277 82.1994 59.4634 78.84 59.4634C76.298 59.4634 74.596 58.4108 74.1592 56.5519H68.1796C68.6947 61.4454 72.8267 64.4353 78.9632 64.4353ZM73.185 44.2678C73.185 41.0428 75.447 38.7808 78.6832 38.7808C81.9194 38.7808 84.215 41.0428 84.215 44.2678C84.215 47.5488 81.9194 49.8108 78.6832 49.8108C75.447 49.8108 73.185 47.5488 73.185 44.2678Z"
                      className="logo-white-part"
                    />
                    <path
                      d="M94.6366 55.4658H100.784V34.2457H94.6366V55.4658ZM93.752 27.3814C93.752 29.6434 95.3645 31.2223 97.716 31.2223C100.056 31.2223 101.669 29.6434 101.669 27.3814C101.669 25.1194 100.056 23.5405 97.716 23.5405C95.3645 23.5405 93.752 25.1194 93.752 27.3814Z"
                      className="logo-white-part"
                    />
                    <path
                      d="M115.402 56.0368C121.382 56.0368 125.872 52.5207 127.003 46.9441H121.024C120.173 49.2397 118.079 50.7402 115.492 50.7402C112.177 50.7402 109.871 48.3103 109.871 44.8389C109.871 41.3676 112.177 38.9376 115.492 38.9376C117.911 38.9376 119.893 40.2366 120.901 42.3754H126.802C125.828 37.1235 121.304 33.6858 115.402 33.6858C108.616 33.6858 103.812 38.3329 103.812 44.8389C103.812 51.3897 108.583 56.0368 115.402 56.0368Z"
                      className="logo-white-part"
                    />
                    <path
                      d="M144.422 56.0369C150.76 56.0369 155.25 51.4234 155.25 44.839C155.25 38.333 150.76 33.6859 144.422 33.6859C141.79 33.6859 139.495 34.4921 137.714 35.9031V25.5674H131.566V55.4658H136.135L136.818 53.0359C138.722 54.9395 141.353 56.0369 144.422 56.0369ZM137.468 44.839C137.468 41.4012 139.898 38.9377 143.324 38.9377C146.807 38.9377 149.192 41.4012 149.192 44.839C149.192 48.3104 146.807 50.7403 143.324 50.7403C139.898 50.7403 137.468 48.3104 137.468 44.839Z"
                      fill="#3E97FF"
                    />
                    <path
                      d="M168.698 56.0368C175.73 56.0368 180.579 51.4681 180.579 44.8389C180.579 38.2545 175.73 33.6858 168.698 33.6858C161.632 33.6858 156.783 38.2545 156.783 44.8389C156.783 51.4681 161.632 56.0368 168.698 56.0368ZM162.841 44.8389C162.841 41.3676 165.271 38.9376 168.698 38.9376C172.136 38.9376 174.521 41.3676 174.521 44.8389C174.521 48.3103 172.136 50.7402 168.698 50.7402C165.271 50.7402 162.841 48.3103 162.841 44.8389Z"
                      fill="#3E97FF"
                    />
                    <path
                      d="M193.829 55.4658H197.715V50.1356H195.162C192.743 50.1356 191.612 48.9598 191.612 46.4963V39.2624H197.424V34.2458H191.612V28.7588H186.842L186.472 31.5023C186.159 33.6859 185.543 34.2458 183.247 34.2458H181.344V39.2624H185.465V47.4257C185.465 52.5992 188.454 55.4658 193.829 55.4658Z"
                      fill="#3E97FF"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="block md:hidden">
                <SwitchDarkLight />
              </div>
              <div className=" relative">
                <div className="flex items-center header-right ">
                  <HeaderRightSection lang={lang} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
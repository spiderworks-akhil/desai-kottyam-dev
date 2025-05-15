import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/Component/common/Layout";
import Banner from "@/Component/Home/Banner";
import TextWrapper from "@/Component/Home/TextWrapper";
import ProjectList from "@/Component/Home/ProjectList";
import ProjectDetail from "@/Component/Home/ProjectDetails";
import EnquiryModal from "@/Component/common/EnquiryModal"; // Adjust path if needed

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <Banner />
      <TextWrapper />
      <ProjectList />

      <div className="container">
        <div className="flex items-center justify-center">
          <div className="project-detail-section md:w-10/12 w-full">
            <div className="project-detail-section w-full py-[40px] pb-[100px]">
              <div className="w-full">
                <h2 className="md:text-[32px] text-[22px] text-[#1E1E1E] md:leading-[45px] leading-[34px] max-w-[850px] m-auto text-center">
                  Upgrade your Lifestyle in Kottayam – Own a 2/3 BHK <span className=" font-[600] text-[#4ee798]">Flats in
                  Kottayam</span> by Desai Homes with quality construction and
                  architectural excellence at Affordable prices.
                </h2>
              </div>
            </div>
            <ProjectDetail />
          </div>
        </div>
      </div>

      {/* Sticky Modal */}
      <div
        id="stickyModal"
        className={`sticky_modal fixed bottom-0 w-full transition-opacity duration-500 ease-in-out ${
          showModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-50 bg-black py-4 px-6`}
      >
        <p className="exclusive-p text-white text-center mb-3 md:block hidden">
          Enquire Now for Exclusive offers
        </p>

        <div className="btn-flex flex items-center justify-center gap-[15px]">
          <a href="tel:+918129000118">
            <button
              className="nearby-mobile-btn flex items-center cursor-pointer gap-[5px] bg-white text-black px-4 py-2 rounded"
              id="scroll"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.9994 14.4765V17.1862C19.0005 17.4377 18.9488 17.6867 18.8479 17.9172C18.7469 18.1477 18.5988 18.3546 18.413 18.5247C18.2273 18.6947 18.008 18.8242 17.7693 18.9048C17.5305 18.9854 17.2775 19.0153 17.0265 18.9927C14.2415 18.6907 11.5664 17.7409 9.21601 16.2197C7.02929 14.8329 5.17534 12.9827 3.7858 10.8003C2.25627 8.44389 1.30442 5.76107 1.00735 2.96915C0.98473 2.71938 1.01447 2.46764 1.09468 2.22996C1.17489 1.99229 1.30381 1.77389 1.47323 1.58866C1.64265 1.40343 1.84885 1.25544 2.07872 1.15411C2.30858 1.05278 2.55707 1.00032 2.80837 1.00009H5.52347C5.96269 0.995773 6.3885 1.151 6.72152 1.43683C7.05455 1.72267 7.27207 2.11961 7.33354 2.55366C7.44814 3.42084 7.66067 4.27229 7.96707 5.09177C8.08883 5.41507 8.11519 5.76642 8.043 6.1042C7.97082 6.44198 7.80313 6.75203 7.5598 6.99761L6.41041 8.14473C7.69877 10.406 9.57482 12.2784 11.8406 13.5642L12.99 12.4171C13.2361 12.1742 13.5467 12.0069 13.8852 11.9348C14.2236 11.8628 14.5757 11.8891 14.8996 12.0106C15.7207 12.3164 16.5739 12.5285 17.4428 12.6429C17.8824 12.7048 18.2839 12.9258 18.5709 13.2639C18.858 13.6019 19.0105 14.0335 18.9994 14.4765Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Call Now</span>
            </button>
          </a>
          <button
            className="enquire-btn-mobile enquire-btn-modal cursor-pointer bg-[#ff5a5f] text-white px-4 py-2 rounded"
            onClick={() => setIsEnquiryOpen(true)}
          >
            Enquire Now
          </button>
        </div>
      </div>

      {isEnquiryOpen && (
        <EnquiryModal onClose={() => setIsEnquiryOpen(false)} />
      )}
    </Layout>
  );
}

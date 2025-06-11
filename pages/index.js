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

      <section id="project-dt-section" className="mb-[80px]">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="project-detail-section md:w-10/12 w-full">
              <div className="project-detail-section w-full py-[60px] pb-[60px] ">
                <div className="w-full">
                  <h2 className="md:text-[32px] text-[22px] text-[#1E1E1E] md:leading-[45px] leading-[34px] max-w-[850px] m-auto text-center">
                    Find your peace in a home crafted with care. Our{" "}
                    <span className=" font-[600] text-[#4ee798]">
                      Premium flats in Kottayam
                    </span>{" "}
                    offer elegant living at unmatched value with quality
                    construction and architectural excellence.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="flex items-center justify-center">
          <div className="project-detail-section md:w-10/12 w-full">
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

        <div className="btn-flex flex items-center justify-center gap-[10px]">
          <a
            onClick={() => setIsEnquiryOpen(true)}
            className="whatsapp-btn"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=9847528000&text=I would like to know more about Desai Homes Kottayam projects.&entry_point=post_cta&jid=919946389796%40s.whatsapp.net&show_keyboard=1&show_ad_attribution=1&context=AWD5JmIm0kKqCNThfmjJ9xSOSUyKfhrSk6Jf0vo5v4XRCUp0vsSFecfelTuvRh4hgao9uqTKZO2rH_evK-dk8OYIq77tRcFpQKQ556MlpzWkmDcUcYuW01k636J4GyWm7Fy2DbJoTAe8XTZ9qU6IoerOmqdJL3z2SkIkthrwczU33aPibKv703FdWfYWy85tq1XdOelxz5EOUyRhXeuFZxCH6d-poimLKVKza_JECk2onS2ROvWwk89g4LVdX5tYYbuqZT32kndOQ7cYtEDismAG1kdBuz6y4aO1jjWliHZiXpSrxPluy5cQDLe8Nj6N-ozsapH4n4HvWz9XXirE6gV1-0jwqMBoJdD_G3nRTh7ngPS4F3M0boRDYjqssiyuehBlG0tAgSHiVvnh9Ws6ekf05gwe2NppITHQEvNy8tCoELm43w5iObAvzOIkIhy2P4kmfdrPww&fbclid=IwAR1d3YlfJ_tivXb_ZDkhD5aJeakQq3uih2oG6qJasko9jol02sun-q9HjyY"
          >
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.0165 18.0144C7.43629 18.0144 5.89326 17.6054 4.51754 16.806L1.0039 18.0144L1.72894 14.2963C0.594901 12.7532 0 10.9313 0 8.99791C0 4.03419 4.03419 0 8.99791 0C13.9616 0 17.9958 4.03419 17.9958 8.99791C18.0144 13.9802 13.9802 18.0144 9.0165 18.0144ZM4.68487 15.3374L4.96373 15.5047C6.19071 16.2669 7.58502 16.6759 9.0165 16.6759C13.2366 16.6759 16.6759 13.2366 16.6759 9.0165C16.6759 4.79641 13.2366 1.35712 9.0165 1.35712C4.79641 1.35712 1.35712 4.79641 1.35712 9.0165C1.35712 10.7269 1.91485 12.3628 2.99311 13.72L3.17902 13.9616L2.78861 15.988L4.68487 15.3374Z"
                fill="#fff"
              ></path>
              <path
                d="M4.45036 6.23767C4.48184 5.68827 4.78379 5.18498 5.1487 4.77307C5.28509 4.61911 5.4362 4.49486 5.57904 4.47557C5.97307 4.42006 6.48702 4.42006 6.62407 4.69764C6.74217 4.93684 7.21649 6.17921 7.3454 6.5182C7.3673 6.57578 7.38952 6.63256 7.40012 6.69325C7.41831 6.79735 7.42688 6.97812 7.32647 7.15889C7.29116 7.22247 7.24416 7.29187 7.19269 7.36109C6.94982 7.68769 6.56326 8.06445 6.79539 8.39876C7.00097 8.69485 7.30934 9.25002 7.96035 9.95323C8.41644 10.4459 9.16682 10.8386 9.57529 11.0297C9.76399 11.1179 10.0004 11.2051 10.1532 11.0636C10.2729 10.9343 10.8876 10.1044 10.8899 10.1013C10.89 10.1012 10.8898 10.1013 10.8899 10.1013C10.8922 10.0981 11.0973 9.82464 11.421 9.99024C11.6434 10.1041 12.378 10.4945 12.8208 10.7303C13.0526 10.8537 13.3397 10.986 13.3397 11.2486C13.3397 11.5262 13.2369 12.1924 13.0314 12.4145C12.8258 12.6365 12.209 13.3398 11.3011 13.3398C10.3931 13.3398 8.21733 12.544 7.05236 11.2856C5.8874 10.0273 4.8595 8.76888 4.61965 7.60302C4.48568 7.00486 4.43087 6.57771 4.45036 6.23767Z"
                fill="#fff"
              ></path>
            </svg>
          </a>
          <a href="tel:+919847528000">
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

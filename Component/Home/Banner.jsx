"use client";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import BannerImg01 from "@/public/img/Desai-Homes-Kottayam-LP-Majestic-Mount-Banner.jpg";
import BannerImgMob01 from "@/public/img/maj-mob-banner.jpg";
import BannerImg02 from "@/public/img/Desai-Homes-Kottayam-LP-City-Gate-Banner.jpg";
import BannerImgMob02 from "@/public/img/city-gate-mob-banner.jpg";
import BannerImg03 from "@/public/img/Desai-Homes-Kottayam-LP-Legacy-Heights-Banner.jpg";
import BannerImgMob03 from "@/public/img/legacy-mob-banner.jpg";

export default function Banner({ slider }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);
  const slideTextRefs = useRef([]);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="home-banner" className="home-banner-section relative p-[10px]">
      <div className=" home-banner-slider ">
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            navigation={
              navigationReady
                ? {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }
                : false
            }
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            speed={1000}
            spaceBetween={20}
            slidesPerView={1}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-content video-slide">
                <div className="home-slider-video-block ">
                  <Image
                    src={BannerImg01}
                    alt="BannerImg"
                    width={1600}
                    height={800}
                    className="md:block hidden"
                  />

                  <Image
                    src={BannerImgMob01}
                    alt="BannerImgMob01"
                    width={1080}
                    height={1920}
                    className="md:hidden block"
                  />
                </div>

                <div class="banner-left-text">
                  <h2 class="lg:text-[36px] font-[600] leading-[108.02%]">
                    Looking to settle down in your{" "}
                    <span> Forever Home in Kottayam</span>
                  </h2>
                  <div class="slider-home-price-detail-block">
                    <div class="slider-home-price-detail-block-item">
                      <span class="badge3">
                        <h5>Offer Price</h5>
                        <h3>
                          59 Lakhs <span>*</span>
                        </h3>
                      </span>

                      <h6>Status: Ready to Occupy</h6>
                    </div>
                    <div class="slider-home-price-detail-block-item">
                      <h3> DD Majestic Mount</h3>
                      <div class="slider-home-location-block">
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 5.40654C0 2.41663 2.49852 0 5.52074 0C8.55148 0 11.05 2.41663 11.05 5.40654C11.05 6.9132 10.5021 8.31196 9.60017 9.49752C8.60522 10.8053 7.3789 11.9447 5.99855 12.8391C5.68263 13.0458 5.39752 13.0614 5.05079 12.8391C3.66258 11.9447 2.43626 10.8053 1.44982 9.49752C0.547289 8.31196 0 6.9132 0 5.40654ZM3.70091 5.57459C3.70091 6.57621 4.51824 7.36398 5.5204 7.36398C6.52322 7.36398 7.34841 6.57621 7.34841 5.57459C7.34841 4.58076 6.52322 3.75464 5.5204 3.75464C4.51824 3.75464 3.70091 4.58076 3.70091 5.57459Z"
                            fill="#16CC70"
                          ></path>
                        </svg>
                        S H Mount, Kottayam
                      </div>
                    </div>
                  </div>

                  <div className="discont-block">
                    <h3>
                      <span>1 Lakh Discount</span>On Spot Booking 
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-content video-slide">
                <div className="home-slider-video-block ">
                  <Image
                    src={BannerImg02}
                    alt="BannerImg"
                    width={1600}
                    height={800}
                    className="md:block hidden"
                  />

                  <Image
                    src={BannerImgMob02}
                    alt="BannerImgMob01"
                    width={1080}
                    height={1920}
                    className="md:hidden block"
                  />
                </div>

                <div class="banner-left-text">
                  <h2 class="lg:text-[36px] font-[600] leading-[108.02%]">
                    Looking to settle down in your{" "}
                    <span> Forever Home in Kottayam</span>
                  </h2>

                  <div class="slider-home-price-detail-block">
                    <div class="slider-home-price-detail-block-item">
                      <span class="badge3">
                        <h5>Offer Price</h5>
                        <h3>
                          44 Lakhs <span>*</span>
                        </h3>
                      </span>

                      <h6>Status: Ready to Occupy</h6>
                    </div>
                    <div class="slider-home-price-detail-block-item">
                      <h3>DD City Gate</h3>
                      <div class="slider-home-location-block">
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 5.40654C0 2.41663 2.49852 0 5.52074 0C8.55148 0 11.05 2.41663 11.05 5.40654C11.05 6.9132 10.5021 8.31196 9.60017 9.49752C8.60522 10.8053 7.3789 11.9447 5.99855 12.8391C5.68263 13.0458 5.39752 13.0614 5.05079 12.8391C3.66258 11.9447 2.43626 10.8053 1.44982 9.49752C0.547289 8.31196 0 6.9132 0 5.40654ZM3.70091 5.57459C3.70091 6.57621 4.51824 7.36398 5.5204 7.36398C6.52322 7.36398 7.34841 6.57621 7.34841 5.57459C7.34841 4.58076 6.52322 3.75464 5.5204 3.75464C4.51824 3.75464 3.70091 4.58076 3.70091 5.57459Z"
                            fill="#16CC70"
                          ></path>
                        </svg>
                        S H Mount, Kottayam
                      </div>
                    </div>
                  </div>
                  <div className="discont-block">
                    <h3>
                      <span>1 Lakh Discount</span>On Spot Booking 
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-content video-slide">
                <div className="home-slider-video-block ">
                  <Image
                    src={BannerImg03}
                    alt="BannerImg"
                    width={1600}
                    height={800}
                    className="md:block hidden"
                  />

                  <Image
                    src={BannerImgMob03}
                    alt="BannerImgMob01"
                    width={1080}
                    height={1920}
                    className="md:hidden block"
                  />
                </div>

                <div class="banner-left-text">
                  <h2 class="lg:text-[36px] font-[600] leading-[108.02%]">
                    Looking to settle down in your
                    <span> Forever Home in Kottayam</span>
                  </h2>

                  <div class="slider-home-price-detail-block">
                    <div class="slider-home-price-detail-block-item">
                      <span class="badge3">
                        <h5>Offer Price</h5>
                        <h3>
                          49.5 Lakhs <span>*</span>
                        </h3>
                      </span>

                      <h6>Status: Ready to Occupy</h6>
                    </div>
                    <div class="slider-home-price-detail-block-item">
                      <h3> DD Legacy Heights`</h3>
                      <div class="slider-home-location-block">
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 5.40654C0 2.41663 2.49852 0 5.52074 0C8.55148 0 11.05 2.41663 11.05 5.40654C11.05 6.9132 10.5021 8.31196 9.60017 9.49752C8.60522 10.8053 7.3789 11.9447 5.99855 12.8391C5.68263 13.0458 5.39752 13.0614 5.05079 12.8391C3.66258 11.9447 2.43626 10.8053 1.44982 9.49752C0.547289 8.31196 0 6.9132 0 5.40654ZM3.70091 5.57459C3.70091 6.57621 4.51824 7.36398 5.5204 7.36398C6.52322 7.36398 7.34841 6.57621 7.34841 5.57459C7.34841 4.58076 6.52322 3.75464 5.5204 3.75464C4.51824 3.75464 3.70091 4.58076 3.70091 5.57459Z"
                            fill="#16CC70"
                          ></path>
                        </svg>
                        Chavittuvary, Kottayam
                      </div>
                    </div>
                  </div>
                  <div className="discont-block">
                   <h3>
                      <span>1 Lakh Discount</span>On Spot Booking 
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="custom-nav-slider">
            <button ref={prevRef} className="custom-prev cursor-pointer">
              pre
            </button>

            <button ref={nextRef} className="custom-next cursor-pointer">
              next
            </button>
          </div> */}

          <div className="slide-btm-text">
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-[20px]">
              <div className="slide-btm-text-item">
                <h2>6500 *</h2>
                <h5>Satisfied Customers</h5>
              </div>

              <div className="slide-btm-text-item">
                <h2>61<sup>+</sup></h2>
                <h5>Completed And Ongoing Projects</h5>
              </div>

              <div className="slide-btm-text-item">
                <h2>32</h2>
                <h5>Years Of Experience</h5>
              </div>

               <div className="slide-btm-text-item">
                <h2>8.5</h2>
                <h5>Million Sq.ft.Construction</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

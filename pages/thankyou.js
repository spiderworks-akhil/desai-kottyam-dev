import Image from "next/image"
import ImageSlider1 from "@/public/img/ThankyouImage.jpg";
import Link from "next/link";

const index = () => {
  return (
    <div>

{/* <Navbar /> */}

<div class="h-[100vh] justify-between px-4 mx-auto lg:max-w-[1350px] md:items-center md:flex md:px-8 mar-auto">
        <div class="home-main-title-block p-[15px_0px] flex justify-between w-full items-center">
          <div class="home-main-title-block-01 sm:mb-10 mb-10 margin-btm-10">
            <div class="home-main-title-block-01-titl flex items-center gap-3">
              <h1 class="font-[300] text-[18px] text-[#222831] mb-[15px]">
                Desai Projects - Kottayam
              </h1>
              <span class="bg-[#1CC273] w-[45px] h-[2px] block"></span>
            </div>

            <h3 class="font-[700] text-[36px] text-[#10375C] line leading-tight mb-5">
              Thank you for showing your interest.
            </h3>

            <Link
              href="/"
              class="submit-btn bg-[#1CC273] text-[#fff] text-[18px] font-[700] p-3 w-full "
            >
              Back To Home
            </Link>
          </div>
          <div class="home-main-title-block-01 m-[0px_0px_0_0%] w-[48rem]">
            <Image
              className="slider-img home-banner-img thankyou w-full rounded-[10px_0px_0px_10px]"
              src={ImageSlider1}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
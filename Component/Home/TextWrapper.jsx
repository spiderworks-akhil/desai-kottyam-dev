"use client";
import Image from "next/image";
import BannerImg from "@/public/img/Home-Banner.jpg";

export default function TextWrapper({}) {
  return (
    <section className="text-wrapper-block md:py-[100px] py-[50px]">
      <div className="container">
        <div className="grid gap-[25px] items-center sm:grid-cols-2 grid-cols-1 sm:px-[30px]">
          <h2>
           Discover
            <span> 2 & 3 BHK Flats in Kottayam</span> - Home that Hugs your Heart:
          </h2>

          <p>Embrace the joy of owning a <span>Premium Apartment in Kottayam with Desai Homes</span>. Choose from beautifully crafted <span> 2BHK & 3BHK Flats in Kottayam</span>, where luxury meets affordability. These thoughtfully designed Flats offer spacious interiors, modern amenities, and a touch of timeless elegance with easy access to schools, hospitals, and transport hubs. Perfectly located, Desai Homes promise both comfort and convenience in a stylish setting.</p>
        </div>
      </div>
    </section>
  );
}

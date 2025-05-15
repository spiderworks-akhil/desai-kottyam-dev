"use client";
import Image from "next/image";
import BannerImg from "@/public/img/Home-Banner.jpg";

export default function TextWrapper({}) {
  return (
    <section className="text-wrapper-block md:py-[100px] py-[50px]">
      <div className="container">
        <div className="grid gap-[25px] items-center sm:grid-cols-2 grid-cols-1 sm:px-[30px]">
          <h2>
            Upgrade to Elegant Living with{" "}
            <span>Premium 2/3 BHK Apartments in Kottayam</span> - Designed for
            Modern Living:
          </h2>

          <p>
            Experience the Epitome of Luxury Living with Desai Homes Spacious &
            Premium <br />
            <span className=" font-[600]">2/3 BHK Apartments in Kottayam</span>. These thoughtfully
            designed <span className=" font-[600]">Flats in Kottayam</span> offer spacious interiors, modern
            amenities, and a touch of timeless elegance. Perfectly located with
            easy access to schools, hospitals, and transport hubs, <span className=" font-[600]">Desai Homes</span> promise both comfort and convenience in a stylish setting.
          </p>
        </div>
      </div>
    </section>
  );
}

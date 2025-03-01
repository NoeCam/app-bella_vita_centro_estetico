import React from "react";
import Image from "next/image";

const Title = () => {
  return (
    <section className="relative w-full h-[33vh] mb-10">
      <Image
        src="/hero.jpg"
        alt="Cosmetology Treatment Room"
        fill
        style={{ objectFit: "cover" }}
        priority={true}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-col items-center text-center">
          <h1 className=" text-white text-4xl md:text-6xl font-bold">
            BELLA VITA
          </h1>
          <h2 className=" text-white text-lg md:text-3xl font-bold">
            Centro estético
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Title;

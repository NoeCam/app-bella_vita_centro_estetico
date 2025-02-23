import React from "react";
import Image from "next/image";

const Title = () => {
  return (
    <section className="relative w-full h-[33vh]">
      <Image
        src="https://res.cloudinary.com/dlxdb2gs7/image/upload/v1740332064/CVM/y4bultuks1ksrfykwfbe.png"
        alt="Cosmetology Treatment Room"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Centro estético VM
        </h1>
      </div>
    </section>
  );
};

export default Title;

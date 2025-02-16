import Image from "next/image";

export function CardTreatmentComponentSkeleton() {
  return (
    <>
      <article className="flex flex-col shadow-md mb-5 md:flex-row w-full bg-slate-50">
        <Image
          className="object-cover w-full h-96 md:h-auto md:w-48 bg-slate-800"
          src={"/Logo-Marca-Agua.png"}
          alt="logo image"
          width={96}
          height={96}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="h-5 bg-gray-200 rounded w-24 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded w-16 animate-pulse mt-2"></div>
          <div className="flex flex-row justify-between h-full">
            <div className="flex flex-col mt-4">
              <div className="h-5 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-16 animate-pulse mt-2"></div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="h-5 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-16 animate-pulse mt-2"></div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default CardTreatmentComponentSkeleton;

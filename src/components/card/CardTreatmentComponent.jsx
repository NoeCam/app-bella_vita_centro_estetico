import Image from "next/image";

export const CardTreatmentComponent = ({ treatment }) => {
  const { image, name, type, subtype, description, price, clarification, id } =
    treatment;
  return (
    <>
      <img
        className="object-cover w-full h-96 md:h-auto md:w-48"
        src={image}
        alt="img product"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h3 className="text-xl font-bold text-gray-900 mt-4">
          {type} <span className="font-thin">{subtype}</span>
        </h3>
        <h4 className="text-lg font-bold text-gray-900 mt-4">{name}</h4>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
        <div
          className={`flex flex-row justify-between h-full ${
            id % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className={`flex flex-col mt-4 `}>
            <div
              className={` flex text-gray-900 font-bold text-lg ${
                id % 2 === 0 ? "md:item-start" : "md:item-end"
              }`}
            >
              Precio: $ {price}
            </div>
            <h6
              className={`flex text-xs ${
                id % 2 === 0 ? "md:item-start" : "md:item-end"
              }`}
            >
              {clarification}
            </h6>
          </div>
          <div className="flex flex-col justify-end">
            <Image
              src="/icon-calendar.svg"
              alt="Button calendar to take an appointment"
              width={24}
              height={24}
              unoptimized
              className="flex justify-center content-end 
              transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

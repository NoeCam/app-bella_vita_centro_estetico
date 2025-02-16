import Image from "next/image";
import getAllTreatmentsService from "@/services/getAllTreatmentsServices";

export async function CardTreatmentComponent() {
  const treatments = await getAllTreatmentsService();

  return (
    <>
      {!treatments.data.treatments.length ? (
        <p>Loading</p>
      ) : (
        treatments.data.treatments.map((treatment, index) => (
          <article
            key={treatment.id}
            className={`flex flex-col shadow-md mb-5 md:flex-row w-full bg-slate-50 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              className="object-cover w-full h-96 md:h-auto md:w-48"
              src={treatment.image}
              alt="img product"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                {treatment.name}
              </h3>
              <h4 className="text-base font-bold text-gray-900 mt-4">
                {treatment.type}
                <span className="font-thin">{treatment.subtype}</span>
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                {treatment.description}
              </p>
              <div
                className={`flex flex-row justify-between h-full ${
                  treatment.id % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex flex-col mt-4 `}>
                  <div className="flex text-gray-900 font-bold text-lg h-full items-end">
                    Precio: $ {treatment.price}
                  </div>
                  <h6 className="flex text-xs">{treatment.clarification}</h6>
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
          </article>
        ))
      )}
    </>
  );
}

export default CardTreatmentComponent;

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
        <h3 className="text-xl font-bold text-gray-900 mt-4">{name}</h3>
        <h4 className="text-lg font-bold text-gray-900 mt-4">{type}</h4>
        <h5 className="text-sm text-gray-900 mt-4">{subtype}</h5>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
        <div className="flex flex-col items-center justify-center mt-4">
          <span className="text-gray-900 font-bold text-lg">
            Precio: $ {price}
          </span>
          <h6 className="text-xs">{clarification}</h6>
        </div>
      </div>
    </>
  );
};

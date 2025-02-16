import getAllTreatmentsService from "@/services/getAllTreatmentsServices";

const page = async () => {
  const treatments = await getAllTreatmentsService();
  const uniqueTypes = [
    ...new Set(treatments.data.treatments.map((t) => t.type)),
  ];

  return (
    <section>
      <div>
        <select name="select">
          <option value="">Lista de tratamientos</option>
          {!treatments.data.treatments.length ? (
            <p>Loading</p>
          ) : (
            uniqueTypes.map((type, index) => (
              <optgroup key={index} label={type}>
                {treatments.data.treatments
                  .filter((t) => t.type === type)
                  .map((treatment) => (
                    <option
                      key={treatment.id}
                      value={treatment.name}
                      id={treatment.id}
                    >
                      {treatment.name}
                    </option>
                  ))}
              </optgroup>
            ))
          )}
        </select>
      </div>
      <div>
        <p>Fecha y hora</p>
      </div>
      <form></form>
    </section>
  );
};

export default page;

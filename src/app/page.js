import { CardComponent } from "@/components/card/CardComponent";
import { getAllTreatmentsService } from "@/services/getAllTreatmentsServices";

export default async function Home() {
  const treatments = await getAllTreatmentsService();

  return (
    <>
      <section>
        <h3>Tratamientos</h3>
        <>
          {!treatments.data.treatments.length ? (
            <p>Loading</p>
          ) : (
            treatments.data.treatments.map((treatment, index) => (
              <article
                key={treatment.id}
                className={`flex flex-col shadow-md mb-5 md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <CardComponent
                  image={treatment.image}
                  name={treatment.name}
                  type={treatment.type}
                  subtype={treatment.subtype}
                  description={treatment.description}
                  price={treatment.price}
                  clarification={treatment.clarification}
                  id={treatment.id}
                />
              </article>
            ))
          )}
        </>
      </section>
    </>
  );
}

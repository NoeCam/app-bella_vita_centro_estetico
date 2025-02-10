import { CardTreatmentComponent } from "@/components/card/CardTreatmentComponent";
import { getAllTreatmentsService } from "@/services/getAllTreatmentsServices";

export default async function Home() {
  const treatments = await getAllTreatmentsService();
  return (
    <>
      <section className="flex flex-col justify-center mx-auto max-w-3xl">
        <h3 className="text-xl font-bold px-4 md:px-0 text-start w-full my-3">
          TRATAMIENTOS
        </h3>
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
                <CardTreatmentComponent treatment={treatment} />
              </article>
            ))
          )}
        </>
      </section>
    </>
  );
}

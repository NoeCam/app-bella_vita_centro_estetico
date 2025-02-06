import { CardTreatmentComponent } from "@/components/card/CardTreatmentComponent";
import { getAllTreatmentsService } from "@/services/getAllTreatmentsServices";

export default async function Home() {
  const treatments = await getAllTreatmentsService();

  return (
    <>
      <section className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold px-4 text-start md:mx-20">
          Tratamientos
        </h3>
        <>
          {!treatments.data.treatments.length ? (
            <p>Loading</p>
          ) : (
            treatments.data.treatments.map((treatment, index) => (
              <article
                key={treatment.id}
                className={`flex flex-col shadow-md mb-5 mx-auto md:flex-row max-w-3xl bg-slate-50 ${
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

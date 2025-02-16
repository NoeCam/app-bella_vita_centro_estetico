import { Suspense } from "react";
import { CardTreatmentComponent } from "@/components/card/CardTreatmentComponent";
import CardTreatmentComponentSkeleton from "@/components/card/CardTreatmentComponentSkeleton";

export default async function Home() {
  return (
    <>
      <section className="flex flex-col justify-center mx-auto max-w-3xl">
        <h3 className="text-xl font-bold px-4 md:px-0 text-start w-full my-3">
          TRATAMIENTOS
        </h3>

        <Suspense fallback={<CardTreatmentComponentSkeleton />}>
          <CardTreatmentComponent />
        </Suspense>
      </section>
    </>
  );
}

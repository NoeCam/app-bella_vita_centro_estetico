"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import SelectTreatment from "@/components/select-treatment/SelectTreatment";
import CalendarPersonalize from "@/components/calendar-personalize/CalendarPersonalize";
import TimeTreatment from "@/components/time-treatment/TimeTreatment";

export const PageAppointments = () => {
  const searchParams = useSearchParams();
  const treatmentId = searchParams.get("treatmentId");
  const date = searchParams.get("date");

  const [selectedDate, setSelectedDate] = useState(date || null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    const treatmentId = e.target.treatment.value;
    const date = e.target.date.value;
    const time = selectedTime;
    try {
      await bookingTreatmentService(treatmentId, date, time);
      alert("Tu tratamiento ha sido reservado con éxito");
    } catch (error) {
      alert("Error al reservar el tratamiento");
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center mx-auto"
      onSubmit={handleSumbit}
    >
      <h1 className="text-4xl font-bold my-10">Reserva tú tratamiento</h1>
      <>
        <h2 className="text-2xl text-center mb-3">
          1. Selecciona un tratamiento
        </h2>
        <SelectTreatment treatmentId={treatmentId} />
      </>
      <div className="mb-5">
        <h2 className="text-2xl text-center my-3">2. Selecciona una fecha</h2>
        <CalendarPersonalize onChange={setSelectedDate} value={selectedDate} />
      </div>
      <div className="mb-5">
        <h2 className="text-2xl text-center my-3">3. Selecciona un horario</h2>
        <TimeTreatment
          treatmentId={treatmentId}
          selectedDate={selectedDate}
          onTimeSelect={setSelectedTime}
        />
      </div>
      <div className="mb-5">
        <h2 className="text-2xl text-center my-3">4. Ingrese sus datos</h2>
        <div>
          <label htmlFor="name">Nombre (2 a 10 caracteres):</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength="2"
            maxLength="10"
            size="10"
            className="mx-2 mb-5 px-4 py-2 bg-slate-50 shadow-lg rounded-md"
          />
        </div>
        <div>
          <label htmlFor="last-name">Apellido (2 a 10 caracteres):</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            required
            minLength="2"
            maxLength="10"
            size="10"
            className="mx-2 mb-5 px-4 py-2 bg-slate-50 shadow-lg rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            pattern="example.+@example\.com"
            size="30"
            required
            className="mx-2 mb-5 px-4 py-2 bg-slate-50 shadow-lg rounded-md"
          />
        </div>
        <div>
          <label htmlFor="phone">
            Celular:
            <br />
            <small>Formato: 099-000-000</small>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
            required
            className="mx-2 mb-5 px-4 py-2 bg-slate-50 shadow-lg rounded-md"
          />
        </div>
      </div>

      <button
        type="submit"
        className="hover:bg-slate-300 m-3 p-3 rounded-md shadow-lg text-gold  bg-slate-100"
      >
        Confirmar reserva
      </button>
    </form>
  );
};

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageAppointments />
    </Suspense>
  );
};

export default page;

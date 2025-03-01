"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import SelectTreatment from "@/components/select-treatment/SelectTreatment";
import CalendarPersonalize from "@/components/calendar-personalize/CalendarPersonalize";
import TimeTreatment from "@/components/time-treatment/TimeTreatment";
import { bookingTreatmentService } from "@/services/bookingTreatmentService";

export function PageAppointments() {
  const searchParams = useSearchParams();
  const treatmentId = searchParams.get("treatmentId");
  const date = searchParams.get("date");

  const [selectedDate, setSelectedDate] = useState(date || null);
  const [selectedTime, setSelectedTime] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    celphone: "",
  });

  const { replace } = useRouter();

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      await bookingTreatmentService(
        treatmentId,
        date,
        selectedTime,
        formData.first_name,
        formData.last_name,
        formData.email,
        formData.celphone
      );
      alert("Tu tratamiento ha sido reservado con éxito");

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        celphone: "",
      });

      setSelectedDate(null);
      setSelectedTime("");

      const params = new URLSearchParams(searchParams);

      params.delete("treatmentId");
      params.delete("date");

      replace(`?${params.toString()}`);
    } catch (error) {
      alert("Error al reservar el tratamiento");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl font-bold mb-10">Reserva tú tratamiento</h1>
      <div>
        <h2 className="text-2xl text-center mb-3">
          1. Selecciona un tratamiento
        </h2>
        <SelectTreatment treatmentId={treatmentId} />
      </div>
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
      <form onSubmit={handleSumbit} className="mb-5">
        <h2 className="text-2xl text-center my-3">4. Ingrese sus datos</h2>
        <div>
          <label htmlFor="first_name">Nombre (2 a 10 caracteres):</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
            required
            minLength="2"
            maxLength="10"
            size="10"
            className="mx-2 mb-5 px-4 py-2 bg-slate-50 shadow-lg rounded-md"
          />
        </div>
        <div>
          <label htmlFor="last_name">Apellido (2 a 10 caracteres):</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={(e) =>
              setFormData({ ...formData, last_name: e.target.value })
            }
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
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            size="30"
            required
            className="mx-2 mb-5 px-4 py-2 bg-slate-50 shadow-lg rounded-md"
          />
        </div>
        <div>
          <label htmlFor="celphone">
            Celular:
            <br />
            <small>Formato: 099123456</small>
          </label>
          <input
            type="tel"
            id="celphone"
            name="celphone"
            value={formData.celphone}
            onChange={(e) =>
              setFormData({ ...formData, celphone: e.target.value })
            }
            pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
            required
            className="mx-2 mb-5 px-4 py-2 bg-slate-50 shadow-lg rounded-md"
          />
        </div>
        <button
          type="submit"
          className="hover:bg-slate-300 m-3 p-3 rounded-md shadow-lg text-gold  bg-slate-100"
        >
          Confirmar reserva
        </button>
      </form>
    </div>
  );
}

export function page() {
  return (
    <Suspense fallback="Loading...">
      <PageAppointments />
    </Suspense>
  );
}
export default page;

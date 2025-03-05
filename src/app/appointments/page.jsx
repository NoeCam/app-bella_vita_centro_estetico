"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SelectTreatment from "@/components/select/SelectTreatment";
import SelectCosmetologist from "@/components/select/SelectCosmetologist";
import CalendarPersonalize from "@/components/calendar-personalize/CalendarPersonalize";
import TimeTreatment from "@/components/time-treatment/TimeTreatment";
import { bookingTreatmentService } from "@/services/bookingTreatmentService";

export function PageAppointments() {
  const searchParams = useSearchParams();
  const treatmentId = searchParams.get("treatmentId");
  const date = searchParams.get("date");
  const adminId = searchParams.get("adminId");

  const [selectedDate, setSelectedDate] = useState(date || null);
  const [selectedTime, setSelectedTime] = useState("");

  const [availableDays, setAvailableDays] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    celphone: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!treatmentId || !adminId) return;
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/availabledays?treatmentId=${treatmentId}&adminId=${adminId}&year=${selectedYear}&month=${selectedMonth}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw toast.error("Error al obtener los días disponibles.", {
            position: "bottom-right",
          });
        }
        const json = await response.json();

        setAvailableDays(json.data.availableDays);
      } catch (error) {
        toast.error("Error al obtener los días disponibles", {
          position: "bottom-right",
        });
      }
    };
    fetchData();
  }, [treatmentId, adminId, selectedYear, selectedMonth]);

  const { push } = useRouter();

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      await bookingTreatmentService(
        treatmentId,
        adminId,
        date,
        selectedTime,
        formData.first_name,
        formData.last_name,
        formData.email,
        formData.celphone
      );
      toast.success("Tu tratamiento ha sido reservado con éxito", {
        position: "bottom-right",
      });

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        celphone: "",
      });

      setSelectedDate(null);
      setSelectedTime("");

      push("/appointments");
    } catch (error) {
      toast.error("Error al reservar el tratamiento", {
        position: "bottom-right",
      });
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
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl text-center mb-3">
          2. Selecciona una cosmetóloga
        </h2>
        <SelectCosmetologist adminId={adminId} />
      </div>
      <div className="mb-5">
        <h2 className="text-2xl text-center my-3">3. Selecciona una fecha</h2>
        <CalendarPersonalize
          onChange={setSelectedDate}
          value={selectedDate}
          availableDays={availableDays}
          setSelectedYear={setSelectedYear}
          setSelectedMonth={setSelectedMonth}
        />
      </div>
      <div className="mb-5">
        <h2 className="text-2xl text-center my-3">4. Selecciona un horario</h2>
        <TimeTreatment
          treatmentId={treatmentId}
          adminId={adminId}
          selectedDate={selectedDate}
          onTimeSelect={setSelectedTime}
        />
      </div>
      <form
        onSubmit={handleSumbit}
        className="mb-5 flex flex-col items-center justify-center"
      >
        <h2 className="text-2xl text-center my-3">5. Ingrese sus datos</h2>
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
          className="bg-[#d4af37] m-3 px-5 py-3 rounded-md shadow-lg          hover:bg-[#b8952e] hover:text-white hover:scale-105 transition-transform"
        >
          Confirmar reserva
        </button>
      </form>

      <ToastContainer />
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

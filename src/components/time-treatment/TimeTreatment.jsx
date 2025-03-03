"use client";

import React, { useState, useEffect } from "react";

const TimeTreatment = ({
  treatmentId,
  adminId,
  selectedDate,
  onTimeSelect,
}) => {
  const [timesToChose, setTimesToChose] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!treatmentId || !adminId || !selectedDate) return;
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/time-appointments?treatmentId=${treatmentId}&adminId=${adminId}&date=${selectedDate}`
        );

        if (!response.ok) {
          throw new Error("Error al obtener los horarios");
        }
        const json = await response.json();

        setTimesToChose(json.data.allTimes || []);
      } catch (error) {
        alert("Error al obtener los horarios");
      }
    };
    fetchData();
  }, [treatmentId, adminId, selectedDate]);

  const handleClick = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
    onTimeSelect(time);
  };

  return (
    <>
      {adminId && timesToChose.length === 0 ? (
        <p>No hay horarios disponibles</p>
      ) : (
        adminId &&
        timesToChose.map((time, index) => (
          <button
            key={index}
            value={time}
            onClick={handleClick}
            className="mx-2 mb-5 px-4 py-2 bg-slate-50 shadow-lg rounded-md"
          >
            {time}
          </button>
        ))
      )}
      {selectedTime && (
        <p className="text-gold bg-slate-50 shadow-md rounded-md mx-2 px-4 py-2">
          Horario seleccionado: {selectedTime}
        </p>
      )}
    </>
  );
};

export default TimeTreatment;

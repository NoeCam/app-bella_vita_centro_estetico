"use client";

import React, { useState, useEffect } from "react";

const TimeTreatment = ({ treatmentId, selectedDate, onTimeSelect }) => {
  const [timesToChose, setTimesToChose] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!treatmentId || !selectedDate) return;
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/time-appointments?treatmentId=${treatmentId}&date=${selectedDate}`
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
  }, [treatmentId, selectedDate]);

  const handleClick = (e) => {
    setSelectedTime(e.target.value);
    onTimeSelect(selectedTime);
  };

  return (
    <>
      {timesToChose.length === 0 ? (
        <p>No hay horarios disponibles</p>
      ) : (
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
        <p className="text-gold bg-slate-50 shadow-md rounded-md  px-4 py-2">
          Horario seleccionado: {selectedTime}
        </p>
      )}
    </>
  );
};

export default TimeTreatment;

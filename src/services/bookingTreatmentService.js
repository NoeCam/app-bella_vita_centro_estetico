export const bookingTreatmentService = async (treatmentId, date, time) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking-appointments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        treatmentId,
        date,
        time,
      }),
    }
  );

  if (!response.ok) throw new Error("Error al reservar el tratamiento");

  return;
};

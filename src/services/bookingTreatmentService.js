export const bookingTreatmentService = async (
  treatmentId,
  adminId,
  date,
  selectedTime,
  first_name,
  last_name,
  email,
  celphone
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking-appointments?treatmentId=${treatmentId}&adminId=${adminId}&date=${date}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        treatmentId,
        adminId,
        date,
        startTime: selectedTime,
        first_name,
        last_name,
        email,
        celphone,
      }),
    }
  );

  if (!response.ok) throw new Error("Error al reservar el tratamiento");

  return;
};

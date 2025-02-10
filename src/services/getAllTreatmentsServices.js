export const getAllTreatmentsService = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`);
  const json = await response.json();
  return json;
};

export default getAllTreatmentsService;

export const getAllBenefits = async () => {
  try {
    const response = await fetch(`http://localhost:8080/benefit`);
    if (!response.ok) {
      throw new Error('err');
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

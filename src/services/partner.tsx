const url = "http://localhost:5001/partner/getall";

interface Partner {
  idpartner: number;
  partner_name: string;
  image: string;
}

export const fetchData = async (): Promise<Partner[]> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorMessage = await response.text();

      throw new Error(`Network response was not ok: ${errorMessage}`);
    }

    const result = await response.json();

    if (!Array.isArray(result.data)) {
      throw new Error("Result.data is not an array");
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

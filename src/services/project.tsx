const url = "http://localhost:5001/project/getall";

interface Project {
  idproject: number;
  project_name: string;
  description: string;
  image: string;
}

export const fetchData = async (): Promise<Project[]> => {
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
    console.error("Gagal tehubung ke server", error);
    throw error;
  }
};

import { useEffect, useState } from "react";
import { fetchData } from "../services/project";
import Card from "../components/Cards/CardProject";

interface Project {
  idproject: number;
  project_name: string;
  description: string;
  image: string;
}

const ProjectController = () => {
  const [data, setData] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDataProject = async () => {
      try {
        const result = await fetchData();

        setData(result);
      } catch (error) {
        console.error("Error fetching project:", error);
        setError("Failed to load data");
      }
    };

    getDataProject();
  }, []);

  const baseUrlImage = "http://localhost:5001/static/";

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data.length > 0 ? (
        data.map((project, idproject) => (
          <div key={idproject} className="flex flex-col items-center">
            <Card
              idproject={project.idproject}
              project_name={project.project_name}
              description={project.description}
              image={`${baseUrlImage}${project.image}`}
            />
          </div>
        ))
      ) : (
        <div>Tidak ada project ditemukan.</div>
      )}
    </>
  );
};

export default ProjectController;

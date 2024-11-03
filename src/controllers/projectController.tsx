// import { useEffect, useState } from "react";
// import { fetchData } from "../services/project";
import Card from "../components/Cards/CardProject";

const ProjectController = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Card
          idproject={0}
          project_name="Bucketquart Pontianak"
          description=""
          image={""}
        />
      </div>
    </>
  );
};

export default ProjectController;

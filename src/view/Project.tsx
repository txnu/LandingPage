import ProjectController from "../controllers/projectController";

const Project = () => {
  return (
    <>
      <div className="mt-10 mb-20 items-center">
        <h2 className="text-4xl text-center font-bold mb-8">Project</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
          <ProjectController />
        </div>
      </div>
    </>
  );
};

export default Project;

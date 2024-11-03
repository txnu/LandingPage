import Card from "../components/Cards/CardProject";
import ImageKedai from "../assets/images/KedaiProgrammer.png";

const Project = () => {
  return (
    <>
      <div className="mt-10 mb-20 items-center">
        <h2 className="text-4xl text-center font-bold mb-8">Project</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          <Card
            idproject={0}
            project_name="Bucketquart Pontianak"
            description=""
            image={ImageKedai}
          />
          <Card
            idproject={0}
            project_name="Andras Laundry"
            description=""
            image={ImageKedai}
          />
          <Card
            idproject={0}
            project_name="Funkot Uye"
            description=""
            image={ImageKedai}
          />
          <Card
            idproject={0}
            project_name="Sambas Informasi"
            description=""
            image={ImageKedai}
          />
          <Card
            idproject={0}
            project_name="PT. SADBOR"
            description=""
            image={ImageKedai}
          />
        </div>
      </div>
    </>
  );
};

export default Project;

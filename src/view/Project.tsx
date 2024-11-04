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
            description="Aplikasi ini merupakan aplikasi penjualan bucket yang mudah diakses"
            image={ImageKedai}
          />
          <Card
            idproject={0}
            project_name="Andras Laundry"
            description="Sebuah aplikasi pemesanan laundry online yang mempunyai data secara realtime terhubung ke dalam basis data"
            image={ImageKedai}
          />
          <Card
            idproject={0}
            project_name="Courses"
            description="Sebuah aplikasi kursus online untuk guru kursus, aplikasi ini dibuat olehnseorang mahasiswa Medan dan Kedai Prorammer membantu dalam pengerjaan back-nya"
            image={ImageKedai}
          />
        </div>
      </div>
    </>
  );
};

export default Project;

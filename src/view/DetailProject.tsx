import gambarProject from "../assets/images/brosur.png";

interface DetailProps {
  idproject: string;
}

const DetailProject = ({ idproject }: DetailProps) => {
  return (
    <div key={idproject} className="mt-10 px-6 md:px-10 items-left">
      <div className="card md:card-side bg-base-100 shadow-xl">
        <figure className="w-full md:w-1/2">
          <img
            className="object-cover h-80 w-auto"
            src={gambarProject}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title items-start">Nama Project</h2>
          <p>Ini adalah deskripsi project</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;

interface ProjectProps {
  idproject: number;
  project_name: string;
  description: string;
  image: string;
}

const Card = ({
  idproject,
  project_name,
  description,
  image,
}: ProjectProps) => {
  return (
    <div
      className="card bg-base-100 w-100 shadow-xl bg-slate-800 mb-6 sm:mb-10"
      key={idproject}
    >
      <figure className="px-4 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl object-fill h-40 w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{project_name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary mt-4">
            <a>Lihat Detail</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

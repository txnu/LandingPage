import logo from "../../assets/images/KedaiProgrammer.png";

const Hero = () => {
  return (
    <div
      className="hero w-full max-w-10xl h-96 md:h-[28rem] lg:h-[32rem] overflow-hidden"
      style={{
        borderRadius: "50px",
        backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')`,
        objectFit: "cover",
      }}
    >
      <div className="hero hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="min-w-md">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              className="w-24 h-24 md:w-36 md:h-36 rounded-full shadow-3xl object-cover"
            />
          </div>
          <h1 className="mb-5 mt-5 text-3xl md:text-4xl lg:text-5xl font-bold">
            Hello Sobat Programmer
          </h1>
          <p className="mb-5 text-sm md:text-base  lg:text-lg px-4 sm:px-10">
            TDEV STUDIO atau Kedai Programmer adalah sebuah komunitas programmer
            yang bekerja sebagai Fullstack Developer dalam pengembangan web
            ataupun aplikasi mobile Anda. Kami siap membantu Anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

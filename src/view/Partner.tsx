import KedaiProgrammer from "../assets/images/KedaiProgrammer.png";
import Avatar from "../components/Avatars/Avatar.js";

const Partner = () => {
  return (
    <div className="mt-10 mb-20 items-center">
      <h2 className="text-center font-bold text-4xl mb-10 ">Partner</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 justify-items-center">
        <Avatar imageUrl={KedaiProgrammer} partnerName="Kedai Programmer" />
        <Avatar imageUrl={KedaiProgrammer} partnerName="Kedai Programmer" />
        <Avatar imageUrl={KedaiProgrammer} partnerName="Kedai Programmer" />
      </div>
    </div>
  );
};

export default Partner;

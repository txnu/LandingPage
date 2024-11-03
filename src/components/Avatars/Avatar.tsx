interface AvatarProps {
  imageUrl: string;
  partnerName: string;
}

const Avatar = ({ imageUrl, partnerName }: AvatarProps) => {
  return (
    <>
      <div className="avatar flex flex-col items-center pt-4 mx-2 sm:mx-2 md:pt-10">
        <div className="ring-primary ring-offset-base-100 w-24  rounded-full ring ring-offset-2">
          <img className="object-fill" src={imageUrl} alt="partner-avatar" />
        </div>
        <p className="mt-4 text-center">{partnerName}</p>
      </div>
    </>
  );
};

export default Avatar;

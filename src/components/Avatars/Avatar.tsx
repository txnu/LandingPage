interface AvatarProps {
  imageUrl: string;
  partnerName: string;
}

const Avatar = ({ imageUrl }: AvatarProps) => {
  return (
    <>
      <div className="avatar pt-4 mx-2 sm:mx-2 md:pt-10">
        <div className="ring-primary ring-offset-base-100 w-24  rounded-full ring ring-offset-2">
          <img className="object-fill" src={imageUrl} alt="partner-avatar" />
        </div>
      </div>
    </>
  );
};

export default Avatar;

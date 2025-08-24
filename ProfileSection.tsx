import React from 'react';

interface ProfileSectionProps {
  name: string;
  bio: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name, bio }) => {
  return (
    <div className="w-full flex flex-col items-center text-center mb-8 px-4">
      <div className="relative h-24 w-24 rounded-full bg-gradient-to-r from-blue-300 to-pink-300 p-1 mb-4 shadow-lg">
        <img
          src="https://i.ibb.co/B2bvcNrZ/PNmw5-Y3-R5-4-WKGXL0gv-DN-Mo-V1p-Rg34j-CEa-Xnk-Cv-Cr-LC1-Oo-3fr7q-Qk-GHc5-Hg-Lj0azj-Wo2-XESXQy-P2wg.jpg"
          alt="Profile"
          className="w-full h-full object-cover rounded-full object-[center_35%]"
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3 drop-shadow-sm">
        {name}
      </h1>
      <p className="text-gray-700 max-w-md text-base md:text-lg font-medium">
        {bio}
      </p>
    </div>
  );
};

export default ProfileSection;
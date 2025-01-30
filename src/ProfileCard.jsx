import React from 'react';

const ProfileCard = ({ currentProfile, loading }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : currentProfile ? (
        <div>
          <img src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG9mJTIwYSUyMHBlcnNvbnxlbnwwfHx8fDE3MzgyNDY2NTd8MA&ixlib=rb-4.0.3&q=80&w=1080" 
            alt={currentProfile.name}
            data-image-request="professional portrait of a person"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">{currentProfile.name}</h2>
          <p className="text-gray-600">{currentProfile.bio}</p>
        </div>
      ) : (
        <div className="text-center">No more profiles to show</div>
      )}
    </div>
  );
};

export default ProfileCard;
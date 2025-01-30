import React from 'react';
import { handleLike, handleDislike } from './profileActions';

const ActionButtons = ({ currentProfile, fetchProfiles, setProfiles, setCurrentProfile, setLoading }) => {
  return (
    <div className="flex justify-center space-x-4 py-4">
      <button
        onClick={() => handleDislike(currentProfile, fetchProfiles, setProfiles, setCurrentProfile, setLoading)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
      >
        Dislike
      </button>
      <button
        onClick={() => handleLike(currentProfile, fetchProfiles, setProfiles, setCurrentProfile, setLoading)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
      >
        Like
      </button>
    </div>
  );
};

export default ActionButtons;
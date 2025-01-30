import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { fetchProfiles, handleLike, handleDislike } from './profileActions';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfiles(setProfiles, setCurrentProfile, setLoading);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto h-full flex flex-col">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : currentProfile ? (
              <div>
                <h2 className="text-2xl font-bold">{currentProfile.name}</h2>
                <p className="text-gray-600">{currentProfile.bio}</p>
              </div>
            ) : (
              <div className="text-center">No more profiles to show</div>
            )}
          </div>
        </div>
        
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

        <div className="text-center text-gray-500 py-4">
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer">
            Made on ZAPT
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
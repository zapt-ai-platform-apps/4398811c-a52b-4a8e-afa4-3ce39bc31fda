import React, { useState, useEffect } from 'react';
import { fetchProfiles, handleLike, handleDislike } from './profileActions';
import ProfileCard from './ProfileCard';
import ActionButtons from './ActionButtons';

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
          <ProfileCard currentProfile={currentProfile} loading={loading} />
        </div>
        
        <ActionButtons 
          currentProfile={currentProfile}
          fetchProfiles={fetchProfiles}
          setProfiles={setProfiles}
          setCurrentProfile={setCurrentProfile}
          setLoading={setLoading}
        />

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
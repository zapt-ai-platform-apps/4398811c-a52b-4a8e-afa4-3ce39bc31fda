import { supabase } from './supabaseClient';

export const fetchProfiles = async (setProfiles, setCurrentProfile, setLoading) => {
  try {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) throw error;
    setProfiles(data);
    setCurrentProfile(data[0] || null);
  } catch (error) {
    console.error('Error fetching profiles:', error);
  } finally {
    setLoading(false);
  }
};

export const handleLike = async (currentProfile, fetchProfiles, setProfiles, setCurrentProfile, setLoading) => {
  try {
    await supabase
      .from('likes')
      .insert([{ profile_id: currentProfile.id, liked: true }]);
    fetchProfiles(setProfiles, setCurrentProfile, setLoading);
  } catch (error) {
    console.error('Error liking profile:', error);
  }
};

export const handleDislike = async (currentProfile, fetchProfiles, setProfiles, setCurrentProfile, setLoading) => {
  try {
    await supabase
      .from('likes')
      .insert([{ profile_id: currentProfile.id, liked: false }]);
    fetchProfiles(setProfiles, setCurrentProfile, setLoading);
  } catch (error) {
    console.error('Error disliking profile:', error);
  }
};
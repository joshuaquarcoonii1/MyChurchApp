import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { supabase } from '../supabase/client';
import VideoCard from '../components/VideoCard';
import AnnouncementCard from '../components/AnnouncementCard';
import EventCard from '../components/EventCard'; // New component for events!

const HomeScreen = () => {
  const [videoId, setVideoId] = useState('dQw4w9WgXcQ'); // Change this to your latest video ID
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
    fetchEvents();
  }, []);

  const fetchAnnouncements = async () => {
    const { data, error } = await supabase.from('announcements').select('*').order('created_at', { ascending: false }).limit(3);
    if (error) console.error(error);
    else setAnnouncements(data);
  };

  const fetchEvents = async () => {
    const { data, error } = await supabase.from('events').select('*').order('event_date', { ascending: true }).limit(3);
    if (error) console.error(error);
    else setEvents(data);
    setLoading(false);
  };

  if (loading) return <ActivityIndicator size="large" color="#000" style={{ flex: 1 }} />;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Our Church App</Text>

      <Text style={styles.sectionTitle}>📺 Latest Sermon</Text>
      {videoId && (
        <VideoCard
          video={{
            id: { videoId },
            snippet: {
              title: 'Latest Sermon',
              thumbnails: {
                medium: { url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` },
              },
            },
          }}
        />
      )}

      <Text style={styles.sectionTitle}>📢 Latest Announcements</Text>
      {announcements.map((item) => (
        <AnnouncementCard key={item.id} data={item} />
      ))}

      <Text style={styles.sectionTitle}>🗓️ Upcoming Events</Text>
      {events.map((item) => (
        <EventCard key={item.id} data={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginVertical: 12 },
});

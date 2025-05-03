import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, ActivityIndicator } from 'react-native';
import VideoCard from '../components/VideoCard';

const SermonsScreen = () => {
  const [videoLinks, setVideoLinks] = useState([
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=l482T0yNkeo',
    'https://www.youtube.com/watch?v=V-_O7nl0Ii0',
  ]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const extractedVideos = videoLinks.map((link) => {
      try {
        const url = new URL(link);
        const videoId = url.searchParams.get('v');
        return {
          id: { videoId },
          snippet: {
            title: 'Sermon',
            thumbnails: {
              medium: { url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` },
            },
          },
        };
      } catch (error) {
        console.error('Invalid YouTube URL:', link);
        return null;
      }
    }).filter(Boolean); // Remove nulls
    setVideos(extractedVideos);
  }, [videoLinks]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🎥 Sermons Archive</Text>
      {videos.length === 0 ? (
        <ActivityIndicator size="large" color="#000" style={{ marginTop: 50 }} />
      ) : (
        videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))
      )}
    </ScrollView>
  );
};

export default SermonsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
});

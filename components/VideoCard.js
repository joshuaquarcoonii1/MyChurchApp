import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

const VideoCard = ({ video }) => {
  const { title, thumbnails } = video.snippet;
  const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;

  return (
    <TouchableOpacity onPress={() => Linking.openURL(videoUrl)} style={styles.card}>
      <Image source={{ uri: thumbnails.medium.url }} style={styles.thumbnail} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  card: { marginBottom: 16 },
  thumbnail: { width: '100%', height: 200, borderRadius: 8 },
  title: { marginTop: 8, fontWeight: '500' },
});

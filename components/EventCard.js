import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EventCard = ({ data }) => {
  return (
    <View style={styles.card}>
      {data.image_url && <Image source={{ uri: data.image_url }} style={styles.image} />}
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.date}>{new Date(data.event_date).toDateString()}</Text>
      <Text style={styles.location}>📍 {data.location}</Text>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  image: { width: '100%', height: 160, borderRadius: 8, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  date: { fontSize: 14, color: '#555', marginBottom: 4 },
  location: { fontSize: 14, color: '#777' },
});

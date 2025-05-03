import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, ActivityIndicator, Image, View } from 'react-native';
import { supabase } from '../supabase/client';

const EventsScreen = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase.from('events').select('*').order('event_date', { ascending: true });
    if (error) console.error(error);
    else setEvents(data);
    setLoading(false);
  };

  if (loading) return <ActivityIndicator size="large" color="#000" style={{ flex: 1 }} />;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🗓️ Upcoming Events</Text>
      {events.map((item) => (
        <View key={item.id} style={styles.card}>
          {item.image_url && <Image source={{ uri: item.image_url }} style={styles.image} />}
          <Text style={styles.heading}>{item.title}</Text>
          <Text style={styles.date}>{new Date(item.event_date).toDateString()}</Text>
          <Text style={styles.location}>📍 {item.location}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#f9f9f9', padding: 16, marginBottom: 20, borderRadius: 8, shadowColor: '#ccc', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 3 },
  heading: { fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 6 },
  description: { fontSize: 14, marginBottom: 10 },
  date: { fontSize: 14, fontWeight: '600', color: '#555', marginBottom: 6 },
  location: { fontSize: 14, color: '#777', marginBottom: 6 },
  image: { width: '100%', height: 180, borderRadius: 8 },
});

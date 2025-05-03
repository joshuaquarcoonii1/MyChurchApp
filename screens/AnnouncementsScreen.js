import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, ActivityIndicator, Linking, Image, View, TouchableOpacity } from 'react-native';
import { supabase } from '../supabase/client';

const AnnouncementsScreen = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    const { data, error } = await supabase.from('announcements').select('*').order('created_at', { ascending: false });
    if (error) console.error(error);
    else setAnnouncements(data);
    setLoading(false);
  };

  if (loading) return <ActivityIndicator size="large" color="#000" style={{ flex: 1 }} />;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📢 Announcements</Text>
      {announcements.map((item) => (
        <View key={item.id} style={styles.card}>
          {item.image_url && <Image source={{ uri: item.image_url }} style={styles.image} />}
          <Text style={styles.heading}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
          {item.link ? (
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
              <Text style={styles.link}>Learn More</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
};

export default AnnouncementsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#f9f9f9', padding: 16, marginBottom: 20, borderRadius: 8, shadowColor: '#ccc', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 3 },
  heading: { fontSize: 18, fontWeight: 'bold', marginTop: 10, marginBottom: 6 },
  message: { fontSize: 14, marginBottom: 10 },
  image: { width: '100%', height: 180, borderRadius: 8 },
  link: { color: 'blue', textDecorationLine: 'underline' },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnnouncementCard = ({ data }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{data.title}</Text>
    <Text>{data.message}</Text>
  </View>
);

export default AnnouncementCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

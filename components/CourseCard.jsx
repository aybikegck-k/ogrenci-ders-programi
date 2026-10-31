import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

export default function CourseCard({ course, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.topRow}>
        <Text style={styles.dayBadge}>{course.day} • {course.time}</Text>
        <Text style={styles.classroom}>{course.classroom}</Text>
      </View>
      <Text style={styles.name}>{course.name}</Text>
      <Text style={styles.instructor}>{course.instructor}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  topRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 8 
  },
  dayBadge: { 
    fontSize: 12, 
    fontWeight: '700', 
    color: '#0284c7', 
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    overflow: 'hidden'
  },
  classroom: { 
    fontSize: 12, 
    fontWeight: '600', 
    color: '#64748b' 
  },
  name: { 
    fontSize: 17, 
    fontWeight: 'bold', 
    color: '#1e293b', 
    marginBottom: 4 
  },
  instructor: { 
    fontSize: 13, 
    color: '#475569' 
  }
});
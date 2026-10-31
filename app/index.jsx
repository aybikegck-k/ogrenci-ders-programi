import React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

export default function DersListesiScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0284c7" />
      <Text style={styles.headerTitle}>Derslerim</Text>
      <Text style={styles.subtitle}>Toplam {courses.length} ders listeleniyor</Text>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourseCard
            course={item}
            onPress={() => router.push(`/ders/${item.id}`)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8fafc', 
    padding: 16 
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#1e293b', 
    marginBottom: 4 
  },
  subtitle: { 
    fontSize: 13, 
    color: '#64748b', 
    marginBottom: 16 
  },
  listContainer: { 
    paddingBottom: 20 
  }
});
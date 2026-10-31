import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { courses } from '../../data/courses';

export default function DersDetayScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // ID'ye göre dersi bul
  const course = courses.find((c) => c.id === id);

  // Ders bulunamadıysa (Hata Yönetimi)
  if (!course) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorEmoji}>⚠️</Text>
        <Text style={styles.errorTitle}>Ders Bulunamadı!</Text>
        <Text style={styles.errorText}>Aradığınız ID ({id}) ile eşleşen bir ders sistemde mevcut değil.</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.dayBadge}>{course.day} • {course.time}</Text>
          <Text style={styles.classroom}>{course.classroom}</Text>
        </View>

        <Text style={styles.name}>{course.name}</Text>
        <Text style={styles.instructor}>{course.instructor}</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.sectionLabel}>Ders Açıklaması</Text>
        <Text style={styles.description}>{course.description}</Text>
      </View>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Ders Listesine Dön</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8fafc', 
    padding: 16 
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 16,
  },
  topRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 12 
  },
  dayBadge: { 
    fontSize: 13, 
    fontWeight: '700', 
    color: '#0284c7', 
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden'
  },
  classroom: { 
    fontSize: 13, 
    fontWeight: '600', 
    color: '#64748b' 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#1e293b', 
    marginBottom: 6 
  },
  instructor: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#475569', 
    marginBottom: 16 
  },
  divider: { 
    height: 1, 
    backgroundColor: '#f1f5f9', 
    marginBottom: 16 
  },
  sectionLabel: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: '#475569', 
    marginBottom: 6 
  },
  description: { 
    fontSize: 15, 
    color: '#334155', 
    lineHeight: 22 
  },
  errorContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f8fafc', 
    padding: 24 
  },
  errorEmoji: { 
    fontSize: 48, 
    marginBottom: 12 
  },
  errorTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#991b1b', 
    marginBottom: 8 
  },
  errorText: { 
    fontSize: 14, 
    color: '#64748b', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  backButton: { 
    backgroundColor: '#0284c7', 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  backButtonText: { 
    color: '#ffffff', 
    fontWeight: 'bold', 
    fontSize: 15 
  }
});
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#0284c7' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ title: 'Haftalık Ders Programı' }} 
      />
      <Stack.Screen 
        name="ders/[id]" 
        options={{ title: 'Ders Detayı' }} 
      />
    </Stack>
  );
}
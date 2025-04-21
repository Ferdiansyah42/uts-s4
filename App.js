import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMeals = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      setMeals(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.error('Gagal ambil data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#f39c12" />
        <Text>Loading resep...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Daftar Resep</Text>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <Text style={styles.mealName}>{item.strMeal}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    marginBottom: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    height: 200,
    width: '100%',
  },
  mealName: {
    fontSize: 18,
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
